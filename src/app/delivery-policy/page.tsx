"use client";

import { Navigation } from '@/components/layout/Navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Truck, MapPin, Clock, Info, ShieldCheck } from 'lucide-react';

export default function DeliveryPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://shimanto.x-grouprestaurant.com/uploads/06121823e79e0a2001601361a6c4b887.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionHeader
                        title="Delivery Policy"
                        subtitle="Home > Delivery Policy"
                        theme="light"
                        className="mb-0"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-8">

                        <Card className="p-8 md:p-12 border-none shadow-sm" animate={true}>
                            <div className="space-y-12">

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                                        <Info size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">1. General Information</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            All food orders are subject to availability. If an item is not in stock at the time you place your order, we will notify you and refund you the total amount of your order, using the original method of payment.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">2. Delivery Location</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Food items offered on our website are only available for delivery of covering Dhaka city only.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">3. Delivery Time</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            An estimated delivery time will be provided to you once your order is placed. Delivery times are to be used as a guide only and are subject to the acceptance and approval of your order.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Unless there are exceptional circumstances, we make every effort to fulfill and deliver your order within 35 to 60 minutes of your order.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed italic">
                                            Delivery may vary due to delivery location, traffic, strike and weather condition.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">4. Delivery Instructions</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            (You can provide special delivery instructions on our online apps)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                                        <Truck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">5. Delivery Costs</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We provide free home delivery within our restaurant location of 5 kilometer. Additional delivery charges may apply to remote areas or more than 5 kilometers of distance.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Card>

                    </div>
                </div>
            </section>
        </div>
    );
}
