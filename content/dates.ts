export interface ImportantDate {
	date: string;
	label: string;
	isPast?: boolean;
}

export const importantDates: ImportantDate[] = [
	{
		date: "September 15, 2026",
		label: "Paper Submission Opens",
	},
	{
		date: "November 15, 2026",
		label: "Paper Submission Close",
	},
	{
		date: "November 25, 2026",
		label: "Paper Acceptance Notification",
	},
	{
		date: "November 30, 2026",
		label: "Registration Deadline & Camera-Ready Submission",
	},
	{
		date: "December 03-04, 2026",
		label: "Conference Dates",
	},
];

export const conferenceDateISO = "2026-12-03T09:00:00+05:30";

export const announcements: string[] = [
	"Best Paper Award Will be Given for Each Track.",
];
