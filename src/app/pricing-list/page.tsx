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
              { name: "Home", id: "/" },
              { name: "About", id: "/#about" },
              { name: "Services", id: "/#services" },
              { name: "Poly-B Replacement", id: "/#poly-b" },
              { name: "Service Area", id: "/#area" },
              { name: "Trust", id: "/#trust" },
              { name: "Installation Price List", id: "/pricing-list" },
              { name: "Contact", id: "/#contact" }
            ]}
            brandName="Simon Plumbing "
            logoClassName="w-48 h-auto scale-150"
            button={{ text: "Get Quote", href: "/#contact" }}
          />
        </div>

        <div id="pricing-list-content" data-section="pricing-list-content" className="relative z-10 flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-32 lg:pt-40 mx-auto w-full text-center px-4 md:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800 mb-3">Our Rates</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground max-w-2xl mb-4">
            Installation Price List
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-12">
            Transparent pricing for common plumbing installations and services in Metro Vancouver and surrounding areas. For custom projects or specific inquiries, please request a personalized quote.
          </p>
          <div className="w-full flex justify-center">
            <img
              src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1780550052639-e1woubsa.png" 
              alt="Sample Appliance Installation Price List"
              className="w-full max-w-[900px] h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="Simon Appliance and Plumbing Ltd."
            columns={[
              { title: "Contact", items: [{ label: "+1 778-317-7711", href: "tel:+17783177711" }, { label: "Email Office", href: "mailto:778simonteam@gmail.com" }] },
              { title: "Services", items: [{ label: "Plumbing", href: "/#services" }, { label: "Gas Fitting", href: "/#services" }, { label: "Appliance Installation", href: "/#services" }, { label: "Installation Price List", href: "/pricing-list" }] },
              { title: "Policy", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
            ]}
            copyrightText="© 2024 Simon Appliance and Plumbing Ltd. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}