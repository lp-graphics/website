"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-primary mb-6">
              <div className="w-12 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-sm">
                LP
              </div>
              <span>LP GRAPHICS</span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              We craft digital experiences that resonate. From branding to high-end visual design, we bring your vision to life.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/course" className="text-muted-foreground hover:text-primary transition-colors">PS Course</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Start a Project</h4>
            <p className="text-muted-foreground mb-6">Have a vision? Let's make it happen together.</p>
            <Button className="w-full rounded-xl group">
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 LP Graphics. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;