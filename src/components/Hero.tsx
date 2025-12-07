import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Users, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ac.jpg";

const Hero = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const features = [
    { icon: CheckCircle, title: "Experienced Technicians", description: "Skilled professionals" },
    { icon: Users, title: "Trusted by Customers", description: "Pune & PCMC coverage" },
    { icon: Clock, title: "Same/Next-Day Service", description: "Quick response" },
    { icon: IndianRupee, title: "Transparent Pricing", description: "No hidden charges" }
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Mobile Image */}
          <motion.div 
            className="lg:hidden relative rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={heroImage} 
              alt="AC technician servicing" 
              className="w-full h-52 object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fast, Reliable AC Service in Pune & PCMC
            </motion.h1>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Professional AC servicing, repair, and maintenance since 2018
            </motion.p>

            {/* Trust Line - Compact */}
            <motion.div 
              className="text-xs md:text-sm text-muted-foreground border-l-3 border-primary pl-3 py-1.5 bg-muted/30 rounded-r-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              7+ years • 10,000+ AC units • GSTIN: 27HEKPS5234F1Z4
            </motion.div>

            {/* Feature Points - Compact Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-2 p-2 rounded-lg bg-card shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                >
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs leading-tight">{feature.title}</p>
                    <p className="text-[10px] text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-2 pt-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Button 
                size="default"
                className="font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                onClick={() => window.open(createWhatsAppLink("Hi! I'd like to book a service."), '_blank')}
              >
                Book Service Now
              </Button>

              <Button 
                size="default"
                variant="outline"
                className="font-semibold border-success text-success hover:bg-success hover:text-success-foreground transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => window.open(createWhatsAppLink("Hi! I'd like to know more about your services."), '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-1.5" />
                WhatsApp
              </Button>

              <Button 
                size="default"
                variant="outline"
                className="font-semibold transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => window.open('tel:+917745046520')}
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Call
              </Button>
            </motion.div>
          </motion.div>

          {/* Desktop Hero Image */}
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="AC technician servicing" 
                className="w-full h-[380px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-primary/15 rounded-full blur-2xl" />
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
