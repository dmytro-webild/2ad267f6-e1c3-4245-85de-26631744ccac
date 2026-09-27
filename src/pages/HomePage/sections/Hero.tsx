// Created by add_section_from_catalog (HeroBillboardCarousel).

import React from 'react';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboardCarousel
        title="Maintenance, dépannage, plomberie et nettoyage à Lyon"
        items={[{"imageSrc":"http://img.b2bpic.net/free-photo/experienced-middle-aged-truck-mechanics-holding-parts-tools-repair-shop-by-truck_342744-1287.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/full-shot-men-wearing-equipment_23-2149345538.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/male-electrician-working-electrical-panel-male-electrician-overalls_169016-67163.jpg"}]}
        tag="📍 Lyon, France"
        description="Des services professionnels pour vos besoins de maintenance, d’entretien, de dépannage et d’intervention à Lyon, France."
        primaryButton={{"text":"Réserver un appel","href":"https://calendly.com/elounyameny/30min"}}
        textAnimation="slide-up"
        secondaryButton={{"href":"#contact","text":"Demander une intervention"}}
      />
    </div>
  );
}
