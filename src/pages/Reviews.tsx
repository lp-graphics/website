"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import ReviewForm from '@/components/ReviewForm';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Search, MessageSquarePlus, MessageSquare, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const Reviews = () => {
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter(review => 
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">Client Feedback</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Real stories from real clients. We value transparency and quality in every project we undertake.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">5.0/5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="text-center border-l">
              <div className="text-4xl font-bold text-primary mb-1">{reviews.length}+</div>
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
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-xl h-12 flex-grow md:flex-grow-0">
                    <MessageSquarePlus className="mr-2" size={18} />
                    Write a Review
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] rounded-[32px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Share Your Experience</DialogTitle>
                    <DialogDescription>
                      Your feedback helps us improve and helps others choose our services.
                    </DialogDescription>
                  </DialogHeader>
                  <ReviewForm onSuccess={() => {
                    setIsDialogOpen(false);
                    fetchReviews();
                  }} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-primary mb-4" size={40} />
              <p className="text-muted-foreground">Loading client stories...</p>
            </div>
          ) : filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review, i) => (
                <div key={review.id || i} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                  <ReviewCard review={{
                    ...review,
                    avatar: review.avatar_url
                  }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-muted-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">No reviews found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your search or be the first to leave feedback.</p>
              <Button className="rounded-full px-8" onClick={() => setIsDialogOpen(true)}>
                Write the First Review
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;