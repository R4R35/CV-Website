export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="card-gradient rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Computer Science student at UAIC FII in Iași, Romania, with a strong passion for 
            software development and cybersecurity. My technical foundation spans across multiple 
            programming languages and paradigms, with particular expertise in C/C++ and Python.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Through my academic journey, I've developed strong analytical and problem-solving abilities, 
            tackling complex challenges in areas like algorithms, data structures, operating systems, 
            and cryptography. I'm particularly interested in system programming and building 
            high-performance applications.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm actively seeking internship opportunities where I can apply my technical skills, 
            contribute to meaningful projects, and continue expanding my expertise in enterprise 
            environments. I'm a quick learner who adapts easily to new programming paradigms and tools.
          </p>
        </div>
      </div>
    </section>
  );
};
