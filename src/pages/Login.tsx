"use client";

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/course";

  React.useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate(from, { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, from]);

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col">
      <SEO title="Login / Signup" />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 py-20">
        <Card className="w-full max-w-md rounded-[40px] border-none shadow-2xl overflow-hidden">
          <CardHeader className="space-y-1 pt-12 pb-8 text-center bg-primary text-primary-foreground">
            <CardTitle className="text-3xl font-bold tracking-tighter">Welcome</CardTitle>
            <CardDescription className="text-primary-foreground/70 text-lg">
              Sign in or create an account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-10">
            <Auth
              supabaseClient={supabase}
              appearance={{ 
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'hsl(var(--primary))',
                      brandAccent: 'hsl(var(--primary))',
                    },
                    radii: {
                      buttonBorderRadius: '12px',
                      inputBorderRadius: '12px',
                    }
                  }
                }
              }}
              providers={[]}
              theme="light"
            />
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Login;