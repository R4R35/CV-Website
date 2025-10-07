import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Activity, Globe, Terminal } from "lucide-react";

const projects = [
  {
    icon: Code2,
    title: "SFML Cloth Physics Simulation",
    description: "Real-time physics simulation using mass-spring systems with efficient rendering algorithms",
    technologies: ["C++", "SFML 3", "Physics"],
    color: "text-primary"
  },
  {
    icon: Activity,
    title: "Activity Tracking Application",
    description: "Personal productivity tool with data visualization and interactive interface",
    technologies: ["Python", "Data Visualization"],
    color: "text-secondary"
  },
  {
    icon: Globe,
    title: "Portfolio Website",
    description: "Responsive personal website showcasing technical projects and capabilities",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "text-primary"
  },
  {
    icon: Terminal,
    title: "System Programming Exercises",
    description: "Memory management and cooperative multi-process applications for academic coursework",
    technologies: ["C", "POSIX", "IPC"],
    color: "text-secondary"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Key Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`${project.color} p-3 rounded-lg bg-background/50 group-hover:shadow-glow transition-all duration-300`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-background/50 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
