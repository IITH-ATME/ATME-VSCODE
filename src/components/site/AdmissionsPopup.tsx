import { useEffect, useState, type FormEvent } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import popupAsset from "@/assets/admissions-popup.jpg.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ADMISSIONS_EMAIL = "admissions@atme.edu.in";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const COURSE_OPTIONS = [
  "Computer Science & Engineering",
  "AI & ML",
  "Data Science",
  "Cyber Security",
  "Information Science",
  "Electronics & Communication",
  "Electrical & Electronics",
  "Mechanical",
  "Civil",
  "MBA",
  "MCA",
];

const ENQUIRY_OPTIONS = [
  "Admission Enquiry",
  "Fee Structure",
  "Scholarship",
  "CET Admission",
  "COMEDK Admission",
  "Management Quota",
  "Campus Visit",
  "Hostel",
  "Transport",
  "Placement Information",
  "Brochure Request",
  "Call Back Request",
  "Other",
];

const PUC_STATUS_OPTIONS = ["Appearing", "Passed"];
const QUALIFICATION_OPTIONS = ["PUC", "CBSE", "ICSE", "Diploma", "B.Sc.", "Other"];
const ADMISSION_CATEGORY_OPTIONS = ["CET", "COMEDK", "Management", "NRI", "International"];
const CONTACT_TIME_OPTIONS = ["Morning", "Afternoon", "Evening"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  course: "",
  enquiryType: "",
  state: "",
  city: "",
  pucStatus: "",
  qualification: "",
  admissionCategory: "",
  contactTime: "",
  message: "",
};

type FormValues = typeof initialValues;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-3 pb-0.5 text-[11px] font-bold uppercase tracking-wider text-primary/70">
      {children}
    </div>
  );
}

export function AdmissionsPopup() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
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

  const handleChange =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSelect = (field: keyof FormValues) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
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
          "Course Interested In": values.course || "Not specified",
          "Type of Enquiry": values.enquiryType || "Not specified",
          State: values.state.trim() || "Not provided",
          "City/District": values.city.trim() || "Not provided",
          "PUC/12th Status": values.pucStatus || "Not specified",
          "Current Qualification": values.qualification || "Not specified",
          "Admission Category": values.admissionCategory || "Not specified",
          "Preferred Contact Time": values.contactTime || "Not specified",
          Message: values.message.trim() || "Not provided",
          "Submitted From": typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data: { success?: string | boolean } = await res.json();
      if (data.success !== true && data.success !== "true") throw new Error("Delivery failed");
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
        className={`relative w-full max-w-[94vw] sm:max-w-[640px] md:max-w-[960px] lg:max-w-[1180px] xl:max-w-[1280px] max-h-[92vh] overflow-y-auto sm:overflow-visible rounded-2xl shadow-2xl ring-1 ring-white/20 transition-all duration-500 ease-out ${
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

        <div className="flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden md:h-[80vh] md:max-h-[760px]">
          <a
            href="/admissions"
            aria-label="View ATMECE admissions details"
            className="block md:w-3/4 md:h-full shrink-0 animate-[popIn_0.5s_ease-out]"
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

          <div className="flex-1 min-w-0 p-5 sm:p-6 md:h-full md:min-h-0 md:overflow-y-auto md:pr-4">
            <h2 className="font-display text-2xl font-bold text-foreground">Join ATMECE</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this quick form and our admission team will get in touch with you.
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
              <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 pb-1">
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
                  <Label htmlFor="admissions-popup-course">
                    Course Interested In <span className="text-destructive">*</span>
                  </Label>
                  <Select required value={values.course} onValueChange={handleSelect("course")}>
                    <SelectTrigger id="admissions-popup-course">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {COURSE_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-enquiry-type">
                    Type of Enquiry <span className="text-destructive">*</span>
                  </Label>
                  <Select required value={values.enquiryType} onValueChange={handleSelect("enquiryType")}>
                    <SelectTrigger id="admissions-popup-enquiry-type">
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {ENQUIRY_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <SectionLabel>Student Information</SectionLabel>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-state">
                    State <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="admissions-popup-state"
                    placeholder="Enter your state"
                    value={values.state}
                    onChange={handleChange("state")}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-city">
                    City/District <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Input
                    id="admissions-popup-city"
                    placeholder="Enter your city or district"
                    value={values.city}
                    onChange={handleChange("city")}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-puc-status">
                    PUC/12th Status <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Select value={values.pucStatus} onValueChange={handleSelect("pucStatus")}>
                    <SelectTrigger id="admissions-popup-puc-status">
                      <SelectValue placeholder="Appearing or Passed" />
                    </SelectTrigger>
                    <SelectContent>
                      {PUC_STATUS_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-qualification">
                    Current Qualification <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Select value={values.qualification} onValueChange={handleSelect("qualification")}>
                    <SelectTrigger id="admissions-popup-qualification">
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      {QUALIFICATION_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <SectionLabel>Admission Category</SectionLabel>
                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-admission-category">
                    Category <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Select value={values.admissionCategory} onValueChange={handleSelect("admissionCategory")}>
                    <SelectTrigger id="admissions-popup-admission-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {ADMISSION_CATEGORY_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <SectionLabel>Preferred Contact Time</SectionLabel>
                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-contact-time">
                    Best time to reach you <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Select value={values.contactTime} onValueChange={handleSelect("contactTime")}>
                    <SelectTrigger id="admissions-popup-contact-time">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_TIME_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <SectionLabel>Additional Message</SectionLabel>
                <div className="space-y-1.5">
                  <Label htmlFor="admissions-popup-message">
                    Tell us how we can help you <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Textarea
                    id="admissions-popup-message"
                    rows={3}
                    placeholder="Tell us how we can help you."
                    value={values.message}
                    onChange={handleChange("message")}
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
