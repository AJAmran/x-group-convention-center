"use client";

import { Navigation } from '@/components/layout/Navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { FileText, ClipboardCheck, AlertTriangle, HelpCircle, UtensilsCrossed, Ban } from 'lucide-react';
import { PAGE_HEADERS } from '@/constant/constants';
import Image from 'next/image';

export default function TermsConditionsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <Image
                    src={PAGE_HEADERS.terms}
                    alt="Terms and Conditions"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionHeader
                        title="Terms & Conditions"
                        subtitle="Home > Terms & Conditions"
                        theme="light"
                        className="mb-0"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">

                        <Card className="p-8 md:p-12 border-none shadow-sm" animate={true}>
                            <div className="space-y-12">

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-convention">
                                        <ClipboardCheck size={28} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Order Policy</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                            <p className="text-xs text-convention font-bold uppercase tracking-wider mb-2">Up to 100 People</p>
                                            <p className="text-gray-700 font-medium">Must be confirmed by 12 noon, the day before the event.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                            <p className="text-xs text-convention font-bold uppercase tracking-wider mb-2">More than 100 People</p>
                                            <p className="text-gray-700 font-medium">Must be confirmed one (01) day in advance of the event.</p>
                                        </div>
                                        <div className="p-6 bg-convention/5 rounded-2xl border border-convention/10 md:col-span-2">
                                            <p className="text-xs text-convention font-bold uppercase tracking-wider mb-2">Large Orders (200+)</p>
                                            <p className="text-gray-700 font-medium">Must be confirmed <span className="text-convention font-bold">two (02) days</span> in advance. (Note: Some menu selections may require additional notice).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-silver/10 border border-silver/20 rounded-xl text-silver font-bold text-sm">
                                        <AlertTriangle size={18} />
                                        <span>Confirmation requires a 50% advance payment.</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-convention">
                                        <Ban size={28} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Order Cancellation</h2>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Any type of event’s order cancellation request must reach us at least <span className="font-bold text-gray-900">72 hours</span> before the scheduled delivery date.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-convention">
                                        <UtensilsCrossed size={28} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Food & Satisfaction</h2>
                                    </div>
                                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                        <p>We cook our food fresh to order with only the finest and freshest ingredients. We take great care and pride in all of the dishes we make. Refunds or replacement food are available upon request for orders where the food item is wrong, omitted, and other similar circumstances.</p>
                                        <p className="font-bold text-gray-900">For any food items that a customer does not like, there are no refunds.</p>
                                        <p>If 25% or more of the food has been consumed or removed we cannot issue any discount, refund, or store credit. If the food has been discarded, repackaged, or tampered with, then we cannot verify its origin or issue and cannot issue any discount, refund, or store credit.</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-10 text-center">
                                    <p className="text-gray-400 italic text-sm mb-6 uppercase tracking-[0.2em]">Agreement Acknowledgement</p>
                                    <div className="inline-block px-10 py-6 bg-gray-900 text-white rounded-2xl shadow-xl">
                                        <p className="font-serif text-lg font-medium">I HAVE READ AND I UNDERSTAND THE ABOVE ORDER. IT MEETS WITH MY APPROVAL. I CONSIDER OUR AGREEMENT DEFINITE AND CONFIRMED.</p>
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
