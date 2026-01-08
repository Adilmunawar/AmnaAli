"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectDetailModal from "./project-detail-modal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          My Work
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          A selection of projects that showcase my skills and passion.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 bg-card"
            onClick={() => setSelectedProject(project)}
          >
            <CardHeader className="p-0">
              <div className="overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-primary font-medium mb-1">
                {project.type}
              </p>
              <CardTitle className="font-headline text-xl mb-3">
                {project.name}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
