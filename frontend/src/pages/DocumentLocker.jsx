export default function DocumentLocker({ onNavigate }) {
  return (
    <main className="w-full bg-background min-h-screen">
<div className="flex flex-col w-full">
<div className="max-w-7xl w-full mx-auto px-gutter-desktop py-space-lg">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container" style="font-variation-settings: 'FILL' 1;">encrypted</span>
<span>DPDP Act 2023 Compliant Citizen Vault</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Document Locker &amp; Citizen Vault</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Securely manage your verified government credentials, auto-sync with DigiLocker, and grant instant programmatic verification for welfare schemes.
        </p>
</div>

<div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm shrink-0">
<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="83, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute flex flex-col items-center justify-center">
<span className="font-label-lg text-label-lg font-bold text-primary">5/6</span>
</div>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-semibold">Verification Score</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tier-3 Sovereign Validated</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold mt-0.5">83% Ready for Schemes</span>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-primary text-on-primary rounded-xl p-space-md lg:p-space-lg shadow-md mb-space-xl">
<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md relative z-10">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary-fixed text-[28px]" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-primary">DigiLocker Verified &amp; Sovereign Synced</span>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed-dim/20 text-tertiary-fixed font-label-sm text-label-sm">256-Bit Hardware Encrypted</span>
</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface/80 mt-0.5">
              Synced with National e-Governance Division (NeGD) Gateway • Last authenticated today at <span className="font-medium text-white">06:30 AM IST</span>
</p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0 w-full md:w-auto">
<button className="w-full md:w-auto flex items-center justify-center gap-space-xs bg-surface-container-lowest text-primary px-space-md py-space-sm rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-all active:scale-95 shadow-sm" id="syncButton">
<span className="material-symbols-outlined text-[18px]" id="syncIcon">sync</span>
<span id="syncText">Manual Sync Now</span>
</button>
<button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20 transition-colors" title="Locker Settings">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
</div>
</div>

<div className="mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">folder_shared</span>
<h2 className="font-headline-md text-headline-md text-primary">Issued Sovereign Credentials</h2>
<span className="ml-space-xs px-space-xs py-0.5 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface font-bold">5 Validated</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">Tamper-Proof Digital Tokens (IT Act 2000 Section 4A)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">fingerprint</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-tight">Aadhaar Card</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">UIDAI • Govt of India</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                Verified
              </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm mb-space-sm space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Citizen Name:</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Priya Sharma</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Masked UID:</span>
<span className="text-primary font-mono font-bold tracking-wider">XXXX-XXXX-9142</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">DOB / Gender:</span>
<span className="text-on-surface">14-Aug-1991 • Female</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-space-xs">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">lock</span>
                  Biometrics:
                </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold" id="biometricState">Protected / Locked</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 bg-surface-container text-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high transition-colors text-center">
              View Masked e-Aadhaar
            </button>
<button className="flex items-center justify-center p-space-xs rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" id="bioToggleBtn" title="Toggle Biometric Lock">
<span className="material-symbols-outlined text-[18px]">lock_reset</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">badge</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-tight">Permanent Account No.</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Income Tax Department</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                Valid
              </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm mb-space-sm space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Permanent Acc No:</span>
<span className="text-primary font-mono font-bold tracking-wider">ABCPS****M</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Aadhaar Linkage:</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Active Link
                </span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">QR Verification:</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Digital Signature OK</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-space-xs">
<span className="text-on-surface-variant">KYC Purpose:</span>
<span className="text-on-surface text-body-sm">DBT Direct Transfer</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 bg-surface-container text-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high transition-colors text-center">
              Download Signed PDF
            </button>
<button className="flex items-center justify-center p-space-xs rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="QR Code Inspector">
<span className="material-symbols-outlined text-[18px]">qr_code_2</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">rice_bowl</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-tight">Food Security Ration</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">NFSA • ONORC National Sync</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                Antyodaya (AAY)
              </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm mb-space-sm space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Card Number:</span>
<span className="text-primary font-mono font-bold">RC-MH-772189</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Household Quota:</span>
<span className="font-label-md text-label-md text-on-surface">4 Enrolled Members</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Allocated FPS Store:</span>
<span className="text-on-surface">Shop #104 (Dadar West)</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-space-xs">
<span className="text-on-surface-variant">One-Nation Portability:</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Active Nationwide</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 bg-surface-container text-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high transition-colors text-center">
              View Entitlement Slip
            </button>
<button className="flex items-center justify-center p-space-xs rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Family Hierarchy">
<span className="material-symbols-outlined text-[18px]">group</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-tight">Income &amp; Domicile</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tahsil Office • Maharashtra</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
                Valid • 2027
              </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm mb-space-sm space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Certified Household:</span>
<span className="font-label-md text-label-md text-on-tertiary-container font-bold">₹1,80,000 / Year</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Validity Expiration:</span>
<span className="font-label-md text-label-md text-on-surface">31 March 2027</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Eligibility Pass:</span>
<span className="text-on-surface">EWS Quota • Fee Waiver</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-space-xs">
<span className="text-on-surface-variant">Issuing Officer:</span>
<span className="text-on-surface text-body-sm">SDM Revenue Stamp</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 bg-surface-container text-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high transition-colors text-center">
              View Certified Stamp
            </button>
<button className="flex items-center justify-center p-space-xs rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Renew Reminder">
<span className="material-symbols-outlined text-[18px]">event_available</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">child_care</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-tight">Birth Certificate</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Municipal Corp • Civil Registry</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
                Permanent
              </span>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm mb-space-sm space-y-1">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Child Beneficiary:</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Ananya Sharma (Daughter)</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Registration No:</span>
<span className="text-primary font-mono font-bold">BC-2018-9921</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Linked Scheme:</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Sukanya Samriddhi Yojana</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-space-xs">
<span className="text-on-surface-variant">Birth Date:</span>
<span className="text-on-surface text-body-sm">03-Nov-2018</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 bg-surface-container text-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high transition-colors text-center">
              View Certified Registry
            </button>
<button className="flex items-center justify-center p-space-xs rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors" title="Attached Grants">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest/60 rounded-xl p-space-md flex flex-col justify-between shadow-sm relative group hover:bg-surface-container-lowest transition-all">
<div className="flex flex-col items-center justify-center text-center py-space-md px-space-sm">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant mb-space-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[30px]">post_add</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Caste / Tribe Certificate</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md max-w-xs">
              Required to unlock targeted state reservation subsidies, hostel grants &amp; higher education fellowships.
            </p>
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-fixed-dim/30 text-on-secondary-fixed text-label-sm font-label-sm font-semibold mb-space-sm">
<span className="material-symbols-outlined text-[14px]">warning</span>
              Pending Document
            </div>
</div>
<div className="flex flex-col sm:flex-row gap-space-xs pt-space-xs">
<button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-primary-container transition-colors text-center flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">cloud_download</span>
              Fetch via DigiLocker
            </button>
<button className="bg-surface-container text-primary font-label-md text-label-md py-space-xs px-space-sm rounded-lg hover:bg-surface-container-high transition-colors text-center">
              Upload Scan
            </button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm mb-space-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[24px]">security_update_good</span>
<h2 className="font-headline-md text-headline-md text-primary">Scheme Authorization &amp; Access Controls</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            You hold sovereign ownership of your credentials. Control which welfare schemes and state portals have active cryptographic verification keys.
          </p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<button className="px-space-sm py-space-xs rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">history</span>
            Audit Logs
          </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
<th className="py-space-sm px-space-md rounded-l-lg font-semibold">Authorized Scheme</th>
<th className="py-space-sm px-space-md font-semibold">Department / Ministry</th>
<th className="py-space-sm px-space-md font-semibold">Granted Credentials</th>
<th className="py-space-sm px-space-md font-semibold">Access Type</th>
<th className="py-space-sm px-space-md font-semibold">Status</th>
<th className="py-space-sm px-space-md rounded-r-lg font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 space-y-1">

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">school</span>
<div>
<span className="font-label-md text-label-md text-primary font-bold block">National Scholarship Portal (NSP)</span>
<span className="text-on-surface-variant text-label-sm">Central Pre-Matric Scheme</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface">Min. of Minority Affairs</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Aadhaar (UIDAI)</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Income Cert</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="text-on-surface-variant">Zero-Knowledge Verification (ZKP)</span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="text-error hover:bg-error-container/40 px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-colors">
                  Revoke Key
                </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">savings</span>
<div>
<span className="font-label-md text-label-md text-primary font-bold block">Sukanya Samriddhi Account</span>
<span className="text-on-surface-variant text-label-sm">India Post / Dept of Posts</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface">Ministry of Finance</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Birth Cert (Child)</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">PAN Card</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="text-on-surface-variant">One-Time Token Grant</span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="text-error hover:bg-error-container/40 px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-colors">
                  Revoke Key
                </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
<div>
<span className="font-label-md text-label-md text-primary font-bold block">Ayushman Bharat (PM-JAY)</span>
<span className="text-on-surface-variant text-label-sm">National Health Authority</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface">Min. of Health &amp; Family Welfare</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Ration Card (NFSA)</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Aadhaar (UIDAI)</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="text-on-surface-variant">Annual Re-validation</span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  Active
                </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="text-error hover:bg-error-container/40 px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-colors">
                  Revoke Key
                </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors opacity-75">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">agriculture</span>
<div>
<span className="font-label-md text-label-md text-on-surface font-semibold block">PM Kisan Samman Nidhi</span>
<span className="text-on-surface-variant text-label-sm">Department of Agriculture</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface-variant">Min. of Agriculture</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Aadhaar (UIDAI)</span>
</div>
</td>
<td className="py-space-md px-space-md text-on-surface-variant">
<span>Direct Cash Transfer</span>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Revoked
                </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="text-primary hover:bg-surface-container-high px-space-sm py-1 rounded font-label-sm text-label-sm font-bold transition-colors">
                  Re-authorize
                </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md lg:p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[28px]">policy</span>
</div>
<div className="space-y-space-xs flex-1">
<div className="flex flex-wrap items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary">Sovereign Data Protection &amp; Citizen Privacy Seal</h3>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold">DPDP Act 2023 Compliant</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Raasta AI functions strictly as a stateless, consent-mediated pipeline between your sovereign DigiLocker vault and verified welfare departments. We never store raw copies of your Aadhaar biometrics, financial ledger tokens, or civil records on private servers. All verification transactions utilize ephemeral cryptographic hashes that expire automatically within 15 minutes of scheme qualification.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
<span>Zero Knowledge Proofs (ZKP)</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">lock_clock</span>
<span>Instant Revocation Privilege</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">gavel</span>
<span>Section 6(1) Digital Consent</span>
</div>
</div>
</div>
<div className="shrink-0 self-center md:self-start">
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:underline" href="#">
<span>Read Compliance Whitepaper</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>


</div>
    </main>
  );
}
