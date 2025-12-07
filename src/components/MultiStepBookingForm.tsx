import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Check, CalendarIcon, Loader2, MessageCircle, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string()
    .min(2, "Please enter your name")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters"),
  phone: z.string()
    .regex(/^(\+91)?[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  service: z.string()
    .min(1, "Please select a service"),
  acType: z.string().optional(),
  date: z.date().optional().refine((date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  }, "Please select today or a future date"),
  timeSlot: z.string().optional(),
  address: z.string()
    .max(300, "Address is too long")
    .optional(),
  area: z.string().optional(),
  message: z.string()
    .max(500, "Message is too long")
    .optional()
});

type FormValues = z.infer<typeof formSchema>;

const serviceOptions = [
  { name: "AC Servicing", icon: "🔧" },
  { name: "Deep Cleaning", icon: "✨" },
  { name: "Gas Refill", icon: "❄️" },
  { name: "AC Repair", icon: "🔨" },
  { name: "AC Installation", icon: "⚙️" },
  { name: "AMC Plans", icon: "📋" }
];

const acTypes = ["Split AC", "Window AC", "Cassette AC", "Tower AC", "Other"];
const timeSlots = ["Morning (9-12)", "Afternoon (12-3)", "Evening (3-7)", "Flexible"];
const areas = [
  "Aundh", "Wakad", "Hinjewadi", "Pimple Saudagar", "Pimpri", "Chinchwad",
  "Kharadi", "Viman Nagar", "Baner", "Pimple Nilakh", "Rahatani", "Thergaon",
  "Kasarwadi", "Akurdi", "Nigdi", "Bhosari", "Other"
];

const stepLabels = [
  "Your Details",
  "Service & AC Details", 
  "Preferred Date & Time",
  "Address & Area",
  "Review & Submit"
];

const MultiStepBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      acType: "",
      date: undefined,
      timeSlot: "",
      address: "",
      area: "",
      message: ""
    },
    mode: "onChange"
  });

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const handleFormSubmit = async (data: FormValues) => {
    if (!data.name || !data.phone || !data.service) {
      return;
    }

    setIsSubmitting(true);
    
    const whatsappMessage = `🔧 New Service Booking\n\n` + 
      `Name: ${data.name}\n` + 
      `Phone: ${data.phone}\n` + 
      `Service: ${data.service}\n` + 
      `AC Type: ${data.acType || "Not specified"}\n` +
      `Date: ${data.date ? format(data.date, "dd-MMM-yyyy") : "Not specified"}\n` + 
      `Time: ${data.timeSlot || "Not specified"}\n` +
      `Area: ${data.area || "Not specified"}\n` +
      `Address: ${data.address || "Not specified"}\n` +
      `Notes: ${data.message || "None"}`;
    
    setTimeout(() => {
      window.open(createWhatsAppLink(whatsappMessage), '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const goToNextStep = async () => {
    let isValid = true;
    
    if (currentStep === 1) {
      isValid = await form.trigger(["name", "phone"]);
    } else if (currentStep === 2) {
      isValid = await form.trigger("service");
    }
    
    if (isValid && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    form.reset();
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const slideVariants = {
    enter: { x: 30, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 }
  };

  // Success State
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 space-y-4"
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Thank you for booking!
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          We'll call or WhatsApp you soon to confirm your service.
        </p>
        <Button variant="outline" size="sm" onClick={resetForm} className="mt-4">
          Book Another Service
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Step Indicator */}
      <div className="text-center mb-2">
        <p className="text-xs text-muted-foreground">
          Step {currentStep} of 5: <span className="font-medium text-foreground">{stepLabels[currentStep - 1]}</span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={cn(
              "h-1 flex-1 rounded-full transition-all duration-300",
              step <= currentStep ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Helper Text */}
      <p className="text-xs text-muted-foreground text-center mb-4">
        Fill this quick form; we usually respond within 15–30 minutes during working hours.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              {/* Step 1: Your Details */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Your Name *</label>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            className={cn(
                              "h-10 text-sm",
                              fieldState.error && "border-destructive"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Phone Number *</label>
                        <FormControl>
                          <Input 
                            placeholder="10-digit mobile number" 
                            type="tel"
                            {...field} 
                            className={cn(
                              "h-10 text-sm",
                              fieldState.error && "border-destructive"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 2: Service & AC Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Service Needed *</label>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className={cn("h-10 text-sm", fieldState.error && "border-destructive")}>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service.name} value={service.name} className="text-sm">
                                {service.icon} {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="acType"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">AC Type (Optional)</label>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-10 text-sm">
                              <SelectValue placeholder="Select AC type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {acTypes.map((type) => (
                              <SelectItem key={type} value={type} className="text-sm">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 3: Date & Time */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Preferred Date (Optional)</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full h-10 justify-start text-left font-normal text-sm",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "dd MMM yyyy") : "Select a date"}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return date < today;
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timeSlot"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Preferred Time (Optional)</label>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-10 text-sm">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot} className="text-sm">
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 4: Address & Area */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Your Area (Optional)</label>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-10 text-sm">
                              <SelectValue placeholder="Select your area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {areas.map((area) => (
                              <SelectItem key={area} value={area} className="text-sm">
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Full Address (Optional)</label>
                        <FormControl>
                          <Textarea 
                            placeholder="Building name, street, landmark..." 
                            {...field}
                            value={field.value || ""}
                            rows={2}
                            className="text-sm resize-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="bg-muted/50 rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-medium text-foreground">{form.watch("name")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium text-foreground">{form.watch("phone")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium text-foreground">{form.watch("service")}</span>
                    </div>
                    {form.watch("acType") && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">AC Type:</span>
                        <span className="font-medium text-foreground">{form.watch("acType")}</span>
                      </div>
                    )}
                    {form.watch("date") && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium text-foreground">{format(form.watch("date")!, "dd MMM yyyy")}</span>
                      </div>
                    )}
                    {form.watch("area") && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Area:</span>
                        <span className="font-medium text-foreground">{form.watch("area")}</span>
                      </div>
                    )}
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-xs font-medium text-foreground">Any additional notes? (Optional)</label>
                        <FormControl>
                          <Textarea 
                            placeholder="Special requests or details..." 
                            {...field}
                            value={field.value || ""}
                            rows={2}
                            className="text-sm resize-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-2">
            {currentStep > 1 && (
              <Button 
                type="button"
                variant="outline"
                onClick={goToPrevStep}
                className="h-10"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
            )}
            
            {currentStep < 5 ? (
              <Button 
                type="button"
                onClick={goToNextStep}
                className="flex-1 h-10"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={isSubmitting || !form.watch("name") || !form.watch("phone") || !form.watch("service")}
                className="flex-1 h-10 bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send via WhatsApp
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MultiStepBookingForm;
