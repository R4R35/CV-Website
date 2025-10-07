import { Globe } from "lucide-react";

const languages = [
  { name: "Romanian", level: "Native", percentage: 100 },
  { name: "Spanish", level: "Native", percentage: 100 },
  { name: "English", level: "C1 Advanced", percentage: 85 },
  { name: "French", level: "A2 Elementary", percentage: 40 }
];

export const Languages = () => {
  return (
    <section id="languages" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Languages</span>
        </h2>
        
        <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-primary/20 shadow-glow">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground">Multilingual communication abilities</p>
          </div>

          <div className="space-y-6">
            {languages.map((language, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{language.name}</span>
                  <span className="text-muted-foreground">{language.level}</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 rounded-full"
                    style={{ width: `${language.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
