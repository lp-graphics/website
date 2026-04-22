"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ReviewProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
  service: string;
}

const ReviewCard = ({ review }: { review: ReviewProps }) => {
  return (
    <Card className="rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden group">
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"} 
              />
            ))}
          </div>
          <Quote className="text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
        </div>
        
        <p className="text-lg text-muted-foreground italic mb-8 leading-relaxed">
          "{review.text}"
        </p>
        
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-primary/10">
            <AvatarImage src={review.avatar} />
            <AvatarFallback>{review.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-primary">{review.name}</h4>
            <p className="text-xs text-muted-foreground">{review.role} @ {review.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;