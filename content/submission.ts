export interface SubmissionSection {
  title: string;
  content: string[];
}

export const submissionContent = {
  title: "Submission Guidelines",
  pageDescription:
    "All submissions to ICAIES³ 2026 must adhere to the following guidelines to ensure a fair and rigorous review process.",

  sections: [
    {
      title: "Submission & Publication",
      content: [
        "All submitted papers must be original work and should not be under consideration for publication elsewhere.",
        "Papers will undergo a double-blind peer review process. Authors must ensure that their manuscripts do not contain any identifying information.",
        "Submissions must be made through the Microsoft CMT system.",
      ],
    },
    {
      title: "Templates & Formatting",
      content: [
        "Papers must be formatted according to the provided templates (IEEE/Springer format).",
        "Full papers should be 6-8 pages in length, including references and appendices.",
        "Short papers should be 4-5 pages in length.",
        "All papers must be submitted in PDF format.",
      ],
    },
    {
      title: "Publication Opportunities",
      content: [
        "No APC (Free): Accepted papers will be published in Conference Proceedings (Edited Book with ISBN/DOI). Selected extended papers will be considered for publication in Scopus Indexed Books.",
        "Journal Publication: High-quality papers will be recommended to Scopus/Web of Science Indexed Journals (APC Applicable). Example: Journal of Discrete Mathematical Sciences & Cryptography (Q1).",
      ],
    },
    {
      title: "Author Compliance",
      content: [
        "At least one author of each accepted paper must register for the conference.",
        "Authors must submit the signed copyright/consent form along with the camera-ready version.",
        "Camera-ready papers must address all reviewer comments.",
      ],
    },
    {
      title: "Presentation Mode",
      content: [
        "The conference supports both online and offline presentation modes (Hybrid).",
        "Presenters will receive a certificate of presentation.",
        "All presented papers will be included in the conference proceedings.",
      ],
    },
  ] as SubmissionSection[],
};
