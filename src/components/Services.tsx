import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, Wrench, Sparkles, Wind, Hammer, Settings, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "ac-servicing",
      name: "AC Servicing",
      tagline: "Regular maintenance for efficient cooling.",
      desc: ["Filter cleaning & wash", "Coil inspection", "Refrigerant check"],
      price: "₹399",
      icon: Wrench,
      bgTint: "bg-blue-50"
    },
    {
      id: "deep-cleaning",
      name: "Deep Cleaning",
      tagline: "Thorough cleaning for better hygiene.",
      desc: ["Internal cleaning", "Coil sanitization", "Anti-bacterial treatment"],
      price: "₹599",
      icon: Sparkles,
      bgTint: "bg-cyan-50"
    },
    {
      id: "gas-refill",
      name: "Gas Refill",
      tagline: "Leak check and proper gas charging.",
      desc: ["Leak detection", "R32/R410A refill", "Pressure testing"],
      price: "₹2,500",
      icon: Wind,
      bgTint: "bg-teal-50"
    },
    {
      id: "ac-repair",
      name: "AC Repair",
      tagline: "Fault finding for all major brands.",
      desc: ["Compressor troubleshooting", "PCB repairs", "All brands"],
      price: "Based on issue",
      icon: Hammer,
      bgTint: "bg-amber-50"
    },
    {
      id: "ac-installation",
      name: "AC Installation",
      tagline: "Proper mounting with testing.",
      desc: ["Professional mounting", "Copper piping", "Gas charging"],
      price: "₹1,500",
      icon: Settings,
      bgTint: "bg-purple-50"
    },
    {
      id: "amc-plans",
      name: "AMC Plans",
      tagline: "Scheduled visits & priority support.",
      desc: ["Scheduled maintenance", "Priority calls", "Discounted repairs"],
      price: "Custom",
      icon: FileText,
      bgTint: "bg-green-50"
    }
  ];

  const scrollToDetail = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">Comprehensive AC solutions for Pune & PCMC</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card 
                  className={`p-4 h-full flex flex-col service-card group cursor-pointer ${service.bgTint}`}
                  onClick={() => scrollToDetail(service.id)}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-lg font-bold text-primary">{service.price}</p>
                  </div>

                  <ul className="space-y-1.5 mb-3 flex-grow">
                    {service.desc.map((point, j) => (
                      <li key={j} className="flex items-start text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="text-xs font-semibold text-primary flex items-center gap-1 group/link mt-auto">
                    Learn More 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
