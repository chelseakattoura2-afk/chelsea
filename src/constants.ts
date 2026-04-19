export interface Plant {
  id: string;
  name: string;
  arabicName: string;
  scientificName: string;
  benefits: string[];
  concerns: string[];
  origin: string;
  terrain: string;
  transformation: string[];
  description: string;
  color: string;
}

export const LEBANESE_PLANTS: Plant[] = [
  {
    id: 'rosemary',
    name: 'Rosemary',
    arabicName: 'إكليل الجبل',
    scientificName: 'Salvia rosmarinus',
    benefits: ['Antioxidant', 'Circulation boost', 'Purifying'],
    concerns: ['Dullness', 'Oily skin', 'Scalp health'],
    origin: 'Batroun & Koura',
    terrain: 'Sunny, well-drained rocky slopes',
    transformation: ['Steam Distillation', 'Oil Infusion'],
    description: 'A resilient Mediterranean shrub known for its refreshing woody aroma and potent antioxidant properties.',
    color: '#3B82F6' // Electric Blue
  },
  {
    id: 'thyme',
    name: 'Wild Thyme',
    arabicName: 'زعتر بري',
    scientificName: 'Thymus syriacus',
    benefits: ['Antimicrobial', 'Soothing', 'Healing'],
    concerns: ['Acne', 'Inflammation', 'Blemishes'],
    origin: 'Shouf Biosphere Reserve',
    terrain: 'Arid limestone ridges',
    transformation: ['Cold Pressing', 'Drying'],
    description: 'The soul of Lebanese hills. Wild thyme is a powerhouse of thymol, fighting breakouts and soothing the spirit.',
    color: '#10B981' // Green
  },
  {
    id: 'damask-rose',
    name: 'Damask Rose',
    arabicName: 'ورد جوري',
    scientificName: 'Rosa damascena',
    benefits: ['Hydrating', 'Toning', 'Anti-aging'],
    concerns: ['Dryness', 'Redness', 'Fine lines'],
    origin: 'Qusnaya & Mount Lebanon',
    terrain: 'Cool mountain valleys',
    transformation: ['Hydrosol Distillation', 'Petal Infusion'],
    description: 'The queen of flowers. Distilled into rose water, it balances the skin’s pH and provides a dewy glow.',
    color: '#EC4899' // Pink
  },
  {
    id: 'bitter-orange',
    name: 'Bitter Orange',
    arabicName: 'بوصفير',
    scientificName: 'Citrus aurantium',
    benefits: ['Brightening', 'Sebum control', 'Vitamin C boost'],
    concerns: ['Hyperpigmentation', 'Active breakouts'],
    origin: 'Maghdouche',
    terrain: 'Coastal plains and valleys',
    transformation: ['Steam Distillation', 'Peel Extraction'],
    description: 'Famous for Mazaher (Orange Blossom Water), it tightens pores and brightens the complexion.',
    color: '#F59E0B' // Orange
  }
];

export interface Product {
  id: string;
  name: string;
  brand: string;
  score: number;
  lebaneseScore: number;
  ingredients: {
    name: string;
    type: 'beneficial' | 'unnecessary' | 'filler' | 'native';
    description: string;
  }[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'cedar-cleanser',
    name: 'Cedar Mist Cleanser',
    brand: 'Urban Aura',
    score: 82,
    lebaneseScore: 45,
    ingredients: [
      { name: 'Glycerin', type: 'beneficial', description: 'Powerful humectant for hydration.' },
      { name: 'Rosa Damascena Water', type: 'native', description: 'Lebanese Damask Rose water for toning.' },
      { name: 'Sodium Benzoate', type: 'unnecessary', description: 'Standard preservative, usually safe but non-active.' },
      { name: 'Silicon Dioxide', type: 'filler', description: 'Used for texture, provides no skin benefit.' },
      { name: 'Citrus Aurantium Peel', type: 'native', description: 'Lebanese Bitter Orange for brightening.' }
    ]
  },
  {
    id: 'generic-moisturizer',
    name: 'Daily Hydration Cream',
    brand: 'Global Glow',
    score: 64,
    lebaneseScore: 10,
    ingredients: [
      { name: 'Mineral Oil', type: 'filler', description: 'Petroleum-based occlusive, can feel heavy.' },
      { name: 'Phenoxyethanol', type: 'unnecessary', description: 'Common preservative.' },
      { name: 'Carbomer', type: 'filler', description: 'Synthetic thickening agent.' },
      { name: 'Rosemary Extract', type: 'native', description: 'Traces of Rosemary found.' }
    ]
  }
];

export const APP_THEME = {
  colors: {
    primary: '#2E5BFF', // Electric Blue
    accent: '#FF6B35',  // Warm Orange
    soft: '#F8FAFC',
    border: '#E2E8F0',
    zinc: {
      900: '#0F172A',
      500: '#64748B',
      100: '#F1F5F9'
    }
  }
};
