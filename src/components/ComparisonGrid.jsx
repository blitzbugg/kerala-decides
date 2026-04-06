import React from 'react';
import CategoryCard from './CategoryCard';

const ComparisonGrid = ({ categories, parties }) => {
  if (categories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 animate-in fade-in duration-700">
        <span className="text-6xl grayscale opacity-40">🔍</span>
        <h3 className="text-2xl font-bold text-gray-500 font-malayalam">No matches found for your criteria.</h3>
        <p className="text-gray-400 font-medium">Try clearing your filters or search keywords.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 gap-12 mt-12">
      <div className="flex items-center gap-4 border-b border-gray-100 pb-12 mb-8">
        <div className="h-10 w-10 flex items-center justify-center bg-blue-600 rounded-xl text-white font-black shadow-lg shadow-blue-200">
          {categories.length}
        </div>
        <div>
          <h2 className="text-xl font-black text-gray-800 uppercase tracking-tighter">Comparative Themes</h2>
          <p className="text-sm font-bold text-gray-400">Directly comparing manifestos side-by-side</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            parties={parties}
          />
        ))}
      </div>
    </div>
  );
};

export default ComparisonGrid;
