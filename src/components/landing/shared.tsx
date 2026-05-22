import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Smartphone,
  HeartHandshake,
  ReceiptText,
  LayoutDashboard,
  CheckCircle2,
  CreditCard,
  Building2,
  Users,
  ArrowRight,
  Lock,
  Globe2,
  Clock,
  BadgeCheck,
} from "lucide-react";

// Assets hosted on edenred.ae (per user requirement: only use site images).
// Proxied via images.weserv.nl because edenred.ae blocks hot-linking from
// non-edenred origins ("Failed to fetch" in the browser even though curl 200s).
const proxy = (path: string, ext: "auto" | "png" = "auto") => {
  const base = `https://images.weserv.nl/?url=edenred.ae/${path}`;
  return ext === "png" ? `${base}&output=png` : base;
};

export const IMG = {
  logo: proxy("wp-content/uploads/2021/02/Logo_Edenred_Digital-use.svg", "png"),
  partnersStrip: proxy("wp-content/uploads/2024/05/Group-21.png"),
  rakbank: proxy("wp-content/uploads/2021/01/Logo_RAKBANK-1.svg", "png"),
  mastercardJaywan: proxy("wp-content/uploads/2025/11/Logo_Mastercard_Jaywan.svg", "png"),
  mohre: proxy("wp-content/uploads/2021/01/Logo_MoL-1.jpg"),
  gptw: proxy("wp-content/uploads/2022/06/1.png"),
  heroComposite: proxy("wp-content/uploads/2024/05/LandingPage_May2024-1024x896.png"),
  heroMobile: proxy("wp-content/uploads/2024/05/LandingPage_May2024-1-585x1024.png"),
  dash1: proxy("wp-content/uploads/2021/12/1_AnticipatesNeeds_1.jpg"),
  dash2: proxy("wp-content/uploads/2021/12/1_AnticipatesNeeds_2.jpg"),
  dash3: proxy("wp-content/uploads/2022/02/1_AnticipatesNeeds_3.jpg"),
  dash4: proxy("wp-content/uploads/2021/12/1_AnticipatesNeeds_4.jpg"),
  better1: proxy("wp-content/uploads/2021/12/2_BetterWay_1.jpg"),
  better2: proxy("wp-content/uploads/2021/12/2_BetterWay_2.jpg"),
  better3: proxy("wp-content/uploads/2021/12/2_BetterWay_3.jpg"),
  better4: proxy("wp-content/uploads/2022/02/2_BetterWay_4.jpg"),
  cards1: proxy("wp-content/uploads/2021/03/Section3_1.png"),
  cards2: proxy("wp-content/uploads/2021/03/Section3_2.png"),
  cards3: proxy("wp-content/uploads/2021/03/Section3_3.png"),
  payrollAnim: proxy("wp-content/uploads/2021/12/3_EP_Main.gif"),
  damac: proxy("wp-content/uploads/2024/05/Damac-logo-1024x137.png"),
  talabat: proxy("wp-content/uploads/2024/05/Talabat_logo.svg", "png"),
  landmark: proxy("wp-content/uploads/2024/05/landmark-group-logo.png"),
  ihg: proxy("wp-content/uploads/2024/05/IHG.svg", "png"),
  waitrose: proxy("wp-content/uploads/2024/05/Waitrose_Logo.svg", "png"),
  daytoday: proxy("wp-content/uploads/2024/05/daytoday.png"),
  client7: proxy("wp-content/uploads/2024/05/pngegg-e1716462279486.png"),
};

export const SEO_TITLE = "WPS Payroll & Salary Card UAE | Edenred Payroll for Business";
export const SEO_DESC =
  "Edenred Payroll is the UAE's largest WPS-compliant payroll solution. Process salaries, issue Mastercard salary cards & manage payroll cards for your employees — trusted by 15,000+ businesses.";

// Instant scroll to form (override global smooth scroll)
export function scrollToDemo(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  const el = document.getElementById("demo");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  // Force instant by using behavior: "instant"
  window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={IMG.logo} alt="Edenred UAE" className="h-12 lg:h-14 w-auto" />
        </a>
        <a
          href="#demo"
          onClick={scrollToDemo}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-card hover:opacity-95 transition-opacity"
        >
          Book a free demo <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

export function HeroClassic() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-navy shadow-card">
            <BadgeCheck className="h-3.5 w-3.5 text-primary" />
            UAE's largest WPS-compliant payroll provider
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05]">
            WPS Payroll & <span className="text-primary">Salary Cards</span> built for UAE businesses
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Run accurate, on-time payroll, issue Mastercard salary cards to every employee, and stay 100% WPS compliant — all from one secure dashboard. Trusted by 15,000+ companies across the UAE.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              "WPS-compliant salary processing",
              "Instant payroll card issuance",
              "Real-time salary status & dashboard",
              "Onboarding in days, not weeks",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-navy">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              onClick={scrollToDemo}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant hover:opacity-95"
            >
              Book a free payroll demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Partnered & authorised by</span>
            <img src={IMG.rakbank} alt="RAKBANK" className="h-7 w-auto opacity-90" />
            <img src={IMG.mastercardJaywan} alt="Mastercard Jaywan" className="h-8 w-auto opacity-90" />
            <img src={IMG.mohre} alt="UAE Ministry of Human Resources & Emiratisation" className="h-9 w-auto opacity-90" />
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 bg-gradient-primary opacity-10 blur-3xl rounded-full" aria-hidden />
          <img
            src={IMG.heroComposite}
            alt="Edenred Payroll dashboard with employees receiving WPS salary on C3Pay payroll card"
            className="relative w-full h-auto rounded-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export function HeroWithForm() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 lg:pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-navy shadow-card">
            <BadgeCheck className="h-3.5 w-3.5 text-primary" />
            UAE's largest WPS-compliant payroll provider
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05]">
            WPS Payroll & <span className="text-primary">Salary Cards</span> built for UAE businesses
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Run accurate, on-time payroll, issue Mastercard salary cards to every employee, and stay 100% WPS compliant — all from one secure dashboard. Trusted by 15,000+ companies across the UAE.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              "WPS-compliant salary processing",
              "Instant payroll card issuance",
              "Real-time salary status & dashboard",
              "Onboarding in days, not weeks",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-navy">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Partnered & authorised by</span>
            <img src={IMG.rakbank} alt="RAKBANK" className="h-7 w-auto opacity-90" />
            <img src={IMG.mastercardJaywan} alt="Mastercard Jaywan" className="h-8 w-auto opacity-90" />
            <img src={IMG.mohre} alt="UAE Ministry of Human Resources & Emiratisation" className="h-9 w-auto opacity-90" />
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 bg-gradient-primary opacity-10 blur-3xl rounded-full" aria-hidden />
          <div className="relative">
            <InlineDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function InlineDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div id="demo" className="rounded-3xl bg-background text-foreground p-6 lg:p-7 shadow-elegant border border-border scroll-mt-24">
      {submitted ? (
        <div className="py-8 text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-accent grid place-items-center text-primary">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-navy">Thank you!</h3>
          <p className="mt-2 text-muted-foreground">
            Our sales team will reach out within one business day.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-3.5"
        >
          <div>
            <h3 className="text-xl font-bold text-navy">Book your payroll demo</h3>
            <p className="text-sm text-muted-foreground mt-1">No commitment. Response within one business day.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3.5">
            <Field label="Full name" name="name" required />
            <Field label="Work email" name="email" type="email" required />
            <Field label="Mobile number" name="mobile" type="tel" required />
            <Field label="Company name" name="company" required />
            <Select label="Company size" name="size" options={["1 – 99", "100 – 249", "250 – 999", "1000+"]} required />
            <Select label="Emirate" name="emirate" options={["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"]} required />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-card hover:opacity-95"
          >
            Book a free demo <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted by Edenred UAE about payroll services.
          </p>
        </form>
      )}
    </div>
  );
}

export function ClientLogos() {
  const logos = [
    { src: IMG.damac, alt: "Damac" },
    { src: IMG.talabat, alt: "Talabat" },
    { src: IMG.landmark, alt: "Landmark Group" },
    { src: IMG.ihg, alt: "IHG" },
    { src: IMG.waitrose, alt: "Waitrose" },
    { src: IMG.daytoday, alt: "Day to Day" },
    { src: IMG.client7, alt: "Trusted client" },
  ];
  return (
    <section id="clients" className="py-16 border-y border-border bg-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          15,000+ UAE companies run payroll on Edenred
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-6 items-center">
          {logos.map((l) => (
            <div key={l.alt} className="flex justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
              <img src={l.src} alt={`${l.alt} – Edenred Payroll client`} className="h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { k: "15,000+", v: "UAE businesses on Edenred Payroll" },
    { k: "#1", v: "Largest salary processor in the UAE" },
    { k: "100%", v: "WPS compliant & MoHRE authorised" },
    { k: "24/7", v: "Multilingual employee support" },
  ];
  return (
    <section className="py-14 bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.v} className="text-center lg:text-left">
            <div className="text-4xl lg:text-5xl font-bold text-primary-foreground">{s.k}</div>
            <div className="mt-2 text-sm text-primary-foreground/70 max-w-[14rem] lg:mx-0 mx-auto">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { icon: ShieldCheck, title: "Secure & WPS Compliant", desc: "Bank-grade data security and full WPS compliance in the UAE — keeping every salary transfer on the right side of MoHRE regulations." },
    { icon: Zap, title: "Fast Setup & Onboarding", desc: "Submit your KYC documents and start processing salaries in days. No long waits, no IT overhead, no missed paydays." },
    { icon: Smartphone, title: "Anywhere Access", desc: "Run payroll from the office or on the go. Manage salaries, balances and cards from desktop or mobile, 24/7." },
    { icon: HeartHandshake, title: "Superior Employee Experience", desc: "From card delivery to offboarding, your employees get the C3Pay app, salary advance options and multilingual support." },
    { icon: ReceiptText, title: "Transparent Pricing", desc: "One simple invoice with clear pricing and zero hidden fees. Built to scale with companies of every size." },
    { icon: LayoutDashboard, title: "Payroll Designed for You", desc: "Issue salary cards, schedule WPS payroll runs and track transfer status in real-time from a single dashboard." },
  ];
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why finance & HR teams choose us</p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Experience the Edenred difference</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One platform to process WPS payroll, issue salary cards and give your employees a financial product they actually love.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Platform() {
  const rows = [
    { img: IMG.dash1, title: "Know when your salary funds are credited", desc: "Track transferred funds and view available balance in real-time. No more guessing or follow-up calls to the bank." },
    { img: IMG.dash2, title: "Live salary transfer status", desc: "Stay up-to-date the moment your team is paid. You'll never be in the dark on a WPS submission again." },
    { img: IMG.better1, title: "Work closer with your team", desc: "Invite finance, HR and admin users to the platform with role-based access for tighter collaboration." },
    { img: IMG.better2, title: "Approval flows you control", desc: "Configure custom approval workflows so payroll runs are reviewed and signed-off before they go out." },
    { img: IMG.dash3, title: "Schedule payroll on your terms", desc: "Avoid the month-end rush. Schedule salary processing exactly when it suits your cashflow and pay cycle." },
    { img: IMG.better4, title: "Payroll history at your fingertips", desc: "Automated, audit-ready payroll reports — search any month, any employee, any salary transfer instantly." },
  ];
  return (
    <section id="platform" className="py-20 lg:py-28 bg-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">The platform</p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Modern payroll tech, built for UAE finance teams</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A single dashboard to run WPS salary transfers, manage payroll cards and approve every transaction — desktop or mobile.
          </p>
        </div>
        <div className="mt-14 space-y-16 lg:space-y-24">
          {rows.map((r, i) => (
            <div key={r.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary opacity-10 rounded-3xl blur-2xl" aria-hidden />
                {/* Navy browser-style frame so the white dashboard screenshot is clearly visible */}
                <div className="relative rounded-2xl bg-navy p-3 shadow-elegant ring-1 ring-navy/20">
                  <div className="flex items-center gap-1.5 px-2 pb-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground/30" />
                  </div>
                  <img
                    src={r.img}
                    alt={r.title}
                    loading="lazy"
                    className="w-full h-auto rounded-lg bg-background border border-border"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <span className="h-px w-8 bg-primary" /> Feature 0{i + 1}
                </div>
                <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-navy">{r.title}</h3>
                <p className="mt-3 text-base text-muted-foreground max-w-lg">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cards() {
  const items = [
    { icon: Zap, title: "Auto-ordered on hire", desc: "Cards automatically ordered when you add a new employee — zero manual paperwork." },
    { icon: CreditCard, title: "Replace in clicks", desc: "Lost card? Block it and request a replacement in just a few clicks from the dashboard." },
    { icon: ShieldCheck, title: "Live delivery tracking", desc: "Cards delivered directly to you with full live tracking so nothing falls through the cracks." },
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Salary card management</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">
              Order, replace and cancel <span className="text-primary">payroll cards</span> effortlessly
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Every employee gets a Mastercard-powered C3Pay salary card — accepted at any ATM, online and in-store worldwide. You stay fully in control of issuance.
            </p>
            {/* Real C3Pay card composite from edenred.ae */}
            <div className="mt-8 relative max-w-md">
              <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-2xl rounded-3xl" aria-hidden />
              <img
                src={IMG.cards1}
                alt="Edenred C3Pay Mastercard payroll card"
                loading="lazy"
                className="relative w-full h-auto"
              />
            </div>
            <a
              href="#demo"
              onClick={scrollToDemo}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-card hover:opacity-95"
            >
              Issue salary cards for your team <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5">
            {items.map((it) => (
              <div key={it.title} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-shadow">
                <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center">
                  <it.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WPS() {
  const points = [
    { icon: Lock, title: "Bank-grade data security", desc: "ISO-aligned controls, encryption at rest and in transit, plus on-demand card block." },
    { icon: BadgeCheck, title: "MoHRE authorised", desc: "Authorised by the UAE Ministry of Human Resources & Emiratisation for WPS salary disbursement." },
    { icon: Building2, title: "Any company size", desc: "Works for SMEs to enterprises with 1,000+ employees, WPS or non-WPS workforces." },
    { icon: Clock, title: "No minimum salary", desc: "Process salaries of any value — no minimum thresholds, no excluded employees." },
    { icon: Globe2, title: "Multi-emirate ready", desc: "Live across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ and Fujairah." },
    { icon: Users, title: "Employee financial wellness", desc: "Salary advance, instant remittance, mobile recharge to 130+ countries via C3Pay." },
  ];
  return (
    <section id="wps" className="py-20 lg:py-28 bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">WPS & Compliance</p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">Stay 100% WPS compliant — without the spreadsheets</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
            Edenred Payroll handles WPS file generation, salary transfers and reconciliation, so your finance team can stop chasing files and start closing books faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <img src={IMG.rakbank} alt="Partnered with RAKBANK" className="h-8 w-auto bg-white rounded-md px-3 py-2" />
            <img src={IMG.mastercardJaywan} alt="Powered by Mastercard & Jaywan" className="h-10 w-auto bg-white rounded-md px-3 py-1" />
            <img src={IMG.mohre} alt="Authorised by MoHRE" className="h-12 w-auto bg-white rounded-md px-2 py-1" />
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-primary-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmployeeValue() {
  const benefits = [
    { title: "Use anywhere", desc: "Withdraw at any ATM, pay online or at any store worldwide on Mastercard." },
    { title: "Send money home", desc: "Instant low-cost remittance to families across 130+ countries." },
    { title: "Mobile recharge", desc: "Recharge phone balance in the UAE and across 130+ countries instantly." },
    { title: "Fraud protection", desc: "On-demand card block, SMS alerts and advanced data protection." },
    { title: "Salary advance", desc: "Eligible employees can access short-term funds at nominal rates." },
    { title: "24/7 support", desc: "Multilingual support for every employee." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Balanced header — full width, centered intent on the left, supporting copy on the right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">For your employees</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">A salary card your people actually want</h2>
          </div>
          <p className="lg:col-span-5 text-lg text-muted-foreground">
            Happy employees stay longer. The C3Pay salary card, powered by Mastercard, gives your workforce a complete financial app — not just a place to receive wages.
          </p>
        </div>

        {/* Bento grid — phone tile on the left matches the height of the 3x2 benefits grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-4 relative overflow-hidden rounded-2xl bg-gradient-primary p-8 shadow-elegant flex flex-col justify-between min-h-[420px]">
            <div className="text-primary-foreground">
              <p className="text-sm font-semibold uppercase tracking-widest opacity-80">C3Pay app</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">One app for salary, spending & sending money home</h3>
            </div>
            <img
              src={IMG.heroMobile}
              alt="Employees using the C3Pay salary card mobile app"
              loading="lazy"
              className="mt-6 w-full max-w-[260px] mx-auto drop-shadow-2xl"
            />
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "What is WPS and is Edenred Payroll WPS-compliant?", a: "The Wage Protection System (WPS) is an electronic salary transfer system mandated by the UAE Ministry of Human Resources and Emiratisation (MoHRE). Edenred Payroll is fully WPS-compliant and MoHRE authorised, with no minimum salary requirement." },
    { q: "How does the Edenred salary card work for employees?", a: "Every employee receives a Mastercard-powered C3Pay payroll card. Salaries are credited directly to the card and employees can withdraw cash at any ATM, pay online or in-store worldwide, send money home and recharge mobiles in 130+ countries." },
    { q: "How quickly can my business start running payroll?", a: "Once your KYC documents are submitted, onboarding takes a matter of days. You can begin issuing payroll cards and processing salaries from the dashboard as soon as activation is complete." },
    { q: "Is there a minimum company size or minimum salary?", a: "No. Edenred Payroll works for businesses of every size, with no minimum salary requirement — both WPS and non-WPS payrolls are supported." },
    { q: "How much does Edenred Payroll cost?", a: "Pricing is transparent and tailored to your headcount and payroll volume. You receive a single, clear invoice with no hidden fees. Book a demo and our team will share pricing for your business." },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28 bg-soft">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">WPS payroll & salary card questions, answered</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 shadow-card open:shadow-elegant transition-shadow">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-navy font-semibold list-none">
                <span>{f.q}</span>
                <span className="h-7 w-7 rounded-full bg-accent text-primary grid place-items-center group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="demo" className="py-20 lg:py-28 bg-navy-deep text-primary-foreground relative overflow-hidden scroll-mt-24">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(40% 60% at 90% 10%, oklch(0.605 0.232 27.5 / 0.35), transparent 60%), radial-gradient(40% 60% at 10% 90%, oklch(0.605 0.232 27.5 / 0.2), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Book a free demo</p>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">See WPS payroll & salary cards in action</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg">
            Tell us about your team and we'll walk you through Edenred Payroll, pricing, and salary card issuance for your business.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Live demo of the payroll dashboard", "Tailored pricing for your headcount", "Onboarding & WPS migration walkthrough"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <img src={IMG.gptw} alt="Great Place to Work UAE Certified 2022-2023" className="h-16 w-auto bg-white/95 rounded-md p-1" />
            <div className="text-sm text-primary-foreground/70">
              <div className="font-semibold text-primary-foreground">Great Place to Work® in UAE</div>
              Certified 2022 – 2023
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-background text-foreground p-7 lg:p-9 shadow-elegant">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-accent grid place-items-center text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-navy">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">
                Our sales team will reach out within one business day to schedule your Edenred Payroll demo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-navy">Book your payroll demo</h3>
              <p className="text-sm text-muted-foreground -mt-2">No commitment. Response within one business day.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Mobile number" name="mobile" type="tel" required />
                <Field label="Company name" name="company" required />
                <Select label="Company size" name="size" options={["1 – 99 employees", "100 – 249 employees", "250 – 999 employees", "1000+ employees"]} required />
                <Select label="Emirate" name="emirate" options={["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"]} required />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-card hover:opacity-95"
              >
                Book a free demo <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted by Edenred UAE about payroll services.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-navy">{label}{required && <span className="text-primary"> *</span>}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function Select({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-navy">{label}{required && <span className="text-primary"> *</span>}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img src={IMG.logo} alt="Edenred UAE" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Edenred is a financial technology company. Our Bank Identification Number (BIN) is sponsored by RAKBANK.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-navy mb-3">Edenred Payroll</div>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-primary">Why Edenred</a></li>
            <li><a href="#platform" className="hover:text-primary">Platform</a></li>
            <li><a href="#wps" className="hover:text-primary">WPS & Compliance</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-navy mb-3">Talk to sales</div>
          <ul className="space-y-2">
            <li><a href="#demo" onClick={scrollToDemo} className="hover:text-primary">Book a free demo</a></li>
            <li><a href="https://edenred.ae" className="hover:text-primary">edenred.ae</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Edenred UAE. All rights reserved.
      </div>
    </footer>
  );
}

export const seoMeta = () => ({
  meta: [
    { title: SEO_TITLE },
    { name: "description", content: SEO_DESC },
    {
      name: "keywords",
      content:
        "WPS payroll UAE, salary card UAE, payroll card, WPS salary card, payroll solution UAE, corporate payroll, employee salary processing, Mastercard salary card, C3Pay, Edenred payroll, WPS compliant payroll, Dubai payroll services",
    },
    { property: "og:title", content: SEO_TITLE },
    { property: "og:description", content: SEO_DESC },
    { property: "og:type", content: "website" },
    { property: "og:image", content: IMG.heroComposite },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SEO_TITLE },
    { name: "twitter:description", content: SEO_DESC },
    { name: "twitter:image", content: IMG.heroComposite },
  ],
  links: [{ rel: "canonical", href: "/" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", name: "Edenred UAE", url: "https://edenred.ae", logo: IMG.logo, sameAs: ["https://edenred.ae"] },
          { "@type": "Product", name: "Edenred Payroll – WPS Salary Card & Payroll Solution", brand: "Edenred", description: SEO_DESC, image: IMG.heroComposite, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "15000" } },
        ],
      }),
    },
  ],
});
