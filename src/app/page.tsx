"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import { Shield, Zap, Phone, Mail, MapPin } from "lucide-react";

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
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Poly-B Replacement", id: "poly-b" },
        { name: "Trust", id: "trust" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Simon Plumbing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Precision Plumbing. Professional Integrity."
      description="Licensed Red Seal experts serving Metro Vancouver to Vancouver Island. We deliver flawless technical solutions with a commitment to protecting your home and your peace of mind."
      buttons={[
        { text: "Urgent Service", href: "tel:+17783177711" },
        { text: "Request a Quote", href: "#contact" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg?_wi=1", imageAlt: "Plumbing professional" },
        { imageSrc: "http://img.b2bpic.net/free-photo/man-looks-faucet-pipes-valve-pressure-meter_169016-14812.jpg", imageAlt: "Pipe repair" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11837.jpg", imageAlt: "Appliance service" },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Excellence in Every Detail"
      description="At Simon Appliance and Plumbing, we believe that 'good enough' isn't enough. We treat your home as if it were our own—with precision, care, and zero compromise."
      subdescription="Our Red Seal certifications in Plumbing and Gas are a guarantee of high-level craftsmanship, safety, and unwavering technical integrity."
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
        { title: "Expert Plumbing Systems", description: "Comprehensive diagnostics, repairs, and installations for all residential and commercial piping systems.", imageSrc: "http://img.b2bpic.net/free-photo/technician-checking-heating-system-boiler-room_169016-53973.jpg" },
        { title: "Certified Gas Solutions", description: "High-precision gas line fitting and appliance connections performed by Red Seal certified gas technicians.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-worker-with-protective-mask-gloves_23-2148773449.jpg" },
        { title: "Preventative Maintenance", description: "Proactive identifying of potential system vulnerabilities before they escalate into costly and disruptive repairs.", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-as-plumber_23-2150746299.jpg" },
      ]}
      title="Specialized Services"
      description="We offer high-precision technical services for both residential and commercial needs."
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
            { title: "System Inspection", description: "Detailed assessment of existing lines to identify failure points.", imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721566.jpg?_wi=2" },
            { title: "Precision PEX Installation", description: "Safe, code-compliant PEX installation ensuring zero leaks and superior water flow.", imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg?_wi=2" },
        ]}
      />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "100%", title: "Meticulous Craftsmanship", items: ["Quiet approach", "Methodical problem solving", "Complex system focus"] },
        { id: "2", value: "Daily", title: "Transparent Communication", items: ["Explain the why", "Done right first time", "Full documentation"] },
        { id: "3", value: "BC", title: "Reliability Across Province", items: ["Whistler to Victoria", "Fraser Valley", "Lower Mainland"] },
      ]}
      title="Why Clients Trust Simon"
      description="We are dedicated to providing consistent, high-quality service across British Columbia."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      title="Direct Support & Bookings"
      description="Get in touch with our team for urgent service or a custom project quote. We are available across the Lower Mainland."
      tag="Contact Us"
      tagIcon={Phone}
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg?_wi=1"
      className="bg-accent"
      mediaPosition="left"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Simon Appliance and Plumbing Ltd."
      columns={[
        { title: "Contact", items: [{ label: "+1 778-317-7711", href: "tel:+17783177711" }, { label: "Email Office", href: "mailto:info@simonplumbing.ca" }] },
        { title: "Services", items: [{ label: "Plumbing", href: "#services" }, { label: "Gas Fitting", href: "#services" }] },
        { title: "Policy", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ]}
      copyrightText="© 2024 Simon Appliance and Plumbing Ltd. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}