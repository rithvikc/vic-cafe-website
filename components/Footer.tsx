import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Instagram, Clock } from 'lucide-react';
import { Container } from './Container';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const openingHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 4:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 2:00 PM' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/logos/1749462667075-q45dd6jdvwg.jpeg"
                    alt="Vic's Cafe Logo"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vic's Cafe</h3>
                  <p className="text-sm text-neutral-400">
                    Cremorne's Go-To Coffee Destination
                  </p>
                </div>
              </Link>
              
              <p className="text-neutral-300 mb-6 max-w-md">
                We use the highest quality beans roasted right here in Cremorne, Victoria. 
                Experience Melbourne's finest coffee culture with every cup.
              </p>

              <div className="flex items-center space-x-4">
                <Link
                  href="https://instagram.com/vicscafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <Link
                  href="tel:0470070020"
                  className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <Phone size={18} className="text-primary-500 group-hover:text-primary-400" />
                  <span>0470070020</span>
                </Link>
                
                <div className="flex items-start space-x-3 text-neutral-300">
                  <MapPin size={18} className="text-primary-500 mt-0.5" />
                  <div>
                    <p>Cremorne, Melbourne</p>
                    <p className="text-sm text-neutral-400">Victoria, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center space-x-2">
                <Clock size={18} className="text-primary-500" />
                <span>Opening Hours</span>
              </h4>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-neutral-300 font-medium">{schedule.day}</p>
                    <p className="text-neutral-400">{schedule.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              <p>© {currentYear} Vic's Cafe. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-neutral-600">|</span>
              <span>
                Made with ❤️ in Melbourne
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}