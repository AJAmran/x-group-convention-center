"use client";

import React from "react";
import { ClipboardList, Lightbulb, Mic2, ShieldCheck, Car, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

const SERVICES = [
  {
    icon: <ClipboardList size={28} />,
    title: "Event Coordination",
    description:
      "Our experienced team assists with scheduling, hall setup, and on-site coordination to keep your event organized and stress-free.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Decor & Setup",
    description:
      "We support elegant stage arrangements, seating layouts, and tasteful décor options tailored to the nature of your event.",
  },
  {
    icon: <Mic2 size={28} />,
    title: "Sound & Presentation",
    description:
      "Reliable sound systems and basic presentation support are available to ensure clear communication throughout your program.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Safety & Management",
    description:
      "Trained staff help maintain order, manage guest flow, and support a safe, comfortable environment for all attendees.",
  },
  {
    icon: <Car size={28} />,
    title: "Parking & Access",
    description:
      "Convenient parking facilities and easy access within Shimanto Square ensure a smooth arrival and departure experience.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Guest Services",
    description:
      "Dedicated support for hosts and special guests, with attentive service focused on comfort and hospitality.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Beyond the Hall"
          title="End-to-End Event Support"
          description="We provide essential services and on-site support to help your event flow effortlessly, from arrival to closing."
          theme="convention"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              animate={true}
              className="p-8 border-none shadow-sm hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-convention/10 rounded-full flex items-center justify-center text-convention mb-6 group-hover:bg-convention group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
