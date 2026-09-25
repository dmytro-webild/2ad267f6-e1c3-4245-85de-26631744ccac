// Created by add_section_from_catalog (HeroBillboardCarousel).

import React from 'react';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboardCarousel
        primaryButton={{"href":"#contact","text":"Demander un devis"}}
        secondaryButton={{"href":"#contact","text":"Décrire mon besoin"}}
        items={[{"imageSrc":"http://img.b2bpic.net/free-photo/experienced-middle-aged-truck-mechanics-holding-parts-tools-repair-shop-by-truck_342744-1287.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/full-shot-men-wearing-equipment_23-2149345538.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/male-electrician-working-electrical-panel-male-electrician-overalls_169016-67163.jpg"}]}
        tag="Expertise Locale & Réactivité"
        description="Rhône Alpes Services accompagne particuliers, entreprises et collectivités pour l'entretien, la maintenance et la rénovation de vos locaux à Lyon et sa métropole."
        title="Vos espaces, nos solutions professionnelles"
        textAnimation="slide-up"
      />
    </div>
  );
}
