import React, { useState } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Calendar, Mail, CheckCircle2 } from "lucide-react";

export default function ReservationSection(): React.JSX.Element {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: 'Maintenance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const CALENDLY_URL = "https://calendly.com/elounyameny/30min";
  const NOTIFICATION_EMAIL = "rhones.alpe.services@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct mailto for immediate client notification dispatch
    const subject = encodeURIComponent(`Nouvelle demande de réservation - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Nom: ${formData.firstName} ${formData.lastName}\n` +
      `Téléphone: ${formData.phone}\n` +
      `E-mail: ${formData.email}\n` +
      `Service: ${formData.serviceType}\n` +
      `Message: ${formData.message}`
    );
    
    // Open mailto to send notification email directly to rhones.alpe.services@gmail.com
    window.location.href = `mailto:${NOTIFICATION_EMAIL}?subject=${subject}&body=${body}`;
    
    // Also open Calendly booking link with prefilled query params
    setTimeout(() => {
      window.open(`${CALENDLY_URL}?name=${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}&email=${encodeURIComponent(formData.email)}`, '_blank');
    }, 600);
  };

  return (
    <section data-section="reservation" className="bg-background text-foreground">
  <div className="w-content-width mx-auto">
    <ScrollReveal variant="fade-blur">
      <div className="max-w-content-width mx-auto card p-8 rounded-lg border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="px-3 py-1 mb-3 text-sm card rounded w-fit mx-auto text-accent flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary-cta" />
            Réservation d'appel Calendly
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Réservez un appel avec notre équipe
          </h2>
          <p className="text-accent mt-3 text-sm md:text-base">
            Sélectionnez un créneau Calendly. Une notification sera instantanément envoyée à{" "}
            <span className="text-primary-cta font-medium">rhones.alpe.services@gmail.com</span>.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
            const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
            const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const serviceType = (form.elements.namedItem('serviceType') as HTMLSelectElement).value;
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
            
            const subject = encodeURIComponent(`Nouvelle demande de réservation - ${firstName} ${lastName}`);
            const body = encodeURIComponent(
              `Nom: ${firstName} ${lastName}\n` +
              `Téléphone: ${phone}\n` +
              `E-mail: ${email}\n` +
              `Service: ${serviceType}\n` +
              `Message: ${message}`
            );
            
            window.location.href = `mailto:rhones.alpe.services@gmail.com?subject=${subject}&body=${body}`;
            
            setTimeout(() => {
              window.open(`https://calendly.com/elounyameny/30min?name=${encodeURIComponent(firstName + ' ' + lastName)}&email=${encodeURIComponent(email)}`, '_blank');
            }, 600);
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Prénom *</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-2.5 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-secondary-cta transition-colors"
                placeholder="Jean"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Nom *</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-2.5 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-secondary-cta transition-colors"
                placeholder="Dupont"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Téléphone *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2.5 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-secondary-cta transition-colors"
                placeholder="06 12 34 56 78"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">E-mail *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-secondary-cta transition-colors"
                placeholder="jean.dupont@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Type de service *</label>
            <select
              name="serviceType"
              defaultValue="Maintenance"
              className="w-full px-4 py-2.5 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-secondary-cta transition-colors"
            >
              <option value="Maintenance">Maintenance</option>
              <option value="Petits travaux">Petits travaux</option>
              <option value="Devis de lavage de vitre">Devis de lavage de vitre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Message / Précisions</label>
            <textarea
              name="message"
              rows={3}
              className="w-full px-4 py-2.5 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-secondary-cta transition-colors resize-none"
              placeholder="Précisez votre demande ou vos disponibilités..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded primary-button font-medium text-white shadow-lg hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Valider et choisir mon créneau Calendly
          </button>
        </form>
      </div>
    </ScrollReveal>
  </div>
</section>
  );
}