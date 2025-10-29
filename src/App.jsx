import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeSnippets from './components/CodeSnippets';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <CodeSnippets />
      <Footer />
    </div>
  );
}
