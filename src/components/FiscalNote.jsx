import React from 'react';

const FiscalNote = () => {
  return (
    <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex flex-col md:flex-row gap-6 items-center shadow-inner">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">📊</span>
          <h3 className="text-red-900 font-extrabold text-lg uppercase tracking-wider">Fiscal Context (Reality Check)</h3>
        </div>
        <p className="text-red-700/80 text-sm md:text-base leading-relaxed font-semibold">
          While analyzing the above welfare and pension promises, note that Kerala's public debt for 2024-25 is estimated at
          <span className="text-red-900 font-black px-2 py-0.5 bg-red-100/50 rounded-lg mx-1 tabular-nums">₹4,88,091.20 Crore</span>.
          Voters are encouraged to evaluate the economic feasibility of individual manifesto promises.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-white/50 backdrop-blur rounded-xl border border-red-200 shrink-0">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">State Debt</span>
        <span className="text-2xl font-black text-red-700">₹4.88 L Cr</span>
      </div>
    </div>
  );
};

export default FiscalNote;
