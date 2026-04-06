import { useState, useMemo } from 'react';
import manifestoData from '../data/manifesto.json';

export const PERSONA_MAPPING = {
  'All': [],
  'Student': ['education_students', 'higher_education', 'youth_employment', 'technical_education', 'it_technology'],
  'Farmer': ['agriculture', 'dairy_livestock', 'micro_enterprise', 'cooperative_sector', 'special_packages'],
  'Woman': ['women_transport', 'women_welfare', 'kudumbashree', 'child_welfare'],
  'Senior Citizen': ['elderly_care', 'welfare_pension', 'disability_welfare', 'health_insurance'],
  'Entrepreneur': ['youth_employment', 'industry_investment', 'it_technology', 'micro_enterprise']
};

export const PERSONA_ICONS = {
  'All': '🏠',
  'Student': '🎓',
  'Farmer': '🌾',
  'Woman': '👩',
  'Senior Citizen': '👴',
  'Entrepreneur': '💼'
};

export function useFilter() {
  const [selectedPersona, setSelectedPersona] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    let categories = manifestoData.categories;

    // Filter by Persona
    if (selectedPersona !== 'All') {
      const allowedIds = PERSONA_MAPPING[selectedPersona] || [];
      categories = categories.filter(cat => allowedIds.includes(cat.id));
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      categories = categories.filter(cat =>
        cat.title.toLowerCase().includes(query) ||
        Object.values(cat.promises).some(p => p.toLowerCase().includes(query))
      );
    }

    return categories;
  }, [selectedPersona, searchQuery]);

  return {
    selectedPersona,
    setSelectedPersona,
    searchQuery,
    setSearchQuery,
    filteredCategories,
    parties: manifestoData.parties,
    electionInfo: {
      date: manifestoData.electionDate,
      state: manifestoData.state,
      election: manifestoData.election
    }
  };
}
