"use client";

import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-md border">
        <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page <code className="bg-muted rounded px-1">{location.pathname}</code> does not exist.
        </p>
        <a href="/" className="text-primary hover:underline font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;