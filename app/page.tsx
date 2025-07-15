import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Phone, Mail, MapPin } from "lucide-react";
const partners = [
  { src: "/Slack.svg", alt: "Partner 1" },
  { src: "/Zoom.svg", alt: "Partner 2" },
  { src: "/Coinbase.svg", alt: "Partner 3" },
  { src: "/Dropbox.svg", alt: "Partner 4" },
  { src: "/Webflow.svg", alt: "Partner 5" },
  { src: "/Slack.svg", alt: "Partner 6" },
];
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="CP Prima Seafood Logo"
                width={120}
                height={120}
              ></Image>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-[rgba(0,65,107,1)] transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[rgba(0,65,107,1)] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[rgba(0,65,107,1)] transition-colors"
              >
                Product
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[rgba(0,65,107,1)] transition-colors"
              >
                Articles
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[rgba(0,65,107,1)] transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-[rgba(0,65,107,1)] leading-tight">
                Bringing you the best seafood products from Indonesia to the
                world
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CP Prima Seafood (PT Central Pertiwi Bahari) has nurtured many
                notable long-term business partners around the globe. Some have
                been doing business with us for some decades. We supply them
                with our company brands of products and private labels.
              </p>
              <Button className="bg-[rgba(0,65,107,1)] hover:bg-[rgba(0,65,107,0.9)] text-white px-8 py-3 text-lg">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/hero-image.png"
                  alt="Seafood dishes showcase"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 justify-center">
          <h3 className="text-3xl font-bold text-center text-[rgba(0,65,107,1)] mb-12">
            Our Partners
          </h3>
          <div className="grid   grid-cols m-auto md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, i) => (
              <div key={i}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={120}
                  className="w-32 h-32 object-contain "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-[rgba(0,65,107,1)] mb-12">
            Our Products
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/shrimp.jpg"
                  alt="Shrimp & Fish Based Products"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-[rgba(0,65,107,1)] mb-2">
                  Shrimp & Fish Based
                </h4>
                <p className="text-gray-600">
                  Premium quality shrimp and fish-based products for your
                  culinary needs.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/surimi.png"
                  alt="Surimi Based Products"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-[rgba(0,65,107,1)] mb-2">
                  Surimi Based
                </h4>
                <p className="text-gray-600">
                  High-quality surimi-based products crafted with traditional
                  techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/frozen.jpg"
                  alt="Frozen Shrimp & Fish"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-[rgba(0,65,107,1)] mb-2">
                  Frozen Shrimp & Fish
                </h4>
                <p className="text-gray-600">
                  Fresh frozen seafood products maintaining optimal quality and
                  taste.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button className="bg-[rgba(0,65,107,1)] hover:bg-[rgba(0,65,107,0.9)] text-white px-8 py-3">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Shrimp Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[rgba(0,65,107,1)]">
                Quality Shrimp Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All our partners value the high-quality standards of our
                products for the freshness, quality, safety, traceability, and
                reliability of on-time order fulfillment. We maintain strict
                quality control throughout our supply chain to ensure that every
                product meets international standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence has made us a trusted partner for
                businesses worldwide. From sourcing to processing, we ensure
                that our seafood products maintain their natural taste and
                nutritional value while meeting the highest safety standards.
              </p>
              <Button className="bg-[rgba(0,65,107,1)] hover:bg-[rgba(0,65,107,0.9)] text-white">
                Learn More About Quality
              </Button>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/quality.jpg"
                alt="Quality shrimp processing"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-[rgba(0,65,107,1)] mb-12">
            Latest Articles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/blog-1.png"
                  alt="Seafood sustainability article"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[rgba(0,65,107,1)] mb-2">
                  Sustainable Seafood Practices in Modern Aquaculture
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about our commitment to sustainable fishing and
                  aquaculture practices that protect marine ecosystems.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[rgba(0,65,107,1)] text-[rgba(0,65,107,1)] hover:bg-[rgba(0,65,107,1)] hover:text-white bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/blog-2.jpg"
                  alt="Quality control article"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[rgba(0,65,107,1)] mb-2">
                  Quality Control Standards in Seafood Processing
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how we maintain the highest quality standards
                  throughout our processing facilities.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[rgba(0,65,107,1)] text-[rgba(0,65,107,1)] hover:bg-[rgba(0,65,107,1)] hover:text-white bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src="/blog-3.jpg"
                  alt="Global partnerships article"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[rgba(0,65,107,1)] mb-2">
                  Building Global Partnerships in Seafood Industry
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  How we've built lasting relationships with partners worldwide
                  over decades of business.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[rgba(0,65,107,1)] text-[rgba(0,65,107,1)] hover:bg-[rgba(0,65,107,1)] hover:text-white bg-transparent"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(0,65,107,1)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="CP Prima Seafood Logo"
                  width={120}
                  height={120}
                ></Image>
              </div>
              <p className="text-blue-100 text-sm">
                PT Central Pertiwi Bahari
                <br />
                Bringing you the best seafood products from Indonesia to the
                world.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 21 XXXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@cpprima-seafood.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2 text-sm text-blue-100">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Quality Standards
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">
                Interested in knowing more?
              </h5>
              <Button className="bg-white text-[rgba(0,65,107,1)] hover:bg-gray-100 w-full">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-100">
            <p>&copy; 2024 CP Prima Seafood. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
