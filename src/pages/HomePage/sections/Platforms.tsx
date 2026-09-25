import React from 'react';
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PlatformsSection(): React.JSX.Element {
  const platforms = [
    {
      name: "Facebook",
      description: "Suivez nos actualités et nos interventions récentes sur Facebook.",
      url: "https://www.facebook.com/share/1HUfTa4MeK/?mibextid=wwXIfr",
      bgClass: "border-blue-500/20 hover:border-blue-500/50"
    },
    {
      name: "Instagram",
      description: "Découvrez nos photos de chantiers, réalisations et coulisses sur Instagram.",
      url: "https://www.instagram.com/rhones.alpe.services?stkn=MTJ3MG1mYnBmdnR4NA%3D%3D&utm_source=qr",
      bgClass: "border-pink-500/20 hover:border-pink-500/50"
    },
    {
      name: "TikTok",
      description: "Regardez nos vidéos courtes de conseils et d'interventions sur TikTok.",
      url: "https://www.tiktok.com/@rhonealpesservices?_r=1&_t=ZS-9A28oOCFCTN",
      bgClass: "border-neutral-500/20 hover:border-neutral-500/50"
    }
  ];

  return (
    <div data-webild-section="platforms" data-section="platforms" id="plateformes">
      <section className="py-20 bg-background text-foreground">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="fade-blur">
            <div className="text-center mb-12">
              <div className="px-3 py-1 mb-3 text-sm card rounded w-fit mx-auto text-accent">
                Plateformes & Réseaux
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Retrouvez Rhône Alpes Services sur nos plateformes
              </h2>
              <p className="text-accent mt-3 max-w-2xl mx-auto">
                Suivez nos projets, vidéos et conseils sur l'ensemble de nos réseaux sociaux officiels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 block group ${p.bgClass}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-foreground group-hover:text-primary-cta transition-colors">
                      {p.name}
                    </span>
                    <ExternalLink className="w-5 h-5 text-accent group-hover:text-foreground transition-colors" />
                  </div>
                  <p className="text-accent text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold text-primary-cta group-hover:underline">
                    Visiter notre page {p.name} →
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
