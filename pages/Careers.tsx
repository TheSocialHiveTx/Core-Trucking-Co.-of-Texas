
import React from 'react';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: 'Company Driver - CDL Class A',
      location: 'La Porte, TX',
      type: 'Full-time',
      desc: 'Seeking experienced port drayage drivers. Clean MVR and TWIC card required.'
    },
    {
      title: 'Owner Operator',
      location: 'Regional / Port',
      type: 'Contract',
      desc: 'Join our fleet of professional owner operators. Consistent freight and competitive pay.'
    },
    {
      title: 'Logistics Coordinator',
      location: 'La Porte, TX',
      type: 'Full-time',
      desc: 'Managing dispatch and terminal interactions. Knowledge of Port of Houston operations required.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#003366] mb-6">Join the Core Team</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            At Core Trucking, we believe our people are our greatest asset. We are committed to a work environment rooted in respect, ethics, and mutual growth.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-[#003366] mb-8">Current Openings</h2>
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#f37021] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#003366]">{job.title}</h3>
                  <span className="bg-[#f37021]/10 text-[#f37021] px-3 py-1 rounded-full text-xs font-bold uppercase">{job.type}</span>
                </div>
                <p className="text-slate-500 text-sm mb-2"><i className="fa-solid fa-location-dot mr-2"></i> {job.location}</p>
                <p className="text-slate-600 leading-relaxed mt-4">{job.desc}</p>
                <button className="mt-6 text-[#003366] font-bold hover:underline">View Details & Apply <i className="fa-solid fa-arrow-right ml-1"></i></button>
              </div>
            ))}
          </div>

          {/* Quick Apply Side Form */}
          <div className="lg:col-span-1">
            <div className="bg-[#003366] text-white p-8 rounded-2xl shadow-xl sticky top-28">
              <h2 className="text-2xl font-bold mb-6">Quick Application</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Full Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white outline-none focus:border-[#f37021]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white outline-none focus:border-[#f37021]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Phone</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white outline-none focus:border-[#f37021]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">CDL Class A Status</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white outline-none focus:border-[#f37021] appearance-none">
                    <option className="text-slate-900">I have a CDL-A</option>
                    <option className="text-slate-900">I do not have a CDL-A</option>
                    <option className="text-slate-900">I am an Owner Operator</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Message / Experience</label>
                  <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white outline-none focus:border-[#f37021]"></textarea>
                </div>
                <button className="w-full bg-[#f37021] text-white font-bold py-3 rounded hover:bg-[#e2621a] transition-all shadow-lg uppercase text-sm tracking-widest">
                  Apply Now
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  Or email your resume directly to:<br />
                  <a href="mailto:careers@coreoftx.com" className="text-white hover:underline">careers@coreoftx.com</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
