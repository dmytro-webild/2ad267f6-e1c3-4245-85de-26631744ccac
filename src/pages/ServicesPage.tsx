import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesMediaGrid from "@/components/sections/features/FeaturesMediaGrid";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ServicesPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="ApexStudio"
        navItems={navItems}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <HeroSplit
        tag="Premium Services"
        title="Elevate Your Brand With Expert Design & Content"
        description="We craft high-converting visual systems, social media assets, and digital experiences tailored to scale your business."
        primaryButton={{ text: "Explore Services", href: "#services" }}
        secondaryButton={{ text: "View Live Work", href: "#instagram-feed" }}
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />

      <div id="services">
        <AboutFeaturesSplit
          tag="Core Capabilities"
          title="Tailored Creative Solutions Built for Growth"
          description="From visual identity to social media strategy, our end-to-end creative solutions give your brand a decisive advantage."
          items={[
            { icon: "✨", title: "Brand & Identity System", description: "Comprehensive brand guidelines, typography, and visual assets." },
            { icon: "📸", title: "Social Content Production", description: "High-impact short videos, lifestyle imagery, and campaign creative." },
            { icon: "⚡", title: "Digital Campaign Strategy", description: "Data-driven creative direction that converts followers into loyal clients." }
          ]}
          imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
          primaryButton={{ text: "Book Strategy Call", href: "/contact" }}
          textAnimation="slide-up"
        />
      </div>

      <div id="instagram-feed">
        <FeaturesMediaGrid
          tag="Live Instagram Feed"
          title="Real-Time Proof of Work & Daily Highlights"
          description="Stay updated with our latest client launches, behind-the-scenes shoots, and visual proof on @apexstudio."
          items={[
            {
              title: "@apexstudio • 2h ago",
              description: "Fresh rebrand and social strategy launch for TechFlow SaaS 🚀 #BrandDesign",
              imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "@apexstudio • 1d ago",
              description: "Studio shoot for Minimalist Apparel SS25 lookbook 📷 #CreativeDirection",
              imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "@apexstudio • 3d ago",
              description: "High-converting social ad creative suite for Velocity Motors 🏎️",
              imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "@apexstudio • 5d ago",
              description: "Behind the scenes on our latest 3D motion design project ✨",
              imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
            }
          ]}
          primaryButton={{ text: "Follow @apexstudio", href: "https://instagram.com" }}
          textAnimation="slide-up"
        />
      </div>

      <ContactCta
        tag="Ready to Work Together?"
        text="Transform your visual presence with dedicated creative direction."
        primaryButton={{ text: "Start Your Project", href: "/contact" }}
        secondaryButton={{ text: "Contact Team", href: "/contact" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="ApexStudio"
        columns={[
          { title: "Services", items: [{ label: "Branding", href: "#services" }, { label: "Live Feed", href: "#instagram-feed" }] },
          { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }
        ]}
        copyright="© 2025 ApexStudio. All rights reserved."
        links={[{ label: "Privacy Policy", href: "/privacy" }]}
      />
    </div>
  );
}