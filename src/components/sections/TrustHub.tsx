import React from "react";

import { ShieldCheck, Award, CheckCircle, Utensils } from "lucide-react";
import { CERTIFICATIONS } from "@/constant/constants";
import { SITE_CONFIG } from "@/constant/config";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} />,
  Award: <Award size={32} />,
  CheckCircle: <CheckCircle size={32} />,
  Utensils: <Utensils size={32} />,
};

// Calculate years from startYear → now
const getServiceYears = () => {
  const startYear = SITE_CONFIG.startYear;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export const TrustHub: React.FC = () => {
  const years = getServiceYears();

  return (
    <section className="bg-convention-dark py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Trust & Excellence"
          title="Built on a Legacy of Quality"
          description="Shimanto Convention Center is recognized for its architectural safety and culinary hygiene standards, ensuring your events are both grand and secure."
          theme="light"
          className="mb-16"
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT — Venue Section */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-gold font-serif text-2xl font-bold mb-2">
              Facility Excellence
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              World-class safety standards and architectural certifications
              tailored for large-scale gatherings.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {CERTIFICATIONS.filter((c) => c.type === "venue").map(
                (cert, idx) => (
                  <Card
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 w-full sm:w-auto hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    hoverEffect={true}
                  >
                    <div className="text-blue-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          title={cert.title}
                          width={cert.width || 100}
                          height={cert.height || 100}
                          loading="lazy"
                          className="h-10 w-auto object-contain brightness-110"
                        />
                      ) : (
                        cert.iconName && iconMap[cert.iconName]
                      )}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-sm tracking-tight">
                        {cert.title}
                      </div>
                      <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">{cert.issuer}</div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>

          {/* CENTER — Dynamic Years */}
          <div className="md:w-1/3 flex justify-center py-8 md:py-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-56 h-56 rounded-full border-4 border-gold/30 flex flex-col items-center justify-center bg-gradient-to-br from-convention to-convention-dark text-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
                <span className="text-6xl font-serif font-bold block mb-1">
                  {years}+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-center px-4 font-bold text-gold">
                  Years of <br /> Integrated Service
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Catering Section */}
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-catering-light font-serif text-2xl font-bold mb-2">
              Culinary Mastery
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Certified hygiene protocols and award-winning chefs ensuring every
              meal is safe and spectacular.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {CERTIFICATIONS.filter((c) => c.type === "catering").map(
                (cert, idx) => (
                  <Card
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 w-full sm:w-auto flex-row-reverse text-right hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    hoverEffect={true}
                  >
                    <div className="text-red-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          title={cert.title}
                          width={cert.width || 100}
                          height={cert.height || 100}
                          loading="lazy"
                          className="h-10 w-auto object-contain brightness-110"
                        />
                      ) : (
                        cert.iconName && iconMap[cert.iconName]
                      )}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-tight">
                        {cert.title}
                      </div>
                      <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">{cert.issuer}</div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
