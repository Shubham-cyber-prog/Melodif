
'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Home,
  Search,
  Library,
  Plus,
  User,
  UploadCloud,
  LogIn,
  UserPlus,
  Settings,
  BarChart,
  Bell,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { playlists } from '@/lib/data';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CreatePlaylistDialog } from '@/components/create-playlist-dialog';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';


const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/library', label: 'Your Library', icon: Library },
  { href: '/notifications', label: 'Notifications', icon: Bell },
  { href: '/upload', label: 'Upload Music', icon: UploadCloud },
  { href: '/analytics', label: 'Analytics', icon: BarChart },
];

const authLinks = [
    { href: '/login', label: 'Login', icon: LogIn },
    { href: '/signup', label: 'Sign Up', icon: UserPlus },
    { href: '/profile', label: 'Profile', icon: User },
]

export function AppSidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }


  return (
    <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader>
             <Link href="/" className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
                <svg
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M4 4.00098H8V16.001L12 12.001L16 16.001V4.00098H20V20.001H16V8.00098L12 12.001L8 8.00098V20.001H4V4.00098Z"
                    fill="currentColor"
                    />
                </svg>
                <span className="text-xl font-semibold text-primary group-data-[collapsible=icon]:hidden">
                    Melodif
                </span>
            </Link>
        </SidebarHeader>
      <SidebarContent className="flex flex-col p-2">
        <SidebarMenu className="flex-1">
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href}
                tooltip={link.label}
              >
                <Link href={link.href}>
                  <link.icon />
                  <span className="group-data-[collapsible=icon]:hidden">{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
            <div className="mt-4 border-t border-sidebar-border pt-4">
                 {authLinks.map((link) => (
                    <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton
                        asChild
                        isActive={pathname === link.href}
                        tooltip={link.label}
                    >
                        <Link href={link.href}>
                        <link.icon />
                        <span className="group-data-[collapsible=icon]:hidden">{link.label}</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                    <SidebarMenuButton
                        asChild
                        isActive={pathname === '/settings'}
                        tooltip="Settings"
                    >
                        <Link href="/settings">
                            <Settings />
                            <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </div>
        </SidebarMenu>
        
        <div className="mt-4 flex h-full min-h-0 flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex items-center justify-between p-4 group-data-[collapsible=icon]:justify-center">
                <h3 className="font-semibold group-data-[collapsible=icon]:hidden">Playlists</h3>
                <CreatePlaylistDialog>
                  <Button variant="ghost" size="icon" className="group-data-[collapsible=icon]:hidden h-5 w-5">
                    <Plus className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  </Button>
                </CreatePlaylistDialog>
            </div>
            <ScrollArea className="flex-1 group-data-[collapsible=icon]:hidden">
                <div className="space-y-1 p-4 pt-0">
                {playlists.map((playlist) => (
                    <Link href={`/playlist/${playlist.id}`} key={playlist.id}>
                        <div className="rounded-md p-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground truncate">
                            {playlist.name}
                        </div>
                    </Link>
                ))}
                </div>
            </ScrollArea>
        </div>

      </SidebarContent>
    </Sidebar>
  );
}
