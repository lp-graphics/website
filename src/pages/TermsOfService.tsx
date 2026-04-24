"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Terms of Service" />
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the LP Graphics website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Services Provided</h2>
            <p>
              LP Graphics provides high-end sports graphics, digital experiences, and educational content. We reserve the right to modify or discontinue any service with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, images, and software, is the property of LP Graphics or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. User Conduct</h2>
            <p>
              You agree not to use the website for any purpose that is unlawful or prohibited by these Terms. You may not use the website in any manner that could damage, disable, overburden, or impair any LP Graphics server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
            <p>
              LP Graphics shall not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use or the inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which LP Graphics operates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at: 
              <a href="mailto:lp.graphicss@gmail.com" className="text-primary font-bold ml-1">lp.graphicss@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;