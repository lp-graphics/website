"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleHireUs = () => {
    window.open("https://be.net/lp_graphics", "_blank");
  };

  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Social */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-primary mb-6">
              <div className="w-12 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-sm">
                LP
              </div>
              <span>LP GRAPHICS</span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              Crafting high-end visual identities and digital experiences that resonate. Your vision, our creative expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/lp.graphicss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/lp_graphicss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a>
              <a href="mailto:lp.graphicss@gmail.com" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/course" className="text-muted-foreground hover:text-primary transition-colors">PS Course</Link></li>
            </ul>
          </div>

          {/* Start a Project */}
          <div>
            <h4 className="font-bold mb-6">Start a Project</h4>
            <p className="text-muted-foreground mb-6">Ready to elevate your brand? Let's collaborate on Behance.</p>
            <Button className="w-full rounded-xl group" onClick={handleHireUs}>
              Hire Us on Behance
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>

          {/* Legal (no heading) */}
          <div>
            {/* Links visible only on mobile */}
            <ul className="md:hidden space-y-2">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 LP Graphics. All rights reserved.</p>
          <div className="flex gap-8">
            {/* Links visible only on desktop */}
            <ul className="hidden md:flex gap-8">
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;