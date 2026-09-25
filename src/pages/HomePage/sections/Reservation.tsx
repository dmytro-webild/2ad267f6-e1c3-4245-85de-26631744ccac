import React, { useState } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Calendar, Video } from "lucide-react";

export default function ReservationSection(): React.JSX.Element {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: 'Maintenance',
    message: ''
  });

  const ZOOM_BOOKING_URL = "[À AJOUTER]";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ZOOM_BOOKING_URL && ZOOM_BOOKING_URL !== "[À AJOUTER]") {
      window.open(ZOOM_BOOKING_URL, '_blank');
    } else {
      alert("La réservation en ligne sera disponible très prochainement. Veuillez nous contacter directement par téléphone ou email.");
    }
  };

  return (
    <div data-webild-section="reservation" data-section="reservation" id="reservation">
      <section className="py-20 bg-background text-foreground">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="fade-blur">
            <div className="max-w-2xl mx-auto card p-8 md:p-12 rounded-lg border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <div className="px-3 py-1 mb-3 text-sm card rounded w-fit mx-auto text-accent flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary-cta" />
                  Réservation d'appel
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Réservez un appel avec notre consultante
                </h2>
                <p className="text-accent mt-3 text-sm md:text-base">
                  Expliquez-nous votre besoin directement lors d’un échange avec notre consultante.
                </p>
              </div>

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
                  <Video className="w-5 h-5" />
                  Réserver mon appel Zoom
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}