// Created by add_section_from_catalog (HeroBillboard).

import React from 'react';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboard
        title="Vos espaces, nos solutions professionnelles"
        primaryButton={{"href":"#contact","text":"Demander un devis"}}
        secondaryButton={{"href":"#contact","text":"Décrire mon besoin"}}
        textAnimation="slide-up"
        description="Rhône Alpes Services accompagne particuliers, entreprises et collectivités pour l'entretien, la maintenance et la rénovation de vos locaux. Une équipe réactive, qualifiée et fiable à Lyon et sa métropole."
        imageSrc="http://img.b2bpic.net/free-photo/experienced-middle-aged-truck-mechanics-holding-parts-tools-repair-shop-by-truck_342744-1287.jpg"
        tag="Expertise Locale & Réactivité"
      />
    </div>
  );
}
