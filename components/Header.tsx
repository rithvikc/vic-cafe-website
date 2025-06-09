'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { SITE_CONFIG } from '@/lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#services' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            aria-label="Vic's Cafe Home"
          >
            <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
              <Image
                src="https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/logos/1749462667075-q45dd6jdvwg.jpeg"
                alt="Vic's Cafe Logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-neutral-900">
                Vic's Cafe
              </h1>
              <p className="text-sm text-neutral-600">
                Cremorne's Best Coffee
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://instagram.com/vicscafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-primary-500 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Button asChild variant="primary" size="sm">
              <Link href="tel:0470070020">
                <Phone size={16} className="mr-2" />
                Call Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-neutral-200 space-y-3">
                <Link
                  href="https://instagram.com/vicscafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-neutral-700 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram size={20} />
                  <span>Follow Us</span>
                </Link>
                <Button asChild variant="primary" size="sm" className="w-full">
                  <Link href="tel:0470070020">
                    <Phone size={16} className="mr-2" />
                    Call 0470070020
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}