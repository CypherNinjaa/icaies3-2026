export interface ImportantDate {
	date: string;
	label: string;
	isPast?: boolean;
}

export const importantDates: ImportantDate[] = [
	{
		date: "15th Oct. 2026",
		label: "Paper Submission Opens",
	},
	{
		date: "15th Dec. 2026",
		label: "Paper Submission Close",
	},
	{
		date: "25th Dec. 2026",
		label: "Paper Acceptance Notification",
	},
	{
		date: "30th Dec. 2026",
		label: "Registration Deadline & Camera-Ready Submission",
	},
	{
		date: "January 06th-07th, 2027",
		label: "Conference Dates",
	},
];

export const conferenceDateISO = "2027-01-06T09:00:00+05:30";

export const announcements: string[] = [
	"Best Paper Award Will be Given for Each Track.",
];
