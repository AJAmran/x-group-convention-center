"use client";

import { Navigation } from '@/components/layout/Navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { RefreshCw, XCircle, AlertCircle, Calendar, CreditCard } from 'lucide-react';
import { PAGE_HEADERS } from '@/constant/constants';
import Image from 'next/image';

export default function RefundPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <Image
                    src={PAGE_HEADERS.refund}
                    alt="Refund Policy"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionHeader
                        title="Refund and Return Policy"
                        subtitle="Home > Refund and Return Policy"
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
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                                        <XCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Cancellation Policy</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            As a general rule you shall not be entitled to cancel your order once you have received confirmation of the same. Cancellation of order can be done for Cash on Delivery order if the order is not processed from X-group Chain Restaurant. For online payment cancellation of order is not allowed.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            X-group Chain Restaurant has the right to cancel order in such case full refund will be done from the online apps to the payment method used while placing the order for online payments. However, in the unlikely event of an item on your order being unavailable, we will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund in accordance with our refund policy.
                                        </p>
                                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                            <p className="text-sm font-bold text-gray-700 mb-3">We reserve the sole right to cancel your order in the following circumstance:</p>
                                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                                                <li>In the event of the designated address falls outside the delivery zone offered by us;</li>
                                                <li>Failure to contact you by phone or email at the time of confirming the order booking;</li>
                                                <li>Failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or</li>
                                                <li>Unavailability of all the items ordered by you at the time of booking the order.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-convention/10 flex items-center justify-center text-convention flex-shrink-0">
                                        <RefreshCw size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Refunds Policy</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            You shall be entitled to a refund only if your pre-pay for your order at the time of placing your order on the Platform and only in the event of any of the following circumstances:
                                        </p>
                                        <p className="bg-convention/5 p-4 rounded-lg text-convention font-medium mb-4">
                                            Your order packaging has been tampered or damaged at the time of delivery;
                                        </p>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Our decision on refunds shall be at our sole discretion and shall be final and binding.
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            All refund amounts shall be credited to your account within <span className="font-bold text-gray-900">10 working days</span> in accordance with the terms that may be stipulated by the bank which has issued the credit / debit card.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-silver/10 flex items-center justify-center text-silver flex-shrink-0">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Refund & Return Policy on Cancellation</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Online Food</p>
                                                <p className="font-bold text-gray-900">Within 5 Minutes</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Table Booking</p>
                                                <p className="font-bold text-gray-900">Within 3 Hours</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Party/Event</p>
                                                <p className="font-bold text-gray-900">Within 3 Days</p>
                                            </div>
                                        </div>
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
