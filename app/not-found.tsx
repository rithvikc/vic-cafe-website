import Link from 'next/link';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-neutral-600 mb-8">
            Oops! Looks like this page went out for coffee and never came back. 
            Let's get you back to where the good stuff is brewing.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
          
          <div className="text-sm text-neutral-500">
            <p>Or call us at <strong>0470070020</strong></p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
          <h3 className="font-semibold text-neutral-900 mb-2">
            While you're here...
          </h3>
          <p className="text-sm text-neutral-600">
            Did you know we roast our beans fresh daily right here in Cremorne? 
            Come visit us for Melbourne's best coffee experience!
          </p>
        </div>
      </div>
    </Container>
  );
}