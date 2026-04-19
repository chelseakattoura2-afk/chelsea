import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';

export const Onboarding = ({ 
  step, 
  onNext, 
  userData, 
  setUserData 
}: { 
  step: 'name' | 'intro';
  onNext: () => void;
  userData: any;
  setUserData: (d: any) => void;
}) => {
  if (step === 'name') {
    return (
      <motion.div
        key="onboarding-name"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex-1 p-8 pt-20 flex flex-col"
      >
        <h2 className="text-3xl font-bold leading-tight mb-4">Let's get to know you.</h2>
        <p className="text-slate-500 mb-12 text-lg">What should we call you?</p>
        <div className="space-y-6">
          <input 
            type="text" 
            placeholder="First Name"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            className="w-full text-2xl font-semibold border-b-2 border-slate-100 focus:border-[#2E5BFF] outline-none py-2 transition-colors placeholder:text-slate-200"
          />
        </div>
        <div className="mt-auto">
          <button 
            disabled={!userData.name}
            onClick={onNext}
            className="w-full py-4 rounded-2xl font-semibold text-lg bg-[#2E5BFF] text-white disabled:opacity-50"
          >
            Continue <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="onboarding-intro"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 p-8 pt-20 flex flex-col"
    >
      <div className="w-full aspect-square bg-[#F8FAFC] rounded-[3rem] mb-12 flex items-center justify-center relative overflow-hidden p-12">
         <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-full h-full border-4 border-[#2E5BFF]/10 rounded-full flex items-center justify-center"
         >
           <motion.div className="w-3/4 h-3/4 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/Myrea Logo.png" 
                alt="Myrēa" 
                className="w-1/2 h-1/2 object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/myrea/200/200';
                }}
              />
           </motion.div>
         </motion.div>
         <div className="absolute top-10 left-10 w-8 h-8 bg-[#FF6B35] rounded-full" />
         <div className="absolute bottom-20 right-10 w-12 h-12 bg-[#FFB7C5] rounded-full" />
      </div>
      <h2 className="text-3xl font-bold leading-tight mb-4">Discover Lebanese Heritage through Skin.</h2>
      <p className="text-slate-500 mb-8 text-lg leading-relaxed">We use ethnobotanical wisdom to personalize your skincare routine with local indigenous plants.</p>
      <div className="mt-auto">
        <button 
          onClick={onNext}
          className="w-full py-4 rounded-2xl font-semibold text-lg bg-[#2E5BFF] text-white"
        >
          Start Skin Quiz
        </button>
      </div>
    </motion.div>
  );
};
