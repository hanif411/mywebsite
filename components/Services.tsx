import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Paket Starter",
    tagline: "Untuk Bisnis Baru",
    price: "Rp 800.000",
    features: [
      "Landing Page Profesional (1 halaman)",
      "Mobile-Responsive Design",
      "SSL Certificate Gratis",
      "Domain .com Gratis 1 Tahun",
      "Load Time < 2 detik",
      "SEO Basic Setup",
      "Unlimited revisi minor 1 x 24 jam",
      "Support 30 Hari",
    ],
    popular: false,
    ctaText: "Mulai Sekarang",
    whatsappMessage:
      "Halo, saya tertarik dengan Paket Starter untuk website bisnis saya",
  },
  {
    name: "Paket Professional",
    tagline: "Paling Populer",
    price: "Rp 1.500.000",
    features: [
      "Website Multipage (hingga 5 halaman)",
      "Premium Mobile-First Design",
      "Galeri Produk/Layanan",
      "Blog/Artikel System",
      "SSL Certificate",
      "Domain .com Gratis 1 Tahun",
      "Support 90 Hari",
      "Unlimited revisi minor 1 x 24 jam",
    ],
    popular: true,
    ctaText: "Pilih Paket Ini",
    whatsappMessage:
      "Halo, saya tertarik dengan Paket Professional untuk mengembangkan website bisnis saya",
  },
  {
    name: "Paket Custom",
    tagline: "Enterprise Solutions",
    price: "Hubungi kami",
    features: [
      "Full Custom User Flow",
      "E-Commerce Ready (Online Shop)",
      "Dedicated Database",
      "Dashboard Admin Lengkap",
      "Integrasi API Pihak Ketiga",
      "Prioritas Support 24/7",
    ],
    popular: false,
    ctaText: "Hubungi Kami",
    whatsappMessage:
      "Halo, saya tertarik dengan Paket Enterprise dan ingin diskusi lebih detail",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2463] mb-4">
            Paket Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
              className={`relative rounded-2xl p-8 border-2 transition-all ${
                service.popular
                  ? "border-[#FF6B35] bg-gradient-to-br from-[#FF6B35]/5 to-white shadow-2xl"
                  : "border-gray-200 bg-white shadow-lg hover:border-[#00D4FF]/50"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff5722] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🔥 Paling Populer
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-2">
                <p className="text-sm font-semibold text-[#00D4FF] mb-2">
                  {service.tagline}
                </p>
                <h3 className="text-2xl font-bold text-[#0A2463] mb-4">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#0A2463]">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        service.popular ? "text-[#FF6B35]" : "text-[#00D4FF]"
                      }`}
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6285710950704?text=${encodeURIComponent(
                  service.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all ${
                  service.popular
                    ? "bg-[#FF6B35] text-white hover:bg-[#ff5722] shadow-lg hover:shadow-xl"
                    : "bg-[#0A2463] text-white hover:bg-[#0d2d6f] shadow-md hover:shadow-lg"
                }`}
              >
                {service.ctaText}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 p-6 bg-gray-50 rounded-xl max-w-4xl mx-auto"
        >
          <p className="text-gray-700 mb-2">
            💡 <strong>Butuh custom solution?</strong> Kami siap membantu merancang paket khusus untuk kebutuhan bisnis Anda.
          </p>
          <a
            href="https://wa.me/628151624951?text=Halo,%20saya%20ingin%20diskusi%20tentang%20custom%20solution%20untuk%20bisnis%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00D4FF] font-semibold hover:text-[#0A2463] transition-colors"
          >
            Hubungi kami untuk konsultasi →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
