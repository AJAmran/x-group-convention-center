import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, CheckCircle, Utensils } from "lucide-react";
import { CERTIFICATIONS, TRUST_HUB_CONTENT } from "@/constant/constants";
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
          subtitle={TRUST_HUB_CONTENT.subtitle}
          title={TRUST_HUB_CONTENT.title}
          description={TRUST_HUB_CONTENT.description}
          theme="light"
          className="mb-16"
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT — Venue Section */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-silver font-serif text-2xl font-bold mb-2">
              {TRUST_HUB_CONTENT.facility.title}
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              {TRUST_HUB_CONTENT.facility.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {CERTIFICATIONS.filter((c) => c.type === "venue").map(
                (cert, idx) => (
                  <Card
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 w-full sm:w-auto hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    hoverEffect={true}
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {cert.image ? (
                        <div className="bg-white p-1 rounded-lg shadow-inner">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            title={cert.title}
                            width={cert.width || 100}
                            height={cert.height || 100}
                            className="h-10 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        cert.iconName && <div className="text-blue-300">{iconMap[cert.iconName]}</div>
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
              <div className="absolute -inset-4 bg-silver/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-56 h-56 rounded-full border-4 border-silver/30 flex flex-col items-center justify-center bg-gradient-to-br from-convention to-convention-dark text-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
                <span className="text-6xl font-serif font-bold block mb-1">
                  {years}+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-center px-4 font-bold text-silver">
                  Years of <br /> Integrated Service
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Catering Section */}
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-catering-light font-serif text-2xl font-bold mb-2">
              {TRUST_HUB_CONTENT.culinary.title}
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {TRUST_HUB_CONTENT.culinary.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {CERTIFICATIONS.filter((c) => c.type === "catering").map(
                (cert, idx) => (
                  <Card
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center gap-4 w-full sm:w-auto flex-row-reverse text-right hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    hoverEffect={true}
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {cert.image ? (
                        <div className="bg-white p-1 rounded-lg shadow-inner">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            title={cert.title}
                            width={cert.width || 100}
                            height={cert.height || 100}
                            className="h-10 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        cert.iconName && <div className="text-red-300">{iconMap[cert.iconName]}</div>
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
