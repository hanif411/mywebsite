import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Berapa lama pengerjaan website?",
    answer: "Untuk Landing Page bisa beberapa jam tergantung desain dan revisi dan Paket Custom bergantung pada kompleksitas fitur."
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer: "Tidak ada biaya bulanan wajib ke kami. Biaya tahunan hanya untuk perpanjangan Domain dan Server (Hosting) yang bisa Anda bayar langsung ke provider atau kami bantu kelolakan."
  },
  {
    question: "Saya gaptek, apakah akan dibantu?",
    answer: "Tentu! Kami mendesain sistem agar mudah digunakan oleh siapa saja. Kami juga menyediakan video tutorial dan sesi training khusus untuk Paket Bisnis dan Custom."
  },
  {
    question: "Apakah website sudah mobile-friendly?",
    answer: "100% Ya. Kami menggunakan pendekatan 'Mobile-First Design'. Website akan terlihat sempurna dan berjalan cepat di HP, Tablet, maupun Desktop."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-slate-600 text-lg">Jawaban untuk hal-hal yang mungkin Anda tanyakan.</p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 text-lg pr-4">{item.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brand-cta flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};