import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  "Algorithms",
  "Data Structures",
  "Operating Systems",
  "Cryptography",
  "Computer Networks"
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Education</span>
        </h2>
        
        <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-card border border-border relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-primary/20 shadow-glow">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground">UAIC FII, Iași</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Expected: June 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Iași, Romania</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Relevant Courses</h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-background/50 hover:bg-primary/20 transition-colors duration-300 text-base py-2"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
