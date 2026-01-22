"use client";

import React from "react";
import { ClipboardList, Lightbulb, Mic2, ShieldCheck, Car, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { SERVICES } from "@/constant/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList size={28} />,
  Lightbulb: <Lightbulb size={28} />,
  Mic2: <Mic2 size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  Car: <Car size={28} />,
  HeartHandshake: <HeartHandshake size={28} />,
};

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
                {service.iconName && ICON_MAP[service.iconName]}
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
