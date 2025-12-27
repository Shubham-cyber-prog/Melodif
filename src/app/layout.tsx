import type { Metadata } from 'next';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { PlayerBar } from '@/components/player-bar';
import { AppHeader } from '@/components/app-header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Melody Muse',
  description: 'Your next favorite music destination.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex w-full flex-col">
              <SidebarInset>
                <div className="flex h-full flex-col pb-24">
                  <AppHeader />
                  <main className="flex-1 overflow-y-auto p-4 pt-6 md:p-8">
                    {children}
                  </main>
                </div>
              </SidebarInset>
            </div>
          </div>
          <PlayerBar />
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
