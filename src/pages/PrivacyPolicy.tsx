"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Privacy Policy" />
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              At LP Graphics, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our service.</li>
              <li>To notify you about changes to our service.</li>
              <li>To provide customer support.</li>
              <li>To gather analysis or valuable information so that we can improve our service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Third-Party Services</h2>
            <p>
              Our website uses third-party services such as Supabase for database management and Behance for portfolio display. These third parties have their own privacy policies, and we encourage you to read them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: 
              <a href="mailto:lp.graphicss@gmail.com" className="text-primary font-bold ml-1">lp.graphicss@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;