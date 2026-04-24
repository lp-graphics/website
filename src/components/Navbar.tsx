"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Palette, Star, BookOpen, Menu, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Portfolio', path: '/', icon: Palette },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Reviews', path: '/reviews', icon: Star },
    { name: 'PS Course', path: '/course', icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-primary">
          <div className="w-10 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">
            LP
          </div>
          <span>LP GRAPHICS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2",
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon size={16} />
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 border-l pl-8">
            <Button className="rounded-full px-6" onClick={() => window.open("https://be.net/lp_graphics", "_blank")}>
              Hire Us
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium flex items-center gap-3 p-2 rounded-lg transition-colors",
                      location.pathname === item.path ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    )}
                  >
                    <item.icon size={20} />
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-6 border-t space-y-4">
                  <Button className="w-full rounded-xl py-6 text-lg" onClick={() => window.open("https://be.net/lp_graphics", "_blank")}>
                    Hire Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;