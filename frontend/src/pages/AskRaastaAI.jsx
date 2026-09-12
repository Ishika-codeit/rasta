import { useState, useRef } from "react";

const LANGUAGES = [
  { code: "hi-IN", label: "हिंदी" },
  { code: "en-IN", label: "English" },
  { code: "ta-IN", label: "தமிழ்" },
  { code: "te-IN", label: "తెలుగు" },
  { code: "mr-IN", label: "मराठी" },
  { code: "bn-IN", label: "বাংলা" },
];

export default function AskRaastaAI({ onNavigate }) {
  const [selectedLang, setSelectedLang] = useState("hi-IN");
  const [inputText, setInputText] = useState("");
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Namaste Priya ji! 🙏 I am your Raasta AI Civic Advisor. I have reviewed your verified profile from DigiLocker and Maharashtra State DBT register. I can guide you through central scholarships, agricultural input subsidies, ration entitlements, and health schemes.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (listening) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please use Google Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = selectedLang;
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };
    recognition.onerror = (event) => {
      setListening(false);
      console.error("Speech recognition error:", event.error);
      if (event.error === "not-allowed") {
        alert("Microphone permission is blocked. Please allow microphone access.");
        return;
      }
      alert(`Voice error: ${event.error}. Please type your message instead.`);
    };
    recognition.start();
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { from: "user", text: inputText };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: currentInput, lang: selectedLang }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { from: "ai", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "Something went wrong. Please check if the backend server is running." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-350 mx-auto px-gutter-desktop pt-space-lg pb-space-xl">
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-36 right-10 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <div className="relative mb-space-lg bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="space-y-space-xs max-w-3xl">
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                    Live Model v3.4 • Verified with IndiaStack
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Synced: Today, 09:42 AM IST</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Raasta AI Citizen Advisor</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Ask in plain language in Hindi, English, Tamil, Kannada, or Malayalam. Get tailored scheme matches, eligibility breakdowns, and instant application pathways.
                </p>
              </div>

              <div className="flex items-center gap-space-md bg-surface-container-low px-space-md py-space-sm rounded-xl shrink-0">
                <div className="relative flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                    <path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <span className="absolute font-headline-sm text-headline-sm text-primary font-bold">98%</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">Citizen Profile Sync</div>
                  <div className="font-label-sm text-label-sm text-on-tertiary-container font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span> 4/4 Verified Docs
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-3 space-y-space-md">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
                <div className="flex items-center gap-space-sm pb-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <img className="w-12 h-12 rounded-full object-cover shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBudJg9DHF34ZETtdkZmHDOfyA5LzQxNtOrOgQWnJyl9nabYPII0BGgC8F2JZMjTGN5u7hDPDsRlFC_o5xco2DafZqBf5anlxuogiLNLHS8EDLPvLiB5pXmgiAl5i37TgvYYPjwSN7rjjZft_N4lP4XrfkVS7AJgIx6avykVj64iHDL_wQ3XdOXJbv36rFUwwfjvETqu7PUe_dU2vMiPWJa1rmgmvj5dZBuPGNgJjsqWNgzo6PrLClMFw" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-headline-sm text-headline-sm text-primary truncate leading-tight">Raghavi</h2>
                    <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                      <span>RA-9842</span>
                      <span>•</span>
                      <span>Maharashtra</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Citizen Attributes</span>
                  <div className="flex items-center justify-between p-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-secondary-container text-[18px]">family_restroom</span> Ration Category
                    </span>
                    <span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded font-bold">BPL / AAY</span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">school</span> Dependents
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">1 Girl (Grade 11)</span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-primary-container text-[18px]">agriculture</span> Occupation
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Agri / Urban Worker</span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">currency_rupee</span> Annual Income
                    </span>
                    <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">₹1,80,000</span>
                  </div>
                </div>

                <div className="pt-space-xs">
                  <div className="flex items-center justify-between font-label-sm text-label-sm mb-1.5">
                    <span className="text-on-surface-variant">DigiLocker Verification</span>
                    <span className="text-on-tertiary-container font-semibold">Auto-Synced</span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                    <div className="bg-on-tertiary-container h-full rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-label-lg text-label-lg text-primary font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[20px]">lightbulb</span>
                    Suggested Inquiries
                  </h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Tap to ask</span>
                </div>
                <div className="space-y-space-xs">
                  <button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high transition text-on-surface font-body-sm text-body-sm flex items-start gap-2 group" type="button">
                    <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-0.5 transition-transform mt-0.5 shrink-0">arrow_forward</span>
                    <span>What scholarships is my daughter eligible for after 10th grade?</span>
                  </button>
                  <button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high transition text-on-surface font-body-sm text-body-sm flex items-start gap-2 group" type="button">
                    <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-0.5 transition-transform mt-0.5 shrink-0">arrow_forward</span>
                    <span>How can I apply for free solar rooftop under PM Surya Ghar?</span>
                  </button>
                  <button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high transition text-on-surface font-body-sm text-body-sm flex items-start gap-2 group" type="button">
                    <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-0.5 transition-transform mt-0.5 shrink-0">arrow_forward</span>
                    <span>Check if my pension amount can be increased under APY</span>
                  </button>
                  <button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high transition text-on-surface font-body-sm text-body-sm flex items-start gap-2 group" type="button">
                    <span className="material-symbols-outlined text-[18px] text-secondary group-hover:translate-x-0.5 transition-transform mt-0.5 shrink-0">arrow_forward</span>
                    <span>Can I get free medical treatment up to ₹5 lakh in private hospitals?</span>
                  </button>
                </div>
              </div>

              <div className="bg-primary-container text-on-primary rounded-xl p-space-md shadow-sm space-y-space-xs">
                <div className="flex items-center gap-space-xs font-label-md text-label-md font-semibold text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
                  Voice In Any Indian Tongue
                </div>
                <p className="font-body-sm text-body-sm text-surface-container-highest">
                  Press the mic at the bottom to speak naturally in Hindi, Marathi, Tamil, or Telugu. Raasta converts voice dialects to legal scheme criteria.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden min-h-180">
              <div className="bg-surface-container-low px-space-md py-space-sm flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-[22px]">smart_toy</span>
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-on-tertiary-container ring-2 ring-surface-container-low"></span>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">Raasta Conversational Engine</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span>Encrypted</span>
                      <span>•</span>
                      <span>Personal Data Protection Compliant</span>
                    </div>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-primary transition p-space-xs rounded-lg hover:bg-surface-container-high" title="Clear Chat Thread" type="button" onClick={() => setMessages([messages[0]])}>
                  <span className="material-symbols-outlined text-[20px]">restart_alt</span>
                </button>
              </div>

              <div className="flex-1 p-space-md space-y-space-lg overflow-y-auto max-h-160">
                {messages.map((m, i) => (
                  <div key={i} className={`flex items-start ${m.from === "user" ? "justify-end" : "gap-space-sm"}`}>
                    {m.from === "ai" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-1">
                        <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                      </div>
                    )}
                    <div className={`p-space-md max-w-xl shadow-sm ${
                      m.from === "user"
                        ? "bg-primary text-on-primary rounded-xl rounded-tr-none"
                        : "bg-surface-container-low rounded-xl rounded-tl-none text-on-surface"
                    }`}>
                      <p className="font-body-md text-body-md">
                        {m.text}
                      </p>
                    </div>
                    {m.from === "user" && (
                      <img className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYvly3x1pC1NygCANYigrYwy9a-iqDcnz6CAE9ArZa3B2v0_74NwOq1Bf9ohpzL2V6gEyNTZ-v53FfZ28R8F1vXn0qTvwrcnKm1fvYdAbxYn_yRUYiRKwAZoEOdKRko2rQeDbIo6Rbee1dyfiC5Dp5fYo1noyaQEkP3OKOrs1GafeZALdd6PKW5q5eM_S2mzI3is84mxBqKS7DiZ4EtZ_tjQtBEkAjjnn7G9ayESX7XnQjjxwAfe7t_Q" />
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex items-start gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl rounded-tl-none p-space-md shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-surface-container-lowest p-space-md space-y-space-sm shadow-[0_-4px_12px_rgba(15,41,66,0.04)]">
                <div className="flex items-center justify-between gap-space-xs overflow-x-auto pb-1">
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm shrink-0">
                    <span className="material-symbols-outlined text-[16px]">translate</span>
                    <span>Input Language:</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLang(lang.code)}
                        className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold transition ${
                          selectedLang === lang.code
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                        }`}
                        type="button"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center w-full bg-surface-container-low rounded-xl p-1.5">
                  <button
                    className={`flex items-center justify-center w-11 h-11 rounded-lg transition shrink-0 ${
                      listening
                        ? "bg-error text-on-error animate-pulse"
                        : "bg-surface-container-highest text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed"
                    }`}
                    title="Speak in your language"
                    onClick={startListening}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[24px]">mic</span>
                  </button>
                  <input
                    className="flex-1 bg-transparent px-space-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none border-none"
                    placeholder="Ask about any Central or State scheme, pension, subsidy, or document..."
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button
                    className="flex items-center gap-1.5 px-space-md py-space-xs rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold transition shrink-0 shadow-sm"
                    onClick={sendMessage}
                    disabled={loading || !inputText.trim()}
                    type="button"
                  >
                    <span>Send</span>
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  </button>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">lock</span> End-to-end civic ledger privacy protected
                  </span>
                  <span>Press Enter to Submit</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-space-md">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Top Recommendations</h3>
                  <span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded font-bold">For Priya</span>
                </div>
                <div className="space-y-space-md">
                  <div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs hover:bg-surface-container-high transition group">
                    <div className="relative w-full h-28 rounded-lg overflow-hidden mb-1">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4PR0j2ew5I6-UQ_KUd2eVYUmqPcG4miY-ONpUpybg7heQM_jxpP5QABxmeZuyLlfxgTAsE36VY700d7LTbnAtv2C-cpqljs3CViz6XwXKTVordihrcMG4FR51uwOIIprNO1STnm0VgrTprLEN3cqs_xnt40FpXD2oVqaJzb0Du1Rjvm-cqGu-kMiy7iT0866iGq6DWnq90KFH0fXogSdGnlJlueK-YC4nylSA8ivklQ-0iZBWhojPFQ" />
                      <span className="absolute top-2 left-2 font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 rounded font-semibold">95% Match</span>
                      <span className="absolute bottom-2 right-2 font-label-sm text-label-sm bg-surface-container-lowest text-primary px-2 py-0.5 rounded font-bold shadow-sm">₹78,000 Subsidy</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary font-bold group-hover:text-secondary transition-colors">
                        PM Surya Ghar: Muft Bijli Yojana
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                        Up to 300 units of free monthly solar electricity for residential households.
                      </p>
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Electricity Bill Verified</span>
                      <button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-primary font-label-sm text-label-sm font-bold transition shadow-sm" type="button">
                        1-Click Enroll
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs hover:bg-surface-container-high transition group">
                    <div className="relative w-full h-28 rounded-lg overflow-hidden mb-1">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVPdB8hbdIk5fei6MXwI9JnfibVm0tRq3UvDVu9wR_EfgOdIcoD3Qp7VKuxwBSSFktNffthV0YiUbfMgmWlTNVP4YrZBb_UUiFVxhL9V8mUc7WNtPVCO4V1OeKaBSBEq3Y9TNsVTo-IUmmqFRIBX7icdYSdy3Si4qiyKBkyfGPNxdW-8ollyqPKDCyvXZ8z3pFZCJuxim_HiY00WVsOHnykLiN_--ZxI1uvazlveqyuIKiWlh3-43Sig" />
                      <span className="absolute top-2 left-2 font-label-sm text-label-sm bg-on-tertiary-container text-on-tertiary px-2 py-0.5 rounded font-semibold">100% Pre-Approved</span>
                      <span className="absolute bottom-2 right-2 font-label-sm text-label-sm bg-surface-container-lowest text-secondary px-2 py-0.5 rounded font-bold shadow-sm">₹5,00,000 / Year</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary font-bold group-hover:text-secondary transition-colors">
                        Ayushman Bharat PM-JAY Golden Card
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                        Cashless secondary &amp; tertiary hospitalization coverage across 27,000 empaneled hospitals.
                      </p>
                    </div>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Ration Card Linked</span>
                      <button className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold transition shadow-sm" type="button">
                        Download Card
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs hover:bg-surface-container-high transition">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm bg-primary-container text-on-primary px-2 py-0.5 rounded font-semibold">Social Security</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">APY Auto-Debit</span>
                    </div>
                    <h4 className="font-label-lg text-label-lg text-primary font-bold">
                      Atal Pension Yojana Top-Up
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Upgrade monthly contribution to secure ₹3,000 guaranteed lifetime monthly pension after age 60.
                    </p>
                    <div className="pt-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">₹182/month auto-pay</span>
                      <button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-primary font-label-sm text-label-sm font-bold transition shadow-sm" type="button">
                        Upgrade Tier
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
                <div className="flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm font-bold">
                  <span className="material-symbols-outlined text-secondary text-[24px]">support_agent</span>
                  Need Human Assistance?
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Connect with a certified Village-Level Entrepreneur (VLE) at your nearest Common Service Centre (CSC) in Hadapsar, Pune.
                </p>
                <div className="flex items-center gap-2 pt-space-xs">
                  <button className="flex-1 py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md font-semibold transition text-center" type="button">
                    Find Nearest Kendra
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-secondary flex items-center justify-center transition" title="Call Toll-Free Helpline 14443" type="button">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
