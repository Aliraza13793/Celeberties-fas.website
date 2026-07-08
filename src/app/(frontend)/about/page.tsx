import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Newsletter from "@/components/ui/Newsletter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Celebrity Fashion - your ultimate source for celebrity fashion news, style tips, and red carpet looks.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">About Celebrity Fashion</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Your trusted source for everything celebrity fashion since 2020.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>Our Mission</h2>
          <p>
            Celebrity Fashion was founded with a simple mission: to bring you the most
            comprehensive and engaging coverage of celebrity fashion, style, and beauty.
            We believe that fashion is a form of self-expression, and celebrities often
            set the trends that shape our everyday style.
          </p>

          <h2>What We Cover</h2>
          <p>
            Our team of experienced fashion journalists and editors covers everything from
            red carpet events to street style, from luxury brands to accessible fashion
            finds. We bring you:
          </p>
          <ul>
            <li><strong>Celebrity News:</strong> The latest happenings in celebrity fashion</li>
            <li><strong>Red Carpet Coverage:</strong> Detailed analysis of awards show fashion</li>
            <li><strong>Street Style:</strong> How celebrities dress when they&apos;re off-duty</li>
            <li><strong>Beauty:</strong> Makeup, skincare, and hair trends</li>
            <li><strong>Luxury Brands:</strong> The latest from high-end fashion houses</li>
            <li><strong>Shopping Guides:</strong> Help you find the best fashion deals</li>
          </ul>

          <h2>Our Team</h2>
          <p>
            Our team consists of passionate fashion enthusiasts, experienced journalists,
            and digital media experts. Together, we create content that informs, inspires,
            and entertains our readers.
          </p>

          <h2>Our Values</h2>
          <p>
            We are committed to providing accurate, unbiased coverage of the fashion
            industry. We believe in sustainable fashion, body positivity, and the power
            of personal style. Our goal is to create a welcoming community where
            fashion lovers can come together to celebrate creativity and self-expression.
          </p>

          <h2>Connect With Us</h2>
          <p>
            We love hearing from our readers! Whether you have a tip, want to contribute,
            or just want to say hello, feel free to reach out to us through our contact
            page or on social media.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>

      <Footer />
    </>
  );
}
