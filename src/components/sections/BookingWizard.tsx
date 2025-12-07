"use client";

import React, { useState } from "react";
import { Calendar, Users, Check, Loader2 } from "lucide-react";
import { VENUES, PACKAGES } from "@/constant/constants";

export const BookingWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    guests: 100,
    eventType: "Wedding",
    venueId: "",
    packageId: "",
  });
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setLoading(false);
    }, 600);
  };

  const selectedVenue = VENUES.find((v) => v.id === formData.venueId);
  const selectedPackage = PACKAGES.find((p) => p.id === formData.packageId);

  const calculateTotal = () => {
    const pkgPrice = selectedPackage
      ? selectedPackage.pricePerHead * formData.guests
      : 0;
    // Mock venue price base
    const venuePrice = selectedVenue ? 2000 : 0;
    return pkgPrice + venuePrice;
  };

  return (
    <div id="booking" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-convention-dark">
            Plan Your Experience
          </h2>
          <p className="text-gray-500 mt-2">
            Get an instant estimate for your event
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s
                    ? "bg-convention text-white"
                    : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {step > s ? <Check size={16} /> : s}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:block ${step >= s ? "text-convention" : "text-gray-400"
                    }`}
                >
                  {s === 1 ? "Details" : s === 2 ? "Selection" : "Review"}
                </span>
              </div>
            ))}
          </div>

          <div className="p-8">
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Event Date
                    </label>
                    <div className="relative">
                      <Calendar
                        className="absolute top-3 left-3 text-gray-400"
                        size={18}
                      />
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-convention focus:border-transparent outline-none"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Guest Count
                    </label>
                    <div className="relative">
                      <Users
                        className="absolute top-3 left-3 text-gray-400"
                        size={18}
                      />
                      <input
                        type="number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-convention focus:border-transparent outline-none"
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guests: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Event Type
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {["Wedding", "Corporate", "Gala", "Private Party"].map(
                      (type) => (
                        <button
                          key={type}
                          onClick={() =>
                            setFormData({ ...formData, eventType: type })
                          }
                          className={`px-4 py-2 rounded-full text-sm border ${formData.eventType === type
                            ? "bg-convention text-white border-convention"
                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full bg-convention text-white py-4 rounded-lg font-bold hover:bg-convention-dark transition shadow-lg flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Check Availability"
                  )}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">
                    Select Venue
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {VENUES.map((v) => (
                      <div
                        key={v.id}
                        onClick={() =>
                          setFormData({ ...formData, venueId: v.id })
                        }
                        className={`border-2 rounded-xl p-3 cursor-pointer transition-all ${formData.venueId === v.id
                          ? "border-convention bg-blue-50"
                          : "border-gray-100 hover:border-gray-300"
                          }`}
                      >
                        <img
                          src={v.image}
                          className="w-full h-24 object-cover rounded-md mb-2"
                          alt={v.name}
                        />
                        <p className="font-bold text-sm text-gray-900 leading-tight">
                          {v.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Cap: {v.capacity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">
                    Select Catering Package
                  </h3>
                  <div className="space-y-3">
                    {PACKAGES.map((p) => (
                      <div
                        key={p.id}
                        onClick={() =>
                          setFormData({ ...formData, packageId: p.id })
                        }
                        className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition-all ${formData.packageId === p.id
                          ? "border-catering bg-red-50"
                          : "border-gray-200 hover:bg-gray-50"
                          }`}
                      >
                        <div>
                          <p className="font-bold text-gray-900">{p.name}</p>
                          <p className="text-xs text-gray-500">
                            {p.style} Service
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="block font-bold text-catering">
                            ${p.pricePerHead}
                          </span>
                          <span className="text-xs text-gray-400">
                            per person
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 border border-gray-300 py-3 rounded-lg font-medium text-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!formData.venueId || !formData.packageId}
                    className="w-2/3 bg-convention text-white py-3 rounded-lg font-bold hover:bg-convention-dark transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Calculate Estimate"
                    )}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  Ready to Book?
                </h3>
                <p className="text-gray-500 mb-8">
                  Here is the estimated summary for your {formData.eventType}.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Venue:</span>
                    <span className="font-medium">{selectedVenue?.name}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Menu:</span>
                    <span className="font-medium">{selectedPackage?.name}</span>
                  </div>
                  <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-gray-900">
                      Total Estimate
                    </span>
                    <span className="font-bold text-2xl text-convention">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <button className="w-full bg-gold text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition shadow-lg">
                    Confirm Booking
                  </button>
                  <button
                    onClick={() => {
                      window.dispatchEvent(new Event("open-ai-chat"));
                    }}
                    className="w-full border-2 border-convention text-convention py-3 rounded-lg font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                  >
                    <span>Discuss with Chef</span>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  *Prices are estimates. Final quote provided after consultation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
