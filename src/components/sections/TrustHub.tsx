import React from "react";

import { ShieldCheck, Award, CheckCircle, Utensils } from "lucide-react";
import { CERTIFICATIONS } from "@/constant/constants";
import { SITE_CONFIG } from "@/constant/config";

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
    <section className="bg-convention-dark py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg flex items-center gap-3 w-full sm:w-auto"
                  >
                    <div className="text-blue-300">
                      {iconMap[cert.iconName]}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        {cert.title}
                      </div>
                      <div className="text-gray-400 text-xs">{cert.issuer}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CENTER — Dynamic Years */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-gold/50 flex flex-col items-center justify-center bg-gradient-to-br from-convention to-catering text-white shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <span className="text-5xl font-serif font-bold block mb-1">
                {years}+
              </span>
              <span className="text-xs uppercase tracking-widest text-center px-4">
                Years of <br /> Integrated Service
              </span>
            </div>
          </div>

          {/* RIGHT — Catering Section */}
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-secondary font-serif text-2xl font-bold mb-2 text-catering-light">
              Culinary Mastery
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Certified hygiene protocols and award-winning chefs ensuring every
              meal is safe and spectacular.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {CERTIFICATIONS.filter((c) => c.type === "catering").map(
                (cert, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-lg flex items-center gap-3 w-full sm:w-auto flex-row-reverse text-right"
                  >
                    <div className="text-red-300">{iconMap[cert.iconName]}</div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        {cert.title}
                      </div>
                      <div className="text-gray-400 text-xs">{cert.issuer}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
