import { useEffect, useState, type FormEvent } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ADMISSIONS_EMAIL = "admissions@atme.edu.in";
const POPUP_IMAGE = "/images/admissions/admissions-popup.jpg";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const COURSE_OPTIONS = [
  "Computer Science & Engineering",
  "Computer Science & Engineering - AI & ML",
  "Computer Science & Engineering - Data Science",
  "Computer Science & Engineering - Cyber Security",
  "Computer Science & Engineering - Design",
  "Electronics & Communication Engineering",
  "Electrical & Electronics Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "BCA (Bachelor of Computer Applications)",
  "MBA (Master of Business Administration)",
  "MCA (Master of Computer Applications)",
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

const fieldClass = "h-8 text-sm";
const labelClass = "text-xs";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary/70">
      <span className="h-px flex-1 bg-primary/15" />
      {children}
      <span className="h-px flex-1 bg-primary/15" />
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
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(8, 30, 45, 0.78)", backdropFilter: "blur(4px)" }}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[94vw] sm:max-w-[640px] lg:w-auto lg:max-w-[94vw] max-h-[96vh] overflow-y-auto sm:overflow-visible rounded-2xl shadow-2xl ring-1 ring-white/20 transition-all duration-500 ease-out ${
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

        <div className="flex flex-col lg:flex-row bg-card rounded-2xl overflow-hidden lg:h-[92vh] lg:max-h-[860px]">
          <a
            href="/admissions"
            aria-label="View ATMECE admissions details"
            className="block lg:h-full shrink-0 animate-[popIn_0.5s_ease-out]"
          >
            <img
              src={POPUP_IMAGE}
              alt="ATMECE Admissions Open — No Donation, No Development Fee"
              className="block w-full h-48 sm:h-56 lg:h-full lg:w-auto object-cover object-top bg-white"
              loading="eager"
              width={1600}
              height={1900}
            />
          </a>

          <div className="lg:w-[400px] lg:shrink-0 min-w-0 p-4 sm:p-5 lg:h-full flex flex-col lg:justify-center">
            <h2 className="font-display text-xl font-bold text-foreground">Join ATMECE</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill this quick form — our admission team will get in touch with you.
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
              <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-0.5">
                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-name" className={labelClass}>
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="admissions-popup-name"
                      required
                      placeholder="Enter your full name"
                      value={values.name}
                      onChange={handleChange("name")}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-email" className={labelClass}>
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="admissions-popup-email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={values.email}
                      onChange={handleChange("email")}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-phone" className={labelClass}>
                      Phone Number
                    </Label>
                    <Input
                      id="admissions-popup-phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="10-digit phone number"
                      value={values.phone}
                      onChange={handleChange("phone")}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-course" className={labelClass}>
                      Course Interested In <span className="text-destructive">*</span>
                    </Label>
                    <Select required value={values.course} onValueChange={handleSelect("course")}>
                      <SelectTrigger id="admissions-popup-course" className={fieldClass}>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent className="z-[110]">
                        {COURSE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2 space-y-0.5">
                    <Label htmlFor="admissions-popup-enquiry-type" className={labelClass}>
                      Type of Enquiry <span className="text-destructive">*</span>
                    </Label>
                    <Select required value={values.enquiryType} onValueChange={handleSelect("enquiryType")}>
                      <SelectTrigger id="admissions-popup-enquiry-type" className={fieldClass}>
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent className="z-[110]">
                        {ENQUIRY_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <SectionLabel>Student Information</SectionLabel>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-state" className={labelClass}>
                      State
                    </Label>
                    <Input
                      id="admissions-popup-state"
                      placeholder="Enter your state"
                      value={values.state}
                      onChange={handleChange("state")}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-city" className={labelClass}>
                      City/District
                    </Label>
                    <Input
                      id="admissions-popup-city"
                      placeholder="Enter your city or district"
                      value={values.city}
                      onChange={handleChange("city")}
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-puc-status" className={labelClass}>
                      PUC/12th Status
                    </Label>
                    <Select value={values.pucStatus} onValueChange={handleSelect("pucStatus")}>
                      <SelectTrigger id="admissions-popup-puc-status" className={fieldClass}>
                        <SelectValue placeholder="Appearing or Passed" />
                      </SelectTrigger>
                      <SelectContent className="z-[110]">
                        {PUC_STATUS_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-qualification" className={labelClass}>
                      Current Qualification
                    </Label>
                    <Select value={values.qualification} onValueChange={handleSelect("qualification")}>
                      <SelectTrigger id="admissions-popup-qualification" className={fieldClass}>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent className="z-[110]">
                        {QUALIFICATION_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-admission-category" className={labelClass}>
                      Admission Category
                    </Label>
                    <Select value={values.admissionCategory} onValueChange={handleSelect("admissionCategory")}>
                      <SelectTrigger id="admissions-popup-admission-category" className={fieldClass}>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="z-[110]">
                        {ADMISSION_CATEGORY_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-0.5">
                    <Label htmlFor="admissions-popup-contact-time" className={labelClass}>
                      Contact Time
                    </Label>
                    <Select value={values.contactTime} onValueChange={handleSelect("contactTime")}>
                      <SelectTrigger id="admissions-popup-contact-time" className={fieldClass}>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent className="z-[110]">
                        {CONTACT_TIME_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2 space-y-0.5">
                    <Label htmlFor="admissions-popup-message" className={labelClass}>
                      Additional Message
                    </Label>
                    <Textarea
                      id="admissions-popup-message"
                      rows={1}
                      placeholder="Tell us how we can help you."
                      value={values.message}
                      onChange={handleChange("message")}
                      className="min-h-0 py-1.5 text-sm resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 w-full h-8 gradient-hero text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
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
                  <p className="mt-1.5 text-xs text-destructive text-center">
                    Something went wrong. Please try again, or email us directly at{" "}
                    <a href={`mailto:${ADMISSIONS_EMAIL}`} className="underline">
                      {ADMISSIONS_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <p className="mt-1 text-[10px] leading-tight text-muted-foreground text-center">
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
