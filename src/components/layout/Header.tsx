import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LoginDialog } from '@/components/auth/LoginDialog';
import { SignUpDialog } from '@/components/auth/SignUpDialog';
import { Logo } from '@/components/ui/logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2" href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2" href="/about">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-4 py-2" href="/services">
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cars..."
              className="pl-8 w-[200px]"
            />
          </div>
          
          <ThemeToggle />

          <div className="hidden md:flex gap-2">
            <LoginDialog />
            <SignUpDialog />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 pt-8">
                <Button variant="ghost" className="justify-start" href="/">Home</Button>
                <Button variant="ghost" className="justify-start" href="/about">About Us</Button>
                <Button variant="ghost" className="justify-start" href="/services">Services</Button>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search cars..." className="pl-8" />
                </div>
                <LoginDialog />
                <SignUpDialog />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}