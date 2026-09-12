export default function Dashboard({ onNavigate }) {
  return (
    <main className="w-full bg-background min-h-screen">
<div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 right-1/4 w-96 h-96 bg-surface-variant/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-80 -left-20 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-gutter-desktop py-space-lg flex flex-col gap-space-lg">

<section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="">Citizen Profile ID: RA-9842 • State: Maharashtra</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">
            Namaste, Raghavi</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
            Discover 1,200+ central &amp; state welfare schemes, track benefits, and get personalized AI recommendations tailored to your family profile.
          </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-center shrink-0"><a className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-colors" href="https://www.digilocker.gov.in" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">sync</span><span className="">DigiLocker Refresh</span></a><a className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:brightness-110 transition-all" href="#" onClick={(e) => { e.preventDefault(); onNavigate('update-profile'); }}><span className="material-symbols-outlined text-[18px]">tune</span><span className="">Update Profile</span></a></div>
</section><div className="flex flex-wrap items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm"><span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider px-space-xs">Quick Services:</span><a className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container text-primary font-label-md text-label-md transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('all-schemes'); }}><span className="material-symbols-outlined text-[18px]">grid_view</span><span className="">All Schemes</span></a><a className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container text-primary font-label-md text-label-md transition-colors" href="#" onClick={(e) => { e.preventDefault(); onNavigate('my-applications'); }}><span className="material-symbols-outlined text-[18px]">assignment</span><span className="">My Applications</span></a><a href="https://www.digilocker.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container text-primary font-label-md text-label-md transition-colors"><span className="material-symbols-outlined text-[18px]">folder_shared</span><span className="">Document Locker</span></a></div>

<section className="relative rounded-xl overflow-hidden bg-linear-to-r from-primary-container via-[#143c61] to-primary text-on-primary p-space-lg shadow-xl">
<div className="absolute -right-8 -bottom-8 w-64 h-64 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md max-w-3xl">
<div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[28px]">smart_toy</span>
</div>
<div className="space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
<span className="">Raasta AI Scheme Advisor</span>
</div>
<h2 className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary">
                3 new schemes matched to your profile with 98% eligibility!
              </h2>
<p className="font-body-md text-body-md text-primary-fixed-dim">
                Based on your updated household income bracket, student status of your daughter, and DigiLocker certificates synced today.
              </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0"><a className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-secondary-container text-on-secondary-container font-label-lg text-label-lg shadow-md hover:brightness-105 transition-all" href="#" onClick={(e) => e.preventDefault()}><span className="">View Matched Schemes</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span></a><a className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg transition-colors" href="#" onClick={(e) => e.preventDefault()}><span className="material-symbols-outlined text-[18px]">forum</span><span className="">Chat with Raasta AI</span></a></div>
</div>
</section>

<section className="grid grid-cols-2 gap-space-md lg:grid-cols-3">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-semibold">Matched Schemes</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">recommend</span>
</div>
</div>
<div className="mt-space-sm">
<span className="font-headline-lg text-headline-lg font-bold text-primary">04</span>
<div className="flex items-center gap-1 mt-space-xs text-on-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span className="">+2 new this month</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-semibold">Active Applications</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">pending_actions</span>
</div>
</div>
<div className="mt-space-sm">
<span className="font-headline-lg text-headline-lg font-bold text-primary">02</span>
<div className="flex items-center gap-1 mt-space-xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">Next review in 3 days</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant font-semibold">DigiLocker Verified</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
<div className="mt-space-sm">
<span className="font-headline-lg text-headline-lg font-bold text-primary">05 / 06</span>
<div className="flex items-center gap-1 mt-space-xs text-on-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span className="">Central e-Locker Synced</span>
</div>
</div>
</div>


</section>

<section className="space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
<div>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Citizen Service Categories</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Primary Welfare Gateways</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tap any service to trigger verification &amp; instant enrollment</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-sm">
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">school</span>
</div>

</div>
<div>
<div className="flex items-baseline gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">Scholarship</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(छात्रवृत्ति)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Pre-matric, Post-matric, National Merit, Single Girl Child &amp; Higher Education financial aid grants.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Featured Schemes</span>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs">NSP Portal</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs">PM Yasasvi</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs">Central Sector</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-space-xs">
<span className="">Coverage Ceiling:</span>
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">Up to ₹75,000/yr</span>
</div>
</div>
<div className="pt-space-md flex items-center gap-space-xs"><a className="flex-1 py-space-sm px-space-sm rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg text-center hover:brightness-110 transition-colors shadow-xs" href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">Explore Scholarships</a><a className="p-space-sm rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Check Eligibility" href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[20px]">fact_check</span></a></div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-sm">
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">volunteer_activism</span>
</div>

</div>
<div>
<div className="flex items-baseline gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">Pension</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(पेंशन योजनाएं)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Old age pensions, widow assistance, disability welfare, Atal Pension Yojana &amp; EPS schemes.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Featured Schemes</span>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs">IGNOAPS</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs">APY</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs">PM Shram Yogi</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-space-xs">
<span className="">Monthly Transfer:</span>
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">₹1,000 – ₹5,000</span>
</div>
</div>
<div className="pt-space-md flex items-center gap-space-xs"><a className="flex-1 py-space-sm px-space-sm rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg text-center hover:brightness-110 transition-colors shadow-xs" href="https://www.npscra.nsdl.co.in" target="_blank" rel="noopener noreferrer">Check Eligibility</a><a className="p-space-sm rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Quick Apply" href="https://www.npscra.nsdl.co.in" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[20px]">send</span></a></div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-sm">
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">child_care</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed-dim/40 text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
                  8.2% Sovereign Rate
                </span>
</div>
<div>
<div className="flex items-baseline gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">Sukanya Samriddhi</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(सुकन्या समृद्धि)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  High-interest sovereign savings scheme under 'Beti Bachao Beti Padhao' with triple tax exemption (EEE).
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1 text-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Eligibility:</span>
<span className="font-semibold text-primary">Girl child &lt; 10 years</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Tax Benefits:</span>
<span className="font-semibold text-on-tertiary-container">Sec 80C Full EEE</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Min Yearly Deposit:</span>
<span className="font-semibold text-primary">₹250</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-space-xs">
<span className="">Account Tenure:</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">Matures at 21 Yrs</span>
</div>
</div>
<div className="pt-space-md flex items-center gap-space-xs"><a className="flex-1 py-space-sm px-space-sm rounded-lg bg-secondary-container text-on-secondary-container font-label-lg text-label-lg text-center hover:brightness-105 transition-all shadow-xs" href="https://www.indiapost.gov.in" target="_blank" rel="noopener noreferrer">Calculate Returns</a><a className="p-space-sm rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Account Guide" href="https://www.indiapost.gov.in" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[20px]">help_center</span></a></div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
<div className="space-y-space-sm">
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">inventory_2</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-tertiary-container font-label-sm text-label-sm font-bold">
                  NFSA Linked
                </span>
</div>
<div>
<div className="flex items-baseline gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">Ration Card</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(राशन कार्ड सेवाएं)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  NFSA public distribution, One Nation One Ration Card (ONORC), BPL/AAY card e-KYC and grain allocation.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1 text-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Active Category:</span>
<span className="font-semibold text-primary">Antyodaya (AAY)</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">PMGKAY Quota:</span>
<span className="font-semibold text-on-tertiary-container">35 Kg Free Foodgrains</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Local FPS Store:</span>
<span className="font-semibold text-primary">Shop #104 (400m away)</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-space-xs">
<span className="">ONORC Portability:</span>
<span className="font-label-lg text-label-lg text-on-tertiary-container font-bold">Nationwide Active</span>
</div>
</div>
<div className="pt-space-md flex items-center gap-space-xs"><a className="flex-1 py-space-sm px-space-sm rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg text-center hover:brightness-110 transition-colors shadow-xs" href="https://nfsa.gov.in" target="_blank" rel="noopener noreferrer">Download e-Ration</a><a className="p-space-sm rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Track Quota" href="https://nfsa.gov.in" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[20px]">store</span></a></div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-2">
<div className="space-y-space-sm">
<div className="flex items-start justify-between">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">badge</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-tertiary-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
                    PAN-Aadhaar Linked
                  </span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                    Biometrics Safe
                  </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<div className="flex items-baseline gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">Aadhaar &amp; PAN Services</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(आधार एवं पैन सेवाएं)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Central identity integration, instant verification, biometric locking, DigiLocker repository link, and official demographic corrections.
                  </p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1 text-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Masked UID:</span>
<span className="font-mono font-semibold text-primary">XXXX-XXXX-9142</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Linked Permanent Account (PAN):</span>
<span className="font-mono font-semibold text-primary">ABCPS****M</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Virtual ID (VID):</span>
<span className="font-semibold text-on-tertiary-container">Generated &amp; Ready</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md flex flex-wrap items-center gap-space-sm"><a className="py-space-sm px-space-md rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:brightness-110 transition-colors shadow-xs" href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">Verify Identity Status</a><a className="py-space-sm px-space-md rounded-lg bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">Update Demographic Details</a><a className="py-space-sm px-space-md rounded-lg bg-surface-container-low text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors ml-auto flex items-center gap-1" href="https://resident.uidai.gov.in/aadhaar-lockunlock" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[16px]">lock_reset</span><span className="">Lock Biometrics</span></a></div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[24px]">arrow_back_ios_new</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">AI Personalized Recommendations for You</h2>
</div>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-0.5" href="#" onClick={(e) => e.preventDefault()}><span className="">View All Matches</span><span className="material-symbols-outlined text-[16px]">chevron_right</span></a>
</div>
<div className="space-y-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="space-y-space-xs max-w-md">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-tertiary-container font-label-sm text-label-sm font-bold">
                    98% Match
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ministry of Education</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Post-Matric STEM Scholarship for Girls</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Full tuition remission + ₹1,500 monthly stipend for class 11-12 engineering track.</p>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-xs shrink-0">
<span className="font-label-lg text-label-lg text-primary font-bold">₹28,000 / yr</span>
<a className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:brightness-110 transition-colors inline-block text-center" href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">Apply via AI</a>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="space-y-space-xs max-w-md">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-tertiary-container font-label-sm text-label-sm font-bold">
                    92% Match
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Dept of Post &amp; Women Welfare</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Sukanya Account for Ananya (Daughter)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Eligibility verified through DigiLocker Birth Certificate #DL-78192.</p>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-xs shrink-0">
<span className="font-label-lg text-label-lg text-secondary font-bold">8.2% Sovereign</span>
<a className="px-space-md py-space-xs rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:brightness-105 transition-colors inline-block text-center" href="https://www.indiapost.gov.in" target="_blank" rel="noopener noreferrer">Open Account</a>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="space-y-space-xs max-w-md">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-tertiary-container font-label-sm text-label-sm font-bold">
                    88% Match
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">PFRDA Central Pension</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Atal Pension Auto-Debit Plan</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guaranteed ₹3,000 monthly pension post-60 with ₹292 monthly auto-debit contribution.</p>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-xs shrink-0">
<span className="font-label-lg text-label-lg text-primary font-bold">Guaranteed ₹3,000/mo</span>
<a className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:brightness-110 transition-colors inline-block text-center" href="https://www.npscra.nsdl.co.in" target="_blank" rel="noopener noreferrer">Setup Mandate</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Recent Applications</h3>
<span className="material-symbols-outlined text-on-surface-variant">history_edu</span>
</div>
<div className="space-y-space-sm">

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-xs">
<div className="space-y-0.5">
<p className="font-label-lg text-label-lg text-primary font-semibold">NSP Post-Matric Merit Scholarship</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">App ID: #MH-2025-0812</p>
</div>
<span className="px-space-xs py-1 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold whitespace-nowrap">
                  Documents Approved
                </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-xs">
<div className="space-y-0.5">
<p className="font-label-lg text-label-lg text-primary font-semibold">PM Ujjwala 2.0 LPG Connection</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">App ID: #UJ-9104-3312</p>
</div>
<span className="px-space-xs py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold whitespace-nowrap">
                  Under Verification
                </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-xs">
<div className="space-y-0.5">
<p className="font-label-lg text-label-lg text-primary font-semibold">State Disability Support Direct Pay</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">App ID: #DBT-5501-1920</p>
</div>
<span className="px-space-xs py-1 rounded-md bg-surface-container-high text-on-tertiary-container font-label-sm text-label-sm font-semibold whitespace-nowrap">
                  Disbursement Scheduled
                </span>
</div>
</div>
<div className="mt-space-md pt-space-xs">
<a className="inline-flex items-center justify-center w-full py-space-xs rounded-lg text-primary hover:bg-surface-container font-label-md text-label-md transition-colors" href="#" onClick={(e) => e.preventDefault()}><span className="">View Full Application Timeline</span><span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span></a>
</div>
</div>

<div className="rounded-xl p-space-lg bg-primary-container text-on-primary shadow-md relative overflow-hidden flex flex-col justify-between">
<div className="absolute -top-12 -right-12 w-36 h-36 bg-surface-variant/10 rounded-full blur-xl pointer-events-none"></div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider font-bold">Multilingual Voice AI</span>
<span className="material-symbols-outlined text-secondary-container">record_voice_over</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-primary">Speak in your mother tongue</h4>
<p className="font-body-sm text-body-sm text-primary-fixed-dim">
                Tap the microphone and ask: "मेरी बेटी के लिए कौन सी छात्रवृत्ति है?" or "How to update ration card members?"
              </p>
</div>
<div className="mt-space-md flex items-center gap-space-sm">
<a className="flex-1 py-space-sm px-space-md rounded-lg bg-secondary-container text-on-secondary-container font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm hover:brightness-105 transition-all" id="voiceTriggerBtn" href="#" onClick={(e) => e.preventDefault()}><span className="material-symbols-outlined text-[20px]">mic</span><span className="">Start Speaking Now</span></a>
<div className="px-space-sm py-space-xs rounded-lg bg-surface-container-lowest/15 text-label-sm font-label-sm text-on-primary shrink-0">5 Languages</div>
</div>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container-low p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shadow-xs">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
<div>
<p className="font-label-lg text-label-lg text-primary font-semibold">Government Service Directory Synced</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Last verified with Central Welfare Registry today at 06:30 AM IST. All data encrypted end-to-end.</p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Assistance Hotline: <strong>1800-11-0044</strong></span>
</div>
</section>
</div>
</div>

</div>
    </main>
  );
}
