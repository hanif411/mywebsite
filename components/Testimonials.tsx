import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Siti Nurhaliza",
    business: "Toko Batik Nusantara",
    location: "Jakarta",
    image: "https://images.unsplash.com/photo-1655462502318-a5ff79542ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwc21hbGwlMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc3MTMxODA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Sejak punya website dari Hanif Digital, penjualan online saya naik 3x lipat! Website cepat, mudah digunakan, dan pelanggan jadi lebih percaya. Tim supportnya juga sangat responsif.",
    rating: 5,
  },
  {
    name: "Bapak Ahmad Rizki",
    business: "Travel Nusa Wisata",
    location: "Bali",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    text: "Sebagai travel agent, saya butuh website yang bisa menampilkan paket tour dengan menarik. Hanif Digital Solutions berhasil membuat website yang sempurna. Booking meningkat 150% dalam 2 bulan!",
    rating: 5,
  },
  {
    name: "Ibu Dewi Lestari",
    business: "Warung Kopi Tradisional",
    location: "Yogyakarta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    text: "Awalnya ragu untuk buat website, tapi ternyata prosesnya mudah dan cepat. Dalam 1 minggu website sudah jadi! Sekarang pelanggan bisa lihat menu dan order via WhatsApp dengan mudah.",
    rating: 5,
  },
  {
    name: "Bapak Dedi Setiawan",
    business: "Workshop Mobil DS",
    location: "Surabaya",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    text: "Website bengkel saya sekarang terlihat profesional. Banyak customer baru yang datang setelah cari di Google. Investasi terbaik untuk bisnis saya!",
    rating: 5,
  },
  {
    name: "Ibu Rina Kartika",
    business: "Salon Kecantikan RK",
    location: "Bandung",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    text: "Website salon saya sangat cantik dan mudah di-manage. Customer bisa booking appointment langsung. Tim Hanif Digital sangat sabar menjelaskan cara penggunaannya.",
    rating: 5,
  },
  {
    name: "Bapak Yusuf Habibie",
    business: "Toko Elektronik YH",
    location: "Medan",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    text: "Paket Professional-nya worth it banget! Toko online saya jadi lebih mudah dikelola. Fitur admin panel-nya sangat membantu untuk update produk baru.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2463] mb-4">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lebih dari 100+ bisnis UMKM telah mempercayai kami untuk membawa bisnis mereka online
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#00D4FF]/20">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FF6B35] text-[#FF6B35]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#0A2463]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 bg-gradient-to-r from-[#0A2463] to-[#00D4FF] rounded-2xl"
        >
          <div className="text-center text-white">
            <p className="text-4xl font-bold mb-2">100+</p>
            <p className="text-sm text-white/80">Klien Puas</p>
          </div>
          <div className="text-center text-white">
            <p className="text-4xl font-bold mb-2">150+</p>
            <p className="text-sm text-white/80">Website Selesai</p>
          </div>
          <div className="text-center text-white">
            <p className="text-4xl font-bold mb-2">98%</p>
            <p className="text-sm text-white/80">Tingkat Kepuasan</p>
          </div>
          <div className="text-center text-white">
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-sm text-white/80">Support Ready</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
