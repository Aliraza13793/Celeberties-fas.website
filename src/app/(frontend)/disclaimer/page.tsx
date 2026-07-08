import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Celebrity Fashion Disclaimer - Important information about the content on our website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Disclaimer" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Disclaimer</h1>
          <p className="mt-4 text-lg text-gray-300">Last updated: July 2026</p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>General Information</h2>
          <p>The information provided by Celebrity Fashion on our website is for general informational purposes only.</p>
          <h2>External Links</h2>
          <p>The site may contain links to external websites that are not provided or maintained by Celebrity Fashion.</p>
          <h2>Professional Advice</h2>
          <p>The site cannot and does not contain professional fashion advice.</p>
          <h2>Fair Use</h2>
          <p>This site may contain copyrighted material the use of which has not always been specifically authorized.</p>
          <h2>Errors and Omissions</h2>
          <p>While we have made every attempt to ensure accuracy, Celebrity Fashion is not responsible for any errors or omissions.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions, contact us at <a href="mailto:legal@celebrityfashion.com">legal@celebrityfashion.com</a>.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
