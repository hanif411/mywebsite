import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72  rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Siap Tingkatkan Bisnis Anda dengan Website Profesional?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto"
          >
            Jangan biarkan kompetitor unggul! Mulai perjalanan digital Anda hari ini dengan konsultasi gratis bersama tim expert kami.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#00D4FF] flex-shrink-0" />
              <span className="text-sm sm:text-base">Konsultasi Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#00D4FF] flex-shrink-0" />
              <span className="text-sm sm:text-base">Gratis Revisi Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#00D4FF] flex-shrink-0" />
              <span className="text-sm sm:text-base">Garansi Kepuasan</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://wa.me/6285710950704?text=Halo%20Veltra%20Creative,%20saya%20ingin%20konsultasi%20gratis%20untuk%20membuat%20website%20profesional%20untuk%20bisnis%20saya.%20Mohon%20info%20lebih%20lanjut!"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#FF6B35] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#ff5722] transition-all hover:shadow-2xl hover:-translate-y-1 shadow-xl"
            >
              <MessageCircle size={24} />
              Chat via WhatsApp Sekarang
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
