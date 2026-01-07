
import React from 'react';

const News: React.FC = () => {
  const posts = [
    {
      id: 1,
      date: 'Oct 15, 2024',
      title: 'Preparing for Peak Season: Houston Port Update',
      excerpt: 'As the holiday season approaches, terminal volume at Bayport is expected to increase. See how Core Trucking is scaling up...'
    },
    {
      id: 2,
      date: 'Oct 02, 2024',
      title: 'Hazmat Certification Renewed',
      excerpt: 'We are proud to announce the renewal of our hazardous materials transport certification, ensuring continued safety for our clients.'
    },
    {
      id: 3,
      date: 'Sep 20, 2024',
      title: 'Fuel Surcharge Adjustment Notice',
      excerpt: 'Effective next month, fuel surcharges will be adjusted based on the national average. Read the full details here.'
    },
    {
      id: 4,
      date: 'Sep 05, 2024',
      title: 'New Chassis Fleet Arrival',
      excerpt: 'To better serve our overweight container clients, we have added five new specialized heavy-duty chassis to our fleet.'
    },
    {
      id: 5,
      date: 'Aug 22, 2024',
      title: 'Integrity in Trucking: Our 2024 Values Report',
      excerpt: 'A look at how Core Trucking maintains its ethical standards in a rapidly changing logistics landscape.'
    },
    {
      id: 6,
      date: 'Aug 10, 2024',
      title: 'Driver Appreciation Week 2024',
      excerpt: 'Celebrating the hard-working men and women who keep Core Trucking moving every single day.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-white py-20 border-b border-slate-200 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-[#003366] mb-4">Core News</h1>
          <p className="text-slate-600">Insights, updates, and announcements from the world of logistics.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News List */}
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row group">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                   <img src={`https://picsum.photos/id/${20 + post.id}/600/600`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="News" />
                </div>
                <div className="p-8 md:w-2/3">
                  <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest">{post.date}</span>
                  <h2 className="text-2xl font-bold text-[#003366] mt-2 mb-4 group-hover:text-[#f37021] transition-colors">{post.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">{post.excerpt}</p>
                  <button className="text-[#003366] font-bold text-sm hover:underline">Read Full Article <i className="fa-solid fa-arrow-right ml-1"></i></button>
                </div>
              </article>
            ))}
            
            {/* Pagination Placeholder */}
            <div className="flex justify-center pt-8">
               <nav className="flex space-x-2">
                 <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-[#003366]">1</button>
                 <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                 <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50"><i className="fa-solid fa-chevron-right"></i></button>
               </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Subscribe */}
            <div className="bg-[#003366] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">Subscribe to our newsletter for the latest Houston port updates and company news.</p>
              <form className="space-y-4">
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white outline-none focus:border-[#f37021]" />
                <button className="w-full bg-[#f37021] text-white font-bold py-3 rounded hover:bg-[#e2621a] transition-all">Subscribe Now</button>
              </form>
            </div>

            {/* Topics */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-lg font-bold text-[#003366] mb-4">Topics</h3>
               <div className="flex flex-wrap gap-2">
                 {['Port of Houston', 'Drayage', 'Safety', 'Company News', 'Logistics', 'Hazmat', 'Barbours Cut'].map((t) => (
                   <span key={t} className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-100 hover:bg-[#f37021] hover:text-white transition-all cursor-pointer">
                     {t}
                   </span>
                 ))}
               </div>
            </div>

            {/* Note to Developer */}
            <div className="bg-slate-100 p-6 rounded-xl border border-dashed border-slate-300">
               <p className="text-xs text-slate-500 italic">
                 <strong>Admin Note:</strong> This news list is currently static. For a real production site, these posts can be managed via a CMS or by editing this data array.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
