import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceAreaMap = () => {
  const serviceAreas = [
    "Aundh", "Wakad", "Hinjewadi", "Pimple Saudagar", "Pimpri", "Chinchwad",
    "Kharadi", "Viman Nagar", "Baner", "Pimple Nilakh", "Rahatani", "Thergaon",
    "Kasarwadi", "Akurdi", "Nigdi", "Bhosari"
  ];

  const createWhatsAppLink = () => {
    return `https://wa.me/917745046520?text=${encodeURIComponent("Hi! My area is not listed on your website. Can you check if you provide service here?")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-5 bg-card border border-border/60">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
          <h3 className="text-lg md:text-xl font-bold text-foreground">
            Areas We Cover
          </h3>
        </div>

        {/* Desktop: Multi-column pills */}
        <div className="hidden sm:flex flex-wrap gap-2 mb-5">
          {serviceAreas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
            >
              {area}
            </motion.span>
          ))}
        </div>

        {/* Mobile: Single column list */}
        <div className="sm:hidden space-y-2 mb-5">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              {area}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-muted/50 rounded-lg p-3 border border-border/40">
          <p className="text-sm text-foreground mb-3">
            If your area is not listed, please WhatsApp us – we may still be able to serve you.
          </p>
          <Button
            size="sm"
            variant="outline"
            className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-[1.02]"
            onClick={() => window.open(createWhatsAppLink(), '_blank')}
            aria-label="Check if we service your area via WhatsApp"
          >
            <MessageCircle className="w-3 h-3 mr-1.5" aria-hidden="true" />
            Check My Area
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceAreaMap;
