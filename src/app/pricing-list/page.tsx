"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function PricingListPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Poly-B Replacement", id: "poly-b" },
              { name: "Service Area", id: "area" },
              { name: "Trust", id: "trust" },
              { name: "Installation Price List", id: "/pricing-list" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Simon Plumbing "
            logoClassName="w-48 h-auto scale-150"
            button={{ text: "Get Quote", onClick: () => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } }}
          />
        </div>

        <main className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-foreground mb-12">Our Installation Price List</h1>
          <div className="flex justify-center">
            <img
              src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778216170420-a68n2o57.png" // Placeholder image URL
              alt="Installation Price List"
              className="w-full md:max-w-[900px] h-auto object-contain"
            />
          </div>
        </main>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Simon Appliance and Plumbing Ltd."
            columns={[
              { title: "Contact", items: [{ label: "+1 778-317-7711", href: "tel:+17783177711" }, { label: "Email Office", href: "mailto:778simonteam@gmail.com" }] },
              { title: "Services", items: [{ label: "Plumbing", href: "#services" }, { label: "Gas Fitting", href: "#services" }, { label: "Appliance Installation", href: "#services" }, { label: "Installation Price List", href: "/pricing-list" }] },
              { title: "Policy", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
            ]}
            copyrightText="© 2024 Simon Appliance and Plumbing Ltd. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}