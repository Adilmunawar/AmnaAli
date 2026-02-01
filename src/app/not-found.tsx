'use client';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-12 bg-slate-950/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
            <h1 className="text-6xl font-black text-white mb-4">404</h1>
            <p className="text-xl text-slate-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link href="/" className="inline-block px-7 py-3 bg-accent rounded-xl text-white font-bold text-base shadow-lg border border-transparent transition-all duration-300 hover:scale-105 hover:shadow-accent/20">
                Return to Home
            </Link>
        </div>
    </main>
  );
};

export default NotFound;
