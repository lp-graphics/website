"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Search, MessageSquare, Loader2, ExternalLink } from 'lucide-react';

const STATIC_REVIEWS = [
  {
    id: 1,
    name: "John Doe",
    role: "Marketing Manager",
    company: "Nike",
    rating: 5,
    service: "Sports Graphic",
    text: "LP Graphics delivered a stunning visual that perfectly captured our brand's energy. The turnaround was fast and the communication flawless.",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=John%20Doe",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Creative Director",
    company: "Adidas",
    rating: 5,
    service: "Brand Identity",
    text: "The branding package exceeded our expectations – clean, modern, and instantly recognizable. Highly recommend LP Graphics!",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily%20Chen",
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    role: "Social Media Lead",
    company: "FC Barcelona",
    rating: 5,
    service: "Social Media Content",
    text: "The social assets boosted our engagement by 40% in just one week. Professional, creative, and on‑brand.",
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos%20Ruiz",
  },
];

const Reviews = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredReviews = STATIC_REVIEWS.filter(review =>
    review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.service?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/10">
      <SEO title="Reviews" />
      <Navbar />

      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Client Feedback
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Real stories from real clients. We value transparency and quality in every project we undertake.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">5.0/5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">{STATIC_REVIEWS.length}+</div>
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
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                className="pl-10 rounded-xl h-12 bg-white"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-xl h-12 flex-grow md:flex-grow-0">
                  <ExternalLink className="mr-2" size={18} />
                  Write a Review on Behance
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] rounded-[32px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Leave a Review on Behance</DialogTitle>
                  <DialogDescription>
                    We love hearing from you! Please share your experience on our Behance profile.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center py-8">
                  <Button
                    asChild
                    className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href="https://behance.net/lp_graphics" target="_blank" rel="noopener noreferrer">
                      Go to Behance
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Static reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, i) => (
              <div key={review.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                <ReviewCard review={{
                  ...review,
                  avatar: review.avatar_url,
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;