import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Leaf, Home, CheckCircle2 } from 'lucide-react';

export const PlantDetail = ({ plant, onBack }: { plant: any, onBack: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 z-[60] bg-white overflow-y-auto pb-20"
    >
      <div className="relative w-full aspect-[4/5] bg-slate-50 p-12 flex items-center justify-center overflow-hidden">
         <button onClick={onBack} className="absolute top-12 left-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg z-20">
           <ChevronLeft size={24} />
         </button>
         
         <div className="text-center relative z-10">
           <div className="w-40 h-40 rounded-[2.5rem] mx-auto flex items-center justify-center mb-8 border-4 border-white shadow-2xl" style={{ backgroundColor: plant.color }}>
              <Leaf size={60} className="text-white" />
           </div>
           <p className="text-lg font-medium text-slate-400 uppercase tracking-widest leading-none mb-2">{plant.arabicName}</p>
           <h1 className="text-5xl font-black">{plant.name}</h1>
         </div>
         <div className="absolute -bottom-10 -right-10 w-48 h-48 border-8 border-slate-100 rounded-full opacity-50" />
      </div>

      <div className="p-8 space-y-10">
         <section>
           <h3 className="text-xs font-black uppercase tracking-widest text-[#2E5BFF] mb-4">The Essence</h3>
           <p className="text-xl font-medium leading-relaxed">{plant.description}</p>
         </section>

         <section>
           <h3 className="text-xs font-black uppercase tracking-widest text-[#2E5BFF] mb-6">Benefits</h3>
           <div className="grid grid-cols-2 gap-4">
             {plant.benefits.map((b: string) => (
               <div key={b} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#00D284]" />
                  <span className="font-bold text-sm">{b}</span>
               </div>
             ))}
           </div>
         </section>

         <section className="bg-slate-900 text-white p-10 rounded-[3rem]">
           <div className="flex items-center gap-3 mb-6">
              <Home size={20} />
              <h3 className="text-lg font-bold">Origin</h3>
           </div>
           <p className="text-2xl font-bold mb-2">{plant.origin}</p>
           <p className="text-white/60 mb-8">{plant.terrain}</p>
         </section>
      </div>
    </motion.div>
  );
};
