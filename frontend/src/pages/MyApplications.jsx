export default function MyApplications({ onNavigate }) {
  return (
    <main className="w-full bg-background min-h-screen">
<div className="flex flex-col w-full">

<div className="relative w-full max-w-7xl mx-auto px-gutter-desktop py-space-lg">
<div className="absolute top-12 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 left-10 w-72 h-72 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
<div className="max-w-2xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs bg-surface-container-high text-on-primary-fixed-variant px-space-sm py-1 rounded-full">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container" style="font-variation-settings: 'FILL' 1;">verified</span>
<span className="font-label-sm text-label-sm tracking-wider uppercase">Citizen Entitlement Ledger</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">My Applications &amp; Benefit Tracker</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Track real-time progress, document verification status, and direct benefit transfers (DBT) across all welfare enrollments.
        </p>
</div>

<div className="flex items-center gap-space-xs shrink-0">
<button className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-lg shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all font-label-lg text-label-lg" type="button">
<span className="material-symbols-outlined text-[18px]">cloud_sync</span>
<span>Refresh DigiLocker</span>
</button>
<button className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary px-space-md py-space-sm rounded-lg shadow-sm hover:bg-primary transition-all font-label-lg text-label-lg" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>New Application</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">

<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-space-md">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Active Submissions</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary leading-none">04</span>
<span className="font-label-md text-label-md text-on-surface-variant">tracked</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">assignment_turned_in</span>
</div>
</div>
<div className="grid grid-cols-3 gap-1 pt-space-xs bg-surface-container-low rounded-lg p-2 text-center">
<div>
<span className="font-label-sm text-label-sm block text-on-tertiary-container font-bold">1 Approved</span>
</div>
<div>
<span className="font-label-sm text-label-sm block text-primary font-bold">2 Review</span>
</div>
<div>
<span className="font-label-sm text-label-sm block text-error font-bold">1 Action</span>
</div>
</div>
</div>

<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-space-sm">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Annual Benefit (FY 25-26)</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-xl text-headline-xl text-on-tertiary-container font-extrabold leading-none">₹48,500</span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed-dim/30 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[26px]">payments</span>
</div>
</div>

<div className="flex items-end justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">trending_up</span>
            +18% vs Last Cycle
          </span>
<svg className="w-20 h-6 text-on-tertiary-container overflow-visible" fill="none" viewbox="0 0 80 24">
<path d="M0 20 L18 16 L36 18 L54 8 L80 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<circle cx="80" cy="2" fill="currentColor" r="3"></circle>
</svg>
</div>
</div>

<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-space-sm">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Linked DBT Account</span>
<div className="font-headline-sm text-headline-sm text-primary leading-snug">
              State Bank of India
            </div>
<span className="text-on-surface-variant font-mono">A/C: •••• 4912</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">account_balance</span>
</div>
</div>
<div className="inline-flex items-center gap-space-xs bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant px-2 py-1 rounded-md font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
          Aadhaar Seeded &amp; NPCI Active
        </div>
</div>

<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between mb-space-sm">
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">DigiLocker Trust Sync</span>
<div className="font-headline-sm text-headline-sm text-primary">
              100% Up to Date
            </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">8 of 8 e-Certificates Verified</span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">lock</span>
</div>
</div>

<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-on-tertiary-container h-full rounded-full transition-all" style="width: 100%"></div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg bg-surface-container-low p-1.5 rounded-xl">
<div className="flex flex-wrap items-center gap-1">
<button className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg bg-primary-container text-on-primary shadow-sm" type="button">
          All Applications (4)
        </button>
<button className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors" type="button">
          In Progress (2)
        </button>
<button className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors" type="button">
          Approved / Disbursed (1)
        </button>
<button className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors" type="button">
          Action Required (1)
        </button>
<button className="px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors" type="button">
          Past Archives
        </button>
</div>
<div className="flex items-center gap-space-xs px-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Sort by:</span>
<button className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-semibold bg-surface-container-lowest px-space-sm py-1 rounded-md shadow-sm" type="button">
<span>Recently Updated</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</div>

<div className="space-y-space-lg mb-space-xl">

<div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all p-space-lg md:p-space-xl relative">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[32px]">school</span>
</div>
<div className="space-y-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  Documents Approved • Sanction Order Generated
                </span>
<span className="font-mono text-on-surface-variant">ID: #MH-2025-0812</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">NSP Post-Matric STEM Merit Scholarship</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Ministry of Electronics &amp; IT (MeitY) • Higher Education Division</p>
</div>
</div>
<div className="flex flex-col lg:items-end gap-1 bg-surface-container-low p-space-md rounded-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Grant Entitlement</span>
<div className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">₹28,000 <span className="text-body-sm font-normal text-on-surface-variant">/ year</span></div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">DBT Direct Transfer to SBI ****4912</span>
</div>
</div>

<div className="py-space-md my-space-sm bg-surface-container-low/50 px-space-md rounded-xl">
<div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-md flex items-center justify-between">
<span>Official Pipeline Trajectory</span>
<span className="text-on-tertiary-container font-semibold">90% Complete • DBT Disbursal Scheduled 15 Feb</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-space-sm relative">

<div className="flex flex-col gap-1 relative">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="h-1 flex-1 bg-primary rounded-full hidden md:block"></div>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">Application Filed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">12 Jan 2025</span>
</div>

<div className="flex flex-col gap-1 relative">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="h-1 flex-1 bg-primary rounded-full hidden md:block"></div>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">DigiLocker Verified</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">14 Jan 2025</span>
</div>

<div className="flex flex-col gap-1 relative">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="h-1 flex-1 bg-primary rounded-full hidden md:block"></div>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">State Nodal Scrutiny</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">28 Jan 2025</span>
</div>

<div className="flex flex-col gap-1 relative">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="h-1 flex-1 bg-surface-container-highest rounded-full hidden md:block"></div>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-1">Sanction Approved</span>
<span className="font-body-sm text-body-sm text-on-tertiary-container font-medium">Order #SAN-99018</span>
</div>

<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold ring-2 ring-primary">
<span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
</div>
</div>
<span className="font-label-md text-label-md text-primary font-bold mt-1">DBT Credit Expected</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">15 Feb 2025</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span>PFMS Batch Id: PFMS-2025-BLR-0041</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-space-xs bg-surface-container-low text-primary px-space-md py-space-xs rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Sanction Letter (.pdf)</span>
</button>
<button className="inline-flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-space-xs rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">alt_route</span>
<span>Track PFMS DBT</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all p-space-lg md:p-space-xl relative">
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md pb-space-md">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-xl bg-secondary-fixed/40 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[32px]">propane_tank</span>
</div>
<div className="space-y-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-secondary-fixed text-on-secondary-fixed px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Physical Verification Pending at Local Agency
                </span>
<span className="font-mono text-on-surface-variant">ID: #UJ-9104-3312</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">Pradhan Mantri Ujjwala Yojana (PMUY 2.0)</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Ministry of Petroleum &amp; Natural Gas • Subsidized Clean Cooking Gas</p>
</div>
</div>
<div className="bg-secondary-fixed/20 p-space-md rounded-xl max-w-sm space-y-1">
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[18px]">calendar_clock</span>
<span>Appointment in 3 Days</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">
              Physical inspection at <strong>Shivshakti Indane Gas Agency, Counter #104</strong> scheduled for <strong>Friday, 10:30 AM</strong>.
            </p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">pin_drop</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Shivshakti Agency • Nodal Officer: Mr. Rajeshwar Pawar</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Near Old Bus Stand, Sector 4 • +91 98220 11042</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-space-sm py-1 rounded-md">Original Ration Card + Aadhaar Required</span>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Ration Card #RC-40912 verified digitally</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-space-xs bg-surface-container-low text-on-surface px-space-md py-space-xs rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">edit_calendar</span>
<span>Reschedule Visit</span>
</button>
<button className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary px-space-md py-space-xs rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Distributor Contact</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all p-space-lg md:p-space-xl relative">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[32px]">accessible_forward</span>
</div>
<div className="space-y-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-surface-container-highest text-primary px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  DBT Disbursement Scheduled (Active Monthly Benefit)
                </span>
<span className="font-mono text-on-surface-variant">ID: #DBT-5501-1920</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">State Divyangjan Monthly Support Grant</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Department of Social Justice &amp; Special Assistance • Direct Cash Transfer</p>
</div>
</div>
<div className="flex flex-col lg:items-end gap-1 bg-surface-container-low p-space-md rounded-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Monthly Recurring</span>
<div className="font-headline-md text-headline-md text-primary font-extrabold">₹1,500 <span className="text-body-sm font-normal text-on-surface-variant">/ month</span></div>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Next credit on 1st of next month</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm py-space-sm">
<div className="bg-surface-container-low/60 p-space-sm rounded-lg flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">badge</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">UDID Registration</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">MH-14-00492-V</span>
</div>
</div>
<div className="bg-surface-container-low/60 p-space-sm rounded-lg flex items-center gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Life Certificate (DLC)</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Valid until Nov 2025</span>
</div>
</div>
<div className="bg-surface-container-low/60 p-space-sm rounded-lg flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Disbursed Till Date</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">₹18,000 (12 Installments)</span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-md">
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto-renewal enabled via Aadhaar biometric authentication</span>
<button className="inline-flex items-center gap-space-xs bg-surface-container-low text-primary px-space-md py-space-xs rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>View All Past Installments</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-md hover:shadow-lg transition-all p-space-lg md:p-space-xl relative border-l-4 border-error">
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md pb-space-md">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-xl bg-error-container/60 flex items-center justify-center text-error shrink-0">
<span className="material-symbols-outlined text-[32px]">child_care</span>
</div>
<div className="space-y-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="bg-error-container text-on-error-container px-space-sm py-0.5 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span>
                  Action Required: Document Attestation Pending
                </span>
<span className="font-mono text-on-surface-variant">Application Draft #SSY-2025-419</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">Sukanya Samriddhi Account (Beti Bachao Beti Padhao)</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Beneficiary: <strong>Ananya Sharma</strong> (Daughter, Age 4) • Post Office Banking Wing</p>
</div>
</div>
<div className="bg-error-container/40 p-space-md rounded-xl max-w-sm space-y-1">
<div className="flex items-center gap-1 text-on-error-container font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[18px]">report_problem</span>
<span>Deadline: 48 Hours Remaining</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              Child birth certificate missing municipal QR stamp or DigiLocker verification token.
            </p>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs mb-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Required to continue:</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-1">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-error text-[18px]">close</span>
<span>Official Municipal Birth Certificate (Form 5)</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-error text-[18px]">close</span>
<span>Parent / Guardian Aadhaar e-Sign verification</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">info</span>
<span>Application will auto-pause if not resolved by 12 Feb</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary px-space-md py-space-xs rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">draw</span>
<span>Complete e-Sign</span>
</button>
<button className="inline-flex items-center gap-space-xs bg-error text-on-error px-space-md py-space-xs rounded-lg font-label-lg text-label-lg hover:bg-error/90 transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">file_upload</span>
<span>Upload via DigiLocker Now</span>
</button>
</div>
</div>
</div>
</div>

<div className="mb-space-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-md">
<div>
<h3 className="font-headline-lg text-headline-lg text-primary">Direct Benefit Transfer (DBT) Ledger</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Validated transactions routed directly to your seeded bank account via NPCI Aadhaar Gateway.</p>
</div>
<button className="inline-flex items-center gap-space-xs text-primary font-label-lg text-label-lg bg-surface-container-lowest px-space-md py-space-xs rounded-lg shadow-sm hover:bg-surface-container transition-colors self-start sm:self-auto" type="button">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Passbook (.csv)</span>
</button>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<th className="py-space-md px-space-lg">Disbursal Date</th>
<th className="py-space-md px-space-md">Scheme / Ministry</th>
<th className="py-space-md px-space-md">PFMS Reference</th>
<th className="py-space-md px-space-md">Destination Bank</th>
<th className="py-space-md px-space-md">Disbursed Amount</th>
<th className="py-space-md px-space-lg text-right">Receipt</th>
</tr>
</thead>
<tbody className="divide-y-0 font-body-md text-body-md text-on-surface">

<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-lg font-mono text-body-sm">
                  01 Feb 2025
                </td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-semibold text-primary">State Divyangjan Monthly Support</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Social Welfare Dept • Direct Monthly Pay</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface-variant">
                  C022589140239
                </td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">account_balance</span>
<span>SBI (••••4912)</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">+₹1,500</span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="text-primary hover:text-on-tertiary-container p-1 rounded transition-colors" title="Download Voucher" type="button">
<span className="material-symbols-outlined text-[20px]">receipt</span>
</button>
</td>
</tr>

<tr className="bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-lg font-mono text-body-sm">
                  01 Jan 2025
                </td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-semibold text-primary">State Divyangjan Monthly Support</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Social Welfare Dept • Direct Monthly Pay</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface-variant">
                  C012589991204
                </td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">account_balance</span>
<span>SBI (••••4912)</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">+₹1,500</span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="text-primary hover:text-on-tertiary-container p-1 rounded transition-colors" title="Download Voucher" type="button">
<span className="material-symbols-outlined text-[20px]">receipt</span>
</button>
</td>
</tr>

<tr className="bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-lg font-mono text-body-sm">
                  18 Nov 2024
                </td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-semibold text-primary">PM Kisan Samman Nidhi (Installment 18)</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Ministry of Agriculture • Central Grant</span>
</td>
<td className="py-space-md px-space-md font-mono text-body-sm text-on-surface-variant">
                  PMK18-4902318
                </td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5 font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary">account_balance</span>
<span>SBI (••••4912)</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold">+₹2,000</span>
</td>
<td className="py-space-md px-space-lg text-right">
<button className="text-primary hover:text-on-tertiary-container p-1 rounded transition-colors" title="Download Voucher" type="button">
<span className="material-symbols-outlined text-[20px]">receipt</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-primary-container text-on-primary rounded-xl p-space-lg md:p-space-xl shadow-lg relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-surface-container-high/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg relative z-10">
<div className="max-w-2xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs bg-primary-fixed-dim/20 text-inverse-primary px-space-sm py-1 rounded-full font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">support_agent</span>
<span>Dedicated Nodal Grievance Desk</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-primary">Facing issues with DBT transfer or delayed review?</h3>
<p className="font-body-md text-body-md text-on-primary-container">
            Raasta AI directly escalates unresolved verification bottlenecks to state nodal scheme officers under the Citizens Right to Public Services Act.
          </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<a className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary px-space-md py-space-sm rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-colors" href="tel:1800110001">
<span className="material-symbols-outlined text-[20px]">call</span>
<span>Toll-Free 1800-11-0001</span>
</a>
<button className="inline-flex items-center gap-space-xs bg-secondary-container text-on-secondary-container px-space-md py-space-sm rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-secondary-fixed transition-colors font-bold" type="button">
<span className="material-symbols-outlined text-[20px]">campaign</span>
<span>File Grievance Ticket</span>
</button>
</div>
</div>
</div>
</div>
</div>
    </main>
  );
}
