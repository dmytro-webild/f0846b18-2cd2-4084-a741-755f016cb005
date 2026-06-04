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
                id: "drain-cleaning",                badge: "Drain Cleaning",                badgeIcon: CheckCircle,
                price: "$180 - $350",                subtitle: "For clogged sinks, showers, or main lines. Diagnostic included.",                buttons: [{ text: "Book Now", href: "/#contact" }],
                features: [
                  "Standard Drain Snaking",                  "Hydro Jetting (additional cost)",                  "Camera Inspection (if needed)",                  "Emergency Unclogging"
                ]
              },
              {
                id: "water-heater",                badge: "Water Heater Service",                badgeIcon: CheckCircle,
                price: "$400 - $1200",                subtitle: "Installation, repair, or replacement of water heaters.",                buttons: [{ text: "Get a Quote", href: "/#contact" }],
                features: [
                  "Standard Tank Water Heater Replacement",                  "Tankless Water Heater Installation (basic)",                  "Water Heater Diagnostics & Repair",                  "Expansion Tank Installation"
                ]
              },
              {
                id: "fixture-installation",                badge: "Fixture & Appliance",                badgeIcon: CheckCircle,
                price: "$250 - $750",                subtitle: "Installation for faucets, toilets, and major appliances.",                buttons: [{ text: "Request Service", href: "/#contact" }],
                features: [
                  "New Faucet Installation",                  "Toilet Installation (new or replacement)",                  "Dishwasher Installation (with new hookups)",                  "Washing Machine Hookup"
                ]
              },
              {
                id: "pipe-repair",                badge: "Pipe Repair & Leak Detection",                badgeIcon: CheckCircle,
                price: "$200 - $800+",                subtitle: "Fixing leaks, burst pipes, and minor re-piping.",                buttons: [{ text: "Emergency Service", onClick: () => window.location.href = 'tel:+17783177711' }],
                features: [
                  "Leak Detection & Repair",                  "Pipe Section Replacement",                  "Slab Leak Repair (visible access)",                  "Pinhole Leak Fix"
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
