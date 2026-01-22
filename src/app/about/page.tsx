"use client";

import React from "react";
import Image from "next/image";
import { Navigation } from "@/components/layout/Navigation";
import { History, Shield, Users, Utensils, Heart, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/constant/config";
import { ChefShowcase } from "@/components/sections/ChefShowcase";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { PAGE_HEADERS } from "@/constant/constants";
import Link from "next/link";

const VALUES = [
    {
        icon: Users,
        title: "Guest-Centric",
        desc: "Every detail is tailored to your unique vision, ensuring a personalized experience for every guest."
    },
    {
        icon: Utensils,
        title: "Culinary Excellence",
        desc: "Our kitchens are led by world-class chefs who blend tradition with modern gourmet standards."
    },
    {
        icon: Shield,
        title: "Safety First",
        desc: "Certified hygiene protocols and secure environments provide peace of mind for your celebrations."
    },
    {
        icon: Heart,
        title: "Passionate Service",
        desc: "Our team is dedicated to hospitality that feels like home, yet operates with professional precision."
    }
];

export default function AboutPage() {
    const yearsOfExperience =
        new Date().getFullYear() - SITE_CONFIG.startYear;

    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Premium Hero Section */}
            <section className="relative pt-48 pb-36 bg-gray-950 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={PAGE_HEADERS.about}
                        alt={`${SITE_CONFIG.name} Grand Hall`}
                        fill
                        priority
                        className="object-cover opacity-60"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/90" />
                </div>

                <div className="relative z-10 container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-silver/20 backdrop-blur-md border border-silver/30 px-4 py-2 rounded-full mb-8">
                                <History size={16} className="text-silver" />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-silver">
                                    A Legacy of Excellence Since {SITE_CONFIG.startYear}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8">
                                Crafting Your <br />
                                <span className="text-silver italic">Masterpiece</span> Events
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light mb-12">
                                At {SITE_CONFIG.shortName}, we don't just host events; we curate unforgettable experiences where heritage meets modern luxury in the heart of Dhaka.
                            </p>

                            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-400">
                                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                    <CheckCircle2 size={16} className="text-silver" /> Global Standards
                                </span>
                                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                    <CheckCircle2 size={16} className="text-silver" /> Authentic Flavors
                                </span>
                                <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                    <CheckCircle2 size={16} className="text-silver" /> Elite Hospitality
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute right-0 bottom-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20 hidden lg:block">
                    <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] border-[40px] border-silver rounded-full blur-[100px]"></div>
                </div>
            </section>

            {/* Our Story & Mission - Split Layout */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Image Composition */}
                        <div className="relative">
                            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] z-10">
                                <Image
                                    src={SITE_CONFIG.venuImageUrl}
                                    alt={`${SITE_CONFIG.name} Venue`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <SectionHeader
                                subtitle="Our Journey"
                                title="Where Tradition Meets Excellence"
                                alignment="left"
                                theme="convention"
                                className="mb-8"
                            />

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
                                <p>{SITE_CONFIG.about.mission}</p>
                                <p>{SITE_CONFIG.about.description}</p>
                                <p>{SITE_CONFIG.about.recentAddition}</p>
                            </div>

                            <Card className="p-8 bg-gray-50 border border-gray-100" hoverEffect={false} animate={false}>
                                <div className="text-center sm:text-left">
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Trade Certification</div>
                                    <div className="font-bold text-gray-900 font-serif">{SITE_CONFIG.tradeLicense}</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Grid */}
            <section className="py-24 bg-gray-950 text-white relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <SectionHeader
                        subtitle="Core Values"
                        title="The Pillars of Shimanto"
                        alignment="center"
                        theme="light"
                        className="mb-20"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((value, idx) => (
                            <Card
                                key={idx}
                                animate={false}
                                className="p-10 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 bg-silver/10 rounded-2xl flex items-center justify-center text-silver mb-10 group-hover:scale-110 group-hover:bg-silver group-hover:text-black transition-all duration-500">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif text-white">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {value.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chef Showcase with better transition */}
            <ChefShowcase bgVariant="gray" />

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-convention-dark rounded-[3rem] p-12 lg:px-20 lg:py-24 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute top-0 left-0 w-64 h-64 bg-silver/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-convention/30 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <SectionHeader
                                subtitle="Next Steps"
                                title="Ready to Plan Your Journey?"
                                theme="light"
                                className="mb-10"
                            />
                            <p className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto">
                                From intimate social gatherings to grand corporate showcases, we are here to bring your vision to life.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/reservation" className="bg-convention text-white px-10 py-4 rounded-full font-bold hover:bg-convention-light transition-all shadow-xl hover:scale-105 active:scale-95">
                                    Book a Consultation
                                </Link>
                                <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-convention transition-all hover:scale-105 active:scale-95">
                                    Visit Our Venue
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
