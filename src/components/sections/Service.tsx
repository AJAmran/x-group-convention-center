"use client";

import React from "react";
import { PenTool, Lightbulb, Music, Shield, Car, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: <PenTool size={28} />,
    title: "Event Planning",
    description:
      "Our certified planners guide you from concept to execution, ensuring every detail is perfect and stress-free.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Decor & Styling",
    description:
      "In-house design team creates immersive themes with premium florals, intelligent lighting, and bespoke furniture.",
  },
  {
    icon: <Music size={28} />,
    title: "Audio Visual",
    description:
      "State-of-the-art sound systems, LED walls, and projection mapping managed by our onsite technical directors.",
  },
  {
    icon: <Shield size={28} />,
    title: "Security & Safety",
    description:
      "Comprehensive security protocols, crowd management, and emergency response teams for peace of mind.",
  },
  {
    icon: <Car size={28} />,
    title: "Valet & Logistics",
    description:
      "Seamless arrival experience with ample parking, VIP drop-off zones, and professional valet services.",
  },
  {
    icon: <Coffee size={28} />,
    title: "Hospitality",
    description:
      "Dedicated concierge, bridal suites, and VIP green rooms ensuring specialized care for your most important guests.",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-convention font-bold tracking-widest text-sm uppercase">
            Comprehensive Solutions
          </span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
            Beyond the Venue
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We provide end-to-end support services to ensure your event runs
            smoothly from the first guest arrival to the final farewell.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
