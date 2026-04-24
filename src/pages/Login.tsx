"use client";

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { showSuccess, showError } from '@/utils/toast';
import { LogIn, Mail, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const from = (location.state as any)?.from?.pathname || "/course";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login logic - this will be replaced with Supabase auth
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('isLoggedIn', 'true');
        showSuccess("Successfully logged in!");
        navigate(from, { replace: true });
      } else {
        showError("Please enter both email and password.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-muted/10 flex flex-col">
      <SEO title="Login" />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 py-20">
        <Card className="w-full max-w-md rounded-[40px] border-none shadow-2xl overflow-hidden">
          <CardHeader className="space-y-1 pt-12 pb-8 text-center bg-primary text-primary-foreground">
            <CardTitle className="text-3xl font-bold tracking-tighter">Welcome Back</CardTitle>
            <CardDescription className="text-primary-foreground/70 text-lg">
              Log in to access your PS Course dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    className="pl-10 rounded-xl h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground">Forgot password?</Button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input 
                    id="password" 
                    type="password" 
                    className="pl-10 rounded-xl h-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full rounded-xl h-14 text-lg font-bold" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
                {!isLoading && <LogIn className="ml-2" size={20} />}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="pb-12 flex flex-col gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">New to LP Graphics?</span>
              </div>
            </div>
            <Button variant="outline" className="w-full rounded-xl h-12" onClick={() => navigate('/course')}>
              Explore the Course
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Login;