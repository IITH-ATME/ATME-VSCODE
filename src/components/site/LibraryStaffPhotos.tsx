import { Link } from "@tanstack/react-router";
import priya from "@/assets/library-staff/priya.png.asset.json";
import nandeesh from "@/assets/library-staff/nandeesh.png.asset.json";
import prakash from "@/assets/library-staff/prakash.png.asset.json";
import ramyashree from "@/assets/library-staff/ramyashree.jpg.asset.json";
import ravi from "@/assets/library-staff/ravi.jpg.asset.json";
import shivanna from "@/assets/library-staff/shivanna.png.asset.json";
import { resolveAssetUrl } from "@/lib/assetUrl";

type Card = { name: string; designation: string; photo: string; href?: string };

const TEACHING: Card[] = [
  { name: "Mrs. Priya R.", designation: "Librarian", photo: resolveAssetUrl(priya.url), href: "/p/mrs-priya-r" },
  { name: "Mr. Nandeesh H G", designation: "Assit. Librarian", photo: resolveAssetUrl(nandeesh.url) },
];

const TECHNICAL: Card[] = [
  { name: "Mr. Prakasha P", designation: "SDA", photo: resolveAssetUrl(prakash.url) },
  { name: "Mrs. Ramyashree M S", designation: "Lib. Assistant", photo: resolveAssetUrl(ramyashree.url) },
  { name: "Mr. Ravi C", designation: "Lib. Assistant", photo: resolveAssetUrl(ravi.url) },
];

const SUPPORTING: Card[] = [
  { name: "Mr. Shivanna Nayaka", designation: "Attender", photo: resolveAssetUrl(shivanna.url) },
];

function Grid({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <div className="mt-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {cards.map((c) => {
          const cardInner = (
            <>
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                <img
                  src={c.photo}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-3 py-2 text-center">
                <div className="text-sm font-semibold leading-tight text-foreground">{c.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{c.designation}</div>
              </div>
            </>
          );
          const cls = "block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md";
          return c.href ? (
            <Link key={c.name} to={c.href} className={cls}>
              {cardInner}
            </Link>
          ) : (
            <div key={c.name} className={cls}>
              {cardInner}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LibraryStaffPhotos() {
  return (
    <section className="not-prose pb-8">
      <Grid title="Teaching Staff" cards={TEACHING} />
      <Grid title="Technical Staff" cards={TECHNICAL} />
      <Grid title="Supporting Staff" cards={SUPPORTING} />
    </section>
  );
}
