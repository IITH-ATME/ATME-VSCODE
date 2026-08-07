import { useEffect, useState, type FormEvent } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import popupAsset from "@/assets/admissions-popup.jpg.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ADMISSIONS_EMAIL = "admissions@atme.edu.in";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function AdmissionsPopup() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", phone: "", interest: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setShow(true));
    }, 800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => {
    setShow(false);
    setTimeout(() => setOpen(false), 250);
  };

  const handleChange = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${ADMISSIONS_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Admission Enquiry — ATMECE Website",
          _template: "table",
          "Full Name": values.name.trim(),
          Email: values.email.trim(),
          "Phone Number": values.phone.trim() || "Not provided",
          "Interested In": values.interest.trim() || "Not specified",
          "Submitted From": typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="ATMECE admissions enquiry form"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(8, 30, 45, 0.78)", backdropFilter: "blur(4px)" }}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[94vw] sm:max-w-[640px] md:max-w-[880px] lg:max-w-[960px] max-h-[92vh] overflow-y-auto sm:overflow-visible rounded-2xl shadow-2xl ring-1 ring-white/20 transition-all duration-500 ease-out ${
          show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"
        }`}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-[#0b2447] shadow-lg hover:scale-110 hover:rotate-90 transition-transform"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden">
          <a
            href="/admissions"
            aria-label="View ATMECE admissions details"
            className="block md:w-[42%] shrink-0 animate-[popIn_0.5s_ease-out]"
          >
            <img
              src={resolveAssetUrl(popupAsset.url)}
              alt="ATMECE Admissions Open — No Donation, No Development Fee"
              className="block w-full h-48 sm:h-56 md:h-full object-cover object-top md:object-contain md:object-center bg-white"
              loading="eager"
              width={1181}
              height={1417}
            />
          </a>

          <div className="flex-1 p-5 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Join ATMECE</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this quick form to learn more about our programs and get in touch with our admission team.
            </p>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center text-center gap-3 py-6">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <p className="text-base font-semibold text-foreground">Thank you for your interest!</p>
                <p className="text-sm text-muted-foreground">
                  Our admissions team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="admissions-popup-name"
                    required
                    placeholder="Enter your full name"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="admissions-popup-email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-phone">
                    Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="admissions-popup-phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter 10-digit phone number"
                    value={values.phone}
                    onChange={handleChange("phone")}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-interest">
                    What are you interested in? <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="admissions-popup-interest"
                    placeholder="e.g., Admissions, Programs, Campus Tour"
                    value={values.interest}
                    onChange={handleChange("interest")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-11 gradient-hero text-primary-foreground text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                    </span>
                  ) : (
                    "Submit Interest"
                  )}
                </Button>

                {status === "error" && (
                  <p className="text-sm text-destructive text-center">
                    Something went wrong. Please try again, or email us directly at{" "}
                    <a href={`mailto:${ADMISSIONS_EMAIL}`} className="underline">
                      {ADMISSIONS_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information will be used only for admission purposes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.03); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
