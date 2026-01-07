
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RequestQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('submitted') === 'true') {
      setSubmitted(true);
    }
  }, [location]);

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl border-t-4 border-[#f37021]">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            <i className="fa-solid fa-check"></i>
          </div>
          <h1 className="text-3xl font-black text-[#003366] mb-4">Quote Request Received!</h1>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            Thank you for reaching out to Core Trucking Co. of Texas. One of our specialists will review your requirements and contact you shortly with a customized solution.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#003366] text-white px-8 py-3 rounded font-bold hover:bg-slate-800 transition-all"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#003366] mb-4">Request a Quote</h1>
          <p className="text-lg text-slate-600">Provide your shipment details below and we'll get back to you promptly.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
          {/* Note: Standard Netlify form config. To use Formspree, change action="https://formspree.io/f/your-id" and method="POST" */}
          <form
            name="quote-request"
            method="POST"
            data-netlify="true"
            className="space-y-6"
            action="/#/request-a-quote?submitted=true"
          >
            <input type="hidden" name="form-name" value="quote-request" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Name*</label>
                <input required type="text" name="name" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Email*</label>
                <input required type="email" name="email" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Company</label>
                <input type="text" name="company" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Service Needed</label>
                <select name="service" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all appearance-none bg-white">
                  <option>Drayage</option>
                  <option>Transfer</option>
                  <option>Logistics</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Date</label>
                <input type="date" name="date" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Pickup Location</label>
                <input type="text" name="pickup" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" placeholder="City or Zip" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Delivery Location</label>
                <input type="text" name="delivery" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" placeholder="City or Zip" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Container Size/Type</label>
                <input type="text" name="container_type" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" placeholder="e.g. 40ft High Cube" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Weight (LBS)</label>
                <input type="text" name="weight" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Hazmat?</label>
                <div className="flex space-x-4 h-[50px] items-center">
                  <label className="flex items-center"><input type="radio" name="hazmat" value="yes" className="mr-2" /> Yes</label>
                  <label className="flex items-center"><input type="radio" name="hazmat" value="no" defaultChecked className="mr-2" /> No</label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Additional Notes</label>
              <textarea name="notes" rows={4} className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none transition-all"></textarea>
            </div>

            <div className="text-center pt-4">
              <button type="submit" className="bg-[#f37021] text-white px-12 py-4 rounded-md font-bold text-xl hover:bg-[#e2621a] transition-all shadow-lg w-full md:w-auto">
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
