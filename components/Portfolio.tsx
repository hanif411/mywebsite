import React from 'react';
import { Reveal } from './ui/Reveal';
import villa from '@/public/villa.jpeg';
import umroh from '@/public/umroh.jpeg';
import Image from 'next/image';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: any
  Url: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Al Barkah Travel',
    category: 'Tour & Travel',
    imageUrl: umroh,
    Url: 'https://umroh.veltra.my.id/'
  },
  {
    id: '2',
    title: 'Villa Veltra',
    category: 'Villa',
    imageUrl: villa,
    Url: 'https://villa.veltra.my.id/'
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Karya Terbaru Kami</h2>
              <p className="text-slate-600 text-lg">Website berkualitas tinggi yang membantu klien kami bertumbuh.</p>
            </div>
            <div className="hidden md:block text-slate-400 text-sm">
              Geser untuk melihat →
            </div>
          </div>
        </Reveal>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
         <div className="flex overflow-x-auto hide-scrollbar pb-12 px-4 md:px-[max(1rem,calc((100vw-1280px)/2))] gap-6 snap-x snap-mandatory">
            {PORTFOLIO_ITEMS.map((item, idx) => (
               <div key={item.id} className="min-w-[280px] md:min-w-[400px] snap-center" onClick={() => window.open(item.Url, '_blank')}>
                  <Reveal delay={idx * 0.1} direction="left">
                    <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] cursor-pointer">
                      <Image
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="xl:w-100 xl:h-150 sm:w-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-80 transition-opacity duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                         <span className="text-brand-accent text-sm font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
                         <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </Reveal>
               </div>
            ))}
            {/* Spacer for right padding */}
            <div className="min-w-[20px]"></div>
         </div>
      </div>
    </section>
  );
};