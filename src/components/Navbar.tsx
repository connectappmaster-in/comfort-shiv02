import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navigation items in order
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "AMC Plans", href: "#amc" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  // All section IDs in page order, mapped to their nav item
  const sectionMapping = [
    { id: "home", nav: "home" },
    { id: "services", nav: "services" },
    { id: "service-details", nav: "services" },
    { id: "amc", nav: "amc" },
    { id: "gallery", nav: "gallery" },
    { id: "about", nav: "about" },
    { id: "faq", nav: "about" },
    { id: "contact", nav: "contact" }
  ];

  const calculateActiveSection = useCallback(() => {
    const navbarHeight = 56;
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    
    // At very top - highlight Home
    if (scrollTop < 50) {
      setActiveSection("home");
      return;
    }
    
    // At very bottom - highlight Contact
    if (scrollHeight - scrollTop - clientHeight < 50) {
      setActiveSection("contact");
      return;
    }
    
    // Find which section is currently at/near the top of viewport
    let activeNav = "home";
    
    for (const section of sectionMapping) {
      const element = document.getElementById(section.id);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      const sectionTop = rect.top - navbarHeight;
      
      // If section top is above or at the viewport top (with some buffer)
      // This section is the current one
      if (sectionTop <= 100) {
        activeNav = section.nav;
      }
    }
    
    setActiveSection(activeNav);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      calculateActiveSection();
    };
    
    // Initial calculation
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [calculateActiveSection]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 56;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-200 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-navbar border-b border-border/50" 
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="CTS Logo" className="w-8 h-8 object-contain" />
            <span className="hidden sm:block text-base font-bold text-foreground">
              Comfort Technical Services
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map(item => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button 
              size="sm" 
              variant="ghost"
              className="h-8 px-3 text-xs"
              onClick={() => window.open('tel:+917745046520')}
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              Call
            </Button>
            <Button 
              size="sm"
              className="h-8 px-3 text-xs bg-success hover:bg-success/90"
              onClick={() => window.open('https://wa.me/917745046520', '_blank')}
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              WhatsApp
            </Button>
          </div>

          {/* Tablet CTA */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            <Button size="icon" variant="ghost" className="h-9 w-9" onClick={() => window.open('tel:+917745046520')}>
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="icon" className="h-9 w-9 bg-success hover:bg-success/90" onClick={() => window.open('https://wa.me/917745046520', '_blank')}>
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-background border-t border-border shadow-lg"
            >
              <div className="container mx-auto px-4 py-3">
                <div className="space-y-1 mb-3">
                  {navItems.map(item => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                          isActive 
                            ? "text-primary bg-primary/10" 
                            : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-2 pt-2 md:hidden">
                  <Button variant="outline" className="flex-1 h-10" onClick={() => { setIsOpen(false); window.open('tel:+917745046520'); }}>
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button className="flex-1 h-10 bg-success hover:bg-success/90" onClick={() => { setIsOpen(false); window.open('https://wa.me/917745046520', '_blank'); }}>
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
