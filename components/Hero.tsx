"use client"
import { motion } from "motion/react";
import { ArrowRight, Zap, Shield, HeadphonesIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
          {/* Left Content */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium">🚀 Website Cepat & Stabil untuk Bisnis Anda</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=" text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            > Jasa Website Profesional Cepat Anti Ribet !
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 leading-relaxed text-center max-w-4xl"
            >
              Solusi website yang dirancang khusus untuk UMKM Indonesia. 
              Cepat, aman, dan mudah dikelola.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className=""
            >
              <a
                href="https://wa.me/6285710950704?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20tentang%20website%20untuk%20bisnis%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ff5722] transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Konsultasi Gratis via WhatsApp
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Lihat Paket Layanan
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 border-t border-white/20"
            >
              <div className="flex items-center gap-2">
                <Zap className="text-[#00D4FF]" size={24} />
                <span className="text-sm">Load Time &lt;2 detik</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[#00D4FF]" size={24} />
                <span className="text-sm">SSL & Keamanan Terjamin</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="text-[#00D4FF]" size={24} />
                <span className="text-sm">Support 24/7</span>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
