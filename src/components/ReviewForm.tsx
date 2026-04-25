"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/lib/supabase';
import { showError, showSuccess } from '@/utils/toast';
import { Star, Loader2 } from 'lucide-react';

const formSchema = z.object({
  rating: z.string(),
  service: z.string().min(2, "Service is required"),
  text: z.string().min(10, "Review must be at least 10 characters"),
});

interface ReviewFormProps {
  onSuccess: () => void;
}

const ReviewForm = ({ onSuccess }: ReviewFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setUserProfile(data);
      }
    };
    getUser();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: "5",
      service: "",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userProfile) {
      showError("You must be logged in to leave a review.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('reviews').insert({
        user_id: userProfile.id,
        name: `${userProfile.first_name} ${userProfile.last_name}`.trim() || userProfile.username,
        role: "Student", // Default role for course users
        company: "LP Graphics Academy",
        rating: parseInt(values.rating),
        service: values.service,
        text: values.text,
        avatar_url: userProfile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userProfile.username}`,
      });

      if (error) throw error;

      showSuccess("Review submitted successfully!");
      form.reset();
      onSuccess();
    } catch (error: any) {
      showError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!userProfile) {
    return (
      <div className="p-8 text-center bg-muted/30 rounded-3xl border-2 border-dashed">
        <p className="text-muted-foreground mb-4">Please login to share your experience with us.</p>
        <Button asChild className="rounded-full px-8">
          <a href="/login">Login to Review</a>
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Provided</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Photoshop Course, Sports Graphic" {...field} className="rounded-xl h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[5, 4, 3, 2, 1].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        <div className="flex items-center gap-2">
                          {num} Stars <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your experience..." 
                  className="rounded-xl min-h-[150px] p-4" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full rounded-full h-14 text-lg font-bold shadow-lg shadow-primary/20" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
          Submit Review
        </Button>
      </form>
    </Form>
  );
};

export default ReviewForm;