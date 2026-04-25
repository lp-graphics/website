"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import ReviewForm from '@/components/ReviewForm';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Search, MessageSquare, Loader2, Plus } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const Reviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter(review =>
    review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.service?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <div className="min-h-screen bg-muted/10">
      <SEO title="Reviews" />
      <Navbar />

      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Client Feedback
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            Real stories from our community. We value transparency and quality in every project and lesson.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">{averageRating}/5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">{reviews.length}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Reviews</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                className="pl-10 rounded-xl h-12 bg-white"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-xl h-12 flex-grow md:flex-grow-0 font-bold">
                  <Plus className="mr-2" size={18} />
                  Write a Review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] rounded-[32px] p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-3xl font-bold">Share Your Experience</DialogTitle>
                  <DialogDescription className="text-lg">
                    Your feedback helps us improve and helps others join the community.
                  </DialogDescription>
                </DialogHeader>
                <ReviewForm onSuccess={() => {
                  setIsDialogOpen(false);
                  fetchReviews();
                }} />
              </DialogContent>
            </Dialog>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-primary mb-4" size={48} />
              <p className="text-muted-foreground">Loading reviews...</p>
            </div>
          ) : filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review, i) => (
                <div key={review.id} className="animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${400 + (i * 150)}ms` }}>
                  <ReviewCard review={{
                    ...review,
                    avatar: review.avatar_url,
                  }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed">
              <MessageSquare className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No reviews found</h3>
              <p className="text-muted-foreground">Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;