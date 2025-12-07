import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    { num: 1, title: "Contact Us", desc: "Call, WhatsApp, or fill the form." },
    { num: 2, title: "Inspection", desc: "Technician checks your AC." },
    { num: 3, title: "Service", desc: "Work done on spot or scheduled." },
    { num: 4, title: "Feedback", desc: "Pay after job. Share feedback." }
  ];

  return (
    <section className="py-8 md:py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">Simple 4-step process</p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="relative">
            {/* Background Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
            {/* Animated Line */}
            <motion.div 
              className="absolute top-5 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <div className="grid grid-cols-4 gap-4 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-md relative z-10"
                      whileInView={{ scale: [1, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
                    >
                      {step.num}
                    </motion.div>
                  </div>
                  <h4 className="text-sm font-bold mb-1 text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden max-w-xs mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  className="flex items-center gap-3 relative"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-bold shadow-sm flex-shrink-0 relative z-10">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p 
          className="text-center text-xs text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Same/next-day service in most Pune & PCMC areas.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;
