import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Trophy, Droplets, Zap, Thermometer, Leaf, FlaskConical } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Routine = ({ onStartDIY }: { onStartDIY: () => void }) => {
  const steps = [
    { title: 'Cleanse', type: 'Daily', time: 'Morning', icon: Droplets },
    { title: 'Tone', type: 'Daily', time: 'Morning', icon: Zap },
    { title: 'Moisturize', type: 'Daily', time: 'Morning', icon: Thermometer },
    { title: 'Rosemary Mist', type: 'Support', time: 'Afternoon', icon: Leaf },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col h-full bg-[#F8FAFC]/30 overflow-y-auto pb-24"
    >
      <div className="p-8 pt-16 bg-white border-b border-slate-100">
         <h2 className="text-3xl font-bold">Your Routine</h2>
         <p className="text-slate-400 font-medium">Sunday, April 19</p>
      </div>

      <div className="p-8 space-y-6">
         <div className="flex items-center justify-between p-6 bg-[#2E5BFF] rounded-[2rem] text-white">
            <div>
              <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Weekly Streak</p>
              <p className="text-3xl font-black">12 Days</p>
            </div>
            <Trophy size={48} className="opacity-30" />
         </div>

         <div className="space-y-4">
            {steps.map((step) => (
              <motion.div 
                key={step.title}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                  <step.icon size={20} className="text-[#2E5BFF]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{step.title}</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase">{step.type} • {step.time}</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    confetti({
                      particleCount: 150,
                      spread: 70,
                      origin: { y: 0.8 },
                      colors: ['#2E5BFF', '#FF6B35', '#00D284']
                    });
                  }}
                  className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-[#2E5BFF] hover:border-[#2E5BFF] group transition-all"
                >
                   <CheckCircle2 size={24} className="text-slate-200 group-hover:text-white" />
                </button>
              </motion.div>
            ))}
         </div>

         <button 
           onClick={onStartDIY}
           className="w-full py-4 rounded-2xl font-bold border-2 border-[#2E5BFF] text-[#2E5BFF] hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
         >
           <FlaskConical size={20} /> DIY Formula Builder
         </button>
      </div>
    </motion.div>
  );
};
