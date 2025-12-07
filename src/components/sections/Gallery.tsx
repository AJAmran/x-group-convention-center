"use client";

import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/constant/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "event" | "culinary">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.type === filter);

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-convention font-bold tracking-widest text-sm uppercase">
                Our Portfolio
              </span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
                Visual Journey
              </h2>
            </div>

            <div className="flex gap-2 mt-6 md:mt-0">
              {(["all", "event", "culinary"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all capitalize ${filter === f
                      ? "bg-convention text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {f === "all" ? "All" : f === "event" ? "Event Moments" : "Culinary Art"}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative aspect-w-4 aspect-h-3 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur p-3 rounded-full">
                      <ZoomIn className="text-white" size={24} />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-gold font-bold uppercase mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-white font-serif font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
