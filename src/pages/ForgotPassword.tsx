"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { showError, showSuccess } from '@/utils/toast';
import { Loader2, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        showError(error.message);
      } else {
        showSuccess('Password reset link sent to your email!');
      }
    } catch (err) {
      showError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Forgot Password | PS Course" />
      <Navbar />
      
      <section className="pt-20 pb-16 flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto rounded-3xl border shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">Reset Password</CardTitle>
              <p className="text-muted-foreground mt-2">We'll send you a link to get back into your account</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl h-12"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full h-14 text-lg font-bold shadow-lg shadow-primary/20"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Link...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link to="/login" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-2">
                  <ArrowLeft size={16} />
                  Back to Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForgotPassword;