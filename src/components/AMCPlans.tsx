import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Star, Zap, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AMCPlans = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const handlePlanClick = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName}. Please share details.`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  const plans = [
    {
      name: "Home Plan",
      icon: Star,
      visits: "4 visits/year",
      forWhom: "1-3 AC units in homes",
      includes: ["Basic servicing", "Filter cleaning", "Priority support"],
      price: "₹2,499",
      priceLabel: "/year",
      popular: false
    },
    {
      name: "Office Plan",
      icon: Zap,
      visits: "6 visits/year",
      forWhom: "Shops & offices",
      includes: ["Full servicing", "Gas top-up", "Emergency support", "Priority scheduling"],
      price: "₹4,999",
      priceLabel: "/year",
      popular: true
    },
    {
      name: "Commercial Plan",
      icon: Building2,
      visits: "12 visits/year",
      forWhom: "Buildings & showrooms",
      includes: ["Complete maintenance", "Gas refills", "24/7 support", "Free minor repairs"],
      price: "Custom",
      priceLabel: "quote",
      popular: false
    }
  ];

  return (
    <section id="amc" className="py-[50px] bg-background" aria-labelledby="amc-heading">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 id="amc-heading" className="section-heading">AMC Plans</h2>
          <p className="section-subheading">Annual Maintenance Contracts for worry-free AC care</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  className={`p-5 h-full flex flex-col relative transition-all duration-200 hover:-translate-y-1 ${
                    plan.popular 
                      ? 'border-2 border-primary shadow-[0_0_20px_hsl(210_100%_40%/0.15)] bg-primary/5' 
                      : 'border border-border/60 hover:shadow-card-hover hover:border-primary/30'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] px-3 shadow-lg">
                      Most Popular
                    </Badge>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{plan.name}</h3>
                  </div>

                  <div className="mb-3">
                    <span className="text-2xl font-bold text-primary">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.priceLabel}</span>
                  </div>

                  <p className="text-xs font-semibold text-primary mb-1">{plan.visits}</p>
                  <p className="text-sm text-foreground mb-3 pb-3 border-b border-border/50">{plan.forWhom}</p>

                  <ul className="space-y-2 mb-4 flex-grow">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start text-sm text-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary mr-1.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="sm"
                    className={`w-full mt-auto transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${plan.popular ? '' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handlePlanClick(plan.name)}
                    aria-label={`Get ${plan.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                    Get This Plan
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p 
          className="text-center text-xs text-muted-foreground mt-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Spare parts and major repairs are charged separately after your approval.
        </motion.p>
      </div>
    </section>
  );
};

export default AMCPlans;
