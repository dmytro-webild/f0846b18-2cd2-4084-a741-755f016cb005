"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ShieldAlert, Wrench, ScrollText } from "lucide-react"; // Icons for the notice bar

export default function PricingListPage() {
  const pricingCategories = [
    {
      title: "DISHWASHER & GARBURATOR",      items: [
        { name: "Dishwasher (Most brands)", price: "Starting at $275" },
        { name: "Miele / Asko / Gaggenau / F&P", price: "Starting at $295" },
        { name: "Panel Installation", price: "Starting at $110" },
        { name: "Garburator", price: "Starting at $230" }
      ],
      footnote: "Extra fee for plumbing work."
    },
    {
      title: "OTR & MICROWAVE",      items: [
        { name: "OTR (Most brands)", price: "Starting at $250" },
        { name: "Microwave Drawer", price: "Starting at $240" },
        { name: "Microwave & Trim Kit", price: "Starting at $230" }
      ]
    },
    {
      title: "HOOD FAN",      items: [
        { name: "Under Cabinet Models (up to 30\")", price: "Starting at $230" },
        { name: "Under Cabinet Models (over 36\")", price: "Starting at $275" },
        { name: "Chimney Style (up to 30\")", price: "Starting at $275" },
        { name: "Chimney Style (over 36\")", price: "Starting at $385" },
        { name: "Island Style", price: "Starting at $425" },
        { name: "Inserts / Power Pack / Slide Out (up to 30\")", price: "Starting at $250" },
        { name: "Inserts / Power Pack / Slide Out (over 36\")", price: "Starting at $300" },
        { name: "Pop-up / Down Draft", price: "Starting at $350" }
      ],
      footnote: "Extra fee for cabinet/tile cutting or modification."
    },
    {
      title: "COOK TOP / RANGE TOP",      items: [
        { name: "Electric Cook Top (up to 30\")", price: "Starting at $250" },
        { name: "Electric Cook Top (over 36\")", price: "Starting at $275" },
        { name: "Gas Cook Top (up to 30\")", price: "Starting at $285" },
        { name: "Gas Cook Top (over 36\")", price: "Starting at $300" },
        { name: "Gas Range Top", price: "Starting at $300" },
        { name: "Electric Cook Top with Down Draft", price: "Starting at $300" },
        { name: "Gas Cook Top with Down Draft", price: "Starting at $330" },
        { name: "Gas Range with Down Draft", price: "Starting at $550" }
      ],
      footnote: "Extra fee for countertop modification."
    },
    {
      title: "RANGE / BBQ GRILL",      items: [
        { name: "Gas Range Disco & Reco (up to 30\") – 2 trips", price: "Starting at $300" },
        { name: "Gas Range Disco & Reco (over 36\") – 2 trips", price: "Starting at $360" },
        { name: "Natural Gas BBQ (Free Standing)", price: "Starting at $205" },
        { name: "Natural Gas BBQ (Built In)", price: "Starting at $250" }
      ]
    },
    {
      title: "GAS RANGE WITH DOWN DRAFT",      items: [
        { name: "Gas Cook Top (up to 30\")", price: "Starting at $285" },
        { name: "Gas Cook Top (over 36\")", price: "Starting at $360" },
        { name: "Gas Range Top", price: "Starting at $300" },
        { name: "Electric Cook Top with Down Draft", price: "Starting at $300" },
        { name: "Gas Cook Top with Down Draft", price: "Starting at $330" },
        { name: "Gas Range with Down Draft", price: "Starting at $550" }
      ]
    },
    {
      title: "WALL OVEN / STEAM OVEN / COFFEE MAKER",      items: [
        { name: "Wall Oven (Single)", price: "Starting at $300" },
        { name: "Wall Oven (Double / Combo)", price: "Starting at $360" },
        { name: "Wall Oven (3 in 1 Unit)", price: "Starting at $425" },
        { name: "Steam Oven (Plumbed)", price: "Starting at $308" },
        { name: "Steam Oven (Non-Plumbed)", price: "Starting at $240" },
        { name: "Coffee Maker (Plumbed)", price: "Starting at $300" },
        { name: "Coffee Maker (Non-Plumbed)", price: "Starting at $240" },
        { name: "Warming Drawer", price: "Starting at $240" }
      ]
    },
    {
      title: "REFRIGERATOR",      items: [
        { name: "Waterline Disco & Reco", price: "$215" },
        { name: "Built In Fridge & Freezer", price: "Depends on the model" }
      ]
    }
  ];

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
              { name: "Installation Price List", href: "/pricing-list" },
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-foreground mb-12">Professional Installation Price List</h1>

          {/* Notice Bar */}
          <div className="bg-background-accent text-foreground p-6 rounded-lg shadow-lg mb-12">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <ShieldAlert className="h-6 w-6" />
                <span className="text-sm md:text-base">All prices do not include parts or countertop/cabinet alterations.</span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <Wrench className="h-6 w-6" />
                <span className="text-sm md:text-base">Stainless steel fabrication (metal cutting/modification) is a separate cost.</span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <ScrollText className="h-6 w-6" />
                <span className="text-sm md:text-base">Prices shown before tax.</span>
              </div>
            </div>
          </div>

          {/* Pricing Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-card shadow-lg rounded-lg overflow-hidden border border-accent">
                <div className="bg-primary-cta text-white p-4">
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <ul className="divide-y divide-accent">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`flex justify-between items-center p-4 ${itemIndex % 2 === 0 ? 'bg-background-accent/20' : 'bg-card'}`}>
                      <span className="text-foreground text-sm md:text-base">{item.name}</span>
                      <span className="font-medium text-foreground text-sm md:text-base">{item.price}</span>
                    </li>
                  ))}
                  {category.footnote && (
                    <li className="p-4 bg-background-accent/30 text-xs text-foreground/80 italic">
                      {category.footnote}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card shadow-lg rounded-lg p-6 border border-accent">
              <h3 className="text-xl font-semibold text-primary-cta mb-2">DELIVERY</h3>
              <p className="text-foreground">Delivery available. Rates upon request.</p>
            </div>
            <div className="bg-card shadow-lg rounded-lg p-6 border border-accent">
              <h3 className="text-xl font-semibold text-primary-cta mb-2">PERMITS</h3>
              <p className="text-foreground">Permit fees are not included. Customer is responsible for permit cost (if applicable).</p>
            </div>
          </div>

          {/* Footer Line */}
          <p className="text-center text-foreground/70 text-lg italic mt-12">Thank you for choosing Simon Appliance & Plumbing Ltd!</p>
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
