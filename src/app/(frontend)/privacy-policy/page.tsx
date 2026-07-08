import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Celebrity Fashion Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-300">Last updated: July 2026</p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to Celebrity Fashion (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
            protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, and other contact information you provide when subscribing to our newsletter or contacting us.</li>
            <li><strong>Derivative Data:</strong> Information automatically collected when you access our website, such as your IP address, browser type, and browsing history.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Notify you about changes to our service</li>
            <li>Provide customer support</li>
            <li>Gather analysis to improve our service</li>
            <li>Monitor the usage of our service</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Send you newsletters and marketing communications</li>
          </ul>

          <h2>Disclosure of Data</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable
            information to outside parties. This does not include trusted third parties
            who assist us in operating our website and servicing you.
          </p>

          <h2>Security</h2>
          <p>
            The security of your data is important to us. We strive to use commercially
            acceptable means of protecting your personal information.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of
            any changes by posting the new Privacy Policy on this page and updating the
            &quot;last updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@celebrityfashion.com">privacy@celebrityfashion.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
