import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Upload, FileCheck, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react';
import api from '../api/api';

const VerifyPage = () => {
  const [schemeId, setSchemeId] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!schemeId || !file) {
      setError('Please select a scheme and upload a document');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    const formData = new FormData();
    formData.append('schemeId', schemeId);
    formData.append('document', file);

    try {
      const res = await api.post('/eligibility/verify', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 hover:bg-slate-200 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Eligibility Check</h1>
              <p className="text-slate-500">Verify your documents using our AI engine</p>
            </div>
          </div>
          <div className="bg-primary/10 text-primary p-3 rounded-2xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </header>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">1. Select Scheme</label>
                <select
                  value={schemeId}
                  onChange={(e) => setSchemeId(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                >
                  <option value="">-- Choose a scheme to verify --</option>
                  <option value="65d1a2b3c4d5e6f7a8b9c0d1">Income Certificate</option>
                  <option value="65d1a2b3c4d5e6f7a8b9c0d2">Caste Certificate</option>
                  <option value="65d1a2b3c4d5e6f7a8b9c0d3">Domicile Certificate</option>
                  <option value="65d1a2b3c4d5e6f7a8b9c0d4">Ration Card</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">2. Upload Document (Image/PDF)</label>
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                    file ? 'border-green-500 bg-green-50' : 'border-slate-300 bg-slate-50 group-hover:border-primary'
                  }`}>
                    <div className="bg-white p-4 rounded-full shadow-sm w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Upload className={`w-8 h-8 ${file ? 'text-green-500' : 'text-slate-400'}`} />
                    </div>
                    {file ? (
                      <p className="text-slate-700 font-semibold">{file.name}</p>
                    ) : (
                      <>
                        <p className="text-slate-700 font-semibold">Click to upload or drag and drop</p>
                        <p className="text-slate-400 text-xs mt-1">JPG, PNG or PDF (Max 5MB)</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Verifying...
                  </>
                ) : (
                  <>
                    <FileCheck className="w-5 h-5" /> Run Eligibility Check
                  </>
                )}
              </button>
            </form>
          </div>

          {result && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Verification Result</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  result.eligibility.eligible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {result.eligibility.eligible ? 'Eligible' : 'Not Eligible'}
                </span>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-700 mb-4">Extracted Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(result.eligibility.extractedData || {}).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-[10px] uppercase text-slate-400 font-bold">{key}</span>
                        <span className="text-sm text-slate-700">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-700 mb-2">AI Analysis</h4>
                  <p className="text-sm text-blue-600 leading-relaxed">
                    {result.eligibility.analysis}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700">Match Score:</span>
                    <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: `${result.eligibility.matchPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-blue-700">{result.eligibility.matchPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
