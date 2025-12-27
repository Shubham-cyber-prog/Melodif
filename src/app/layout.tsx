
import type { Metadata } from 'next';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { PlayerBar } from '@/components/player-bar';
import { AppHeader } from '@/components/app-header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { MobileBottomNav } from '@/components/mobile-bottom-nav';
import { AppFooter } from '@/components/app-footer';
import ClientOnly from '@/components/client-only';
import { AIChatbot } from '@/components/ai-chatbot';
import { ProfileProvider } from '@/contexts/ProfileContext';

export const metadata: Metadata = {
  title: 'Melodif',
  description: 'Your next favorite music destination.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ProfileProvider>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <SidebarInset>
                <div className="flex w-full flex-col">
                    <div className="flex h-full flex-col pb-24 md:bg-transparent bg-background">
                      <AppHeader />
                      <main className="flex-1 overflow-y-auto p-4 pt-6 md:p-8 transition-all duration-300">
                        {children}
                      </main>
                      <AppFooter />
                    </div>
                </div>
              </SidebarInset>
            </div>
            <ClientOnly>
              <PlayerBar />
            </ClientOnly>
            <MobileBottomNav />
            <Toaster />
            <ClientOnly>
              <AIChatbot />
            </ClientOnly>
          </SidebarProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
