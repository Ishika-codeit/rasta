import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MessageSquare, FileText } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">Raasta AI</span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="px-4 py-2 font-medium text-slate-600 hover:text-primary transition-colors">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-sm">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Navigate Government <span className="text-primary">Services</span> <br />
          with Intelligence.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Raasta AI is your AI-powered companion for Indian government schemes.
          Discover eligibility, verify documents, and track your applications—all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register" className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/30">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-32 text-left">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-all group">
            <div className="bg-white p-3 rounded-2xl shadow-sm w-fit mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Navigator</h3>
            <p className="text-slate-600 leading-relaxed">
              Ask questions in your local language and get instant, accurate guidance on certificates and schemes.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-all group">
            <div className="bg-white p-3 rounded-2xl shadow-sm w-fit mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Eligibility</h3>
            <p className="text-slate-600 leading-relaxed">
              Upload your documents and let our OCR engine verify if you qualify for a scheme in seconds.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-all group">
            <div className="bg-white p-3 rounded-2xl shadow-sm w-fit mb-6 group-hover:scale-110 transition-transform">
              <FileText className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Application Tracking</h3>
            <p className="text-slate-600 leading-relaxed">
              Stop wondering about your status. Get real-time updates and professional action plans.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 text-center text-slate-500 text-sm">
        <p>© 2026 Raasta AI. Empowering citizens with technology.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
