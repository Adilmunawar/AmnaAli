"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success && state.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Consider resetting the form if needed
    } else if (!state.success && state.message && Object.keys(state.errors || {}).length > 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full pb-16 md:pb-24">
      <div className="mx-auto max-w-xl">
        <Card className="bg-card">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter">
              Get in Touch
            </CardTitle>
            <CardDescription>
              Have a project in mind? Let's talk!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" aria-describedby="name-error" />
                <div id="name-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.name && (
                    <p className="text-sm font-medium text-destructive">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  aria-describedby="email-error"
                />
                 <div id="email-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.email && (
                    <p className="text-sm font-medium text-destructive">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="min-h-[120px]"
                  aria-describedby="message-error"
                />
                 <div id="message-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.message && (
                    <p className="text-sm font-medium text-destructive">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
