"use client";

import { Navigation } from '@/components/layout/Navigation';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Shield, Lock, Eye, Database, Globe, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />

            {/* Header */}
            <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://shimanto.x-grouprestaurant.com/uploads/cbbfc52af0557d51883d0c9d2eeaf969.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionHeader
                        title="Privacy Policy"
                        subtitle="Home > Privacy Policy"
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
                            <div className="prose prose-blue max-w-none text-gray-600 space-y-10">

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-convention">
                                        <Shield size={24} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Commitment to Privacy</h2>
                                    </div>
                                    <p className="leading-relaxed">
                                        At X-group chain Restaurant, we are committed to protecting your privacy as an online visitor to our website. We use the information we collect about you to maximize the services that we provide to you. We respect the privacy and confidentiality of the information provided by you. Please read our privacy policy below carefully.
                                    </p>
                                    <p className="leading-relaxed">
                                        You may change your details at any time by advising us in writing via email. All information we receive from our customers is protected by our secure server. X-group chain Restaurant secure server software encrypts all customer information before it is sent to us. Furthermore, all customer data collected is secured against unauthorized use or access. Credit card information is not stored by us on our servers.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-convention">
                                        <Database size={24} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Storage and Security</h2>
                                    </div>
                                    <p className="leading-relaxed">
                                        We receive and store information you enter on our website or give us in any other way from time to time. You may provide basic contact information such as your name, date of birth, phone number, address, and email address to enable us to send information or process your product order and we may also collect additional information at other times, including but not limited to, when you provide feedback, change your content or email preferences, respond to a survey, or communicate with our customer support.
                                    </p>
                                    <p className="leading-relaxed">
                                        We may use personal information collected from you for the purpose of providing you with direct marketing material, updates regarding our website and information in the form of a newsletter. This will only apply if you have registered or subscribed to such publications by registering your details with us.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-convention">
                                        <Lock size={24} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Cookies</h2>
                                    </div>
                                    <p className="leading-relaxed">
                                        A cookie is a small file placed in your web browser that collects information about your web browsing behavior. Use of cookies allows a website to tailor its configuration to your needs and preferences. Cookies do not access information stored on your computer or any personal information. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-convention">
                                        <Eye size={24} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Disclosure of Information</h2>
                                    </div>
                                    <p className="leading-relaxed">
                                        We may from time to time need to disclose certain information, which may include your Personal Data, to comply with a legal requirement, such as a law, regulation, court order, and order, warrant, in the course of a legal proceeding or in response to a law enforcement agency request.
                                    </p>
                                </div>

                                <div className="space-y-4 border-t border-gray-100 pt-10">
                                    <div className="flex items-center gap-3 text-convention">
                                        <UserCheck size={24} />
                                        <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Third Parties</h2>
                                    </div>
                                    <p className="leading-relaxed">
                                        We do not and will not sell or deal in personal or customer information. We will never disclose your personal details to a third party except the necessary information required by providers of products or services you have purchased or to protect the rights, property or safety, our customers or third parties or if required by law.
                                    </p>
                                </div>

                            </div>
                        </Card>

                    </div>
                </div>
            </section>
        </div>
    );
}
