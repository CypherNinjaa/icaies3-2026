export interface ImportantDate {
  date: string;
  label: string;
  isPast?: boolean;
}

export const importantDates: ImportantDate[] = [
  {
    date: "September 15, 2026",
    label: "Full Paper Submission Deadline",
  },
  {
    date: "October 1, 2026",
    label: "Notification of Acceptance",
  },
  {
    date: "October 10, 2026",
    label: "Author Registration Deadline",
  },
  {
    date: "October 27-28, 2026",
    label: "Conference Dates",
  },
];

export const conferenceDateISO = "2026-10-27T09:00:00+05:30";

export const announcements: string[] = [
  "Best Paper Award Will be Given for Each Track.",
];
