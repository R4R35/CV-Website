import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["C/C++", "Python", "Bash"],
    color: "text-primary"
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["SFML 3", "Git", "Linux", "POSIX IPC"],
    color: "text-secondary"
  },
  {
    icon: Lightbulb,
    title: "Concepts & Expertise",
    skills: [
      "Object-Oriented Programming",
      "Templates",
      "Data Structures",
      "Dynamic Programming",
      "Cryptography",
      "Computer Networks",
      "Genetic Algorithms"
    ],
    color: "text-primary"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-8 shadow-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary"
            >
              <div className={`${category.color} mb-6 p-3 rounded-lg bg-background/50 inline-block shadow-glow`}>
                <category.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-background/50 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
