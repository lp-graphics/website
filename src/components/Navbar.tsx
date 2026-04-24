"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Palette, Star, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Portfolio', path: '/', icon: Palette },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Reviews', path: '/reviews', icon: Star },
    { name: 'PS Course', path: '/course', icon: BookOpen },
  ];

  return (
    <>
      {/* --- DESKTOP NAVIGATION (Top Only) --- */}
      <nav className="hidden md:sticky md:top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter text-primary">
            <div className="w-12 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-sm">
              LP
            </div>
            <span>LP GRAPHICS</span>
          </Link>

          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-bold transition-all hover:text-primary flex items-center gap-2 py-2 border-b-2 border-transparent",
                  location.pathname === item.path ? "text-primary border-primary" : "text-muted-foreground"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 border-l pl-10 ml-2">
              <Button className="rounded-full px-8 h-12 font-bold shadow-lg shadow-primary/10" onClick={() => window.open("https://be.net/lp_graphics", "_blank")}>
                Hire Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION (Instagram Style) --- */}
      
      {/* Mobile Top Header (Logo Only) */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b z-50 flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-primary">
          <div className="w-10 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">
            LP
          </div>
          <span>LP GRAPHICS</span>
        </Link>
        <Button 
          variant="ghost" 
          size="sm" 
          className="rounded-full font-bold text-xs"
          onClick={() => window.open("https://be.net/lp_graphics", "_blank")}
        >
          Hire
        </Button>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/90 backdrop-blur-xl border-t z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-300",
              location.pathname === item.path ? "text-primary scale-110" : "text-muted-foreground"
            )}
          >
            <item.icon size={22} strokeWidth={location.pathname === item.path ? 2.5 : 2} />
            <span className="text-[10px] font-bold tracking-tight">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Spacers for Mobile Layout */}
      <div className="h-16 md:hidden" /> {/* Top spacer for fixed header */}
      <div className="h-16 md:hidden" /> {/* Bottom spacer for fixed nav */}
    </>
  );
};

export default Navbar;