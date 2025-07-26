import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}