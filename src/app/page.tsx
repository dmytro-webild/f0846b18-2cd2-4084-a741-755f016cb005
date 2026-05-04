"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Shield } from "lucide-react";

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
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Trust",          id: "trust"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Simon Plumbing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Precision Plumbing. Professional Integrity."
      description="Licensed Red Seal experts serving Metro Vancouver to Vancouver Island. We deliver flawless technical solutions with a commitment to protecting your home and your peace of mind."
      buttons={[
        {
          text: "Emergency Service",          href: "tel:+17783177711"},
        {
          text: "Request a Quote",          href: "#contact"},
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721526.jpg", imageAlt: "Plumbing professional" },
        { imageSrc: "http://img.b2bpic.net/free-photo/man-looks-faucet-pipes-valve-pressure-meter_169016-14812.jpg", imageAlt: "Pipe repair" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11837.jpg", imageAlt: "Appliance service" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-loader-holding-red-heart-uniform-looking-joyful-front-view_176474-21370.jpg", imageAlt: "Technical detail" },
        { imageSrc: "http://img.b2bpic.net/free-photo/prosthetist-man-making-prosthetic-leg-while-working-laboratory_627829-7187.jpg", imageAlt: "Gas fitting" },
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
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721566.jpg"
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
        {
          title: "Expert Plumbing Systems",          description: "Comprehensive diagnostics, repairs, and installations for all residential and commercial piping systems.",          imageSrc: "http://img.b2bpic.net/free-photo/technician-checking-heating-system-boiler-room_169016-53973.jpg"},
        {
          title: "Certified Gas Solutions",          description: "High-precision gas line fitting and appliance connections performed by Red Seal certified gas technicians.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-worker-with-protective-mask-gloves_23-2148773449.jpg"},
        {
          title: "Preventative Maintenance",          description: "Proactive identifying of potential system vulnerabilities before they escalate into costly and disruptive repairs.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-as-plumber_23-2150746299.jpg"},
      ]}
      title="Specialized Services"
      description="We offer high-precision technical services for both residential and commercial needs."
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "100%",          title: "Meticulous Craftsmanship",          items: [
            "Quiet approach",            "Methodical problem solving",            "Complex system focus"],
        },
        {
          id: "2",          value: "Daily",          title: "Transparent Communication",          items: [
            "Explain the why",            "Done right first time",            "Full documentation"],
        },
        {
          id: "3",          value: "BC",          title: "Reliability Across Province",          items: [
            "Whistler to Victoria",            "Fraser Valley",            "Lower Mainland"],
        },
      ]}
      title="Why Clients Trust Simon"
      description="We are dedicated to providing consistent, high-quality service across British Columbia."
    />
  </div>

  <div id="map" data-section="map">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Metro Vancouver",          price: "Lower Mainland",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-as-plumber_23-2150746311.jpg"},
        {
          id: "2",          name: "Fraser Valley",          price: "Chilliwack & Abbotsford",          imageSrc: "http://img.b2bpic.net/free-photo/scientist-monitors-readings-equipment_645730-620.jpg"},
        {
          id: "3",          name: "Sea to Sky",          price: "Whistler & Squamish",          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg"},
        {
          id: "4",          name: "Vancouver Island",          price: "Victoria Areas",          imageSrc: "http://img.b2bpic.net/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55822.jpg"},
        {
          id: "5",          name: "Commercial",          price: "Systems Design",          imageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334228.jpg"},
      ]}
      title="Service Areas"
      description="Providing consistent high-quality service from Whistler to Victoria."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Homeowner",          company: "Vancouver",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990731.jpg"},
        {
          id: "2",          name: "Michael T.",          role: "Business Owner",          company: "Victoria",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-worker-wearing-vest_23-2149366622.jpg"},
        {
          id: "3",          name: "Emily R.",          role: "Homeowner",          company: "Whistler",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-senior-man-holding-his-tablet-kitchen_23-2148404378.jpg"},
        {
          id: "4",          name: "David K.",          role: "Contractor",          company: "Abbotsford",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-woman-striped-tshirt-happily-looking-camera-holding-paper-message-icon-hand-near-head-while-showing-thumb-up-gesture-office_574295-5701.jpg"},
        {
          id: "5",          name: "Janet W.",          role: "Homeowner",          company: "Burnaby",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-people-chatting_23-2149152864.jpg"},
      ]}
      title="Client Feedback"
      description="Hear what our clients have to say about our meticulous work."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Are you Red Seal certified?",          content: "Yes, we hold both Plumbing and Gas Fitting Red Seal certifications."},
        {
          id: "2",          title: "Do you offer emergency services?",          content: "Yes, please call our emergency line at 778-317-7711."},
        {
          id: "3",          title: "What areas do you serve?",          content: "We cover Metro Vancouver, Fraser Valley, Whistler/Squamish, and Vancouver Island."},
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Ready to Work Together?"
      description="Contact us today for a professional quote on your next project."
      buttonText="Request a Quote"
      tag="Let's Talk"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Simon Appliance and Plumbing Ltd."
      columns={[
        {
          title: "Contact",          items: [
            {
              label: "+1 778-317-7711",              href: "tel:+17783177711"},
            {
              label: "Email Office",              href: "mailto:info@simonplumbing.ca"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Plumbing",              href: "#services"},
            {
              label: "Gas Fitting",              href: "#services"},
          ],
        },
        {
          title: "Policy",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Simon Appliance and Plumbing Ltd. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}