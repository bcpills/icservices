export type ServiceCategory = 
  | 'landscaping' 
  | 'pressure-washing' 
  | 'deck-dock' 
  | 'boat-cleaning' 
  | 'labor';

export interface ServiceItem {
  id: ServiceCategory;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  equipment: string[];
  typicalTime: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeStats: string;
  afterStats: string;
  theme: 'wood' | 'boat' | 'siding' | 'lawn';
}

export interface ServiceTown {
  name: string;
  county: string;
  waterway: string;
  schedule: string;
  responseTime: string;
}
