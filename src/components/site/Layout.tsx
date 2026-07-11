import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { AdmissionsPopup } from "./AdmissionsPopup";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
      <AdmissionsPopup />
    </div>
  );
}

// Single-source banner matching new.atme.edu.in: flat teal field with the ATME
// logo overlay at a low opacity. Background image (if provided) sits behind a
// strong teal wash so it still reads as the same brand band.
export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  bgImage?: string;
}) {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-page py-8 sm:py-10 md:py-12 text-center animate-fade-in">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5c518]">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#129199] font-display">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}


