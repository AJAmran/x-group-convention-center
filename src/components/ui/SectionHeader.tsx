"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    alignment?: 'left' | 'center' | 'right';
    theme?: 'convention' | 'catering' | 'light' | 'dark';
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    description,
    alignment = 'center',
    theme = 'convention',
    className
}) => {
    const alignmentClasses = {
        left: 'text-left ml-0 mr-auto',
        center: 'text-center mx-auto',
        right: 'text-right mr-0 ml-auto',
    };

    const subtitleThemeClasses = {
        convention: 'text-convention',
        catering: 'text-catering',
        light: 'text-white/80',
        dark: 'text-gray-900/60',
    };

    const titleThemeClasses = {
        convention: 'text-gray-900',
        catering: 'text-gray-900',
        light: 'text-white',
        dark: 'text-gray-900',
    };

    return (
        <div className={cn("max-w-3xl mb-16", alignmentClasses[alignment], className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {subtitle && (
                    <span className={cn(
                        "font-bold tracking-widest text-sm uppercase block mb-3",
                        subtitleThemeClasses[theme]
                    )}>
                        {subtitle}
                    </span>
                )}
                <h2 className={cn(
                    "text-4xl md:text-5xl font-serif font-bold mt-2 mb-6",
                    titleThemeClasses[theme]
                )}>
                    {title}
                </h2>
                {description && (
                    <p className={cn(
                        "text-lg leading-relaxed",
                        theme === 'light' ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        {description}
                    </p>
                )}
            </motion.div>
        </div>
    );
};
