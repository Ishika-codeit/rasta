import React from 'react';
import { User, Bot } from 'lucide-react';

const ChatBubble = ({ role, content, data }) => {
  const isBot = role === 'assistant';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-6`}>
      <div className={`flex gap-3 max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isBot ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
          {isBot ? <Bot size={18} /> : <User size={18} />}
        </div>

        <div className={`p-4 rounded-2xl shadow-sm ${isBot ? 'bg-white border border-slate-100 text-slate-800' : 'bg-primary text-white'}`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>

          {data && (
            <div className="mt-4 space-y-4">
              {data.actionPlan && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800">
                  <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Action Plan
                  </h4>
                  <ul className="text-xs space-y-2">
                    {data.actionPlan.map((step, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="font-bold text-primary">{idx + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.proTip && (
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-800">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1">💡 Pro Tip</h4>
                  <p className="text-xs italic">{data.proTip}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
