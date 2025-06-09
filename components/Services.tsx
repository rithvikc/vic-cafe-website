import Image from 'next/image';
import { Coffee, Clock, Award, Users } from 'lucide-react';
import { Container } from './Container';

export function Services() {
  const services = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Expertly crafted espresso drinks using beans roasted daily in Cremorne',
      image: 'https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462667963-zt1sqc3en7e.svg',
    },
    {
      icon: Award,
      title: 'Artisan Food',
      description: 'Fresh, locally-sourced ingredients in every dish, from breakfast to lunch',
      image: 'https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462668192-qko7lbi88x.jpg',
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'A welcoming space where Cremorne locals gather, work, and connect',
      image: 'https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462668192-qko7lbi88x.jpg',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick, efficient service without compromising on quality',
    },
    {
      icon: Award,
      title: 'Local Roasting',
      description: 'Beans roasted fresh daily right here in Cremorne',
    },
    {
      icon: Coffee,
      title: 'Expert Baristas',
      description: 'Skilled coffee artisans who know their craft',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            <span className="font-serif text-primary-500">Melbourne's</span> Best Coffee Experience
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            From single-origin espresso to artisan food, we're your neighborhood cafe 
            dedicated to quality, community, and the perfect cup.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Why Choose Vic's Cafe?
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We're not just another coffee shop. We're Cremorne's community hub, 
              serving exceptional coffee with a commitment to quality and local connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-2xl mb-4">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '1000+', label: 'Happy Customers' },
            { number: '50+', label: 'Coffee Varieties' },
            { number: '5', label: 'Years Serving' },
            { number: '100%', label: 'Local Beans' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}