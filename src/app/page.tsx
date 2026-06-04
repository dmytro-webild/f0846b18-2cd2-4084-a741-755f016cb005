"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import { Shield, Zap, Wrench, MapPin } from "lucide-react";

export default function LandingPage() {
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

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Precision Plumbing. Professional Integrity."
      description="Licensed Red Seal experts serving Metro Vancouver to Vancouver Island. We deliver flawless technical solutions with a commitment to protecting your home and your peace of mind."
      buttons={[
        { text: "Urgent Service", onClick: () => window.location.href = 'tel:+17783177711' },
        { text: "Request a Quote", href: "/#contact" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1777945844879-cwk0mgla.png"
      imageAlt="Plumbing professional"
      mediaAnimation="slide-up"
      imagePosition="right"
      mediaWrapperClassName="flex-1 w-full max-w-3xl"
      fixedMediaHeight={false}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Experience"
      title="25 Years of Red Seal Excellence"
      description="With a quarter-century of dedicated field experience, Simon Appliance and Plumbing has built a reputation for reliable, high-precision technical service. We specialize in comprehensive plumbing, heating, and renovation plumbing solutions."
      subdescription="Our team maintains Red Seal certifications in both plumbing and gas fitting, ensuring that every project is completed to the highest Canadian safety and efficiency standards."
      icon={Shield}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778034888777-7g72wkj8.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        { title: "Plumbing & Heating", description: "Complete home piping, boiler service, water heaters, and hydronic heating systems.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1777946998738-5df8w8ug.png?_wi=1" },
        { title: "Appliance Installation", description: "Specialized support for Bosch, Miele, LG, Samsung, and Sub-Zero kitchen and laundry appliances.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1777947144208-logmxtv7.png?_wi=1" },
        { title: "Emergency & Drain Service", description: "24/7 reliable response for burst pipes, sewer backups, and urgent leaks. Minimal disruption to your home.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778033816720-72v47p15.png" },
      ]}
      title="Our Core Services"
      description="From expert appliance integrations to complex home renovations, we provide comprehensive technical services tailored to your project."
      tag="Professional Installation & Repair"
      tagIcon={Wrench}
    />
  </div>

  <div id="poly-b" data-section="poly-b">
      <FeatureCardEight 
        title="Poly-B to PEX Replacement Specialist"
        description="Don't let outdated Polybutylene piping put your property at risk. We specialize in seamless, non-invasive whole-home pipe replacement, upgrading your system to modern PEX standards for long-term safety and efficiency."
        tag="System Upgrade"
        tagIcon={Zap}
        textboxLayout="split"
        useInvertedBackground={true}
        features={[
            { title: "System Inspection", description: "Detailed assessment of existing lines to identify failure points.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1777946430500-rci7feex.jpg" },
            { title: "Precision PEX Installation", description: "Safe, code-compliant PEX installation ensuring zero leaks and superior water flow.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778034127155-bxpn04jd.jpg" },
        ]}
      />
  </div>

  <div id="area" data-section="area">
      <FeatureCardTwentySeven
        animationType="slide-up"
        textboxLayout="split"
        title="Our Service Areas"
        description="We provide rapid, reliable coverage across key regions, with dedicated specialists in every service zone."
        tag="Coverage"
        tagIcon={MapPin}
        features={[
          { id: "1", title: "Metro Vancouver", descriptions: ["Full Lower Mainland coverage with 24/7 emergency response availability."], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778034550543-24pbx539.png" },
          { id: "2", title: "Fraser Valley", descriptions: ["Reliable plumbing and heating services from Langley to Chilliwack."], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778034687089-nar6fvcp.png" },
          { id: "3", title: "Vancouver Island", descriptions: ["Premium technical service for Nanaimo, Victoria, and adjacent island regions."], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1778034744329-ls2qg3o7.png" }
        ]}
        useInvertedBackground={false}
        className="bg-slate-50"
      />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "100%", title: "Projects Completed Right the First Time", items: ["Quiet approach", "Methodical problem solving", "Complex system focus"] },
        { id: "2", value: "Daily", title: "Transparent Communication", items: ["Explain the why", "Done right first time", "Full documentation"] },
        { id: "3", value: "BC", title: "Reliability Across Province", items: ["Whistler to Victoria", "Fraser Valley", "Lower Mainland"] },
      ]}
      title="Why Clients Trust Simon"
      description="We are dedicated to providing consistent, high-quality service across British Columbia."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
        tag="Contact Us"
        title="Get in Touch"
        description="Call or email us for emergency services or to schedule your project estimate."
        buttons={[
            { text: "Call +1 778-317-7711", onClick: () => window.location.href = 'tel:+17783177711' },
            { text: "Email for Quote", onClick: () => window.location.href = 'mailto:778simonteam@gmail.com' }
        ]}
        background={{ variant: "plain" }}
        useInvertedBackground={false}
        className="bg-white"
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
