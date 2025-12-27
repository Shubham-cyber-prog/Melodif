'use server';
/**
 * @fileOverview Provides personalized music recommendations based on listening history.
 *
 * - getMusicRecommendation - A function that returns music recommendations based on listening history.
 * - GetMusicRecommendationInput - The input type for the getMusicRecommendation function.
 * - GetMusicRecommendationOutput - The return type for the getMusicRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetMusicRecommendationInputSchema = z.object({
  listeningHistory: z.string().describe('The user listening history.'),
});
export type GetMusicRecommendationInput = z.infer<typeof GetMusicRecommendationInputSchema>;

const GetMusicRecommendationOutputSchema = z.object({
  recommendations: z.string().describe('A list of music recommendations.'),
});
export type GetMusicRecommendationOutput = z.infer<typeof GetMusicRecommendationOutputSchema>;

export async function getMusicRecommendation(input: GetMusicRecommendationInput): Promise<GetMusicRecommendationOutput> {
  return getMusicRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getMusicRecommendationPrompt',
  input: {schema: GetMusicRecommendationInputSchema},
  output: {schema: GetMusicRecommendationOutputSchema},
  prompt: `You are a music expert. Based on the user's listening history, you will provide personalized music recommendations.

Listening History: {{{listeningHistory}}}

Recommendations:`, 
});

const getMusicRecommendationFlow = ai.defineFlow(
  {
    name: 'getMusicRecommendationFlow',
    inputSchema: GetMusicRecommendationInputSchema,
    outputSchema: GetMusicRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
