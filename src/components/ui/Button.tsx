import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'convention';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

        const variants = {
            primary: 'bg-convention text-white hover:bg-convention-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5',
            secondary: 'bg-white text-convention border-2 border-convention hover:bg-convention hover:text-white',
            convention: 'bg-convention text-white hover:bg-convention-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5',
            outline: 'bg-transparent border-2 border-current hover:bg-white/10',
            ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
