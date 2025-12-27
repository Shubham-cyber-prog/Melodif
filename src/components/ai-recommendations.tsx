'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Loader2, Music } from 'lucide-react';
import { getMusicRecommendation, GetMusicRecommendationOutput } from '@/ai/flows/get-music-recommendation';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState<GetMusicRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      // In a real app, this would be dynamically sourced from the user's actual listening history.
      const listeningHistory = "Lofi hip hop, chillwave, ambient electronic, Bon Iver, The xx, Glass Animals";
      const result = await getMusicRecommendation({ listeningHistory });
      setRecommendations(result);
    } catch (e) {
      console.error(e);
      setError('Failed to get recommendations. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Recommendations</CardTitle>
        <CardDescription>
          Discover new music based on your listening history. Our AI will find your next favorite tracks.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleGetRecommendations} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          {isLoading ? 'Generating...' : 'Get My Recommendations'}
        </Button>

        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {recommendations && recommendations.recommendations && (
          <div className="mt-4 space-y-2 rounded-lg border bg-secondary/50 p-4">
            <h3 className="font-semibold">Here's what we found for you:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {recommendations.recommendations.split(',').map((rec, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Music className="h-4 w-4 text-primary" />
                        <span>{rec.trim()}</span>
                    </li>
                ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
