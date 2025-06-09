import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Star } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462668192-qko7lbi88x.jpg"
          alt="Vic's Cafe Interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-500/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Cremorne's #1 Coffee Destination</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="font-serif text-primary-400">Vic's Cafe</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-normal">
              Cremorne's Go-To for Coffee & More
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            We use the highest quality beans roasted right here in Cremorne, Victoria. 
            Experience Melbourne's finest coffee culture with every perfectly crafted cup.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
            <Button asChild size="lg" variant="primary">
              <Link href="tel:0470070020">
                <Phone size={20} className="mr-2" />
                Call 0470070020
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link href="#about">
                Discover Our Story
              </Link>
            </Button>
          </div>

          {/* Location & Hours */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-neutral-300 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-primary-400" />
              <span>Cremorne, Melbourne</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-neutral-500 rounded-full" />
            <div className="flex items-center space-x-2">
              <span>Open Mon-Fri 6AM-4PM</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}