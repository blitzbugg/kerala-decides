import React from 'react';
import FiscalNote from './FiscalNote';

const CategoryCard = ({ category, parties }) => {
  const isWelfare = category.id === 'welfare_pension';

  const handleShare = async () => {
    const text = `Election 2026 Comparison Matrix: Kerala Decisions.\n\nIssue: ${category.icon} ${category.title}\n\nUDF: ${category.promises.UDF.substring(0, 50)}...\nLDF: ${category.promises.LDF.substring(0, 50)}...\nNDA: ${category.promises.NDA.substring(0, 50)}...\n\nCheck full details here: ${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Election 2026 Comparison: ${category.title}`,
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Sharing failed:', err);
      }
    } else {
      // Fallback for WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div
      id={category.id}
      className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all p-8 md:p-10 mb-12"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10 border-b border-gray-100 pb-8">
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 bg-blue-50 flex items-center justify-center rounded-2xl text-4xl shadow-sm border border-blue-100/50">
            {category.icon}
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-malayalam tracking-tight">{category.title}</h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Direct Comparison Matrix</p>
          </div>
        </div>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-all shadow-md shadow-green-200 active:scale-95 self-start md:self-auto"
        >
          <span className="text-xl">📤</span>
          <span>Share Logic</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(parties).map(([key, party]) => (
          <div
            key={key}
            className="flex flex-col h-full rounded-2xl border border-gray-100/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50/50"
          >
            <div
              className="px-6 py-4 flex flex-col justify-center items-center text-center gap-1 border-b"
              style={{ borderBottomColor: `${party.color}30`, backgroundColor: `${party.color}08` }}
            >
              <div
                className="px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ backgroundColor: party.color }}
              >
                {key}
              </div>
              <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wider">{party.brand || key}</p>
            </div>

            <div className="p-8 flex-1 flex flex-col items-center">
              <p className="text-gray-700 leading-relaxed font-medium font-malayalam text-lg text-center">
                {category.promises[key] || "No specific mention in preliminary manifesto points."}
              </p>

              {party.slogan && (
                <div className="mt-8 pt-6 border-t border-gray-100 w-full italic text-center">
                  <span
                    className="text-[10px] uppercase font-black tracking-widest opacity-30 block mb-2"
                    style={{ color: party.color }}
                  >
                    Campaign Slogan
                  </span>
                  <p className="text-sm font-bold opacity-60 font-malayalam leading-snug">
                    {party.slogan}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isWelfare && <FiscalNote />}
    </div>
  );
};

export default CategoryCard;
