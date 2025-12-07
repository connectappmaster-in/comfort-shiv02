import { motion } from "framer-motion";
import { CheckCircle, Wrench, Sparkles, Wind, Hammer, Settings, FileText } from "lucide-react";

const ServiceDetails = () => {
  const serviceDetails = [
    {
      id: "ac-servicing",
      name: "AC Servicing",
      icon: Wrench,
      iconColor: "text-blue-600",
      description: "Regular maintenance to keep your AC cooling efficiently. We check refrigerant, clean filters, and ensure smooth operation.",
      inclusions: [
        "Filter cleaning and wash",
        "Condenser cleaning",
        "Gas pressure check",
        "Drain cleaning",
        "Performance test"
      ]
    },
    {
      id: "deep-cleaning",
      name: "Deep Cleaning",
      icon: Sparkles,
      iconColor: "text-cyan-600",
      description: "Thorough internal cleaning removes dust and bacteria buildup, giving you fresh air and better cooling.",
      inclusions: [
        "Complete disassembly",
        "Jet cleaning of coils",
        "Blower wheel cleaning",
        "Anti-bacterial treatment",
        "Reassembly and test"
      ]
    },
    {
      id: "gas-refill",
      name: "Gas Refill",
      icon: Wind,
      iconColor: "text-teal-600",
      description: "If your AC runs but doesn't cool, it may be low on gas. We check for leaks, fix them, and refill properly.",
      inclusions: [
        "Leak detection",
        "Leak repair",
        "R32/R410A gas refill",
        "Pressure balancing",
        "30-day warranty"
      ]
    },
    {
      id: "ac-repair",
      name: "AC Repair",
      icon: Hammer,
      iconColor: "text-amber-600",
      description: "On-site diagnosis and repair for all major brands including LG, Samsung, Daikin, Voltas, Blue Star.",
      inclusions: [
        "Fault diagnosis",
        "Compressor repair",
        "PCB troubleshooting",
        "Sensor replacement",
        "Electrical fixes"
      ]
    },
    {
      id: "ac-installation",
      name: "AC Installation",
      icon: Settings,
      iconColor: "text-purple-600",
      description: "Proper installation with right copper piping, secure mounting, and gas charging for efficiency.",
      inclusions: [
        "Wall mounting",
        "Outdoor unit placement",
        "Copper pipe (3m included)",
        "Electrical wiring",
        "Gas charging & test"
      ]
    },
    {
      id: "amc-plans",
      name: "AMC Plans",
      icon: FileText,
      iconColor: "text-green-600",
      description: "Annual contracts for homes, shops, or offices with scheduled servicing and priority support.",
      inclusions: [
        "2-4 scheduled visits",
        "Priority booking",
        "Discounted repairs",
        "No service charges",
        "Dedicated technician"
      ]
    }
  ];

  return (
    <section id="service-details" className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Service Details</h2>
          <p className="section-subheading">What you can expect when you book</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {serviceDetails.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={`p-4 md:p-5 rounded-lg border-l-4 border-primary ${isEven ? 'bg-card' : 'bg-muted/50'} shadow-card h-full`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center`}>
                      <IconComponent className={`w-4 h-4 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {service.inclusions.map((item, j) => (
                        <li key={j} className="flex items-start text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[10px] text-muted-foreground/70 italic mt-3 pt-2 border-t border-border/50">
                    Spare parts and major repairs charged separately after approval.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
