import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  ClipboardList, 
  Scan, 
  User 
} from 'lucide-react';
import { cn } from './lib/utils';
import { Splash } from './components/Splash';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { Herbarium } from './components/Herbarium';
import { Routine } from './components/Routine';
import { PlantDetail } from './components/PlantDetail';
import { ProductScanner } from './components/ProductScanner';

type Screen = 'splash' | 'onboarding-name' | 'onboarding-intro' | 'dashboard' | 'herbarium' | 'scan' | 'product-scan' | 'routine' | 'profile';

export default function App() {
  const [screen, setScreen] = React.useState<Screen>('splash');
  const [userData, setUserData] = React.useState({ name: '', dob: '', skinType: 'Combination' });
  const [selectedPlant, setSelectedPlant] = React.useState<any>(null);

  const handleNavigate = (path: { screen: Screen, plant?: any }) => {
    if (path.plant) setSelectedPlant(path.plant);
    setScreen(path.screen);
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-white text-slate-900 font-sans relative overflow-hidden flex flex-col shadow-2xl border-x border-slate-100">
      <AnimatePresence mode="wait">
        {screen === 'splash' && <Splash onComplete={() => setScreen('onboarding-name')} />}
        
        {screen === 'onboarding-name' && (
          <Onboarding 
            step="name" 
            userData={userData} 
            setUserData={setUserData} 
            onNext={() => setScreen('onboarding-intro')} 
          />
        )}

        {screen === 'onboarding-intro' && (
          <Onboarding 
            step="intro" 
            userData={userData} 
            setUserData={setUserData} 
            onNext={() => setScreen('dashboard')} 
          />
        )}

        {screen === 'dashboard' && (
          <Dashboard 
            userData={userData} 
            onNavigate={handleNavigate} 
          />
        )}

        {screen === 'herbarium' && (
          <Herbarium onSelect={(plant) => { setSelectedPlant(plant); setScreen('dashboard'); /* Mock detail transition */ }} />
        )}

        {screen === 'routine' && (
          <Routine onStartDIY={() => alert('Lab coming soon!')} />
        )}

        {screen === 'product-scan' && (
          <ProductScanner onBack={() => setScreen('dashboard')} />
        )}

        {selectedPlant && (
          <PlantDetail plant={selectedPlant} onBack={() => setSelectedPlant(null)} />
        )}
      </AnimatePresence>

      {['dashboard', 'herbarium', 'routine', 'profile', 'product-scan'].includes(screen) && (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-6 z-50 max-w-md mx-auto">
          {[
            { id: 'dashboard', icon: Home, label: 'Home' },
            { id: 'herbarium', icon: Search, label: 'Explore' },
            { id: 'product-scan', icon: Scan, label: 'Scan' },
            { id: 'routine', icon: ClipboardList, label: 'Routine' },
            { id: 'profile', icon: User, label: 'Profile' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setSelectedPlant(null); setScreen(item.id as Screen); }}
              className={cn(
                "flex flex-col items-center gap-1 transition-all",
                screen === item.id ? "text-[#2E5BFF]" : "text-slate-400"
              )}
            >
              <item.icon size={22} strokeWidth={screen === item.id ? 2.5 : 2} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
