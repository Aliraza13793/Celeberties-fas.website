import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description: "Celebrity Fashion DMCA Policy - How we handle copyright infringement claims.",
};

export default function DMCAPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "DMCA" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">DMCA Policy</h1>
          <p className="mt-4 text-lg text-gray-300">Last updated: July 2026</p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>Digital Millennium Copyright Act Notice</h2>
          <p>Celebrity Fashion respects the intellectual property of others, and we ask our users to do the same.</p>
          <h2>Filing a DMCA Notice</h2>
          <p>To file a DMCA notice with us, you must include: a physical or electronic signature, identification of the copyrighted work, identification of the infringing material, your contact information, and a good faith statement.</p>
          <h2>Counter-Notice</h2>
          <p>If you believe your content was removed by mistake, you may file a counter-notice with us.</p>
          <h2>Contact Information</h2>
          <p>Please send DMCA notices to: <a href="mailto:dmca@celebrityfashion.com">dmca@celebrityfashion.com</a></p>
          <h2>Repeat Infringers</h2>
          <p>We have adopted a policy of terminating users who are deemed to be repeat infringers.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
