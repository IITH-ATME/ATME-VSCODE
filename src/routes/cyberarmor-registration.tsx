import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  User,
  Hash,
  GraduationCap,
  Building2,
  Phone,
  Mail,
  Fingerprint,
  Receipt,
  UploadCloud,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/cyberarmor-registration")({
  head: () => ({
    meta: [
      { title: "CyberArmor Registration — ATME College of Engineering" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CyberArmorRegistrationPage,
});

// Submissions are emailed directly to this address via FormSubmit.co — a
// hosted form-to-email service, so there is no backend of our own on this
// path and no credentials to manage. See docs/cyberarmor-registration-setup.md
// for the one-time confirmation step FormSubmit requires.
const FORMSUBMIT_EMAIL = "atmecyberarmor@gmail.com";
const FORMSUBMIT_ACTION = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;

type FieldConfig = {
  name: string;
  submitName: string;
  label: string;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  icon: LucideIcon;
};

const FIELDS: FieldConfig[] = [
  { name: "fullName", submitName: "Full Name", label: "Full Name", placeholder: "E.g. John Doe", icon: User },
  { name: "usn", submitName: "USN", label: "USN", maxLength: 15, icon: Hash },
  { name: "semester", submitName: "Semester", label: "Semester", maxLength: 1, icon: GraduationCap },
  { name: "institute", submitName: "Institute", label: "Institute", maxLength: 25, icon: Building2 },
  { name: "phone", submitName: "Phone", label: "Phone", placeholder: "E.g. +1 300 400 5000", maxLength: 12, type: "tel", icon: Phone },
  // Kept literally "email" — FormSubmit auto-detects a field with this exact
  // name and uses it as the notification's Reply-To address.
  { name: "email", submitName: "email", label: "Email Address", placeholder: "E.g. john@doe.com", type: "email", icon: Mail },
  { name: "aadhaar", submitName: "Aadhaar Number", label: "Aadhaar Number", placeholder: "XXXX XXXX XXXX", maxLength: 12, icon: Fingerprint },
];

const DISCLAIMER_TEXT =
  '"I hereby declare that all the details provided are accurate to the best of my knowledge. I understand that this Cybersecurity LMS is hosted by ATME College of Engineering, Mysuru. I accept that any misuse, data manipulation, or unethical behavior may lead to suspension or termination of access without refund. I understand the content is for educational purposes and acknowledge that any attempt to misuse cybersecurity knowledge for illegal activities is punishable by law. I agree to abide by the rules, and any disputes will be under Mysuru jurisdiction."';

const inputCls =
  "w-full rounded-lg border border-[#dfe3e8] bg-white pl-10 pr-3.5 py-2.5 text-[15px] text-[#1f2328] placeholder:text-[#a4a9b0] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#129199]/30 focus:border-[#129199]";

function Field({
  cfg,
  value,
  onChange,
}: {
  cfg: FieldConfig;
  value: string;
  onChange: (v: string) => void;
}) {
  const Icon = cfg.icon;
  return (
    <div>
      <div className="mb-1.5 flex items-end justify-between gap-2">
        <label htmlFor={cfg.name} className="text-[14px] font-semibold text-[#2f3438]">
          {cfg.label} <span className="text-[#e0574c]">*</span>
        </label>
        {cfg.maxLength ? (
          <span className="text-xs tabular-nums text-[#9aa0a6]">
            {value.length} / {cfg.maxLength}
          </span>
        ) : null}
      </div>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#129199]/60" />
        <input
          id={cfg.name}
          name={cfg.submitName}
          type={cfg.type ?? "text"}
          required
          placeholder={cfg.placeholder}
          maxLength={cfg.maxLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-wider text-[#129199]">{children}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-[#129199]/25 to-transparent" />
    </div>
  );
}

function SuccessScreen() {
  const heroStyle = {
    background: "linear-gradient(90deg, #0a2a2d 0%, #0d3438 25%, #129199 70%, rgba(18,145,153,0.9) 100%)",
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2fbfa] to-white">
      <section className="relative w-full overflow-hidden" style={heroStyle}>
        <div className="relative container-page py-14 text-center">
          <ShieldCheck className="mx-auto mb-3 h-10 w-10 text-white/90" />
          <h1 className="text-3xl font-display font-bold text-white">CyberArmor Registration</h1>
        </div>
      </section>
      <div className="mx-auto max-w-[520px] px-5 py-16 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#129199]/10">
          <CheckCircle2 className="h-9 w-9 text-[#129199]" />
        </div>
        <h2 className="text-2xl font-semibold text-[#1f2328]">Registration received</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#5f6368]">
          Thank you — your CyberArmor registration has been submitted successfully. Our team will verify your
          payment and get in touch by email.
        </p>
      </div>
    </div>
  );
}

function CyberArmorRegistrationPage() {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(FIELDS.map((f) => [f.name, ""])),
  );
  const [utr, setUtr] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("submitted") === "1") setSubmitted(true);
    setNextUrl(`${window.location.origin}${window.location.pathname}?submitted=1`);
  }, []);

  const set = (name: string) => (v: string) => setValues((s) => ({ ...s, [name]: v }));

  function handleSubmit(e: React.FormEvent) {
    setError(null);

    if (!file) {
      e.preventDefault();
      setError("Please upload your payment receipt.");
      return;
    }
    if (!accepted) {
      e.preventDefault();
      setError("Please accept the disclaimer to continue.");
      return;
    }
    // Valid: let the browser submit the real multipart form to FormSubmit.co.
    setSubmitting(true);
  }

  if (submitted) return <SuccessScreen />;

  const heroStyle = {
    background: "linear-gradient(90deg, #0a2a2d 0%, #0d3438 25%, #129199 70%, rgba(18,145,153,0.9) 100%)",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2fbfa] to-white pb-16">
      <section className="relative w-full overflow-hidden" style={heroStyle}>
        <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(245,197,24,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15), transparent 50%)" }} />
        <div aria-hidden className="absolute left-0 right-0 bottom-0 h-1.5" style={{ background: "linear-gradient(90deg, #f5c518, #ffd95a, #f5c518)" }} />
        <div className="relative container-page py-12 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
            <ShieldCheck className="h-7 w-7 text-[#f5c518]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white drop-shadow-lg">
            CyberArmor Registration
          </h1>
          <p className="mt-2 text-sm text-white/80">Cybersecurity LMS — ATME College of Engineering, Mysuru</p>
        </div>
      </section>

      <div className="mx-auto -mt-8 max-w-[560px] px-5">
        <form
          action={FORMSUBMIT_ACTION}
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-[#e3e5e8] bg-white p-6 sm:p-8 shadow-[0_10px_40px_-12px_rgba(13,52,56,0.25)]"
        >
          <input type="hidden" name="_subject" value="New CyberArmor Registration" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={nextUrl} />

          <SectionLabel>Student Details</SectionLabel>
          <div className="space-y-5">
            {FIELDS.map((f) => (
              <Field key={f.name} cfg={f} value={values[f.name]} onChange={set(f.name)} />
            ))}
          </div>

          <div className="mt-8">
            <SectionLabel>Payment Details</SectionLabel>
            <div>
              <div className="mb-1.5 flex items-end justify-between gap-2">
                <label htmlFor="utr" className="text-[14px] font-semibold text-[#2f3438]">
                  UTR / Traansaction Number <span className="text-[#e0574c]">*</span>
                </label>
                <span className="text-xs tabular-nums text-[#9aa0a6]">{utr.length} / 25</span>
              </div>
              <div className="relative">
                <Receipt className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#129199]/60" />
                <input
                  id="utr"
                  name="UTR / Transaction Number"
                  type="text"
                  required
                  placeholder="UTR / Traansaction Number"
                  maxLength={25}
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[14px] font-semibold text-[#2f3438]">
                Upload Payment Receipt (Image or PDF upload – .jpg, .png, or .pdf) <span className="text-[#e0574c]">*</span>
              </label>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="group flex w-full items-center gap-3 rounded-xl border-2 border-dashed border-[#129199]/30 bg-[#f2fbfa] px-4 py-4 text-left transition-colors hover:border-[#129199]/60 hover:bg-[#e9f8f6]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#129199] text-white shadow-sm transition-transform group-hover:scale-105">
                  {file ? <FileText className="h-5 w-5" /> : <UploadCloud className="h-5 w-5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-[#129199]">Choose File</span>
                  <span className="block truncate text-xs text-[#6b7075]">{file ? file.name : "No file chosen"}</span>
                </span>
                {file ? (
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="shrink-0 rounded-full p-1.5 text-[#9aa0a6] hover:bg-white hover:text-[#e0574c]"
                    aria-label="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </span>
                ) : null}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                name="Payment Receipt"
                accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
                required
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </div>
          </div>

          <div className="mt-8">
            <SectionLabel>Disclaimer</SectionLabel>
            <div className="rounded-xl border border-[#f5c518]/40 bg-[#fffaeb] p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded-sm border-[#c9ae4d] text-[#129199] accent-[#129199]"
                />
                <span className="text-[14px] leading-relaxed text-[#3c4043]">{DISCLAIMER_TEXT}</span>
              </label>
              <p className="mt-3 pl-7 text-[14px] font-bold text-[#1f2328]">
                I have read and accept the above disclaimer
              </p>
            </div>
          </div>

          {error ? (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#129199] to-[#0d3438] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#129199]/25 transition-transform hover:scale-[1.01] hover:shadow-xl disabled:opacity-60 disabled:hover:scale-100 sm:w-auto sm:px-10"
          >
            {submitting ? "Submitting…" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
