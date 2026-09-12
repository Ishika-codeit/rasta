const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "all-schemes", label: "All Schemes" },
  { key: "my-applications", label: "My Applications" },
  { key: "document-locker", label: "Document Locker" },
];

const LANGUAGES = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
];

export default function Header({ activePage, onNavigate, activeLang = "en", onLangChange }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,41,66,0.06)]">
      <div className="max-w-7xl mx-auto px-gutter-desktop h-20 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg shrink-0">
          <div className="flex items-center gap-space-sm">
            <img
              alt="Raasta AI Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvwPsokFXGv7EhHBMes-UkR3oqjEzJvTieR2IWGbqjcejjssCpH-sre21Nrh2LfV4iJmKtrY2zsGS4C5F7Yz2qT1Izz7r2R_H4Xg5baTV3d4iiNmG5iQw37ILWY-7slppkNTb9SxC9_wOjYz4rL95W-wqx7lWcMKyBF_7JCiAo_KHHDJuH73zbTN5QnMjRO1uN2U_l5hGK9OvSqBpyMKhpVizaW1aLa0HhUono1WFuZZVuQKef4_rv5A"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none">
                Raasta AI
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-space-xs">
                Citizen Pathway &amp; Scheme Assistant
              </span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-space-xs">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                aria-current={activePage === item.key ? "page" : undefined}
                className={
                  activePage === item.key
                    ? "px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary font-label-lg rounded-lg"
                    : "px-space-sm py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                }
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.key);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex-1 max-w-md mx-space-sm hidden lg:block">
          <div className="relative flex items-center w-full bg-surface-container-low rounded-lg px-space-sm py-space-xs">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-space-xs">
              search
            </span>
            <input
              className="w-full bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant"
              placeholder="Search schemes by keyword, department, eligibility (e.g. Sukanya, NSP, Ration)..."
              type="text"
            />
            <button
              className="flex items-center justify-center p-space-xs text-on-surface-variant hover:text-primary transition-colors"
              title="Voice vernacular search"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">mic</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-space-sm shrink-0">
          <a
            className="relative inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-secondary-container text-on-secondary-container font-label-lg text-label-lg shadow-sm hover:brightness-105 transition-all"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("ask-raasta-ai");
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-secondary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-on-secondary-container" />
            </span>
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="hidden sm:inline">Ask Raasta AI</span>
          </a>

          <div className="hidden md:flex items-center bg-surface-container-low rounded-lg p-0.5 text-on-surface-variant gap-0.5">
            {LANGUAGES.map((lang) => (
              <a
                key={lang.code}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onLangChange && onLangChange(lang.code);
                }}
                className={
                  activeLang === lang.code
                    ? "px-2 py-1 rounded font-label-sm text-label-sm transition-colors bg-primary-container text-on-primary font-semibold"
                    : "px-2 py-1 rounded font-label-sm text-label-sm transition-colors text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }
              >
                {lang.label}
              </a>
            ))}
          </div>

          <button
            className="relative flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
            title="Notifications"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
          </button>

          <div className="flex items-center gap-space-xs pl-space-xs">
            <div className="hidden md:flex flex-col text-right">
              <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                Priya Sharma
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none">RA-9842</span>
            </div>
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqWutZL53q-fmXLPEmydCq57VaoP_XRWxAiXeevL8TbKfsVgSgKl8C9ZBHxSgpn55FTZqxJXomT5EsbxWCB4XkSL3GGXFit1yYfV3tWS2yXMMyPmu1ZDn2kOoqGnTlqbYnctS_J3tOkuGWcBnV4rRb2y_J1z8RyjDIJAlEcqNyQp_hkkG10vxDuO4QAZfKeBQkn5GtNcTLD1ssx2stIfVd2aZOrDZCEZ2fQFcMhE_--8feLOAPC4aR5Q"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
