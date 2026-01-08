"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";
import { generateProjectDescriptionAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/skeleton";

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const [isPending, startTransition] = useTransition();
  const [generatedDescription, setGeneratedDescription] = useState("");
  const { toast } = useToast();

  const handleGenerateDescription = () => {
    startTransition(async () => {
      setGeneratedDescription("");
      const result = await generateProjectDescriptionAction({
        projectName: project.name,
        projectType: project.type,
        projectDetails: project.details,
      });

      if (result.success && result.data) {
        setGeneratedDescription(result.data.description);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Failed to generate description.",
        });
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <p className="text-sm text-primary font-medium">{project.type}</p>
          <DialogTitle className="font-headline text-3xl">
            {project.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
              data-ai-hint={project.image.imageHint}
            />
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">
              Project Details
            </h3>
            <p className="text-foreground/80">{project.details}</p>

            <div className="space-y-2 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline text-lg font-semibold">
                  AI Description Generator
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGenerateDescription}
                  disabled={isPending}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate
                </Button>
              </div>
              {isPending && (
                <div className="space-y-2 rounded-md border p-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              )}
              {generatedDescription && (
                <Textarea
                  readOnly
                  value={generatedDescription}
                  className="min-h-[120px] bg-secondary border-secondary-foreground/20"
                  aria-label="Generated Project Description"
                />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
