import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently seeking internship opportunities and open to discussing projects, 
            collaborations, or just connecting with fellow developers and tech enthusiasts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors duration-300">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Iași, Romania</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors duration-300">
              <Mail className="w-5 h-5 text-primary" />
              <span>Available via email</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow shadow-primary transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:nitoirares@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/R4R35" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/nitoi-rares-4917a531b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12">
          © 2025 Rares Nitoi. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};
