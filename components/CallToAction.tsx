import Link from 'next/link';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';

export function CallToAction() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-coffee text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for Melbourne's 
              <span className="font-serif text-orange-200 block">Best Coffee Experience?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Visit us today and discover why we're Cremorne's go-to destination 
              for exceptional coffee, delicious food, and genuine community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="tel:0470070020">
                  <Phone size={20} className="mr-2" />
                  Call 0470070020
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline">
                <Link 
                  href="https://instagram.com/vicscafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} className="mr-2" />
                  Follow Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Location */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <MapPin size={24} className="text-orange-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-orange-100">
                Cremorne, Melbourne<br />
                Victoria, Australia
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Clock size={24} className="text-orange-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
              <div className="text-orange-100 space-y-1">
                <p>Mon-Fri: 6AM-4PM</p>
                <p>Sat: 7AM-3PM</p>
                <p>Sun: 8AM-2PM</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Phone size={24} className="text-orange-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <Link 
                href="tel:0470070020"
                className="text-orange-100 hover:text-white transition-colors text-lg font-medium"
              >
                0470070020
              </Link>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              First Time Visitor?
            </h3>
            <p className="text-orange-100 mb-6">
              Mention this website and get 10% off your first order! 
              We love welcoming new faces to our coffee community.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-500 rounded-lg px-4 py-2">
              <span className="font-mono text-sm font-bold">WEBSITE10</span>
              <span className="text-sm">• Valid for first-time customers</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}