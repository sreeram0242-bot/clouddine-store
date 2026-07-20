import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChefHat,
  QrCode,
  LayoutDashboard,
  Users,
  Bell,
  Printer,
  ShieldCheck,
  BarChart3,
  Utensils,
  Sparkles,
  ArrowRight,
  Check,
  Menu as MenuIcon,
  X,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

import logo from "@/assets/logo.png";
import shotAdminDash from "@/assets/shots/admin_0_Dashboard.webp";
import shotAdminOrders from "@/assets/shots/admin_1_Orders.webp";
import shotAdminTables from "@/assets/shots/admin_2_Tables.webp";
import shotAdminMenu from "@/assets/shots/admin_3_Menu_Items.webp";
import shotAdminQR from "@/assets/shots/admin_5_QR_Codes.webp";
import shotMasterDash from "@/assets/shots/master_0_Dashboard.webp";
import shotMasterRest from "@/assets/shots/master_1_Restaurants.webp";
import shotMasterRev from "@/assets/shots/master_3_Platform_Revenue.webp";
import shotMasterSub from "@/assets/shots/master_4_Subscriptions.webp";
import shotWaiterDashM from "@/assets/shots/waiter_m_dash.webp";
import shotWaiterOrdersM from "@/assets/shots/waiter_m_orders.webp";
import shotWaiterCallsM from "@/assets/shots/waiter_m_calls.webp";
import shotCustomerMenuM from "@/assets/shots/customer_m_menu.webp";
import shotCustomerMenu2M from "@/assets/shots/customer_m_menu2.webp";
import shotBillingMDashboard from "@/assets/shots/billing_m_dashboard.png";
import shotBillingMNewBill from "@/assets/shots/billing_m_new_bill.png";
import shotBillingMCustomers from "@/assets/shots/billing_m_customers.png";
import shotBillingMRevenue from "@/assets/shots/billing_m_revenue.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const DASH = "https://royal-spice-glwu.onrender.com";

const portals = [
  {
    key: "admin",
    label: "Admin",
    url: `${DASH}/admin`,
    tagline: "Run one restaurant end-to-end",
    variant: "browser",
    shots: [
      { src: shotAdminDash, label: "Live dashboard" },
      { src: shotAdminOrders, label: "Orders" },
      { src: shotAdminTables, label: "Tables" },
      { src: shotAdminMenu, label: "Menu items" },
      { src: shotAdminQR, label: "QR codes" },
    ],
  },
  {
    key: "master",
    label: "Master",
    url: `${DASH}/master`,
    tagline: "Own the whole platform, every outlet",
    variant: "browser",
    shots: [
      { src: shotMasterDash, label: "Platform overview" },
      { src: shotMasterRest, label: "Restaurants" },
      { src: shotMasterRev, label: "Revenue" },
      { src: shotMasterSub, label: "Subscriptions" },
    ],
  },
  {
    key: "waiter",
    label: "Waiter",
    url: `${DASH}/waiter`,
    tagline: "The floor app your team will actually use — built for mobile",
    variant: "mobile",
    shots: [
      { src: shotWaiterDashM, label: "Dashboard" },
      { src: shotWaiterOrdersM, label: "Orders" },
      { src: shotWaiterCallsM, label: "Calls" },
    ],
  },
  {
    key: "customer",
    label: "Customer",
    url: `${DASH}/customer/?r=cmqzeta34000ikfxs9clhh3nu&t=1`,
    tagline: "What your guests see after they scan the QR at the table",
    variant: "mobile",
    shots: [
      { src: shotCustomerMenuM, label: "Menu" },
      { src: shotCustomerMenu2M, label: "Browse" },
    ],
  },
] as const;

const features = [
  { icon: QrCode, title: "QR-code ordering", text: "Guests scan, browse the menu, and order straight from their table — no app, no waiting." },
  { icon: LayoutDashboard, title: "Live admin dashboard", text: "Today's revenue, live orders, active tables and waiter calls on one calm screen." },
  { icon: Utensils, title: "Menu & category manager", text: "CRUD items with images, veg flags, best-sellers and availability toggles in seconds." },
  { icon: Bell, title: "Realtime waiter calls", text: "Socket.io push lands a table request on the floor app the instant it happens." },
  { icon: Printer, title: "KOT printer support", text: "Browser, network, USB or Bluetooth printers — the kitchen keeps printing, quietly." },
  { icon: Users, title: "Multi-role, multi-tenant", text: "Master, Admin and Waiter portals with JWT auth and per-restaurant isolation." },
  { icon: BarChart3, title: "Revenue & analytics", text: "Per-table bills, session history, growth charts and platform-wide reporting." },
  { icon: ShieldCheck, title: "Secure by default", text: "bcrypt passwords, Helmet, rate-limiting and per-tenant data walls out of the box." },
];

const steps = [
  { n: "01", title: "Guest scans the QR at the table", text: "A branded menu opens instantly — categories, best-sellers, veg filters, images." },
  { n: "02", title: "Order flies to kitchen & waiter", text: "KOT prints in the kitchen and the order lights up on the floor app in realtime." },
  { n: "03", title: "Session, bill & payment", text: "Every table has a session with subtotal, GST, tips and a one-tap close." },
  { n: "04", title: "You watch the numbers grow", text: "Revenue, order counts and best sellers stream into the admin dashboard live." },
];

const plans = [
  {
    name: "Trial",
    price: "Free",
    tag: "14 days, everything unlocked",
    features: ["Full admin dashboard", "Unlimited QR tables", "Waiter app", "Email support"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Restaurant",
    price: "₹1,499",
    tag: "per month, per outlet",
    features: [
      "Everything in Trial",
      "Unlimited menu items & categories",
      "KOT printer integrations",
      "Realtime waiter calls",
      "Priority support",
    ],
    cta: "Book a demo",
    highlight: true,
  },
  {
    name: "Chain",
    price: "Custom",
    tag: "multi-outlet, master panel",
    features: [
      "Everything in Restaurant",
      "Master panel across outlets",
      "Platform-wide revenue reports",
      "Subscription & billing controls",
      "Dedicated onboarding",
    ],
    cta: "Talk to us",
    highlight: false,
  },
  {
    name: "Offline Billing System",
    price: "₹299",
    tag: "per month",
    features: [
      "Live offer tracking",
      "Revenue insights",
      "Real-time alerts",
      "Email support",
    ],
    cta: "Start tracking",
    highlight: false,
  },
];

function LandingPage() {
  const [activePortal, setActivePortal] = useState<(typeof portals)[number]["key"]>("admin");
  const [activeShot, setActiveShot] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const portal = portals.find((p) => p.key === activePortal)!;
  const currentShot = portal.shots[Math.min(activeShot, portal.shots.length - 1)];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Cloud Dine" className="h-9 w-auto" />
            <span className="font-display text-xl font-semibold">
              Cloud <span className="text-gold-gradient">Dine</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition hover:text-foreground">Features</a>
            <a href="#showcase" className="text-sm text-muted-foreground transition hover:text-foreground">Product</a>
            <a href="#how" className="text-sm text-muted-foreground transition hover:text-foreground">How it works</a>
            <a href="#pricing" className="text-sm text-muted-foreground transition hover:text-foreground">Pricing</a>
            <a href="#contact" className="text-sm text-muted-foreground transition hover:text-foreground">Contact</a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="gold-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-105">
              Book a demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button className="rounded-md border border-border p-2 md:hidden" onClick={() => setNavOpen((v) => !v)} aria-label="Toggle menu">
            {navOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>

        {navOpen && (
          <div className="border-t border-border/60 bg-background/95 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <a href="#features" onClick={() => setNavOpen(false)}>Features</a>
              <a href="#showcase" onClick={() => setNavOpen(false)}>Product</a>
              <a href="#how" onClick={() => setNavOpen(false)}>How it works</a>
              <a href="#pricing" onClick={() => setNavOpen(false)}>Pricing</a>
              <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-12 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:py-1.5 sm:text-xs">
              <Sparkles className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" />
              Built for hotels &amp; modern restaurants
            </div>

            <h1 className="mt-4 font-display text-3xl leading-[1.1] font-semibold sm:mt-6 sm:text-6xl lg:text-7xl">
              Run your restaurant on <span className="text-gold-gradient">autopilot.</span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-lg">
              Cloud Dine is the all-in-one platform for QR-code ordering, live kitchen orders,
              waiter management and multi-outlet control — the calm dashboard your floor has been asking for.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-9 sm:gap-3">
              <a href="#contact" className="gold-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground shadow-gold transition hover:brightness-105 sm:px-6 sm:py-3 sm:text-sm">
                Book a live demo <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium transition hover:bg-surface-2 sm:px-6 sm:py-3 sm:text-sm">
                See the product
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-muted-foreground sm:mt-8 sm:gap-x-8 sm:gap-y-3 sm:text-xs">
              <span className="flex items-center gap-1.5 sm:gap-2"><Check className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" /> 14-day free trial</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><Check className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" /> No card required</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><Check className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" /> Onboarding in a day</span>
            </div>
          </div>

          {/* Hero product frame */}
          <div className="relative mx-auto mt-8 max-w-6xl sm:mt-16">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
              style={{ background: "linear-gradient(120deg, color-mix(in oklab, var(--gold) 25%, transparent), transparent 60%)" }}
            />
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-elev sm:rounded-2xl">
              <div className="flex items-center gap-1.5 border-b border-border/70 bg-surface-2/70 px-3 py-2 sm:gap-2 sm:px-4 sm:py-2.5">
                <span className="h-2 w-2 rounded-full bg-destructive/70 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-gold-soft sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
                <span className="ml-2 truncate text-[10px] text-muted-foreground sm:ml-3 sm:text-xs">clouddine.app / admin / dashboard</span>
              </div>
              <img src={shotAdminDash} alt="Cloud Dine admin dashboard with live revenue, orders and active tables" className="block w-full" loading="eager" />
            </div>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">
            {[["4", "role-based portals"], ["<300ms", "live order push"], ["100%", "cloud-hosted"], ["14 days", "free trial"]].map(([big, small]) => (
              <div key={small} className="rounded-lg border border-border bg-surface/50 p-3 text-center sm:rounded-xl sm:p-5">
                <div className="font-display text-xl font-semibold text-gold-gradient sm:text-3xl">{big}</div>
                <div className="mt-0.5 text-[9px] uppercase tracking-widest text-muted-foreground sm:mt-1 sm:text-xs">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-border/60 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Everything included"
            title={<>One platform. <span className="text-gold-gradient">Every seat filled.</span></>}
            sub="From the guest's phone to the kitchen printer to the owner's report — Cloud Dine wires the whole restaurant together in one place."
          />

          <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-xl border border-border bg-surface/60 p-4 transition hover:border-gold/40 hover:bg-surface sm:rounded-2xl sm:p-6">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold sm:mb-5 sm:h-11 sm:w-11 sm:rounded-xl">
                  <f.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-display text-sm font-semibold sm:text-lg">{f.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="showcase" className="border-t border-border/60 bg-surface/30 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Real product, real screens"
            title={<>Three portals. <span className="text-gold-gradient">One quiet system.</span></>}
            sub="Every screenshot below is straight from a live Cloud Dine deployment. Pick a portal and click through."
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:mt-10 sm:gap-2">
            {portals.map((p) => (
              <button
                key={p.key}
                onClick={() => { setActivePortal(p.key); setActiveShot(0); }}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition sm:px-5 sm:py-2 sm:text-sm ${
                  activePortal === p.key
                    ? "gold-gradient border-transparent text-primary-foreground shadow-gold"
                    : "border-border bg-surface/70 text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground sm:mt-4 sm:text-sm">{portal.tagline}</p>

          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-[260px_1fr]">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {portal.shots.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActiveShot(i)}
                  className={`shrink-0 rounded-lg border p-2 text-left text-xs transition sm:rounded-xl sm:p-3 sm:text-sm lg:shrink ${
                    i === activeShot ? "border-gold/60 bg-surface" : "border-border bg-surface/40 hover:bg-surface"
                  }`}
                >
                  <div className="mb-1.5 overflow-hidden rounded border border-border/60 sm:mb-2 sm:rounded-md">
                    <img src={s.src} alt="" className="block h-12 w-24 object-cover object-top sm:h-16 sm:w-full" loading="lazy" decoding="async" />
                  </div>
                  <span className={i === activeShot ? "text-gold" : "text-muted-foreground"}>{s.label}</span>
                </button>
              ))}
            </div>

            {portal.variant === "mobile" ? (
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                {/* Realistic phone frame */}
                <div className="relative mx-auto w-[230px] sm:w-[300px]">
                  {/* Side buttons */}
                  <span className="absolute -left-[3px] top-[90px] h-8 w-[3px] rounded-l-sm bg-neutral-700" />
                  <span className="absolute -left-[3px] top-[130px] h-12 w-[3px] rounded-l-sm bg-neutral-700" />
                  <span className="absolute -left-[3px] top-[186px] h-12 w-[3px] rounded-l-sm bg-neutral-700" />
                  <span className="absolute -right-[3px] top-[150px] h-16 w-[3px] rounded-r-sm bg-neutral-700" />

                  {/* Body */}
                  <div
                    className="relative rounded-[2.5rem] border border-neutral-700 bg-neutral-900 p-[10px] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9),inset_0_0_0_2px_rgba(255,255,255,0.03)]"
                    style={{ background: "linear-gradient(145deg,#1a1a1a,#0a0a0a)" }}
                  >
                    {/* Screen */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-background">

                      <img
                        src={currentShot.src}
                        alt={`${portal.label} — ${currentShot.label}`}
                        className="block w-full"
                        loading="lazy"
                        decoding="async"
                      />

                    </div>
                  </div>
                </div>
              </div>

            ) : (
              <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-elev sm:rounded-2xl">
                <div className="flex items-center justify-between border-b border-border/70 bg-surface-2/70 px-3 py-2 sm:px-4 sm:py-2.5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2 w-2 rounded-full bg-destructive/70 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-gold-soft sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-gold sm:h-2.5 sm:w-2.5" />
                    <span className="ml-2 truncate text-[10px] text-muted-foreground sm:ml-3 sm:text-xs">
                      clouddine.app / {portal.key} / {currentShot.label.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>
                  {portal.key !== "admin" && portal.key !== "master" && (
                    <a href={portal.url} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 text-xs text-gold hover:underline sm:inline-flex">
                      Open live <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <img src={currentShot.src} alt={`${portal.label} — ${currentShot.label}`} className="block w-full" loading="lazy" decoding="async" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OFFLINE BILLING SYSTEM */}
      <section id="billing" className="border-t border-border/60 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="New Product"
            title={<>Introducing: <span className="text-gold-gradient">Offline Billing System</span></>}
            sub="A lightning-fast billing interface with no reliance on the cloud. Track revenue, manage customers, and print bills offline."
          />

          <div className="mt-8 grid grid-cols-1 gap-12 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              { label: "Dashboard", src: shotBillingMDashboard },
              { label: "New Bill", src: shotBillingMNewBill },
              { label: "Customers", src: shotBillingMCustomers },
              { label: "Revenue", src: shotBillingMRevenue },
            ].map((shot) => (
              <div key={shot.label} className="flex flex-col items-center gap-4">
                <p className="font-display text-lg font-semibold text-foreground">{shot.label}</p>
                <div className="relative mx-auto w-[240px] sm:w-[260px]">
                  <span className="absolute -left-[3px] top-[90px] h-8 w-[3px] rounded-l-sm bg-neutral-700" />
                  <span className="absolute -left-[3px] top-[130px] h-12 w-[3px] rounded-l-sm bg-neutral-700" />
                  <span className="absolute -left-[3px] top-[186px] h-12 w-[3px] rounded-l-sm bg-neutral-700" />
                  <span className="absolute -right-[3px] top-[150px] h-16 w-[3px] rounded-r-sm bg-neutral-700" />
                  <div className="relative rounded-[2.5rem] border border-neutral-700 bg-neutral-900 p-[10px] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.9),inset_0_0_0_2px_rgba(255,255,255,0.03)]" style={{ background: "linear-gradient(145deg,#1a1a1a,#0a0a0a)" }}>
                    <div className="relative overflow-hidden rounded-[2rem] bg-background">
                      <img src={shot.src} alt={shot.label} className="block w-full" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-border/60 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="From scan to settle"
            title={<>The guest journey, <span className="text-gold-gradient">fully wired.</span></>}
            sub="Four moments. Zero missed orders."
          />

          <div className="mt-8 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl border border-border bg-surface/50 p-4 sm:rounded-2xl sm:p-6">
                <div className="font-display text-2xl font-semibold text-gold-gradient sm:text-4xl">{s.n}</div>
                <h3 className="mt-2 font-display text-sm font-semibold sm:mt-4 sm:text-lg">{s.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* PRICING */}
      <section id="pricing" className="border-t border-border/60 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Simple, honest pricing"
            title={<>Pay for <span className="text-gold-gradient">outlets</span>, not seats.</>}
            sub="Every plan includes every feature. Start on a 14-day free trial — no card, no games."
          />

          <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative overflow-hidden rounded-xl border p-5 transition sm:rounded-2xl sm:p-8 ${p.highlight ? "border-gold/50 bg-surface shadow-gold" : "border-border bg-surface/50"}`}>
                {p.highlight && (
                  <div className="absolute right-4 top-4 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-gold sm:right-6 sm:top-6 sm:px-3 sm:py-1 sm:text-[10px]">
                    Most popular
                  </div>
                )}
                <div className="font-display text-base font-semibold sm:text-lg">{p.name}</div>
                <div className="mt-2 font-display text-3xl font-semibold text-gold-gradient sm:mt-4 sm:text-5xl">{p.price}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">{p.tag}</div>

                <ul className="mt-5 space-y-2 sm:mt-8 sm:space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:gap-3 sm:text-sm">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold sm:h-4 sm:w-4" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium transition sm:mt-8 sm:px-5 sm:py-3 sm:text-sm ${
                  p.highlight ? "gold-gradient text-primary-foreground shadow-gold hover:brightness-105" : "border border-border bg-surface hover:bg-surface-2"
                }`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 bg-surface/30 py-12 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:py-1.5 sm:text-xs">
                <Sparkles className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" /> Get in touch
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold sm:mt-6 sm:text-5xl">
                Let's put your restaurant <span className="text-gold-gradient">on Cloud Dine.</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:mt-4 sm:text-base">
                Tell us about your outlet — how many tables, how many staff — and we'll set up
                a live demo tailored to your service. Usually within 24 hours.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:mt-10 sm:space-y-4 sm:text-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold sm:h-9 sm:w-9">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <a href="mailto:cloud.dinee@gmail.com" className="hover:text-gold">cloud.dinee@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold sm:h-9 sm:w-9">
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <a href="tel:+919629661668" className="hover:text-gold">+91 9629661668</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold sm:h-9 sm:w-9">
                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <span className="text-muted-foreground">Serving hotels &amp; restaurants across India</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cloud Dine" className="h-7 w-auto" />
            <span className="font-display text-base font-semibold">
              Cloud <span className="text-gold-gradient">Dine</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#showcase" className="hover:text-foreground">Product</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cloud Dine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:px-4 sm:py-1.5 sm:text-xs">
        <Sparkles className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-2xl font-semibold leading-tight sm:mt-6 sm:text-5xl">{title}</h2>
      <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">{sub}</p>
    </div>
  );
}


function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    const data = new FormData(e.currentTarget);
    
    // Set a nice subject line for the email
    data.append("_subject", `Cloud Dine demo request — ${data.get("name")}`);
    
    try {
      await fetch("https://formsubmit.co/ajax/cloud.dinee@gmail.com", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      alert("Message sent successfully! We will contact you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSent(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface p-6 shadow-elev sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="Arjun Menon" required />
        <Field label="Restaurant / hotel" name="restaurant" placeholder="Royal Spice" required />
        <Field label="Phone" name="phone" placeholder="+91…" />
        <Field label="Email" name="email" type="email" placeholder="you@restaurant.com" required />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
          Tell us about your setup
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="How many outlets, tables, staff?"
          className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-ring"
        />
      </div>
      <button type="submit" disabled={sent} className="gold-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition hover:brightness-105 disabled:opacity-70 disabled:cursor-not-allowed">
        {sent ? "Sending message..." : "Request my demo"} <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">We reply within one working day.</p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-2.5 text-sm outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
