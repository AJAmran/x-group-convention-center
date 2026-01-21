"use client";

import React, { useState } from "react";
import { PACKAGES } from "@/constant/constants";
import { Calendar, CheckSquare, ChevronDown, Clock, FileText, Mail, Phone, User, ShieldCheck } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '../ui/Button';
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const ReservationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        mealPeriod: "",
        eventDate: "",
        requirements: [] as string[],
        packageMenu: "",
        additionalInfo: "",
        totalGuests: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Requirement checkboxes
    const REQUIREMENTS = [
        { id: "food", label: "Only Food" },
        { id: "cutlery", label: "Cutlery & Crockery" },
        { id: "waiter", label: "Waiter" },
    ];

    const EVENT_TYPES = ["Wedding", "Corporate", "Birthday", "Seminar", "Other"];
    const MEAL_PERIODS = ["Lunch", "Dinner", "All Day", "Breakfast"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (id: string) => {
        setFormData((prev) => {
            const requirements = prev.requirements.includes(id)
                ? prev.requirements.filter((item) => item !== id)
                : [...prev.requirements, id];
            return { ...prev, requirements };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            // Reset form or redirect
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="container mx-auto py-20 px-4 text-center">
                <Card
                    animate={true}
                    hoverEffect={false}
                    className="p-12 border-green-100 max-w-2xl mx-auto"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckSquare className="text-green-600 w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Request Received!</h2>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                        Thank you for submitting your detailed requirements. Our team will review your request and get back to you shortly with a personalized proposal.
                    </p>
                    <Button
                        onClick={() => {
                            setSubmitted(false); setFormData({
                                fullName: "", email: "", phone: "", eventType: "", mealPeriod: "", eventDate: "", requirements: [], packageMenu: "", additionalInfo: "", totalGuests: ""
                            })
                        }}
                        variant="convention"
                        size="lg"
                    >
                        Submit Another Request
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <section className="py-20 bg-neutral-50 flex items-start justify-center relative">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2f528f 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Detailed Reservation"
                    subtitle="Custom Planning"
                    description="Fill out the form below to provide us with the specific details of your event for a tailored proposal."
                    theme="convention"
                />

                <Card className="shadow-2xl overflow-hidden border-none" animate={true} hoverEffect={false}>

                    <form onSubmit={handleSubmit} className="p-6 md:p-8">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* LEFT COLUMN: Inputs (8 cols) */}
                            <div className="lg:col-span-8 space-y-6">

                                {/* Row 1: Personal Details */}
                                <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-serif font-bold text-convention-dark mb-4 flex items-center gap-2">
                                        <User size={18} className="text-convention" /> Personal Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name <span className="text-convention">*</span></label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all placeholder:text-gray-400"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all placeholder:text-gray-400"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone <span className="text-convention">*</span></label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+880 1XXX..."
                                                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all placeholder:text-gray-400"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Event Info */}
                                <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-serif font-bold text-convention-dark mb-4 flex items-center gap-2">
                                        <Calendar size={18} className="text-convention" /> Event Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Event Type <span className="text-convention">*</span></label>
                                            <div className="relative">
                                                <select
                                                    name="eventType"
                                                    required
                                                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all appearance-none text-gray-700"
                                                    value={formData.eventType}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>Select Type</option>
                                                    {EVENT_TYPES.map(type => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute top-3 right-3 text-gray-400 w-4 h-4 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Meal Period <span className="text-convention">*</span></label>
                                            <div className="relative">
                                                <select
                                                    name="mealPeriod"
                                                    required
                                                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all appearance-none text-gray-700"
                                                    value={formData.mealPeriod}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>Select Period</option>
                                                    {MEAL_PERIODS.map(period => (
                                                        <option key={period} value={period}>{period}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute top-3 right-3 text-gray-400 w-4 h-4 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Date <span className="text-convention">*</span></label>
                                            <input
                                                type="date"
                                                name="eventDate"
                                                required
                                                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all text-gray-700 uppercase"
                                                value={formData.eventDate}
                                                onChange={handleInputChange}
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Package</label>
                                            <div className="relative">
                                                <select
                                                    name="packageMenu"
                                                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all appearance-none text-gray-700"
                                                    value={formData.packageMenu}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>Select Package</option>
                                                    {PACKAGES.map(pkg => (
                                                        <option key={pkg.id} value={pkg.id}>{pkg.name} - ৳{pkg.pricePerHead}/head</option>
                                                    ))}
                                                    <option value="custom">Custom / Not Sure</option>
                                                </select>
                                                <ChevronDown className="absolute top-3 right-3 text-gray-400 w-4 h-4 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 group">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Total Guests <span className="text-catering">*</span></label>
                                            <input
                                                type="number"
                                                name="totalGuests"
                                                required
                                                placeholder="Ex: 500"
                                                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all placeholder:text-gray-400"
                                                value={formData.totalGuests}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Additional Info */}
                                <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                                            <FileText size={16} className="text-convention" /> Additional Requirements
                                        </h3>
                                        <span className="text-xs text-gray-500 italic">Quantities for cutlery, etc.</span>
                                    </div>
                                    <textarea
                                        name="additionalInfo"
                                        required
                                        rows={3}
                                        placeholder="Specific menu needs, special requests, or questions..."
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-convention focus:border-convention outline-none text-sm transition-all placeholder:text-gray-400 resize-none"
                                        value={formData.additionalInfo}
                                        onChange={handleInputChange}
                                    />
                                </div>

                            </div>

                            {/* RIGHT COLUMN: Requirements & Submit (4 cols) */}
                            <div className="lg:col-span-4 flex flex-col gap-6">

                                <div className="bg-convention/5 p-5 rounded-xl border border-convention/10 h-full">
                                    <h3 className="text-lg font-serif font-bold text-convention-dark mb-4 flex items-center gap-2">
                                        <CheckSquare size={18} className="text-convention" /> Service Needs
                                    </h3>
                                    <div className="flex flex-col gap-2.5">
                                        {REQUIREMENTS.map((req) => (
                                            <label key={req.id} className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all cursor-pointer select-none ${formData.requirements.includes(req.id)
                                                ? 'bg-white border-convention shadow-sm ring-1 ring-convention/20'
                                                : 'bg-white/50 border-gray-200 hover:border-convention/50'
                                                }`}>
                                                <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${formData.requirements.includes(req.id) ? 'bg-convention border-convention' : 'border-gray-300'
                                                    }`}>
                                                    {formData.requirements.includes(req.id) && <CheckSquare size={10} className="text-white" />}
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={formData.requirements.includes(req.id)}
                                                    onChange={() => handleCheckboxChange(req.id)}
                                                />
                                                <span className={`text-sm font-medium ${formData.requirements.includes(req.id) ? 'text-convention-dark' : 'text-gray-600'}`}>{req.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        fullWidth
                                        className="py-4 bg-gradient-to-r from-convention to-convention-dark text-white font-bold text-lg rounded-xl hover:shadow-xl hover:translate-y-[-2px] hover:shadow-convention/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                    >
                                        {loading ? "Processing..." : (
                                            <>Submit Request <FileText size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </form>
                </Card>
            </div>
        </section>
    );
};
