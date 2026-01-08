import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Paintbrush, Megaphone } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          My Skills
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          A blend of creativity and technical expertise to deliver outstanding
          results.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              {skillCategory.category === "Digital Marketing" ? (
                <Megaphone className="w-8 h-8 text-primary" />
              ) : (
                <Paintbrush className="w-8 h-8 text-primary" />
              )}
              <CardTitle className="font-headline text-2xl">
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillCategory.items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-foreground/70">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={skill.level}
                    aria-label={`${skill.name} proficiency`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
