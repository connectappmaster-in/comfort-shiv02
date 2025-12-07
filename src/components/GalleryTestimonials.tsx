import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Quote } from "lucide-react";
import { AnimatedCounter } from "@/hooks/use-counter-animation";
import acCleaning from "@/assets/ac-cleaning.jpg";
import acInstallation from "@/assets/ac-installation.jpg";
import acGasCheck from "@/assets/ac-gas-check.jpg";
import acBeforeAfter from "@/assets/ac-before-after.jpg";

const GalleryTestimonials = () => {
  const gallery = [
    { src: acCleaning, alt: "AC deep cleaning", label: "Deep Cleaning" },
    { src: acInstallation, alt: "AC installation", label: "Installation" },
    { src: acGasCheck, alt: "Gas refill", label: "Gas Refill" },
    { src: acBeforeAfter, alt: "Before & after", label: "Before/After" }
  ];

  const testimonials = [
    {
      text: "Very happy with the service. Technician came on time and fixed the cooling issue quickly.",
      name: "Rajesh Kumar",
      area: "Aundh, Pune",
      service: "Split AC servicing"
    },
    {
      text: "Good work and fair pricing. They explained what was wrong before starting. No hidden charges.",
      name: "Priya Sharma",
      area: "Pimpri",
      service: "Deep cleaning"
    },
    {
      text: "Using their service for 2 years now. Reliable and affordable. They always pick up the call.",
      name: "Amit Desai",
      area: "Wakad",
      service: "AMC for office ACs"
    }
  ];

  const stats = [
    { value: 7, suffix: "+", label: "Years" },
    { value: 10000, suffix: "+", label: "AC Units" },
    { value: 150, suffix: "+", label: "Reviews" },
    { value: 4.8, suffix: "/5", label: "Rating", isDecimal: true }
  ];

  return (
    <section id="gallery" className="py-8 md:py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Gallery Section */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Our Work</h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Actual photos from our jobs in Pune & PCMC
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6">
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-lg border border-border/50 aspect-[4/3] group cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip - Below Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative bg-card border border-border/60 rounded-xl p-4 md:p-5 text-center group hover:border-primary/40 hover:shadow-card-hover transition-all duration-200"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.isDecimal ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1500} />
                  )}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div 
          className="bg-card rounded-xl p-4 md:p-6 shadow-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg md:text-xl font-bold text-center mb-6 text-foreground">
            What Our Customers Say
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-4 h-full border border-border/60 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 relative">
                  <Quote className="absolute top-3 right-3 w-6 h-6 text-primary/10" />
                  
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border/50 pt-2">
                    <p className="text-xs font-semibold text-foreground">
                      {testimonial.name} · {testimonial.area}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{testimonial.service}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button 
              variant="outline"
              size="sm"
              className="group"
              onClick={() => window.open('https://share.google/XSCTACp1FdcN3VrHi', '_blank')}
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5 group-hover:translate-x-0.5 transition-transform" />
              See more on Google
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryTestimonials;
