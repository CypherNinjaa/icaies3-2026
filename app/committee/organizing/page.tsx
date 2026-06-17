import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { organizingCommittee, roleLabels, roleOrder } from "@/content/committee";
import { User, Crown, Award, Users, BookOpen, Star, Bookmark } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Organizing Committee",
  description: "Meet the organizing committee of ICAIES³ 2026.",
};

const roleIcons: Record<string, React.ReactNode> = {
  "chief-patron": <Crown className="w-5 h-5 text-accent" />,
  mentor: <Star className="w-5 h-5 text-accent" />,
  patron: <Crown className="w-5 h-5 text-accent" />,
  advisory: <BookOpen className="w-5 h-5 text-accent" />,
  "conference-chair": <Bookmark className="w-5 h-5 text-accent" />,
  convenor: <Award className="w-5 h-5 text-accent" />,
  "co-convenor": <Award className="w-5 h-5 text-accent" />,
  member: <User className="w-5 h-5 text-accent" />,
};

export default function OrganizingCommitteePage() {
  const groupedMembers = roleOrder.map((role) => ({
    role,
    label: roleLabels[role],
    members: organizingCommittee.filter((m) => m.role === role),
  }));

  return (
    <div className="bg-white">
      <SiteHeader />
      <BreadcrumbSchema pageName="Organizing Committee" route="/committee/organizing" />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
        <PageTitle lightText="Organizing" accentText="Committee" description="Meet the distinguished members of the ICAIES³ 2026 Organizing Committee." />
        <div className="space-y-10 mt-8">
          {groupedMembers.map(({ role, label, members }) => members.length > 0 && (
            <section key={role} id={`committee-${role}`}>
              <div className="flex items-center gap-2 mb-5">
                {roleIcons[role]}
                <h3 className="text-lg font-bold text-primary">{label}</h3>
                <div className="flex-1 h-px bg-gray-200 ml-3" />
              </div>
              <div className={`grid gap-4 ${role === "member" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : role === "convenor" || role === "co-convenor" || role === "advisory" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 max-w-lg"}`}>
                {members.map((member) => (
                  <div key={member.name + member.role} className={`bg-white border border-gray-100 rounded-xl p-5 shadow-sm card-hover ${role === "chief-patron" || role === "patron" || role === "conference-chair" ? "border-l-4 border-l-accent" : ""}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">{member.name}</p>
                        {member.designation && <p className="text-xs text-text-muted mt-0.5">{member.designation}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
