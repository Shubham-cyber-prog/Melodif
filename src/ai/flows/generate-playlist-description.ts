'use server';

/**
 * @fileOverview Generates a playlist description using AI.
 *
 * - generatePlaylistDescription - A function that generates a playlist description.
 * - GeneratePlaylistDescriptionInput - The input type for the generatePlaylistDescription function.
 * - GeneratePlaylistDescriptionOutput - The return type for the generatePlaylistDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePlaylistDescriptionInputSchema = z.object({
  playlistName: z.string().describe('The name of the playlist.'),
  musicGenres: z
    .string()
    .describe('The music genres included in this playlist (e.g. pop, rock, classical, etc.).'),
  artistNames: z.string().describe('The names of the artists on the playlist.'),
});
export type GeneratePlaylistDescriptionInput = z.infer<
  typeof GeneratePlaylistDescriptionInputSchema
>;

const GeneratePlaylistDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated description of the playlist.'),
});
export type GeneratePlaylistDescriptionOutput = z.infer<
  typeof GeneratePlaylistDescriptionOutputSchema
>;

export async function generatePlaylistDescription(
  input: GeneratePlaylistDescriptionInput
): Promise<GeneratePlaylistDescriptionOutput> {
  return generatePlaylistDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePlaylistDescriptionPrompt',
  input: {schema: GeneratePlaylistDescriptionInputSchema},
  output: {schema: GeneratePlaylistDescriptionOutputSchema},
  prompt: `You are an expert playlist curator. Generate a short, compelling description for a playlist given its name, music genres, and artist names.

Playlist Name: {{{playlistName}}}
Music Genres: {{{musicGenres}}}
Artist Names: {{{artistNames}}}

Description:`,
});

const generatePlaylistDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePlaylistDescriptionFlow',
    inputSchema: GeneratePlaylistDescriptionInputSchema,
    outputSchema: GeneratePlaylistDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
