"use client";

import { useEffect } from 'react';

interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => {
  useEffect(() => {
    document.title = `LP Graphics | ${title}`;
  }, [title]);

  return null;
};

export default SEO;