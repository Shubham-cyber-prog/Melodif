
'use client';
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
  Home,
  Search,
  User,
  Sun,
  Moon,
  LogIn,
  UserPlus,
  Settings,
  Bell,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSidebar } from './ui/sidebar';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// A placeholder for a theme hook
const useTheme = () => {
  const [theme, setThemeState] = useState('light');
  
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'light');
  }, []);
  
  const setTheme = (themeValue: 'light' | 'dark' | 'system') => {
    if (themeValue === 'dark') {
      document.documentElement.classList.add('dark');
      setThemeState('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setThemeState('light');
    }
  };
  
  return { theme, setTheme };
};


export function AppHeader() {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();

  const handleSearchFocus = () => {
    router.push('/search');
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
      <div className="flex items-center gap-2">
        <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => router.push('/')}
            >
            <Home className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110">
            <Bell className="h-5 w-5" />
        </Button>
        <UserMenu />
      </div>
    </header>
  );
}

function UserMenu() {
  const { theme, setTheme } = useTheme();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://picsum.photos/seed/avatar/200" alt="User Avatar" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Guest</p>
            <p className="text-xs leading-none text-muted-foreground">
              Not logged in
            </p>
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
        <DropdownMenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
