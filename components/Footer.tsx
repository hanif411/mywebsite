import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:justify-between mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Hanif Digital Solutions</span>
            </div>
            <p className="mb-4 max-w-3xl">
              Solusi website profesional untuk UMKM Indonesia. Kami membantu bisnis Anda berkembang dengan teknologi digital yang cepat, aman, dan terpercaya.
            </p>
            {/* <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-[#00D4FF]" />
                <a href="tel:+6281234567890" className=" hover:text-[#00D4FF] transition-colors">
                  +62 815-1624-951
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0  text-[#00D4FF]" />
                <a href="mailto: hanifsholihin884@gmail.com" className=" transition-colors hover:text-[#00D4FF]">
                  hanifsholihin884@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#00D4FF]" />
                <span className="hover:text-[#00D4FF]">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>© 2026 Hanif Digital Solutions. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ for Indonesian SMEs
          </p>
        </div>
      </div>
    </footer>
  );
}
