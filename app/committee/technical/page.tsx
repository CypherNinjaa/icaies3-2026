import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { technicalCommittee } from "@/content/committee";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "National Advisory Committee",
  description:
    "Meet the National Advisory Committee of ICAIES³ 2026 ensuring the highest quality of peer review and academic rigor.",
};

export default function NationalAdvisoryCommitteePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
        <PageTitle
          lightText="National Advisory"
          accentText="Committee"
          description={technicalCommittee.description}
        />
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalCommittee.members.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm card-hover"
              >
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">
                      {member.name}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {member.affiliation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
