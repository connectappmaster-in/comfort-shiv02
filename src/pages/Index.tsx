import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import About from "@/components/About";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import HowItWorks from "@/components/HowItWorks";
import AMCPlans from "@/components/AMCPlans";
import GalleryTestimonials from "@/components/GalleryTestimonials";
import MultiStepBookingForm from "@/components/MultiStepBookingForm";
import FAQ from "@/components/FAQ";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-14">
      <Navbar />
      <Hero />
      <Services />
      <ServiceDetails />
      <HowItWorks />
      <AMCPlans />
      <GalleryTestimonials />
      <About />
      <FAQ />

      {/* Service Area + Booking */}
      <section className="py-[50px] bg-muted/30" aria-labelledby="booking-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-5 h-full border shadow-card">
                <h2 id="booking-section" className="text-lg md:text-xl font-bold mb-1 text-foreground">Service Coverage</h2>
                <p className="text-sm text-muted-foreground mb-4">Pune & PCMC areas</p>
                <ServiceAreaMap />
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="p-5 h-full border shadow-card bg-gradient-to-br from-primary/5 to-transparent">
                <h2 className="text-lg md:text-xl font-bold mb-1 text-foreground">Book Your Service</h2>
                <p className="text-sm text-muted-foreground mb-4">Quick booking - we'll contact you</p>
                <MultiStepBookingForm />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary text-secondary-foreground py-[50px]" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="Comfort Technical Services Logo" className="w-8 h-8 object-contain opacity-90" />
                <span className="text-sm font-bold">Comfort Technical Services</span>
              </div>
              <p className="text-sm opacity-80 mb-2 italic">
                Pune & PCMC's dedicated AC partner since 2018.
              </p>
              <div className="flex items-center gap-1.5 text-xs opacity-70">
                <Shield className="w-3 h-3" aria-hidden="true" />
                <span>GSTIN: 27HEKPS5234F1Z4</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold mb-3 opacity-90">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {["Home", "Services", "AMC Plans", "About", "Gallery", "Contact"].map(link => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`} 
                      className="link-hover hover:opacity-100 hover:text-accent transition-all duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold mb-3 opacity-90">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-accent" aria-hidden="true" />
                  <span className="leading-relaxed">NIKHIL NIWAS, Pune PCMC 411035</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <a 
                    href="tel:+917745046520" 
                    className="hover:opacity-100 hover:text-accent transition-all duration-200"
                    aria-label="Call us at +91 77450 46520"
                  >
                    +91 77450 46520
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <a 
                    href="mailto:comforttechnicalservice8@gmail.com" 
                    className="hover:opacity-100 hover:text-accent transition-all duration-200 truncate"
                    aria-label="Email us"
                  >
                    comforttechnicalservice8@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h4 className="text-sm font-bold mb-3 opacity-90">Find Us</h4>
              <div className="rounded-xl overflow-hidden border border-secondary-foreground/20 shadow-sm mb-2">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2599!2d73.7997!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ3LjMiTiA3M8KwNDcnNTguOSJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="100" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Comfort Technical Services location on Google Maps" 
                  className="grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => window.open('https://maps.google.com/?q=NIKHIL+NIWAS+Pune+PCMC+411035', '_blank')} 
                className="w-full text-sm border-secondary-foreground/30 h-9 group bg-secondary hover:bg-secondary-foreground/10 transition-all duration-200"
                aria-label="Get directions to our location"
              >
                <MapPin className="w-3.5 h-3.5 mr-1" aria-hidden="true" />
                Get Directions
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-secondary-foreground/10 pt-4 text-center">
            <p className="text-xs opacity-60">
              © 2025 Comfort Technical Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
