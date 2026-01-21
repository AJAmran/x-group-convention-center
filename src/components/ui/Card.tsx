"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    border?: boolean;
    animate?: boolean;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    hoverEffect = true,
    border = true,
    animate = true,
    onClick
}) => {
    const Component = animate ? motion.div : 'div';
    const animationProps = animate ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    } : {};

    return (
        <Component
            {...animationProps}
            onClick={onClick}
            className={cn(
                "bg-white rounded-2xl overflow-hidden transition-all duration-300",
                border && "border border-gray-100",
                hoverEffect && "hover:shadow-2xl hover:translate-y-[-4px]",
                !hoverEffect && "shadow-sm",
                className
            )}
        >
            {children}
        </Component>
    );
};
