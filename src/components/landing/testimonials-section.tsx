"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { User } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          What Clients Say
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
          Hear from some of the amazing people I've worked with.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full bg-card">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4 h-full">
                    <p className="text-lg italic text-foreground/90 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <Avatar>
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
