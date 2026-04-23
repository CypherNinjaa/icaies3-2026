"use client";

import { useState } from "react";
import { PageTitle } from "@/components/layout/PageTitle";
import { technicalCommittee } from "@/content/committee";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

const ITEMS_PER_PAGE = 10;

export default function TechnicalCommitteePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(technicalCommittee.members.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMembers = technicalCommittee.members.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-10 lg:py-14">
        <PageTitle lightText="Technical Program" accentText="Committee" description={technicalCommittee.description} />
        <div className="max-w-4xl mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentMembers.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm card-hover">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{member.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{member.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-bg-cream disabled:opacity-40 disabled:cursor-not-allowed transition-colors" aria-label="Previous page">
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${page === currentPage ? "bg-primary text-white" : "hover:bg-bg-cream text-text-body"}`} aria-label={`Page ${page}`} aria-current={page === currentPage ? "page" : undefined}>
                  {page}
                </button>
              ))}
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-bg-cream disabled:opacity-40 disabled:cursor-not-allowed transition-colors" aria-label="Next page">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
