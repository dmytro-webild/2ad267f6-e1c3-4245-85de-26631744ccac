import { routes } from "@/routes";
import { Facebook, Instagram, Share2 } from "lucide-react";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitFormParallax from "@/components/sections/contact/ContactSplitFormParallax";
import ContactBar from "@/components/sections/contact/ContactBar";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Rhône Alpes Services"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Contact Us", href: "/contact" }}
      />

      <main>
        <ContactSplitFormParallax
          tag="Get In Touch"
          title="Contact Rhône Alpes Services"
          description="Send us a message or reach out via our social channels. We respond quickly to all inquiries."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{ name: "message", placeholder: "How can we help you?", rows: 4, required: true }}
          buttonText="Send Message"
          ctaLinks={[
            { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1HUfTa4MeK/?mibextid=wwXIfr" },
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rhones.alpe.services?stkn=MTJ3MG1mYnBmdnR4NA%3D%3D&utm_source=qr" },
            { icon: Share2, label: "TikTok", href: "https://www.tiktok.com/@rhonealpesservices?_r=1&_t=ZS-9A28oOCFCTN" }
          ]}
          imageSrc="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />

        <ContactBar
          tag="Social Media"
          title="Connect With Rhône Alpes Services"
          options={[
            { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1HUfTa4MeK/?mibextid=wwXIfr" },
            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rhones.alpe.services?stkn=MTJ3MG1mYnBmdnR4NA%3D%3D&utm_source=qr" },
            { icon: Share2, label: "TikTok", href: "https://www.tiktok.com/@rhonealpesservices?_r=1&_t=ZS-9A28oOCFCTN" }
          ]}
          textAnimation="slide-up"
        />

        <FaqSimple
          tag="Help & Support"
          title="Frequently Asked Questions"
          description="Here are answers to common questions about reaching out and following our channels."
          items={[
            { question: "How fast do you reply to messages?", answer: "Our team typically responds within 24 business hours." },
            { question: "Where can I follow your latest work?", answer: "You can follow our updates and media on Facebook, Instagram, and TikTok." }
          ]}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Rhône Alpes Services"
        columns={[
          { title: "Navigation", items: routes.map((r) => ({ label: r.label, href: r.path })) },
          {
            title: "Social Links",
            items: [
              { label: "Facebook", href: "https://www.facebook.com/share/1HUfTa4MeK/?mibextid=wwXIfr" },
              { label: "Instagram", href: "https://www.instagram.com/rhones.alpe.services?stkn=MTJ3MG1mYnBmdnR4NA%3D%3D&utm_source=qr" },
              { label: "TikTok", href: "https://www.tiktok.com/@rhonealpesservices?_r=1&_t=ZS-9A28oOCFCTN" }
            ]
          }
        ]}
        copyright="© 2025 Rhône Alpes Services. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}