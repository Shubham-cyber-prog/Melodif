
'use client';
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, LineChart, Line, AreaChart, Area, RadialBarChart, RadialBar } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Activity, Music, Play, TrendingUp, Users, Clock, Calendar, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const genreData = [
  { name: 'Pop', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Rock', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Hip-Hop', value: 200, fill: 'hsl(var(--chart-3))' },
  { name: 'Electronic', value: 278, fill: 'hsl(var(--chart-4))' },
  { name: 'Classical', value: 189, fill: 'hsl(var(--chart-5))' },
];

const topArtistsData = [
    { artist: 'Aura', plays: 120 },
    { artist: 'Celestial', plays: 98 },
    { artist: 'Nomad', plays: 86 },
    { artist: 'Horizon', plays: 74 },
    { artist: 'Retrospect', plays: 65 },
    { artist: 'Etherea', plays: 55 },
    { artist: 'Solstice', plays: 48 },
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

const monthlyActivityData = Array.from({ length: 30 }, (_, i) => ({
  date: `Day ${i + 1}`,
  plays: 50 + Math.floor(Math.random() * 50) + i * 2,
}));

const playsByTimeData = [
    { name: 'Morning', value: 30, fill: 'hsl(var(--chart-1))' },
    { name: 'Afternoon', value: 50, fill: 'hsl(var(--chart-2))' },
    { name: 'Evening', value: 20, fill: 'hsl(var(--chart-3))' },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Your Listening Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          An overview of your music habits and trends.
        </p>
      </header>

      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Listening Hours</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">142.5h</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Plays</CardTitle>
                <Play className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">+8.5% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Top Genre</CardTitle>
                <Music className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">Pop</div>
                <p className="text-xs text-muted-foreground">40% of your listening time</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Listening Streak</CardTitle>
                <Flame className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">15 Days</div>
                <p className="text-xs text-muted-foreground">Longest streak: 30 days</p>
                <p className="text-xs text-muted-foreground">250 songs in current streak</p>
            </CardContent>
        </Card>

        <Card className="col-span-1 sm:col-span-2 lg:col-span-4">
            <CardHeader>
                <CardTitle>Weekly Listening Activity</CardTitle>
                <CardDescription>Your listening hours trend for the past week.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-80 w-full">
                    <AreaChart data={listeningActivityData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} unit="h" />
                        <Tooltip content={<ChartTooltipContent indicator="dot" />} />
                        <Area type="monotone" dataKey="hours" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#colorHours)" />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
        
        <Card className="col-span-1 sm:col-span-2">
          <CardHeader>
            <CardTitle>Genre Distribution</CardTitle>
            <CardDescription>How your listening time is split across genres.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ChartContainer config={{}} className="h-64 w-full">
                <PieChart>
                    <Tooltip content={<ChartTooltipContent nameKey="name" />} />
                    <Pie data={genreData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                        <text x={x} y={y} fill="hsl(var(--foreground))" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs">
                            {`${genreData[index].name} (${(percent * 100).toFixed(0)}%)`}
                        </text>
                        );
                    }}>
                        {genreData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} className="stroke-background hover:opacity-80" />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1 sm:col-span-2">
          <CardHeader>
            <CardTitle>Top Artists This Month</CardTitle>
            <CardDescription>Your most frequently played artists.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64 w-full">
                <BarChart data={topArtistsData} layout="vertical" margin={{ left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="artist" type="category" tickLine={false} axisLine={false} width={80} />
                    <Tooltip content={<ChartTooltipContent />} cursor={{fill: 'hsl(var(--muted))'}} />
                    <Bar dataKey="plays" layout="vertical" radius={5}>
                        {topArtistsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 5) + 1}))`} />
                        ))}
                    </Bar>
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4">
            <CardHeader>
                <CardTitle>Monthly Activity</CardTitle>
                <CardDescription>Your total plays over the last 30 days.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-80 w-full">
                    <LineChart data={monthlyActivityData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={(value, index) => (index % 5 === 0 ? value : '')} />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent indicator="line" />} />
                        <Line type="monotone" dataKey="plays" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card className="col-span-1 sm:col-span-2">
            <CardHeader>
                <CardTitle>Activity by Time of Day</CardTitle>
                <CardDescription>When you listen to music the most.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-64 w-full">
                    <RadialBarChart 
                        data={playsByTimeData} 
                        innerRadius="30%" 
                        outerRadius="100%" 
                        barSize={20} 
                        startAngle={90} 
                        endAngle={-270}
                    >
                        <Tooltip content={<ChartTooltipContent nameKey="name" />} />
                         <RadialBar
                            background
                            dataKey='value'
                        >
                            {playsByTimeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} className="stroke-background" />
                            ))}
                         </RadialBar>
                         <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>

         <Card className="col-span-1 sm:col-span-2">
            <CardHeader>
                <CardTitle>Recent Milestones</CardTitle>
                <CardDescription>Your latest achievements on Melodif.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="p-2">
                        <Music className="h-5 w-5 text-primary" />
                    </Badge>
                    <div>
                        <p className="font-semibold">1000th Song Played</p>
                        <p className="text-sm text-muted-foreground">You played "Starlight" by Celestial.</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="p-2">
                        <Users className="h-5 w-5 text-blue-500" />
                    </Badge>
                    <div>
                        <p className="font-semibold">50 Followers</p>
                        <p className="text-sm text-muted-foreground">Your community is growing!</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="p-2">
                        <Clock className="h-5 w-5 text-green-500" />
                    </Badge>
                    <div>
                        <p className="font-semibold">100 Hours of Listening</p>
                        <p className="text-sm text-muted-foreground">You're a true music lover.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
