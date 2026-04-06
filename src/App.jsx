import React from 'react';
import Header from './components/Header';
import PersonaFilter from './components/PersonaFilter';
import ComparisonGrid from './components/ComparisonGrid';
import { useFilter } from './hooks/useFilter';

function App() {
  const { 
    selectedPersona, 
    setSelectedPersona, 
    searchQuery, 
    setSearchQuery, 
    filteredCategories, 
    parties, 
    electionInfo 
  } = useFilter();

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#333333] font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/50 via-white to-transparent -z-10 pointer-events-none" />
      <div className="fixed top-20 right-[-100px] h-96 w-96 bg-blue-100 rounded-full blur-[140px] opacity-40 -z-50" />
      <div className="fixed bottom-20 left-[-100px] h-96 w-96 bg-red-100 rounded-full blur-[140px] opacity-40 -z-50" />

      <Header 
        electionDate={electionInfo.date} 
        state={electionInfo.state} 
        election={electionInfo.election}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-bounce">
            <span className="px-4 py-1 rounded-full bg-blue-600/5 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] border border-blue-600/10">
              Objective Decision Support
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent leading-[1.1]">
            Kerala Decides 2026: <br/> Side-by-Side Manifestos
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed font-malayalam">
            തിരഞ്ഞെടുപ്പ് വാഗ്ദാനങ്ങൾ നേരിട്ട് താരതമ്യം ചെയ്യുക. നിങ്ങളുടെ മുൻഗണനകൾ തിരഞ്ഞെടുത്ത് ഓരോ മുന്നണിയും എന്തു വാഗ്ദാനം ചെയ്യുന്നു എന്ന് മനസ്സിലാക്കുക.
          </p>
        </section>

        {/* Filters */}
        <PersonaFilter 
          selectedPersona={selectedPersona} 
          setSelectedPersona={setSelectedPersona}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Content */}
        <ComparisonGrid 
          categories={filteredCategories} 
          parties={parties} 
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/50 backdrop-blur-sm py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 saturate-0 opacity-50 grayscale">
             <div className="h-8 w-8 bg-blue-700 rounded-lg" />
             <div className="h-8 w-8 bg-red-700 rounded-lg" />
             <div className="h-8 w-8 bg-orange-600 rounded-lg" />
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-loose">
            Disclaimer: This dashboard is for educational purposes based on preliminary manifesto points collected for 2026. <br/> 
            Data is strictly non-partisan and compiled for voter convenience.
          </p>
          <div className="h-px w-24 bg-gray-200" />
          <p className="text-gray-900 font-black text-sm">© 2026 Kerala Decisions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
