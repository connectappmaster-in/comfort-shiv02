import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Experienced Technicians",
      desc: "Skilled professionals"
    },
    {
      icon: Users,
      title: "Trusted by Companies",
      desc: "Multiple corporate clients"
    },
    {
      icon: Clock,
      title: "Same/Next-Day Service",
      desc: "Quick response time"
    },
    {
      icon: Shield,
      title: "Service Warranty",
      desc: "Transparent pricing"
    }
  ];

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: "-50px" }
  };

  return (
    <section className="py-5 md:py-20 bg-muted">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div 
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-4"
        >
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={i}
                {...fadeInScale}
                whileHover={{ 
                  scale: 1.05,
                  y: -8
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center transition-all duration-300 flex flex-col items-center justify-center h-full p-3 md:p-7 hover:shadow-xl hover:bg-accent/50 border-2 hover:border-primary/20 min-h-[100px] md:min-h-[220px]">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-2 md:mb-4">
                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 md:w-9 md:h-9 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs md:text-lg font-bold mb-1 md:mb-3 text-foreground leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
