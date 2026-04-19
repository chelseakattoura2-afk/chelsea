import React from 'react';
import { motion } from 'motion/react';
import { Search, Leaf } from 'lucide-react';
import { LEBANESE_PLANTS } from '../constants';

export const Herbarium = ({ onSelect }: { onSelect: (plant: any) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col h-full overflow-y-auto pb-24"
    >
      <div className="p-8 pt-16 bg-white sticky top-0 z-10">
        <h2 className="text-3xl font-bold mb-6">Herbarium</h2>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search indigenous plants..." 
            className="w-full bg-[#F8FAFC] border-2 border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-medium focus:border-[#2E5BFF] outline-none transition-all"
          />
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {LEBANESE_PLANTS.map(plant => (
            <motion.div 
              key={plant.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(plant)}
              className="group bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 flex items-center gap-6 cursor-pointer hover:border-[#2E5BFF]/30 transition-all shadow-sm"
            >
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center shrink-0" style={{ backgroundColor: plant.color + '15' }}>
                <Leaf className="w-8 h-8" style={{ color: plant.color }} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{plant.arabicName}</p>
                <h3 className="text-xl font-bold">{plant.name}</h3>
                <p className="text-slate-500 text-sm">{plant.benefits[0]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
