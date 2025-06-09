import Image from 'next/image';
import { Heart, Award, Users, Coffee } from 'lucide-react';
import { Container } from './Container';

export function About() {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'Every bean is carefully selected and roasted to perfection right here in Cremorne.',
    },
    {
      icon: Heart,
      title: 'Community Love',
      description: 'We believe great coffee brings people together and strengthens our local community.',
    },
    {
      icon: Award,
      title: 'Local Excellence',
      description: 'Proud to be Cremorne\'s go-to destination for exceptional coffee and food.',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Every customer is treated like family, with personalized attention and care.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50">
      <Container>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              The Story Behind 
              <span className="font-serif text-primary-500 block">Vic's Cafe</span>
            </h2>
            
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-neutral-900">Vic's Cafe is Cremorne's go-to for coffee and more.</strong> 
                Located in the heart of Melbourne, we've become the neighborhood's beloved gathering place 
                where exceptional coffee meets genuine community spirit.
              </p>
              
              <p>
                What sets us apart? <strong className="text-primary-600">We use the highest quality beans 
                roasted right here in Cremorne, Victoria.</strong> This commitment to local sourcing and 
                fresh roasting means every cup tells the story of our community's dedication to excellence.
              </p>
              
              <p>
                From our early morning regulars grabbing their daily dose of caffeine to afternoon 
                meetings over artisan pastries, we've created a space that feels like an extension 
                of home for locals and a warm welcome for visitors discovering Melbourne's famous 
                coffee culture.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-1">5+</div>
                <div className="text-sm text-neutral-600">Years Serving</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-1">100%</div>
                <div className="text-sm text-neutral-600">Fresh Roasted</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://zocimhzmzbhuwhvvripi.supabase.co/storage/v1/object/public/onboarding-files/photos/1749462668192-qko7lbi88x.jpg"
                  alt="Inside Vic's Cafe - cozy atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-neutral-900">
                    Now Open
                  </span>
                </div>
                <p className="text-sm text-neutral-600">
                  Serving Melbourne's best coffee since day one
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Our Values
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to quality, community, 
              and creating the perfect coffee experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                  <value.icon size={20} />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}