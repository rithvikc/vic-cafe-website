import { forwardRef } from 'react';
import { Slot } from '@radix/ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg',
      secondary: 'bg-white text-primary-600 hover:bg-neutral-50 shadow-md hover:shadow-lg border border-primary-200',
      outline: 'border border-white text-white hover:bg-white hover:text-primary-600',
      ghost: 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50',
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-lg',
      md: 'h-11 px-6 text-base rounded-lg',
      lg: 'h-13 px-8 text-lg rounded-xl',
    };

    return (
      <Comp
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };