import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingAction from '../ui/FloatingAction';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingAction />
    </div>
  );
}
