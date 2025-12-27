
'use client';
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, LineChart, Line } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Activity, Music, Play, TrendingUp } from 'lucide-react';

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

const listeningActivityData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 4 },
  { day: 'Thu', hours: 3.5 },
  { day: 'Fri', hours: 5 },
  { day: 'Sat', hours: 6 },
  { day: 'Sun', hours: 4.5 },
];


export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Your Analytics
        </h1>
        <p className="text-lg text-muted-foreground">
          Deep dive into your listening habits.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Listening Hours</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">142.5h</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Plays</CardTitle>
                <Play className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">+8.5% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Top Genre</CardTitle>
                <Music className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">Pop</div>
                <p className="text-xs text-muted-foreground">40% of your listening time</p>
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>Listening Activity</CardTitle>
                <CardDescription>Your listening hours this week.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-80 w-full">
                    <LineChart data={listeningActivityData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent indicator="dot" />} />
                        <Line type="monotone" dataKey="hours" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
         <Card className="lg:col-span-2">
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
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
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
