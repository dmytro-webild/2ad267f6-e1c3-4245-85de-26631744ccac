import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <div data-webild-section="AboutFeaturesSplit"><AboutFeaturesSplit
        tag="Preuves en images"
        title="Nos interventions sur le terrain en Rhône-Alpes"
        description="Découvrez en images la rigueur et le savoir-faire technique de nos équipes lors de nos récentes interventions de maintenance."
        primaryButton={{"text":"Demander un devis","href":"/contact"}}
        secondaryButton={{"text":"Voir nos chantiers","href":"#chantiers"}}
        items={[{"icon":"Wrench","title":"Maintenance de précision","description":"Entretien préventif et dépannage rapide sur installations industrielles et tertiaires."},{"icon":"Camera","title":"Suivi visuel direct","description":"Partage régulier de photos de chantiers pour une transparence totale avec nos clients."},{"icon":"ShieldCheck","title":"Normes & Sécurité","description":"Respect rigoureux des réglementations et certification de chaque intervention."}]}
        imageSrc="https://img.freepik.com/free-photo/technician-checking-heating-system-equipment_23-2149302636.jpg"
        textAnimation="slide-up"
      /></div>
      <div data-webild-section="FeaturesImageBento"><section aria-label="Features image bento section" className="py-20"><div className="flex flex-col gap-8 md:gap-10"><div className="flex flex-col items-center w-content-width mx-auto gap-2"><div className="px-3 py-1 mb-1 text-sm card rounded w-fit"><p>Nos Interventions</p></div><TextAnimation text="Nos prestations sur le terrain en Rhône-Alpes" variant="slide-up" gradientText={true} tag="h2" className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Découvrez en images nos chantiers récents de maintenance industrielle, tertiaire et résidentielle réalisés dans toute la région." variant="slide-up" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Demander un devis" href="/contact" variant="primary" /><Button text="Voir nos services" href="#services" variant="secondary" animationDelay={0.1} /></div></div><div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-6 gap-3"><ScrollReveal key={0} variant="fade" delay={0} className="col-span-1 group md:col-span-2"><a href="/services#industriel" className="block overflow-hidden rounded"></a></ScrollReveal>
<ScrollReveal key={1} variant="fade" delay={0.1} className="col-span-1 group md:col-span-4"><a href="/services#cvc" className="block overflow-hidden rounded"></a></ScrollReveal>
<ScrollReveal key={2} variant="fade" delay={0} className="col-span-1 group md:col-span-3"><a href="/services#electricite" className="block overflow-hidden rounded"></a></ScrollReveal>
<ScrollReveal key={3} variant="fade" delay={0.1} className="col-span-1 group md:col-span-3"><a href="/services#plomberie" className="block overflow-hidden rounded"></a></ScrollReveal>
<ScrollReveal key={4} variant="fade" delay={0} className="col-span-1 group md:col-span-2"><a href="/services#toitures" className="block overflow-hidden rounded"></a></ScrollReveal>
<ScrollReveal key={5} variant="fade" delay={0.1} className="col-span-1 group md:col-span-2"><a href="/services#nettoyage" className="block overflow-hidden rounded"></a></ScrollReveal>
<ScrollReveal key={6} variant="fade" delay={0.2} className="col-span-1 group md:col-span-2"><a href="/services#diagnostic" className="block overflow-hidden rounded"></a></ScrollReveal></div></div></section></div>
    </>
  );
}
