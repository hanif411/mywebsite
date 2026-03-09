"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import veltra from '@/public/veltra.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10">
              <Image src={veltra} alt="Logo" className="w-full h-full rounded-lg"/>
            </div>
            <span className="text-xl font-bold text-[#0A2463]">
              Veltra Creative
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-[#0A2463] transition-colors"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#0A2463] transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-[#0A2463] transition-colors"
            >
              Portofolio
            </button>
            <a
              href="https://wa.me/6285710950704?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Veltra%20Creative"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B35] text-white px-6 py-2 rounded-lg hover:bg-[#ff5722] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0A2463]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 py-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-700 hover:text-[#0A2463] transition-colors text-left"
                >
                  Keunggulan
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-[#0A2463] transition-colors text-left"
                >
                  Layanan
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-700 hover:text-[#0A2463] transition-colors text-left"
                >
                  Portofolio
                </button>
                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Hanif%20Digital%20Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#ff5722] transition-all text-center"
                >
                  Hubungi Kami
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
