export default function UpdateProfile({ onNavigate }) {
  return (
    <main className="w-full bg-background min-h-screen">
<div className="flex flex-col w-full">

<div className="relative w-full max-w-7xl mx-auto px-gutter-desktop pt-space-md pb-space-xl">

<div className="flex flex-col gap-space-xs mb-space-lg">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<a className="hover:text-primary transition-colors flex items-center gap-1" data-path="dashboard" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
          Citizen Portal
        </a>
<span className="">/</span>
<span className="text-on-surface-variant">Citizen Settings</span>
<span className="">/</span>
<span className="text-primary font-semibold">Update Profile</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mt-space-xs"><div><div className="flex items-center gap-space-xs"><h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Citizen Profile &amp; Personal Details</h1><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold"><span className="material-symbols-outlined text-[14px]">shield</span> Verified Master ID</span></div><p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">View and manage your verified personal identity, residential address, KYC attributes, and linked banking details.</p></div><div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-transparent"><div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-tertiary-container shrink-0"><span className="material-symbols-outlined text-[24px]">sync_saved_locally</span></div><div className="flex flex-col pr-space-xs"><div className="flex items-center gap-space-xs"><span className="font-label-md text-label-md text-on-surface font-semibold">KYC Status: Verified</span><span className="w-2 h-2 rounded-full bg-on-tertiary-container inline-block"></span></div><span className="font-body-sm text-body-sm text-on-surface-variant">Synced via DigiLocker • Aadhaar &amp; PAN Active</span></div><button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-all shadow-sm" type="button"><span className="material-symbols-outlined text-[16px]">cloud_sync</span> Re-sync</button></div></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<aside className="lg:col-span-4 flex flex-col gap-space-md lg:sticky lg:top-24">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden"><div className="absolute -right-8 -top-8 w-28 h-28 bg-surface-container rounded-full opacity-40 pointer-events-none"></div><div className="flex items-center gap-space-sm relative z-10"><div className="relative"><img alt="Priya Sharma Profile Photo" className="w-16 h-16 rounded-full object-cover ring-2 ring-surface-variant" src="https://lh3.googleusercontent.com/aida/AEtjO1U97aFtygvXOssYIz76t5EyCQPwNwCrAlMXJq1ADLGgJFVw9GClO264pkPtim6Vj2cJOdaTPsK1B_PFwu8MoHdrzrL-lw23J44pHfdqEhidJONv0-08L-9n_qTTZxszgtokZUjBrkb7qiY9lX4b4zZiju4UhsbbLw7Xmsildr6g_-HSPNAvg3k21Cp3fOGMpmPTcYn1HTtRoAqG8qCLK3XRIWGYIejm5foMBqaEtpfuhgVv_F9i1ZcREsDI" /><span className="absolute bottom-0 right-0 w-4 h-4 bg-on-tertiary-container rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center text-white" title="Identity Verified"><span className="material-symbols-outlined text-[10px]">check</span></span></div><div className="flex flex-col"><div className="flex items-center gap-1.5"><span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">Priya Sharma</span><span className="material-symbols-outlined text-on-tertiary-container text-[18px]" title="Authenticated Resident">verified</span></div><span className="text-on-surface-variant font-mono">RA-9842 / MH-PUN</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">priya.sharma@govmail.in</span></div></div><div className="grid grid-cols-2 gap-space-xs mt-space-sm pt-space-xs"><div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant">Citizen ID</span><span className="font-mono">MH-98421</span></div><div className="bg-surface-container-low p-space-xs rounded-lg flex flex-col"><span className="font-label-sm text-label-sm text-on-surface-variant">Aadhaar Link</span><span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold text-base flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified</span> Active</span></div></div></div>

<nav aria-label="Profile Sections" className="bg-surface-container-lowest rounded-xl p-space-xs shadow-sm flex flex-col gap-1"><a className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md transition-colors"  href="#" onClick={(e) => e.preventDefault()}><span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">badge</span>Personal Details</span><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors"  href="#" onClick={(e) => e.preventDefault()}><span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">location_on</span>Contact &amp; Address</span><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors"  href="#" onClick={(e) => e.preventDefault()}><span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">person</span>Occupation &amp; Details</span><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">check_circle</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors"  href="#" onClick={(e) => e.preventDefault()}><span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">account_balance</span>Bank Account Details</span><span className="text-xs bg-tertiary-fixed text-tertiary-container px-2 py-0.5 rounded-full font-semibold">NPCI Active</span></a><a className="flex items-center justify-between px-space-sm py-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors"  href="#" onClick={(e) => e.preventDefault()}><span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">security</span>Account Security &amp; Privacy</span><span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_forward</span></a></nav>

<div className="bg-surface-container-low rounded-xl p-space-sm">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified_user</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">DPDP Act 2023 Compliant</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Your data is stored in sovereign civic vaults. Attributes are only dispatched to verification APIs upon explicit scheme application consent.
              </p>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-8 flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="section-demographics">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm mb-space-md">
<div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Identity Verification</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Directly pulled and validated from the UIDAI Aadhaar registry.</p>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold self-start sm:self-auto">
<span className="material-symbols-outlined text-[14px]">lock</span>
              UIDAI Authenticated
            </span>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md bg-surface-container-low p-space-md rounded-xl mb-space-md">

<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Priya Ramesh Sharma</span>
<span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">Primary Citizen</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Photo synced with DigiLocker. Photo update requires Aadhaar Seva Kendra biometrics re-enrollment.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center justify-between">
                Full Name (as per Aadhaar)
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant" title="Locked by National Registry">lock</span>
</label>
<div className="flex items-center bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-medium">
                Priya Ramesh Sharma
              </div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center justify-between">
                Aadhaar Number (Masked)
                <span className="text-on-tertiary-container font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span> UIDAI Verified
                </span>
</label>
<div className="flex items-center justify-between bg-surface-container-low px-space-sm py-2.5 rounded-lg font-mono text-on-surface text-body-md font-medium">
<span className="">XXXX •••• 9142</span>
<button className="text-primary hover:text-on-surface-variant text-label-sm font-semibold font-body-sm" type="button">View Vault</button>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Date of Birth</label>
<div className="flex items-center justify-between bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-medium">
<span className="">14-Aug-1991</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-label-sm font-semibold">Age: 33 Years</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Gender</label>
<div className="flex items-center gap-space-xs">
<button className="flex-1 py-2 px-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold text-center shadow-sm" type="button">Female</button>
<button className="flex-1 py-2 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold text-center transition-colors" type="button">Male</button>
<button className="flex-1 py-2 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold text-center transition-colors" type="button">Transgender</button>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Marital Status</label>
<select className="w-full bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-medium outline-none">
<option>Married</option>
<option>Single / Unmarried</option>
<option>Widowed / Divorced</option>
<option>Destitute / Abandoned</option>
</select>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center justify-between">
                Linked Aadhaar Mobile (OTP Enabled)
                <span className="text-on-tertiary-container font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Verified
                </span>
</label>
<div className="flex items-center justify-between bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-mono">
<span className="">+91 98220 •••••</span>
<button className="text-primary hover:underline font-body-sm text-body-sm font-semibold" type="button">Change</button>
</div>
</div>
</div>

<div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0">info</span>
<p className="font-body-sm text-body-sm">
              UIDAI demographic details are authenticated. To update primary name or date of birth, please initiate an official Aadhaar update request via UIDAI myAadhaar portal.
            </p>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="section-address">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm mb-space-md">
<div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Residential &amp; Domicile Information</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Official residential domicile and postal communication address records.</p>
</div>
<div className="flex items-center gap-1 text-on-tertiary-container font-label-sm text-label-sm font-semibold bg-surface-container px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]">verified</span>
              MahaDBT Domicile Verified
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Domicile State</label>
<div className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-semibold flex items-center justify-between">
<span className="">Maharashtra</span>
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container">done_all</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">District</label>
<div className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-semibold">
                Pune
              </div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Taluka / Sub-Division</label>
<div className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-semibold">
                Haveli
              </div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Habitation Type</label>
<select className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md outline-none">
<option>Urban (Municipal Corporation / PMC)</option>
<option>Semi-Urban (Municipal Council)</option>
<option>Rural (Gram Panchayat)</option>
<option>Tribal / Scheduled Area (PESA)</option>
</select>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Electoral Ward</label>
<input className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md outline-none" type="text" value="Ward 18 (Hadapsar Gaon)" />
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center justify-between">
                Domicile Certificate No.
                <a className="text-primary hover:underline font-label-sm text-label-sm" href="#">View PDF</a>
</label>
<input className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-mono outline-none" type="text" value="DOM/MH/2021/884910" />
</div>
</div>

<div className="mt-space-md flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Full Residential Address (Postal / Delivery)</label>
<input className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md outline-none" type="text" value="Flat 402, Shanti Heights, Near Gadital, Hadapsar, Pune - 411028" />
</div>
</section>



<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="section-socioeconomic"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm mb-space-md"><div><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span><h2 className="font-headline-md text-headline-md text-primary tracking-tight">Occupation &amp; Income Details</h2></div><p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Individual employment status, social category, and verified personal annual income.</p></div><span className="text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full font-mono">Income Registry Connected</span></div><div className="grid grid-cols-1 md:grid-cols-2 gap-space-md"><div className="flex flex-col gap-1.5"><label className="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center justify-between">Social Category (Caste Group)<span className="font-mono">CST-2020-PUN-0912</span></label><select className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-medium outline-none"><option>OBC - Other Backward Class</option><option>General / Open Category</option><option>SC - Scheduled Caste</option><option>ST - Scheduled Tribe</option><option>EWS - Economically Weaker Section</option></select></div><div className="flex flex-col gap-1.5"><label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Disability (PwD / Divyangjan) Status</label><select className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-medium outline-none"><option>No (None)</option><option>Yes (&gt; 40% Locomotor Disability)</option><option>Yes (Visual Impairment)</option><option>Yes (Hearing Impairment)</option><option>Yes (Multiple Disabilities with UDID)</option></select></div><div className="flex flex-col gap-1.5"><label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Primary Occupation / Profession</label><input className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md outline-none" type="text" value="Urban Skilled / Tailoring &amp; Small Trade Enterprise" /></div><div className="flex flex-col gap-1.5"><label className="font-label-sm text-label-sm text-on-surface-variant font-semibold flex items-center justify-between">Personal Gross Annual Income<span className="text-on-surface-variant text-label-sm">Verified till Mar 2027</span></label><div className="relative"><span className="absolute left-3 top-2.5 text-on-surface-variant font-bold">₹</span><input className="w-full bg-surface-container-low pl-8 pr-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-semibold outline-none" type="text" value="1,80,000" /><span className="absolute right-3 top-2.5 text-on-surface-variant text-body-sm font-medium">INR / year</span></div></div><div className="flex flex-col gap-1.5"><label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">PAN Card Number</label><div className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-mono flex items-center justify-between"><span className="">ABCPS••••K</span><span className="text-on-tertiary-container text-label-sm font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">verified</span> NSDL Verified</span></div></div><div className="flex flex-col gap-1.5"><label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Employment Type</label><div className="bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-body-md text-body-md font-medium"><span className="">Self-Employed / Individual Proprietor</span></div></div></div></section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="section-dbt">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm mb-space-md">
<div><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span><h2 className="font-headline-md text-headline-md text-primary tracking-tight">Bank Account &amp; Mandate Details</h2></div><p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Primary bank account linked with Aadhaar and National Payments Corporation of India (NPCI).</p></div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-variant text-on-tertiary-container font-label-sm text-label-sm font-semibold self-start sm:self-auto">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
              NPCI Aadhaar Seeded
            </span>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[28px]">account_balance</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold text-base">State Bank of India</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hadapsar Branch (Pune) • IFSC: <strong className="font-mono text-on-surface">SBIN0001234</strong></span>
<span className="font-mono text-body-sm text-on-surface mt-0.5">Account Number: •••• •••• 4912</span>
</div>
</div>
<div className="flex items-center gap-space-xs self-stretch md:self-auto justify-end">
<button className="px-space-sm py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold transition-colors shadow-sm" type="button">
                Switch DBT Mandate
              </button>
<button className="px-space-sm py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-tertiary-container font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
                View DBT Ledger
              </button>
</div>
</div>

<div className="mt-space-sm flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm px-2"><span className="material-symbols-outlined text-[18px] text-on-tertiary-container">verified</span><span className="">Primary authenticated account for all official citizen transactions, refunds, and direct credits.</span></div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="section-privacy"><div className="flex flex-col gap-space-md"><label className="flex items-start gap-space-sm cursor-pointer select-none"><input defaultChecked className="mt-1 w-5 h-5 rounded accent-primary-container shrink-0 cursor-pointer" type="checkbox" /><div className="flex flex-col"><span className="font-label-md text-label-md text-on-surface font-semibold">Statutory Citizen Declaration (DPDP Act 2023 &amp; Aadhaar Act 2016)</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">I hereby declare that the personal demographics, contact information, occupation data, and linked bank account details provided above are authentic and accurate. I authorize Raasta AI to securely maintain these attributes within my sovereign citizen vault in compliance with the Digital Personal Data Protection Act, 2023.</p></div></label><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm"><button className="w-full sm:w-auto px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-lg text-label-lg transition-colors text-center" type="button">Discard Changes</button><div className="flex items-center gap-space-xs w-full sm:w-auto"><button className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]" id="save-profile-btn" type="button"><span className="material-symbols-outlined text-[20px] text-secondary-container">check</span>Save Profile Information</button></div></div><div className="hidden p-space-sm rounded-lg bg-surface-container-high text-primary items-center justify-between" id="save-toast"><div className="flex items-center gap-2"><span className="material-symbols-outlined text-on-tertiary-container text-[20px]">check_circle</span><span className="font-body-sm text-body-sm font-semibold">Personal citizen profile successfully updated and synchronized!</span></div><span className="font-label-sm text-label-sm text-on-surface-variant">Just now</span></div></div></section></div></div></div></div>

    </main>
  );
}
