import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Thermometer, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LEBANESE_PLANTS } from '../constants';
import { cn } from '../lib/utils';

const MOCK_LIFESTYLE_DATA = [
  { day: 'Mon', hydration: 80, stress: 20 },
  { day: 'Tue', hydration: 75, stress: 45 },
  { day: 'Wed', hydration: 95, stress: 10 },
  { day: 'Thu', hydration: 60, stress: 80 },
  { day: 'Fri', hydration: 85, stress: 30 },
  { day: 'Sat', hydration: 90, stress: 15 },
  { day: 'Sun', hydration: 88, stress: 25 },
];

export const Dashboard = ({ userData, onNavigate }: { userData: any, onNavigate: (s: any) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#F8FAFC]/30 overflow-y-auto pb-24"
    >
      <div className="p-6 pt-12 flex justify-between items-start bg-white">
        <div>
          <p className="text-slate-400 font-medium">Hello, {userData.name || 'Explorer'}</p>
          <h2 className="text-2xl font-bold">Your Skin Today</h2>
        </div>
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden">
          <img 
            src="/Myrea Logo.png" 
            alt="Logo" 
            className="w-8 h-8 object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/myrea/100/100';
            }}
          />
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-[#2E5BFF] rounded-full flex items-center justify-center text-white shadow-lg">
              <Zap size={32} />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Health Index</p>
              <p className="text-3xl font-bold">Great Condition</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold">Hydration</span>
              <div className="flex-1 mx-6 h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-[#2E5BFF]" />
              </div>
              <span className="font-bold text-[#2E5BFF]">85%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-6">Native for You</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {LEBANESE_PLANTS.map(plant => (
            <div 
              key={plant.id}
              onClick={() => onNavigate({ screen: 'plant-detail', plant })}
              className="min-w-[200px] bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm cursor-pointer"
            >
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">{plant.arabicName}</p>
              <p className="text-xl font-bold">{plant.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8">
           <h3 className="text-xl font-bold mb-2">Skin Evolution</h3>
           <div className="h-48 w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_LIFESTYLE_DATA}>
                  <defs>
                    <linearGradient id="colorHyd" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2E5BFF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2E5BFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <Area type="monotone" dataKey="hydration" stroke="#2E5BFF" strokeWidth={3} fill="url(#colorHyd)" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>
      </div>
    </motion.div>
  );
};
