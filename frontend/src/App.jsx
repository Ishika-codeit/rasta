import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AllSchemes from "./pages/AllSchemes";
import MyApplications from "./pages/MyApplications";
import UpdateProfile from "./pages/UpdateProfile";
import DocumentLocker from "./pages/DocumentLocker";
import AskRaastaAI from "./pages/AskRaastaAI";

const PAGES = {
  dashboard: Dashboard,
  "all-schemes": AllSchemes,
  "my-applications": MyApplications,
  "update-profile": UpdateProfile,
  "document-locker": DocumentLocker,
  "ask-raasta-ai": AskRaastaAI,
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [activeLang, setActiveLang] = useState("en");

  const PageComponent = PAGES[activePage] || Dashboard;

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen pt-20">
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        activeLang={activeLang}
        onLangChange={setActiveLang}
      />
      <div className="px-10">
        <PageComponent onNavigate={setActivePage} />
      </div>
    </div>
  );
}
