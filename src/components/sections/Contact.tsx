import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/constant/config';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-convention/10 skew-x-12"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-catering/10 -skew-x-12"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <SectionHeader
                            subtitle="Get In Touch"
                            title="Let's Plan Your Masterpiece"
                            description="Whether it's a grand wedding or a corporate gala, our team of experts is ready to bring your vision to life."
                            alignment="left"
                            theme="light"
                        />

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-convention-light flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    {SITE_CONFIG.contact.phone.map((phone) => (
                                        <p key={phone} className="text-gray-400">{phone}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-catering-light flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email Us</h4>
                                    <p className="text-gray-400">{SITE_CONFIG.contact.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-silver flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Visit Us</h4>
                                    <p className="text-gray-400 whitespace-pre-line">{SITE_CONFIG.contact.address.full.replace(', Dhaka', ',\nDhaka')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pt-4 border-t border-gray-800">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-green-400 flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Business Hour</h4>
                                    <div className="text-gray-400 mt-1 text-sm">
                                        <p className="font-medium text-gray-300">Saturday - Friday round the week</p>
                                        <p>10:00am - 10:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <Card className="p-8 shadow-2xl border-none" animate={true}>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send an Inquiry</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-convention text-gray-900 outline-none" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-convention text-gray-900 outline-none" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-convention text-gray-900 outline-none" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-convention text-gray-900 outline-none" placeholder="Tell us about your event..."></textarea>
                            </div>

                            <Button type="button" variant="convention" fullWidth>
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};