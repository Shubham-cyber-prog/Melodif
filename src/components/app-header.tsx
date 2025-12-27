
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Search,
  User,
  LogIn,
  UserPlus,
  Settings,
  Bell,
  Download,
  Sun,
  Moon,
  Home,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useProfile } from '@/contexts/ProfileContext';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

export function AppHeader() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { state: sidebarState, setOpenMobile } = useSidebar();

  const handleSearchFocus = () => {
    router.push('/search');
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-2">
        {isMobile && <SidebarTrigger onClick={() => setOpenMobile(true)} />}
        <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0" asChild>
            <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
            </Link>
        </Button>
      </div>
      
      <div
        className={cn(
          'flex flex-1 justify-center transition-all duration-200 ease-linear',
          sidebarState === 'expanded' ? 'md:ml-0' : 'md:ml-0'
        )}
      >
        <div className="w-full max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
            placeholder="What do you want to play?"
            className="h-12 w-full rounded-full bg-muted/50 pl-12 text-base transition-all duration-300 hover:bg-muted/80 focus:bg-card focus:ring-2 focus:ring-primary/50"
            onFocus={handleSearchFocus}
            />
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end gap-2">
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 shrink-0" asChild>
          <Link href="/download">
            <Download className="h-5 w-5" />
            <span className="sr-only">Download</span>
          </Link>
        </Button>
        <Button variant="ghost" className="h-10 w-10 rounded-full shrink-0" size="icon" asChild>
          <Link href="/notifications">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Link>
        </Button>
        <UserMenu />
      </div>
    </header>
  );
}

function UserMenu() {
  const { firstName, lastName, avatar } = useProfile();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full shrink-0">
          <Avatar className="h-9 w-9">
            <AvatarImage src={avatar} alt="User Avatar" />
            <AvatarFallback>
              {firstName.charAt(0)}
              {lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {firstName} {lastName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">user@melodif.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/login">
            <LogIn className="mr-2 h-4 w-4" />
            <span>Login</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/signup">
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Sign Up</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={toggleTheme}>
          {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
