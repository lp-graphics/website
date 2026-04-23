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
    name: "Alex Rivera",
    role: "CEO",
    company: "Vanguard Tech",
    rating: 5,
    text: "LP Graphics delivered a brand identity that perfectly captured our vision. Their attention to detail in the typography and color palette was exceptional. Highly recommend for any high-end branding needs.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    service: "Branding"
  },
  {
    name: "Sarah Thompson",
    role: "Marketing Lead",
    company: "EcoStyle",
    rating: 5,
    text: "The social media content created for our launch campaign was stunning. We saw a significant boost in engagement and brand recognition. Professional, creative, and very easy to work with.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    service: "Social Media"
  },
  {
    name: "James Chen",
    role: "Founder",
    company: "Urban Eats",
    rating: 5,
    text: "Incredible UI/UX work. They transformed our complex app idea into a beautiful, intuitive interface. The feedback from our users has been overwhelmingly positive.",
    avatar: "https://i.pravatar.cc/150?u=james",
    service: "UI/UX"
  },
  {
    name: "Elena Petrova",
    role: "Creative Director",
    company: "Luxe Magazine",
    rating: 5,
    text: "The editorial layout for our anniversary issue was a masterpiece. LP Graphics has a unique eye for composition and modern aesthetics that is hard to find.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    service: "Print"
  },
  {
    name: "Marcus Wright",
    role: "Product Manager",
    company: "SwiftPay",
    rating: 5,
    text: "Fast turnaround without compromising on quality. The packaging design for our new hardware line stands out on the shelf and feels premium. A true partner in design.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    service: "Packaging"
  },
  {
    name: "Olivia Grant",
    role: "Art Curator",
    company: "Modern Gallery",
    rating: 5,
    text: "The digital illustrations provided for our digital exhibition were breathtaking. They brought a level of depth and storytelling that exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?u=olivia",
    service: "Digital Art"
  }
];

const Reviews = () => {
  const handleBehance = () => {
    window.open("https://be.net/lp_graphics", "_blank");
  };

  return (
    <div className="min-h-screen bg-muted/10">
      <Navbar />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">What clients say</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            We pride ourselves on building lasting relationships and delivering exceptional results for every client.
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
              <Button variant="outline" className="rounded-xl h-12 flex-grow md:flex-grow-0">
                Sort by Rating
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                <ReviewCard review={review} />
              </div>
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
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg" onClick={handleBehance}>
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-primary-foreground/20 hover:bg-primary-foreground/10" onClick={handleBehance}>
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