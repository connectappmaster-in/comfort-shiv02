import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I service my AC?",
      answer: "We recommend servicing your AC at least twice a year - once before summer and once after. Regular servicing ensures optimal performance, energy efficiency, and extends the lifespan of your unit. For commercial spaces or heavy usage, quarterly servicing is ideal."
    },
    {
      question: "What is included in AC servicing?",
      answer: "Our standard AC servicing includes: filter cleaning/replacement, coil cleaning, condensate drain cleaning, thermostat check, refrigerant level check, electrical connections inspection, and overall performance testing. Deep cleaning includes internal component sanitization."
    },
    {
      question: "How much does AC servicing cost?",
      answer: "Basic AC servicing starts from ₹399. Deep cleaning starts from ₹599. Gas refilling starts from ₹2,500. Final pricing depends on the AC type, brand, and specific issues found during inspection. We provide transparent quotes before starting any work."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide service warranty on all our work. Parts come with manufacturer warranty, and our workmanship is guaranteed. Specific warranty terms depend on the service type - we'll provide complete details before starting work."
    },
    {
      question: "How long does AC servicing take?",
      answer: "Standard servicing typically takes 45-60 minutes per unit. Deep cleaning may take 1.5-2 hours. Gas refilling and repairs can take 2-3 hours depending on the issue. We ensure quality work without rushing."
    },
    {
      question: "Do you service all AC brands?",
      answer: "Yes, we service all major AC brands including Voltas, Blue Star, Daikin, LG, Samsung, Hitachi, Carrier, O General, Lloyd, and more. Our technicians are experienced with both split and window ACs of all brands."
    },
    {
      question: "What areas do you cover in Pune?",
      answer: "We cover entire Pune and PCMC areas including Aundh, Wakad, Hinjewadi, Pimple Saudagar, Pimpri, Chinchwad, Kharadi, Viman Nagar, and surrounding areas. Same-day or next-day service available for most locations."
    },
    {
      question: "What are the benefits of AMC plans?",
      answer: "AMC plans provide regular maintenance, priority service, cost savings, extended AC life, better cooling efficiency, and peace of mind. Plans include scheduled visits, gas top-ups, and emergency support. It's more economical than individual service calls."
    },
    {
      question: "Can I get same-day service?",
      answer: "Yes, we offer same-day service for most requests, subject to availability. For urgent repairs, we prioritize emergency calls. Call or WhatsApp us, and we'll confirm the earliest available slot for your location."
    },
    {
      question: "How do I book a service?",
      answer: "You can book by calling +91 77450 46520, messaging us on WhatsApp, or filling the booking form on our website. We'll confirm your appointment within minutes and send our technician at the scheduled time."
    }
  ];

  return (
    <section id="faq" className="py-[50px] bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading">
            Everything you need to know about our AC services
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/60 rounded-xl px-4 md:px-6 data-[state=open]:bg-muted/30 transition-colors duration-200 hover:border-primary/30"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground pb-4 border-t border-border/50 pt-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
