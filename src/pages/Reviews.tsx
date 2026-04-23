"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MessageSquarePlus, MessageSquare } from 'lucide-react';

const Reviews = () => {
  // Reviews will be fetched from the database once Supabase is connected
  const REVIEWS: any[] = [];

  const handleBehance = () => {
    window.open("https://be.net/lp_graphics", "_blank");
  };

  return (
    <div className="min-h-screen bg-muted/10">
      <SEO title="Reviews" />
      <Navbar />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">Client Feedback</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Real stories from real clients. We value transparency and quality in every project we undertake.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">5.0/5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">15</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Awards</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input className="pl-10 rounded-xl h-12 bg-white" placeholder="Search reviews..." />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" className="rounded-xl h-12 flex-grow md:flex-grow-0">
                <Filter className="mr-2" size={18} />
                Filter by Service
              </Button>
            </div>
          </div>

          {REVIEWS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REVIEWS.map((review, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-muted-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">No reviews yet</h3>
              <p className="text-muted-foreground mb-8">Be the first to share your experience with LP Graphics.</p>
              <Button className="rounded-full px-8" onClick={handleBehance}>
                Leave a Review on Behance
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-24 bg-primary rounded-[40px] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your story?</h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                Join our list of happy clients and let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg" onClick={handleBehance}>
                  Get a Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 h-14 text-lg border-white text-white hover:bg-white hover:text-primary transition-colors" 
                  onClick={handleBehance}
                >
                  <MessageSquarePlus className="mr-2" size={20} />
                  Leave a Review
                </Button>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;