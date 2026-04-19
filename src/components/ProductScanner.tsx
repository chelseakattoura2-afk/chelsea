import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scan, 
  X, 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Leaf,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';
import { MOCK_PRODUCTS, Product } from '../constants';

export const ProductScanner = ({ onBack }: { onBack: () => void }) => {
  const [isScanning, setIsScanning] = useState(true);
  const [scannedProduct, setScannedProduct] = useState<Product | null>(null);
  const [showFillers, setShowFillers] = useState(false);

  useEffect(() => {
    if (isScanning) {
      const timer = setTimeout(() => {
        setIsScanning(false);
        setScannedProduct(MOCK_PRODUCTS[0]); // Default to first mock product
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isScanning]);

  const ScoreBadge = ({ score, label, color }: { score: number, label: string, color: string }) => (
    <div className="flex flex-col items-center">
      <div className={cn("w-24 h-24 rounded-full border-4 flex items-center justify-center relative mb-2", color)} style={{ borderColor: 'transparent', borderTopColor: 'currentColor' }}>
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 * (score / 100) }}
          className="absolute inset-0 border-4 rounded-full"
          style={{ borderColor: 'currentColor', borderRightColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        />
        <span className="text-2xl font-black text-slate-900">{score}%</span>
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[100] bg-white flex flex-col h-screen overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 pt-12 flex justify-between items-center bg-white z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold">Product Scanner</h2>
        <div className="w-10" />
      </div>

      <AnimatePresence mode="wait">
        {isScanning ? (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center p-12 bg-slate-900 text-white"
          >
            <div className="relative w-72 h-72 mb-12">
               <div className="absolute inset-0 border-x-2 border-white/20 rounded-[2.5rem]" />
               <motion.div 
                animate={{ y: [0, 280, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-[#2E5BFF] shadow-[0_0_20px_#2E5BFF] z-10"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Scan size={80} className="text-white/10" strokeWidth={1} />
               </div>
            </div>
            <h3 className="text-2xl font-black mb-4">Identifying Formulation</h3>
            <p className="text-white/40 font-medium max-w-xs text-center leading-relaxed">
              Decoding ingredients and matching them with Lebanese botanical databases...
            </p>
          </motion.div>
        ) : scannedProduct && (
          <motion.div
            key="results"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex-1 overflow-y-auto pb-10 bg-white"
          >
            {/* Summary Header */}
            <div className="p-8 text-center bg-slate-50 rounded-b-[4rem] mb-8">
               <div className="flex justify-center gap-8 mb-8">
                 <ScoreBadge score={scannedProduct.score} label="Purity Score" color="text-[#2E5BFF]" />
                 <ScoreBadge score={scannedProduct.lebaneseScore} label="Lebanese Rooted" color="text-[#FF6B35]" />
               </div>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">{scannedProduct.brand}</p>
               <h3 className="text-3xl font-black">{scannedProduct.name}</h3>
            </div>

            <div className="p-8 space-y-10">
               {/* Insight Row */}
               <div className="p-6 bg-[#2E5BFF]/5 border-2 border-[#2E5BFF]/10 rounded-[2.5rem] flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#2E5BFF] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#2E5BFF]/20">
                     <ShieldCheck size={24} />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-slate-800">Expert Analysis</p>
                     <p className="text-xs text-slate-500 font-medium">This product contains high-quality native extracts distilled in Mount Lebanon.</p>
                  </div>
               </div>

               {/* Ingredient Breakdown */}
               <section>
                 <div className="flex justify-between items-end mb-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#2E5BFF]">Ingredient Breakdown</h4>
                    <button 
                      onClick={() => setShowFillers(!showFillers)}
                      className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1"
                    >
                      {showFillers ? 'Hide Fillers' : 'Reveal Hidden Fillers'} <ChevronDown size={14} className={cn("transition-transform", showFillers && "rotate-180")} />
                    </button>
                 </div>

                 <div className="space-y-4">
                    {scannedProduct.ingredients
                      .filter(ing => showFillers ? true : ing.type !== 'filler')
                      .map((ing, idx) => (
                      <motion.div 
                        key={ing.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={cn(
                          "p-6 rounded-3xl border-2 transition-all group",
                          ing.type === 'native' ? "border-[#FF6B35]/20 bg-orange-50/30" : 
                          ing.type === 'beneficial' ? "border-[#2E5BFF]/10 bg-blue-50/30" : 
                          ing.type === 'filler' ? "border-slate-100 bg-slate-50 border-dashed" : "border-slate-100"
                        )}
                      >
                         <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                               {ing.type === 'native' && <Leaf size={16} className="text-[#FF6B35]" />}
                               {ing.type === 'beneficial' && <Sparkles size={16} className="text-[#2E5BFF]" />}
                               {ing.type === 'filler' && <AlertCircle size={16} className="text-slate-400" />}
                               <span className="font-bold text-slate-900">{ing.name}</span>
                            </div>
                            <span className={cn(
                              "text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-lg",
                              ing.type === 'native' ? "bg-[#FF6B35] text-white" : 
                              ing.type === 'beneficial' ? "bg-[#2E5BFF] text-white" : "bg-slate-200 text-slate-500"
                            )}>
                              {ing.type === 'native' ? 'Lebanese Native' : ing.type}
                            </span>
                         </div>
                         <p className="text-xs text-slate-500 font-medium leading-relaxed">{ing.description}</p>
                      </motion.div>
                    ))}
                 </div>
               </section>

               {/* Comparison or CTA */}
               <div className="pt-4">
                  <button className="w-full py-5 bg-slate-900 text-white rounded-3xl font-bold flex items-center justify-center gap-3 shadow-xl">
                     Compare with Similar Local Products <ArrowRight size={20} />
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
