import React, { useState, useEffect, useRef } from 'react';
import { Send, Volume2, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import ChatBubble from '../components/ChatBubble';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setSuggestions([]);

    try {
      const response = await api.post('/chat', { message: text, voice: true });
      const data = response.data;

      const botMessage = {
        role: 'assistant',
        content: data.message,
        data: {
          actionPlan: data.actionPlan,
          proTip: data.proTip,
        }
      };

      setMessages(prev => [...prev, botMessage]);
      setSuggestions(data.suggestedQuestions || []);

      if (data.voiceResponse) {
        playVoice(data.voiceResponse);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again later."
      }]);
    } finally {
      setLoading(false);
    }
  };

  const playVoice = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar / Header */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full bg-white shadow-sm border-x border-slate-100">
        <header className="p-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-500" />
            </Link>
            <div>
              <h2 className="font-bold text-slate-900">Raasta AI</h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-slate-500">Online Assistant</span>
              </div>
            </div>
          </div>
          <Link to="/dashboard" className="text-sm font-medium text-primary hover:underline">My Dashboard</Link>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Volume2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">How can I help you today?</h3>
              <p className="text-slate-500 max-w-sm">
                Ask me about ration cards, income certificates, or any government scheme.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["I want to apply for a certificate", "What schemes are available for me?", "Check my application status"].map(s => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-primary hover:text-primary transition-all shadow-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} content={m.content} data={m.data} />
          ))}

          {loading && (
            <div className="flex justify-start mb-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 text-slate-400 text-sm italic">
                  Raasta is thinking...
                </div>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-white border-t border-slate-50">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs hover:bg-primary hover:text-white transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your request here..."
              className="flex-1 py-3 px-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all pr-12"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 p-2 bg-primary text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
