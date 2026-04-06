import React from 'react';
import { PERSONA_MAPPING, PERSONA_ICONS } from '../hooks/useFilter';

const PersonaFilter = ({ selectedPersona, setSelectedPersona, searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full flex flex-col gap-6 py-8 px-4 max-w-7xl mx-auto items-center">
      <div className="w-full max-w-3xl relative">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search issues, promises, or keywords..."
          className="w-full h-14 pl-12 pr-6 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 shadow-sm text-gray-700 font-medium transition-all"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide py-2 flex md:justify-center items-center gap-3">
        {Object.keys(PERSONA_MAPPING).map((persona) => (
          <button
            key={persona}
            onClick={() => setSelectedPersona(persona)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all shrink-0 font-medium ${
              selectedPersona === persona
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 translate-y-[-2px]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600'
            }`}
          >
            <span className="text-xl">{PERSONA_ICONS[persona]}</span>
            <span className="text-sm md:text-base font-bold whitespace-nowrap">{persona}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PersonaFilter;
