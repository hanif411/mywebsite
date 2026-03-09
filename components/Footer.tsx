import { Mail, Phone, MapPin } from "lucide-react";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";


export function Footer() {
  return (
    <footer className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:justify-between mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Veltra Creative</span>
            </div>
            <p className="mb-4 max-w-3xl">
              Solusi website profesional untuk UMKM Indonesia. Kami membantu bisnis Anda berkembang dengan teknologi digital yang cepat, aman, dan terpercaya.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/veltracreative/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaSquareInstagram size={36} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587801910205&locale=id_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaSquareFacebook size={36} />
              </a>
              <a
                href="https://vm.tiktok.com/ZS9dHwWn1Rd73-BDza8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <AiFillTikTok size={59} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-[#00D4FF]" />
                <a href="tel:+6281234567890" className=" hover:text-[#00D4FF] transition-colors">
                  +62 857-1095-0704
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
