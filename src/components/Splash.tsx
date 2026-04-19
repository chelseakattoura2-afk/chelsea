import React from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export const Splash = ({ onComplete }: { onComplete: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-white z-[100]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <div className="w-24 h-24 bg-[#2E5BFF] rounded-[2rem] flex items-center justify-center mb-6 mx-auto relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-white/20 rounded-[2rem] scale-110"
          />
          <Leaf className="text-white w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">Myrēa</h1>
        <p className="text-slate-400 text-lg font-medium">ميريا</p>
      </motion.div>
    </motion.div>
  );
};
