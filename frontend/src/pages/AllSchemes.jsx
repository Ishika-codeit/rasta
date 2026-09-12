export default function AllSchemes({ onNavigate }) {
  return (
    <main className="w-full bg-background min-h-screen">
<div className="flex flex-col w-full">

<section className="relative w-full bg-surface-container-low overflow-hidden pb-space-xl pt-space-lg">

<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-surface-container-highest/60 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-surface-variant/40 blur-2xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-gutter-desktop relative z-10">

<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
<span>Citizen Portal</span>
</a>
<span>/</span>
<span className="text-on-surface font-semibold">All Welfare Schemes</span>
</div>
<div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span>Central Repository Synced: 12 mins ago</span>
</div>
</div>

<div className="max-w-3xl mb-space-lg">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm mb-space-xs shadow-sm">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span>National Civic Discovery Directory 2025</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-tight">
          Discover Welfare Schemes &amp; Subsidies
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs max-w-2xl">
          Explore 1,200+ Central and State Government welfare schemes with instant AI-driven eligibility verification tailored to your household profile.
        </p>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md mb-space-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-sm items-center">

<div className="lg:col-span-6 relative flex items-center bg-surface-container-low rounded-lg px-space-sm py-2">
<span className="material-symbols-outlined text-on-surface-variant text-[22px] mr-space-xs shrink-0">travel_explore</span>
<input className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant" id="schemeSearchInput" placeholder="Search by keywords, beneficiary, department (e.g. STEM, Kisan, LPG)..." type="text"/>
<button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors flex items-center" title="Vernacular Voice Prompt" type="button">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
</div>

<div className="lg:col-span-3 relative flex items-center bg-surface-container-low rounded-lg px-space-sm py-2">
<span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-space-xs shrink-0">location_on</span>
<div className="flex flex-col w-full">
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Jurisdiction / State</span>
<select className="bg-transparent border-none outline-none font-label-lg text-label-lg text-on-surface cursor-pointer w-full mt-0.5">
<option value="all">All India (Central + States)</option>
<option value="mh">Maharashtra</option>
<option value="up">Uttar Pradesh</option>
<option value="ka">Karnataka</option>
<option value="tn">Tamil Nadu</option>
<option value="wb">West Bengal</option>
<option value="rj">Rajasthan</option>
</select>
</div>
</div>

<div className="lg:col-span-3 flex items-center gap-space-xs">
<button className="w-full flex items-center justify-center gap-space-xs py-3 px-space-md rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">tune</span>
<span>Find Matching Schemes</span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs mt-space-sm pt-space-xs text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Trending Searches:</span>
<button className="px-space-xs py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" type="button">Higher STEM Grant</button>
<button className="px-space-xs py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" type="button">Girl Child Savings</button>
<button className="px-space-xs py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" type="button">Small Farmer ₹6000</button>
<button className="px-space-xs py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" type="button">Ayushman Golden Card</button>
<button className="px-space-xs py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" type="button">Solar Rooftop Subsidy</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-primary-container text-on-primary shadow-sm flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">apps</span>
<span>All Schemes (1,248)</span>
</button>
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">school</span>
<span>Education &amp; Scholarships</span>
</button>
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">elderly</span>
<span>Social Pension</span>
</button>
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">family_restroom</span>
<span>Women &amp; Child Welfare</span>
</button>
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">agriculture</span>
<span>Agriculture &amp; Farmers</span>
</button>
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">health_and_safety</span>
<span>Healthcare &amp; Insurance</span>
</button>
<button className="px-space-md py-2 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">cottage</span>
<span>Housing &amp; Energy</span>
</button>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter-desktop py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<aside className="lg:col-span-3 space-y-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">

<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low -mx-space-md -mt-space-md px-space-md pt-space-sm rounded-t-xl">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">filter_alt</span>
<span className="font-headline-sm text-headline-sm text-primary">Eligibility Filter</span>
</div>
<button className="font-label-sm text-label-sm text-secondary hover:underline" type="button">Reset All</button>
</div>
<div className="space-y-space-md">

<div>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block mb-space-xs">Scheme Level</span>
<div className="space-y-1.5">
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input defaultChecked className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Central Schemes</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 rounded">740</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer">
<div className="flex items-center gap-2">
<input defaultChecked className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">State Schemes</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 rounded">508</span>
</label>
</div>
</div>

<div>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block mb-space-xs">Annual Household Income</span>
<div className="space-y-1.5 font-body-md text-body-md text-on-surface">
<label className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 text-primary accent-primary-container" name="income_slab" type="radio"/>
<span>Below ₹1,50,000 (BPL)</span>
</label>
<label className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer bg-surface-container-low">
<input defaultChecked className="w-4 h-4 text-primary accent-primary-container" name="income_slab" type="radio"/>
<span className="font-semibold text-primary">₹1.5L - ₹2,50,000 / year</span>
</label>
<label className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 text-primary accent-primary-container" name="income_slab" type="radio"/>
<span>₹2.5L - ₹8,00,000 / year</span>
</label>
<label className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 text-primary accent-primary-container" name="income_slab" type="radio"/>
<span>No Income Cap / Universal</span>
</label>
</div>
</div>

<div>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block mb-space-xs">Social Category</span>
<div className="grid grid-cols-2 gap-1 font-body-sm text-body-sm">
<label className="flex items-center gap-1.5 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked className="w-3.5 h-3.5 rounded text-primary accent-primary-container" type="checkbox"/>
<span>All (Open)</span>
</label>
<label className="flex items-center gap-1.5 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked className="w-3.5 h-3.5 rounded text-primary accent-primary-container" type="checkbox"/>
<span>OBC</span>
</label>
<label className="flex items-center gap-1.5 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-3.5 h-3.5 rounded text-primary accent-primary-container" type="checkbox"/>
<span>SC / ST</span>
</label>
<label className="flex items-center gap-1.5 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-3.5 h-3.5 rounded text-primary accent-primary-container" type="checkbox"/>
<span>EWS / Minority</span>
</label>
</div>
</div>

<div>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block mb-space-xs">Beneficiary Target</span>
<div className="space-y-1.5 font-body-sm text-body-sm">
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Female Beneficiaries</span>
</label>
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Students &amp; Youth (18–25)</span>
</label>
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Senior Citizens (60+)</span>
</label>
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Persons with Disability (PwD)</span>
</label>
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Small / Marginal Farmers</span>
</label>
</div>
</div>

<div>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider block mb-space-xs">Fulfillment Method</span>
<div className="space-y-1.5 font-body-sm text-body-sm">
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Instant DigiLocker Sync</span>
</label>
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Direct Benefit Transfer (DBT)</span>
</label>
<label className="flex items-center gap-2 p-1 rounded hover:bg-surface-container-low cursor-pointer">
<input className="w-4 h-4 rounded text-primary accent-primary-container" type="checkbox"/>
<span>Offline Gram Panchayat Form</span>
</label>
</div>
</div>
</div>

<div className="mt-space-lg p-space-sm bg-surface-container rounded-lg">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">auto_awesome</span>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold">Auto-Filter via Aadhaar</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-xs">
              Fetch age, domicile and ration status securely to reveal 100% matched benefits.
            </p>
<button className="w-full py-1.5 px-space-xs rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm hover:bg-surface-container-high transition-colors text-center" type="button">
              Connect Citizen Profile
            </button>
</div>
</div>

<div className="bg-primary-container text-on-primary rounded-xl p-space-md shadow-md">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="material-symbols-outlined text-tertiary-fixed text-[24px]">forum</span>
<h3 className="font-headline-sm text-headline-sm">Confused About Eligibility?</h3>
</div>
<p className="font-body-sm text-body-sm text-primary-fixed mb-space-sm">
            Talk to Raasta AI in Hindi, Tamil, or English. We explain requirements without legal jargon.
          </p>
<button className="w-full py-2 px-space-sm rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:brightness-105 transition-all flex items-center justify-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
<span>Launch Scheme Co-Pilot</span>
</button>
</div>
</aside>

<div className="lg:col-span-9 flex flex-col space-y-space-md">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm bg-surface-container-lowest rounded-xl px-space-md py-space-sm shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-primary">Showing 8 of 1,248 Welfare Schemes</span>
<span className="hidden md:inline px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-semibold">Live Real-time Feed</span>
</div>
<div className="flex items-center gap-space-xs self-end sm:self-auto font-body-sm text-body-sm text-on-surface-variant">
<span>Sort By:</span>
<select className="bg-surface-container-low rounded-lg px-space-sm py-1 font-label-md text-label-md text-on-surface border-none outline-none cursor-pointer">
<option value="match">Match Score (High to Low)</option>
<option value="benefit">Max Benefit Amount</option>
<option value="deadline">Application Deadline</option>
<option value="popular">Most Applied Today</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>

<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  Ministry of Education
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">98% Match</span>
</div>
</div>

<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                NSP Post-Matric STEM Scholarship
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">₹28,000 / year</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tuition &amp; Maintenance Allowance</span>
</div>

<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Enrolled in recognized B.Sc, B.Tech, or Integrated STEM degree.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Annual family income capped at ₹2.50 Lakh (Verified via ITR/Tehsildar).</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Minimum 60% marks in previous qualifying board exam.</span>
</li>
</ul>

<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs border-t-0">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">cloud_done</span> DigiLocker Verified
                </span>
<span className="px-2 py-0.5 rounded bg-secondary-fixed font-label-sm text-label-sm text-on-secondary-fixed-variant font-semibold">
                  Closing: 15 Nov 2025
                </span>
</div>
</div>

<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Apply via AI</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                View Details
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  Ministry of Finance &amp; Post
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">95% Match</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                Sukanya Samriddhi Yojana (SSY)
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">8.2% Interest / p.a.</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Triple Exempt (EEE) Sovereign Return</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Targeted for girl child below age of 10 years at account opening.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Section 80C tax deduction up to ₹1,50,000 annually.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Tenure of 21 years or until marriage after attaining 18.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">assured_workload</span> Post Office &amp; Banks
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  Beti Bachao Initiative
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">account_balance</span>
<span>Open Account Guide</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Calculator
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  PFRDA &amp; Central Govt
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">92% Match</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                Atal Pension Yojana (APY)
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">₹1,000 - ₹5,000 / mo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Guaranteed Lifetime Pension</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Indian citizen between 18 to 40 years of age.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Savings bank account linked with Aadhaar mandatory.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Pension begins at age 60 with spouse continuity rights.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">sync</span> Auto-Debit Enabled
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  Unorganized Workers Focus
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Enroll in 2 Mins</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Contribution Chart
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  Ministry of Petroleum &amp; Natural Gas
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">89% Match</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                PM Ujjwala Yojana 2.0 (LPG Subsidy)
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">Free Gas Connection</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">+ ₹1,600 Cash Grant &amp; Stove</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Adult woman belonging to poor/BPL household without existing LPG.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Self-declaration accepted for migrant families (No address proof hurdle).</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Includes first 14.2kg cylinder refill 100% complimentary.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">local_fire_department</span> Clean Cooking Fuel
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  Zero Upfront Cost
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
<span>Claim Connection</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Distributor Map
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  Ministry of Agriculture &amp; Farmers Welfare
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">96% Match</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                PM Kisan Samman Nidhi
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">₹6,000 / year</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Direct DBT (₹2,000 x 3 Installments)</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Small and marginal landholding farmer families across India.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Land records seeded with Aadhaar and active NPCI bank mapping.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>eKYC via OTP or face authentication mandatory.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">account_balance_wallet</span> DBT Active
                </span>
<span className="px-2 py-0.5 rounded bg-secondary-fixed font-label-sm text-label-sm text-on-secondary-fixed-variant font-semibold">
                  18th Installment Releasing
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Check eKYC Status</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Beneficiary List
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  National Health Authority (NHA)
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">100% Eligible</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                Ayushman Bharat PM-JAY
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">₹5,00,000 / year</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cashless Secondary &amp; Tertiary Care</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Covers full family without cap on family size or age.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Cashless treatment across 29,000+ empaneled hospitals nationwide.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Now extended to all senior citizens aged 70+ irrespective of income.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">local_hospital</span> Cashless Card
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  Pre-existing Covered
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">badge</span>
<span>Download Ayushman Card</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Find Hospital
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  Dept of Food &amp; Public Distribution
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">94% Match</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                One Nation One Ration Card (ONORC)
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">35 kg Free Grain / mo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Under PMGKAY Food Security</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Portability: Claim subsidized foodgrains from any Fair Price Shop across India.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Biometric / Aadhaar e-PoS authentication on spot.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Ideal for inter-state migrants, construction laborers, daily wage earners.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">store</span> 5.4L+ Fair Price Shops
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  Free Till 2028
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
<span>Locate Nearby Ration FPS</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Mera Ration
              </button>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between gap-space-xs mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">
                  Ministry of Housing &amp; Urban Affairs
                </span>
<div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">87% Match</span>
</div>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1">
                PM Awas Yojana (PMAY Urban / Gramin)
              </h2>
<div className="flex items-baseline gap-1.5 mb-space-sm">
<span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">Up to ₹2.67 Lakh</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Interest Subsidy &amp; Construction Grant</span>
</div>
<ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>Families who do not own a pucca house in any part of India.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[16px] shrink-0 mt-0.5">check_circle</span>
<span>EWS/LIG home loan interest subsidy credit-linked scheme.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] shrink-0 mt-0.5">info</span>
<span>Mandatory female ownership or co-ownership of property.</span>
</li>
</ul>
<div className="flex flex-wrap items-center gap-space-xs mb-space-md pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">home_work</span> Pucca Housing Mission
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                  Direct Bank Credit
                </span>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">calculate</span>
<span>Subsidy Calculator</span>
</button>
<button className="py-2 px-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                Track Application
              </button>
</div>
</article>
</div>

<nav aria-label="Scheme Pagination" className="flex items-center justify-between bg-surface-container-lowest rounded-xl p-space-md shadow-sm mt-space-md">
<button className="flex items-center gap-1 py-1.5 px-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
<span>Previous</span>
</button>
<div className="hidden sm:flex items-center gap-1">
<button className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold" type="button">1</button>
<button className="w-9 h-9 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md" type="button">2</button>
<button className="w-9 h-9 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md" type="button">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="w-9 h-9 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md" type="button">156</button>
</div>
<button className="flex items-center gap-1 py-1.5 px-space-sm rounded-lg text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold transition-colors" type="button">
<span>Next</span>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</nav>

<section className="mt-space-lg rounded-2xl bg-surface-container-highest p-space-lg relative overflow-hidden shadow-sm">
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-secondary text-[22px]">support_agent</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Unsure about complex criteria?</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Didn't find what you're looking for? Ask Raasta AI
              </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Type your life situation in natural sentences like <em>"I am a single mother of two in Pune with ₹12,000 monthly income"</em> and let Raasta AI map eligible welfare benefits automatically.
              </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-xs shrink-0 w-full md:w-auto">
<a className="flex items-center justify-center gap-2 py-3 px-space-lg rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-container transition-all text-center" data-path="ask-raasta-ai" href="#">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>Ask Raasta AI Now</span>
</a>
<button className="flex items-center justify-center gap-2 py-3 px-space-md rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-colors text-center" type="button">
<span className="material-symbols-outlined text-[20px]">mic</span>
<span>Speak Query</span>
</button>
</div>
</div>
</section></div></div></section></div>

    </main>
  );
}
