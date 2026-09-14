import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  User,
  ShieldCheck,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import api from '../api/api';

const DashboardPage = () => {
  const [data, setData] = useState({
    profile: null,
    applications: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await api.get('/dashboard');
        setData({
          profile: res.data.data.profile,
          stats: res.data.data.stats,
          applications: res.data.data.stats.totalApplications > 0
            ? await api.get('/applications/user/' + (res.data.data.user.id || 'me')).then(r => r.data.applications)
            : [],
          loading: false,
          error: null
        });
      } catch (err) {
        setData(prev => ({ ...prev, loading: false, error: 'Failed to load dashboard data' }));
      }
    };
    fetchDashboardData();
  }, []);

  if (data.loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">My Dashboard</h1>
            <p className="text-slate-500 mt-1">Manage your government services and applications</p>
          </div>
          <div className="flex gap-3">
            <Link to="/schemes" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <BookOpen className="w-4 h-4 text-primary" /> Browse Schemes
            </Link>
            <Link to="/applications" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <FileText className="w-4 h-4 text-primary" /> My Applications
            </Link>
            <Link to="/locker" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <FileText className="w-4 h-4 text-primary" /> My Documents
            </Link>
            <Link to="/verify" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <ShieldCheck className="w-4 h-4 text-primary" /> Verify Documents
            </Link>
            <Link to="/chat" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-md">
              <MessageSquare className="w-4 h-4" /> Ask AI
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">User Profile</h3>
                  <p className="text-xs text-slate-500">Verified Identity</p>
                </div>
              </div>

              <div className="space-y-4">
                {data.profile?.verifiedData ? (
                  Object.entries(data.profile.verifiedData).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                      <span className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-xs font-semibold text-slate-700">{value}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <p className="text-sm text-slate-400 italic">No verified data available</p>
                    <Link to="/verify" className="text-xs text-primary font-bold hover:underline mt-2 block">Verify Now →</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Applications List */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Your Applications
              </h3>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">
                {data.applications.length} Total
              </span>
            </div>

            {data.applications.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="text-slate-400 w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">No applications found</h4>
                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
                  You haven't started any applications yet. Use Raasta AI to find the right service.
                </p>
                <Link to="/chat" className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all">
                  Start Now
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {data.applications.map((app) => (
                  <div key={app._id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        app.status === 'Eligible - Ready to Apply' ? 'bg-green-50 text-green-600' :
                        app.status === 'Rejected' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {app.status === 'Eligible - Ready to Apply' ? <CheckCircle className="w-5 h-5" /> :
                         app.status === 'Rejected' ? <AlertCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{app.serviceId?.name || 'Government Service'}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            app.status === 'Eligible - Ready to Apply' ? 'bg-green-100 text-green-700' :
                            app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {app.status}
                          </span>
                          {app.trackingNumber && (
                            <span className="text-xs text-slate-400">ID: {app.trackingNumber}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/applications/download-pdf/${app._id}`, '_blank')}
                      className="p-2 bg-slate-50 text-slate-400 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white transition-all"
                    >
                      <FileText className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
