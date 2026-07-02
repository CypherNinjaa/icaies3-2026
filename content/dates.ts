export interface ImportantDate {
	date: string;
	label: string;
	isPast?: boolean;
}

export const importantDates: ImportantDate[] = [
	{
		date: "July 20, 2026",
		label: "Paper Submission Opens",
	},
	{
		date: "September 30, 2026",
		label: "Paper Submission Close",
	},
	{
		date: "October 20, 2026",
		label: "Paper Acceptance Notification",
	},
	{
		date: "October 30, 2026",
		label: "Registration Deadline & Camera-Ready Submission",
	},
	{
		date: "November 19-20, 2026",
		label: "Conference Dates",
	},
];

export const conferenceDateISO = "2026-10-21T09:00:00+05:30";

export const announcements: string[] = [
	"Best Paper Award Will be Given for Each Track.",
];
