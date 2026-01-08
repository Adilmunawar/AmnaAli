'use server';

/**
 * @fileOverview Generates project descriptions using AI.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectType: z.string().describe('The type of the project (e.g., digital marketing, graphic design).'),
  projectDetails: z.string().describe('Detailed information about the project, including its goals, challenges, and outcomes.'),
});

export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A detailed and engaging description of the project.'),
});

export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating engaging project descriptions for online portfolios.

  Based on the project details provided, write a compelling description that highlights the project's purpose, the skills used, and the results achieved.

  Project Name: {{{projectName}}}
  Project Type: {{{projectType}}}
  Project Details: {{{projectDetails}}}

  Description:`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
