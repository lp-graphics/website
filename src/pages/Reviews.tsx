"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MessageSquarePlus } from 'lucide-react';

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "TechFlow",
    rating: 5,
    text: "The team at Studio completely transformed our brand identity. Their attention to detail and creative vision is unmatched. We've seen a 40% increase in engagement since the relaunch.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    service: "Branding"
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "UrbanEats",
    rating: 5,
    text: "Working with them on our social media campaign was a breeze. They understood our voice immediately and delivered content that truly resonated with our audience.",
    avatar: "https://i.pravatar.cc/150?u=michael",
    service: "Social Media"
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Lead",
    company: "Vogue Art",
    rating: 4,
    text: "Exceptional print design. The magazine layout they created for us was both modern and timeless. Highly recommend for any high-end editorial work.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    service: "Print"
  },
  {
    name: "David Wilson",
    role: "Product Manager",
    company: "SwiftPay",
    rating: 5,
    text: "The UI/UX work they did for our mobile app was game-changing. User retention improved significantly thanks to the intuitive and beautiful interface.",
    avatar: "https://i.pravatar.cc/150?u=david",
    service: "UI/UX"
  },
  {
    name: "Jessica Lee",
    role: "Art Curator",
    company: "Modern Gallery",
    rating: 5,
    text: "Their digital illustrations brought our exhibition to life. The level of craftsmanship and storytelling in their work is truly inspiring.",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    service: "Digital Art"
  },
  {
    name: "Robert Taylor",
    role: "CEO",
    company: "GreenRoot",
    rating: 5,
    text: "The packaging design for our skincare line was exactly what we envisioned. It perfectly balances sustainability with a premium feel.",
    avatar: "https://i.pravatar.cc/150?u=robert",
    service: "Packaging"
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">What clients say</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            We pride ourselves on building lasting relationships and delivering exceptional results for every client.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">12</div>
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
              <Button variant="outline" className="rounded-xl h-12 flex-grow md:flex-grow-0">
                Sort by Rating
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-primary rounded-[40px] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your story?</h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                Join our list of happy clients and let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg">
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-primary-foreground/20 hover:bg-primary-foreground/10">
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