import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Celebrity Fashion Terms of Service - The rules and guidelines for using our website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-300">Last updated: July 2026</p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Celebrity Fashion, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily use Celebrity Fashion for personal, non-commercial transitory viewing only.</p>
          <h2>3. User Content</h2>
          <p>Users may post comments and other content on our website. By posting content, you grant us the right to use, reproduce, and distribute such content.</p>
          <h2>4. Prohibited Uses</h2>
          <p>You may not use our website for any unlawful purpose or to violate any regulations.</p>
          <h2>5. Content Disclaimer</h2>
          <p>The information on Celebrity Fashion is provided on an &quot;as is&quot; basis.</p>
          <h2>6. Limitation of Liability</h2>
          <p>In no event shall Celebrity Fashion be liable for any damages arising out of the use of our website.</p>
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to revise these terms at any time without notice.</p>
          <h2>8. Contact Us</h2>
          <p>If you have any questions, contact us at <a href="mailto:razaali13793@gmail.com">razaali13793@gmail.com</a>.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
