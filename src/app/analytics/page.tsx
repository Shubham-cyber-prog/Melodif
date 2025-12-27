
'use client';
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const genreData = [
  { name: 'Pop', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Rock', value: 300, fill: 'hsl(var(--chart-2))'  },
  { name: 'Hip-Hop', value: 200, fill: 'hsl(var(--chart-3))'  },
  { name: 'Electronic', value: 278, fill: 'hsl(var(--chart-4))'  },
  { name: 'Classical', value: 189, fill: 'hsl(var(--chart-5))'  },
];

const topArtistsData = [
    { artist: 'Aura', plays: 120 },
    { artist: 'Celestial', plays: 98 },
    { artist: 'Nomad', plays: 86 },
    { artist: 'Horizon', plays: 74 },
    { artist: 'Retrospect', plays: 65 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Your Analytics
        </h1>
        <p className="text-lg text-muted-foreground">
          Insights into your listening habits.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Top Genres</CardTitle>
            <CardDescription>Your most played music genres.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ChartContainer config={{}} className="h-64 w-full">
                <PieChart>
                    <Tooltip content={<ChartTooltipContent nameKey="name" />} />
                    <Pie data={genreData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                        {genreData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
          <CardHeader>
            <CardTitle>Top Artists</CardTitle>
            <CardDescription>Your most frequently played artists.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80 w-full">
                <BarChart data={topArtistsData} layout="vertical" margin={{ left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="artist" type="category" width={80} />
                    <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<ChartTooltipContent />}/>
                    <Bar dataKey="plays" layout="vertical" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

    </div>
  );
}
