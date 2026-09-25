import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarqueeTall
      tag="Expertise Locale"
      title="Vos espaces, nos solutions professionnelles"
      description="Rhône Alpes Services accompagne particuliers, entreprises et collectivités pour lentretien, la maintenance et la rénovation de vos locaux. Une équipe réactive, qualifiée et fiable à votre service."
      primaryButton={{
        text: "Nous contacter",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Nos services",
        href: "#services",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/repairmen-working-with-computer_23-2147897970.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-middle-aged-truck-mechanics-holding-parts-tools-repair-shop-by-truck_342744-1287.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plumber-drowning-himself_1368-547.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-wearing-white-uniform-stand-holding-wrench_1150-16596.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/electrician-is-mounting-electric-sockets-white-wall-indoors_169016-17482.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/construction-hammer-indoors-still-life_23-2150563176.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/licensed-serviceman-starting-routine-condenser-maintenance-using-manifold-meters-read-pressure-external-air-conditioner-while-seasoned-wireman-writes-hvac-system-checkup-report-clipboard_482257-68066.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-fixing-car-car-service-station_1303-28164.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/armed-bodyguard-showing-his-baton-used-own-safety-against-blue-background_482257-121242.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-wearing-white-uniform-stand-holding-wrench_1150-16607.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plumber-man_1368-541.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-mechanic-looking-aside-with-hands-waist-uniform-looking-pensive-front-view_176474-21682.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Une expertise de confiance en Rhône-Alpes"
      descriptions={[
        "Forts de notre ancrage local, nous intervenons avec une rigueur absolue pour garantir la pérennité et la valorisation de vos espaces immobiliers.",
        "Qu'il s'agisse de maintenance technique, de rénovation complète ou d'entretien ponctuel, nos équipes qualifiées s'adaptent à vos besoins spécifiques avec discrétion et efficacité.",
        "Notre engagement repose sur une communication transparente, des délais respectés et un savoir-faire reconnu par nos partenaires locaux.",
      ]}
      primaryButton={{
        text: "En savoir plus",
        href: "#services",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="Services"
      title="Nos domaines d'intervention"
      description="Une gamme complète de prestations pour répondre à vos exigences de maintenance et de rénovation."
      items={[
        {
          title: "Maintenance Technique",
          description: "Diagnostic et entretien préventif complet de vos installations.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-men-wearing-equipment_23-2149345538.jpg",
        },
        {
          title: "Rénovation Intérieure",
          description: "Craftsmanship de haute qualité pour vos projets de transformation.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-working-electrical-panel-male-electrician-overalls_169016-67163.jpg",
        },
        {
          title: "Entretien de Locaux",
          description: "Nettoyage quotidien ou périodique pour entreprises et commerces.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40342.jpg",
        },
        {
          title: "Services de Proximité",
          description: "Une équipe réactive pour vos besoins de réparation rapide.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-space-car-park-interior-night_1127-2306.jpg",
        },
        {
          title: "Rénovation Façades",
          description: "Valorisez l'extérieur de votre bâtiment avec nos solutions.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431465.jpg",
        },
        {
          title: "Interventions d'Urgence",
          description: "Réponse rapide pour assurer la continuité de vos activités.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-builder-uniform-holding-black-bank-card-yellow-background_140725-112415.jpg",
        },
        {
          title: "Projets Sur-Mesure",
          description: "Solutions personnalisées selon vos objectifs de valorisation.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-auto-repairman-looking-camera-while-his-customers-are-standing-background_637285-7790.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Pourquoi nous choisir"
      title="Des indicateurs de réussite"
      description="La satisfaction client est au cœur de notre démarche quotidienne."
      metrics={[
        {
          value: "98%",
          title: "Satisfaction client",
          features: [
            "Transparence totale",
            "Suivi rigoureux",
            "Équipes dédiées",
          ],
        },
        {
          value: "12h",
          title: "Temps de réponse",
          features: [
            "Réactivité maximale",
            "Interventions express",
            "Disponibilité",
          ],
        },
        {
          value: "200+",
          title: "Projets réalisés",
          features: [
            "Expertise confirmée",
            "Références solides",
            "Savoir-faire",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Témoignages"
      title="La confiance de nos partenaires"
      description="Découvrez les retours de nos clients satisfaits par notre accompagnement."
      testimonials={[
        {
          name: "Marc Dubois",
          role: "Gestionnaire Immobilier",
          quote: "Un service irréprochable et des équipes toujours très réactives pour les urgences sur nos sites.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-female-real-estate-agent-standing-house-entrance-smiling-woman-with-short-graying-hair-pink-suit-getting-ready-meet-customers-real-estate-business-work-concept_74855-22183.jpg",
        },
        {
          name: "Sophie Martin",
          role: "Propriétaire",
          quote: "La rénovation de notre appartement a été gérée avec professionnalisme et un souci du détail exemplaire.",
          imageSrc: "http://img.b2bpic.net/free-photo/men-working-together-medium-shot_52683-101624.jpg",
        },
        {
          name: "Alexandre Petit",
          role: "Directeur d'Hôtel",
          quote: "Rhône Alpes Services est devenu notre partenaire de confiance pour tout l'entretien de notre établissement.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-chef-wearing-uniform-posing-with-his-arms-crossed-looking-away-restaurant-kitchen_613910-18965.jpg",
        },
        {
          name: "Julie Laurent",
          role: "Gérante de Magasin",
          quote: "Enfin une équipe qui comprend nos contraintes professionnelles et intervient avec un minimum de gêne.",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-holding-plan_23-2147704439.jpg",
        },
        {
          name: "Thomas Bernard",
          role: "Syndic d'Immeuble",
          quote: "Une transparence totale dans les devis et des travaux toujours réalisés selon les normes et les délais annoncés.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-moving-new-home-together-african-american-couple-with-cardboard-boxes_1157-40328.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Questions fréquentes"
      title="Besoin d'informations ?"
      description="Voici les réponses aux questions les plus courantes sur nos services de maintenance."
      items={[
        {
          question: "Quels types de bâtiments entretenez-vous ?",
          answer: "Nous intervenons dans les résidences privées, les locaux commerciaux, les bureaux, les écoles et les hôtels de la région.",
        },
        {
          question: "Comment demander un devis gratuit ?",
          answer: "Il vous suffit de nous contacter via le formulaire dédié ou par téléphone. Nous établissons un diagnostic sous 48h.",
        },
        {
          question: "Proposez-vous des contrats de maintenance ?",
          answer: "Oui, nous mettons en place des contrats sur-mesure pour un entretien régulier et serein de vos installations.",
        },
        {
          question: "Intervenez-vous en urgence ?",
          answer: "Nous disposons d'une équipe dédiée aux interventions rapides pour résoudre les problèmes critiques rapidement.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-man-working-together-blueprint-office_23-2148203996.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="trust" data-section="trust">
    <SectionErrorBoundary name="trust">
          <SocialProofMarquee
      tag="Nos partenaires"
      title="Ils nous font confiance"
      description="Nous accompagnons des acteurs de référence dans tout le secteur Rhône-Alpes."
      names={[
        "Immo Lyon",
        "Entreprise Services",
        "Rénov'Habit",
        "Gestion Immo",
        "Commerces Rhône",
        "Bâtir Ensemble",
        "Services Pro",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact"
      text="Prêt à valoriser vos espaces ? Contactez nos experts dès maintenant pour une étude personnalisée."
      primaryButton={{
        text: "Demander un devis",
        href: "#",
      }}
      secondaryButton={{
        text: "Appeler le 04 00 00 00 00",
        href: "tel:0400000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
