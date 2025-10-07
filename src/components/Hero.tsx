import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Rares Nitoi</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Computer Science Student
          </p>
          
          <p className="text-xl text-muted-foreground mb-8">
            Cybersecurity & Software Development
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about building innovative solutions with C/C++, Python, and modern technologies. 
            Currently studying at UAIC FII in Iași, Romania.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-primary transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
