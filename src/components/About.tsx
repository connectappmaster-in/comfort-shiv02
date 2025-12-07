import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Users, Shield } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const milestones = [
    { year: "2018", title: "Started Operations", desc: "Launched in Pune city" },
    { year: "2019", title: "200+ Customers", desc: "Expanded coverage" },
    { year: "2020", title: "GST Registered", desc: "Proper tax registration" },
    { year: "2021", title: "PCMC Expansion", desc: "Serving Pimpri-Chinchwad" },
    { year: "2023", title: "3,000+ Units", desc: "Major milestone" },
    { year: "2024", title: "AMC Launch", desc: "Maintenance contracts" }
  ];

  const values = [
    { icon: Award, title: "Quality First", desc: "We double-check work before leaving." },
    { icon: Users, title: "Customer Focused", desc: "We match your timing and explain options." },
    { icon: Shield, title: "Transparency", desc: "We share pricing before starting." }
  ];

  return (
    <section id="about" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">
              About <span className="text-primary">Comfort Technical Services</span>
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Proprietor: <span className="font-semibold text-foreground">Sagar Shinde</span>
            </p>
          </motion.div>

          {/* Story + Image */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-bold text-foreground">Our Story</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We've been providing AC services in Pune and PCMC since 2018. 
                Started as a small team, now serviced 3,000+ units across homes, shops, and offices.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expect on-time arrival, neat work, clear communication, and fair pricing with no surprises. 
                We treat every customer's AC like our own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src={teamImage} 
                alt="Comfort Technical Services team" 
                className="rounded-xl shadow-lg w-full h-48 md:h-56 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div 
            className="mb-8 md:mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-center mb-5 text-foreground">Our Journey</h3>

            {/* Desktop Timeline - Horizontal */}
            <div className="hidden md:block relative max-w-4xl mx-auto">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
              <motion.div 
                className="absolute top-4 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              
              <div className="grid grid-cols-6 gap-2">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className="text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold mx-auto mb-2 shadow-sm relative z-10">
                      {milestone.year.slice(2)}
                    </div>
                    <h4 className="text-xs font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-[10px] text-muted-foreground">{milestone.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline - Compact */}
            <div className="md:hidden grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{milestone.title}</p>
                    <p className="text-[10px] text-muted-foreground">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-center mb-5 text-foreground">Our Core Values</h3>

            <div className="grid md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="p-4 text-center h-full border border-border/60 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-sm font-bold mb-1 text-foreground">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.desc}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
