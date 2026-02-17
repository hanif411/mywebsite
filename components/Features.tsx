import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, Shield, Smartphone, TrendingUp, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Kecepatan Luar Biasa",
    description: "Website load dalam waktu kurang dari 2 detik. Pengunjung tidak perlu menunggu lama, tingkatkan konversi hingga 40%.",
    color: "#00D4FF",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "SSL Certificate gratis, backup otomatis harian, dan proteksi dari serangan cyber. Data bisnis Anda aman 100%.",
    color: "#FF6B35",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "80% pengunjung dari mobile? Website kami dioptimalkan untuk semua perangkat, tampil sempurna di HP & desktop.",
    color: "#00D4FF",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description: "Muncul di halaman pertama Google. Kami bangun website dengan teknik SEO terbaik untuk meningkatkan visibilitas bisnis.",
    color: "#FF6B35",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Proses cepat tidak perlu menunggu lama bisa selesai dalam hitungan hari bahkan jam",
    color: "#00D4FF",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Tim support kami siap membantu kapan saja via WhatsApp. Butuh update konten? Kami tangani dalam 24 jam.",
    color: "#FF6B35",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2463] mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami fokus pada solusi yang menghasilkan hasil nyata untuk bisnis Anda
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Siap membawa bisnis Anda ke level berikutnya?
          </p>
          <a
            href="https://wa.me/628151624951?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20keunggulan%20layanan%20Hanif%20Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ff5722] transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Konsultasi Gratis Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
