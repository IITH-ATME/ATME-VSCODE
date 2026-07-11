import { Trophy, Users, Calendar, Award, Building2, ClipboardList, GraduationCap, Library, BookOpen, Search, Globe, FileText, Phone, Archive } from "lucide-react";
import type { SectionTabItem } from "@/components/site/SectionTabNav";

export const sportsTabs: SectionTabItem[] = [
  { key: "about", label: "About", splat: "sports/about-the-department", icon: Trophy },
  { key: "committee", label: "Committee", splat: "sports/committee", icon: Users },
  { key: "staff", label: "Staff Details", splat: "sports/staff-details", icon: GraduationCap },
  { key: "infra", label: "Infrastructure", splat: "sports/sports-infrastructure", icon: Building2 },
  { key: "events", label: "Events Organized", splat: "sports/eventorganized", icon: Calendar },
  { key: "upcoming", label: "Upcoming Events", splat: "sports/upevent", icon: ClipboardList },
  { key: "achievements", label: "Achievements", splat: "sports/sports-achievements", icon: Award },
  { key: "scholarship", label: "Scholarship", splat: "sports/scholarshipsports", icon: GraduationCap },
];

export const libraryTabs: SectionTabItem[] = [
  { key: "about", label: "About", splat: "library-3/library", icon: Library },
  { key: "services", label: "Services", splat: "library-3/library-services", icon: BookOpen },
  { key: "collection", label: "Collection", splat: "library-3/library-collection-2", icon: Archive },
  { key: "rules", label: "Rules", splat: "library-3/library-rules-regulation", icon: FileText },
  { key: "opac", label: "OPAC (KOHA)", splat: "library-3/opac-online-public-access-catalogue-koha-library-automation-software", icon: Search },
  { key: "eresources", label: "E-Resources", splat: "library-3/e-resources-vtu-consortium-2", icon: Globe },
  { key: "digital", label: "Digital Learning", splat: "library-3/atme-digital-learning", icon: GraduationCap },
  { key: "openaccess", label: "Open Access", splat: "library-3/open-access", icon: Globe },
  { key: "repository", label: "Repository", splat: "library-3/institutional-repository", icon: Archive },
  
  { key: "staff", label: "Staff", splat: "library-3/staff-details-2", icon: Users },
  { key: "contact", label: "Contact", splat: "library-3/library-contact", icon: Phone },
];

/** Returns hub config when the given /p/ splat belongs to a hub (sports/library). */
export function getHubForSplat(key: string): { hubLabel: string; hubTo: "/sports" | "/library"; tabs: SectionTabItem[]; activeKey?: string } | null {
  const norm = key.replace(/^\/+|\/+$/g, "");
  if (norm.startsWith("sports/")) {
    const active = sportsTabs.find((t) => t.splat === norm);
    return { hubLabel: "Sports", hubTo: "/sports", tabs: sportsTabs, activeKey: active?.key };
  }
  if (norm.startsWith("library-3/") || norm.startsWith("library/")) {
    const active = libraryTabs.find((t) => t.splat === norm);
    return { hubLabel: "Library", hubTo: "/library", tabs: libraryTabs, activeKey: active?.key };
  }
  return null;
}
