import React from 'react';

export interface Treatment {
  id: string;
  name: string;
  description?: string;
}

export interface PremiumService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
  tags?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  technique: string;
  shortDescription: string;
  image: string; // Thumbnail
  fullImage: string; // For modal
  details: {
    diagnosis: string;
    conduct: string;
    result: string;
  };
}

export interface Testimonial {
  id: string;
  beforeImage: string;
  afterImage: string;
  patientName: string;
  procedure: string;
  quote: string;
  category: 'facial' | 'corporal' | 'peeling' | 'gluteo';
}

export interface ClinicStat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}