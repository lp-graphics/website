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
    <>
      {/* Spacer for mobile to prevent content from being hidden behind the fixed bottom nav */}
      <div className="h-16 md:hidden" />
      
      <nav className="fixed bottom-0 md:sticky md:top-0 md:bottom-auto z-50 w-full border-t md:border-t-0 md:border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-primary">
            <div className="w-10 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">
              LP
            </div>
            <span className="hidden xs:block">LP GRAPHICS</span>
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

          {/* Mobile Nav Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="rounded-t-[32px] h-[70vh] p-8">
                <div className="flex flex-col gap-6 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold tracking-tighter">Menu</h2>
                    <div className="w-12 h-1 bg-muted rounded-full mx-auto" />
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-bold flex items-center gap-4 p-4 rounded-2xl transition-all",
                        location.pathname === item.path ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "hover:bg-muted"
                      )}
                    >
                      <item.icon size={24} />
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-6 border-t mt-4">
                    <Button className="w-full rounded-2xl py-8 text-xl font-bold shadow-xl shadow-primary/20" onClick={() => window.open("https://be.net/lp_graphics", "_blank")}>
                      Hire Us on Behance
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;