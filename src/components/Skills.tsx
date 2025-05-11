
import { Progress } from "./ui/progress";

interface SkillProps {
  name: string;
  level: number;
}

const skills: SkillProps[] = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Database (SQL/NoSQL)", level: 85 },
  { name: "API Development", level: 90 },
  { name: "DevOps & CI/CD", level: 75 }
];

const technologies = [
  "React", "Next.js", "Node.js", "Express", 
  "MongoDB", "PostgreSQL", "TypeScript", 
  "Tailwind CSS", "Docker", "AWS", 
  "Firebase", "REST APIs", "GraphQL",
  "Redux", "Git"
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Habilidades & Tecnologias</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stack tecnológica e principais áreas de conhecimento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Habilidades Principais</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
