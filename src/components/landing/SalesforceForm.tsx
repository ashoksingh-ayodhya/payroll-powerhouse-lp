import { useEffect, useRef, useState } from "react";

const OID = "00D0Y000000LN9X";
const RET_URL = "https://edenred.ae/thank-you";

// Custom field IDs from the Salesforce Web-to-Lead snippet
const F = {
  employeeRange: "00N07000001BbHz",
  emirate: "00N1n00000SMlGA",
  leadChannel: "00N1n00000TTYkH",
  gclid1: "00NJv000003eKnt",
  gclid2: "00NJv000007iOVl",
  utmSource: "00N07000001BbHV",
  utmMedium: "00N07000001BbHa",
  utmCampaign: "00N07000001BbHf",
  utmAdGroup: "00N07000001BbHk",
  utmContent: "00N07000001BbHp",
  utmTerm: "00N07000001BbHu",
} as const;

const EMPLOYEE_RANGES = [
  "1 - 99 employees",
  "100 - 250 employees",
  "250 - 999 employees",
  "1000+ employees",
];

const EMIRATES = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Al Ain",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain",
];

export function SalesforceForm({ variant = "light" }: { variant?: "light" | "card" }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    const get = (k: string) => sp.get(k) ?? "";
    setParams({
      gclid: get("gclid"),
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
      utm_adgroup: get("utm_adgroup") || get("utm_ad_group"),
      utm_content: get("utm_content"),
      utm_term: get("utm_term"),
    });
  }, []);

  const inputCls =
    variant === "card"
      ? "w-full h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      : "w-full h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";
  const labelCls = "block text-xs font-semibold text-navy mb-1";

  return (
    <form
      ref={formRef}
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      <input type="hidden" name="oid" value={OID} />
      <input type="hidden" name="retURL" value={RET_URL} />
      {/* Lead Owner: Naresh Surendran */}
      <input type="hidden" name="owner" value="005Jv000007Z4uNIAS" />
      <input type="hidden" name="lead_owner" value="005Jv000007Z4uNIAS" />
      {/* Lead Channel hardcoded */}
      <input type="hidden" id={F.leadChannel} name={F.leadChannel} value="Website SEM" />
      {/* GCLID + UTM (auto from URL) */}
      <input type="hidden" id={F.gclid1} name={F.gclid1} value={params.gclid || ""} />
      <input type="hidden" id={F.gclid2} name={F.gclid2} value={params.gclid || ""} />
      <input type="hidden" id={F.utmSource} name={F.utmSource} value={params.utm_source || ""} />
      <input type="hidden" id={F.utmMedium} name={F.utmMedium} value={params.utm_medium || ""} />
      <input type="hidden" id={F.utmCampaign} name={F.utmCampaign} value={params.utm_campaign || ""} />
      <input type="hidden" id={F.utmAdGroup} name={F.utmAdGroup} value={params.utm_adgroup || ""} />
      <input type="hidden" id={F.utmContent} name={F.utmContent} value={params.utm_content || ""} />
      <input type="hidden" id={F.utmTerm} name={F.utmTerm} value={params.utm_term || ""} />

      <div>
        <label htmlFor="first_name" className={labelCls}>First Name *</label>
        <input id="first_name" name="first_name" type="text" maxLength={40} required className={inputCls} />
      </div>
      <div>
        <label htmlFor="last_name" className={labelCls}>Last Name *</label>
        <input id="last_name" name="last_name" type="text" maxLength={80} required className={inputCls} />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>Work Email *</label>
        <input id="email" name="email" type="email" maxLength={80} required className={inputCls} />
      </div>
      <div>
        <label htmlFor="mobile" className={labelCls}>Mobile *</label>
        <input id="mobile" name="mobile" type="tel" maxLength={40} required className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className={labelCls}>Company *</label>
        <input id="company" name="company" type="text" maxLength={40} required className={inputCls} />
      </div>
      <div>
        <label htmlFor={F.employeeRange} className={labelCls}>Number of employees *</label>
        <select id={F.employeeRange} name={F.employeeRange} required className={inputCls}>
          <option value="">Select…</option>
          {EMPLOYEE_RANGES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={F.emirate} className={labelCls}>Emirate *</label>
        <select id={F.emirate} name={F.emirate} required className={inputCls}>
          <option value="">Select…</option>
          {EMIRATES.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
        >
          Book my free demo
        </button>
        <p className="mt-2 text-[11px] text-muted-foreground">
          By submitting, you agree to be contacted by Edenred about payroll & salary card solutions.
        </p>
      </div>
    </form>
  );
}
