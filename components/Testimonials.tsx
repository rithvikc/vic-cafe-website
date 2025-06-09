import { Star, Quote } from 'lucide-react';
import { Container } from './Container';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Local Resident',
      content: 'Vic\'s has become my second home! The coffee is absolutely incredible and the atmosphere is so welcoming. You can taste the difference with their locally roasted beans.',
      rating: 5,
      location: 'Cremorne',
    },
    {
      name: 'James Chen',
      role: 'Business Owner',
      content: 'I\'ve had meetings here for years. The staff knows exactly how I like my coffee, and the space is perfect for both casual chats and important business discussions.',
      rating: 5,
      location: 'Richmond',
    },
    {
      name: 'Emma Thompson',
      role: 'Coffee Enthusiast',
      content: 'As someone who takes coffee seriously, Vic\'s is hands down the best in the area. The baristas are true artists and the fresh roasting makes all the difference.',
      rating: 5,
      location: 'South Yarra',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Regular Customer',
      content: 'Not just great coffee, but amazing food too! The breakfast menu is fantastic and the lunch options are creative and delicious. Plus the service is always friendly.',
      rating: 5,
      location: 'Toorak',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-orange-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Our <span className="font-serif text-primary-500">Community</span> Says
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Hear from the locals who make Vic's Cafe 
            their daily destination for exceptional coffee and community.
          </p>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-neutral-900">4.9</span>
            <span className="text-neutral-600">• 200+ Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-semibold text-neutral-900 not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-neutral-600">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary-600 font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Join Our Coffee Community
            </h3>
            <p className="text-neutral-600 mb-6">
              Experience why locals choose Vic's Cafe as their daily coffee destination. 
              Come taste the difference quality makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0470070020"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
              >
                Visit Us Today
              </a>
              <a
                href="https://instagram.com/vicscafe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-500 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Follow Our Story
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}