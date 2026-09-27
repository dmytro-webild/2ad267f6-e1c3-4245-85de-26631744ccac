import React, { useState } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Calendar, Video, Mail, CheckCircle2 } from "lucide-react";

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

  const CALENDLY_URL = "https://calendly.com";
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
    <div data-webild-section="reservation" data-section="reservation" id="reservation">
      <section className="py-20 bg-background text-foreground">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="fade-blur">
            <div className="max-w-3xl mx-auto card p-8 md:p-12 rounded-lg border border-white/10 shadow-2xl">
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
                  <span className="text-primary-cta font-medium">{NOTIFICATION_EMAIL}</span>.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4 card p-6 rounded bg-primary-cta/10 border border-primary-cta/30">
                  <CheckCircle2 className="w-12 h-12 text-primary-cta mx-auto" />
                  <h3 className="text-xl font-bold text-foreground">Demande enregistrée !</h3>
                  <p className="text-accent text-sm">
                    Votre notification a été préparée pour {NOTIFICATION_EMAIL}. Vous pouvez également choisir votre créneau sur Calendly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded primary-button font-medium text-white flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Ouvrir Calendly
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded secondary-button text-foreground text-sm"
                    >
                      Nouvelle réservation
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Prénom</label>
                      <input
                        type="text"
                        required
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-primary-cta"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Nom</label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-primary-cta"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Téléphone</label>
                      <input
                        type="tel"
                        required
                        placeholder="07 81 21 80 85"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-primary-cta"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">E-mail</label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-primary-cta"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Type de service</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-primary-cta"
                    >
                      <option value="Maintenance">Maintenance</option>
                      <option value="Dépannage">Dépannage</option>
                      <option value="Plomberie">Plomberie</option>
                      <option value="Nettoyage">Nettoyage</option>
                      <option value="Entretien">Entretien</option>
                      <option value="Petites réparations">Petites réparations</option>
                      <option value="Interventions diverses">Interventions diverses</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Décrivez brièvement votre besoin..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-background border border-white/15 text-foreground focus:outline-none focus:border-primary-cta resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded primary-button font-medium text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Calendar className="w-5 h-5" />
                    Réserver mon appel sur Calendly
                  </button>
                  <p className="text-xs text-center text-accent mt-2 flex items-center justify-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-primary-cta" />
                    Une notification sera envoyée à rhones.alpe.services@gmail.com
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}