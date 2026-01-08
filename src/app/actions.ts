"use server";

import { z } from "zod";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(
  prevState: any,
  formData: FormData
) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
    errors: {},
  };
}


const generateDescriptionSchema = z.object({
    projectName: z.string(),
    projectType: z.string(),
    projectDetails: z.string(),
});


export async function generateProjectDescriptionAction(input: z.infer<typeof generateDescriptionSchema>) {
    try {
        const validatedInput = generateDescriptionSchema.parse(input);
        const result = await generateProjectDescription(validatedInput);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error generating project description:", error);
        if (error instanceof z.ZodError) {
            return { success: false, error: "Invalid input." };
        }
        return { success: false, error: "An unexpected error occurred." };
    }
}
