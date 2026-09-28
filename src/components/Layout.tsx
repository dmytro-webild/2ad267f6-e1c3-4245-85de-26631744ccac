import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "À propos",
    "href": "#about"
  },
  {
    "name": "Témoignages",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Trust",
    "href": "#trust"
  },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },


];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="gridLines" heroBackground="lightRaysCorner">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Rhône Alpes Services"
      ctaButton={{
        text: "Nous contacter",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Rhône Alpes Services"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Maintenance",
              href: "#services",
            },
            {
              label: "Petits travaux",
              href: "#services",
            },
            {
              label: "Lavage de vitres",
              href: "#services",
            },
          ],
        },
        {
          title: "Entreprise",
          items: [
            {
              label: "À propos",
              href: "#",
            },
            {
              label: "Carrières",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Légal",
          items: [
            {
              label: "Mentions Légales",
              href: "#",
            },
            {
              label: "Confidentialité",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Rhône Alpes Services. Tous droits réservés."
      links={[
        {
          label: "LinkedIn",
          href: "#",
        },
        {
          label: "Instagram",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
