"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import { CheckCircle } from 'lucide-react';

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

        <div id="pricing-list-content" data-section="pricing-list-content">
          <PricingCardEight
            animationType="slide-up"
            textboxLayout="default"
            title="Installation Price List"
            description="Transparent pricing for common plumbing installations and services in Metro Vancouver and surrounding areas. For custom projects or specific inquiries, please request a personalized quote."
            tag="Our Rates"
            plans={[
              {
                id: "basic",                badge: "Basic Fixture",                badgeIcon: CheckCircle,
                price: "$150 - $300",                subtitle: "Simple installations for standard fixtures. Starting from.",                buttons: [{ text: "Request Quote", href: "/#contact" }],
                features: [
                  "Standard Faucet Installation",                  "Toilet Replacement (supply only, excluding toilet cost)",                  "Dishwasher Connection (existing lines)",                  "Outdoor Hose Bib Replacement"
                ]
              },
              {
                id: "standard",                badge: "Advanced Installation",                badgeIcon: CheckCircle,
                price: "$300 - $600",                subtitle: "Complex installations requiring specialized skills. Starting from.",                buttons: [{ text: "Request Quote", href: "/#contact" }],
                features: [
                  "Water Heater Replacement (tank type, like-for-like)",                  "Garburator Installation",                  "Shower Valve Upgrade (accessible, like-for-like)",                  "Laundry Sink Installation"
                ]
              },
              {
                id: "premium",                badge: "Renovation Projects",                badgeIcon: CheckCircle,
                price: "Custom Quote",                subtitle: "Comprehensive plumbing for renovations and new builds.",                buttons: [{ text: "Request Quote", href: "/#contact" }],
                features: [
                  "Full Bathroom Rough-in",                  "Full Kitchen Rough-in",                  "New Construction Plumbing",                  "Drainage System Overhaul",                  "On-Demand Water Heater Installation"
                ]
              }
            ]}
            useInvertedBackground={false}
          />
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
