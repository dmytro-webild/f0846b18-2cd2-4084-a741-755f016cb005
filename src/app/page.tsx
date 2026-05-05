"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { Shield, Zap, Phone, Wrench, MapPin, Mail } from "lucide-react";

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
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Poly-B Replacement", id: "poly-b" },
        { name: "Service Area", id: "area" },
        { name: "Trust", id: "trust" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Simon Plumbing "
      logoClassName="w-48 h-auto scale-150"
      button={{ text: "Get Quote", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Precision Plumbing. Professional Integrity."
      description="Licensed Red Seal experts serving Metro Vancouver to Vancouver Island. We deliver flawless technical solutions with a commitment to protecting your home and your peace of mind."
      buttons={[
        { text: "Urgent Service", href: "tel:+17783177711" },
        { text: "Request a Quote", href: "#contact" },
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
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721566.jpg?_wi=1"
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
        { title: "Plumbing & Heating", description: "Complete home piping, boiler service, water heaters, and hydronic heating systems.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1777946998738-5df8w8ug.png" },
        { title: "Appliance Installation", description: "Specialized support for Bosch, Miele, LG, Samsung, and Sub-Zero kitchen and laundry appliances.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFNQcAL7fna2gB5gMFYdjyolng/uploaded-1777947144208-logmxtv7.png" },
        { title: "Renovation Plumbing", description: "Full plumbing rough-ins for bathroom remodels, kitchen renovations, and custom home builds.", imageSrc: "http://img.b2bpic.net/free-photo/renovation-plumbing-work_23-2149023455.jpg" },
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
            { title: "Precision PEX Installation", description: "Safe, code-compliant PEX installation ensuring zero leaks and superior water flow.", imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg?_wi=2" },
        ]}
      />
  </div>

  <div id="area" data-section="area">
      <FeatureBento 
        title="Regional Coverage"
        description="We provide professional, high-standard plumbing and gas services throughout the Pacific Northwest. Our map highlights our key service boundaries including Vancouver, Whistler, Chilliwack, and Victoria with dedicated support teams in each location."
        tag="Service Map"
        tagIcon={MapPin}
        textboxLayout="split"
        useInvertedBackground={false}
        animationType="blur-reveal"
        features={[
          { 
            title: "High-Fidelity Service Map", 
            description: "Isometric view of Southwestern BC, featuring dashed navy service boundaries and strategic pinpoints for Vancouver, Whistler, Chilliwack, and Victoria.", 
            bentoComponent: 'map'
          }
        ]}
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

  <div id="contact" data-section="contact" className="bg-white py-24">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-gray-50 rounded-full text-blue-900">
            <Phone className="w-10 h-10" />
          </div>
          <h3 className="text-4xl font-bold text-blue-950 tracking-tight">+1 778-317-7711</h3>
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">OFFICE & EMERGENCY LINE</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-gray-50 rounded-full text-blue-900">
            <Mail className="w-10 h-10" />
          </div>
          <h3 className="text-4xl font-bold text-blue-950 tracking-tight">778simonteam@gmail.com</h3>
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">QUOTE & GENERAL INQUIRIES</p>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-gray-100 opacity-60">
          <p className="text-xs text-gray-400">Proudly Certified Red Seal Plumbing & Gas Fitting Professionals</p>
      </div>
    </div>
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Simon Appliance and Plumbing Ltd."
      columns={[
        { title: "Contact", items: [{ label: "+1 778-317-7711", href: "tel:+17783177711" }, { label: "Email Office", href: "mailto:778simonteam@gmail.com" }] },
        { title: "Services", items: [{ label: "Plumbing", href: "#services" }, { label: "Gas Fitting", href: "#services" }, { label: "Appliance Installation", href: "#services" }] },
        { title: "Policy", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ]}
      copyrightText="© 2024 Simon Appliance and Plumbing Ltd. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}