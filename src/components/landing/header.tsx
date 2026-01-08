"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Feather } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      {navigationLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Amna Ali</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navLinks}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button
            asChild
            className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center gap-2 mb-6">
                <Feather className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-semibold">
                  Amna Ali
                </span>
              </Link>
              <nav className="flex flex-col gap-4 text-lg">{navLinks}</nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
