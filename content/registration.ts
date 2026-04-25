export interface RegistrationFeeSchedule {
	phase: string;
	timeline: string;
	students: string;
	researchScholar: string;
	faculties: string;
	industryParticipants: string;
}

export const registrationFeeSchedules: RegistrationFeeSchedule[] = [
	{
		phase: "Registration Fee (Early Bird)",
		timeline: "Till 25th Sept. 2026",
		students: "To be announced",
		researchScholar: "To be announced",
		faculties: "To be announced",
		industryParticipants: "To be announced",
	},
	{
		phase: "Registration Fee (After Early Bird)",
		timeline: "After 25th Sept. 2026",
		students: "To be announced",
		researchScholar: "To be announced",
		faculties: "To be announced",
		industryParticipants: "To be announced",
	},
];

export const registrationContent = {
	title: "Registration",
	overview:
		"All accepted paper(s) need to be registered by at least one of the author(s) to present at the conference. Papers without registration will not appear in the publication.",
	registrationNotes: {
		title: "Registration Notes",
		points: [
			'Registration may be confirmed upon receipt of the duly signed registration form along with fee payment in favor of "Amity University, Patna," payable at Patna.',
			"The fee can also be transferred through NEFT/RTGS. Account details will be provided on request.",
			"Only full-time Research Scholars can register under the Research Scholar category.",
			"Authors must submit valid proof of UG/PG/Research Scholar status to confirm the registration category.",
		],
	},
	paymentInstructions: {
		title: "Payment Instructions",
		methods: [
			'Demand Draft in favor of "Amity University, Patna," payable at Patna',
			"NEFT/RTGS transfer is accepted (account details on request)",
			"Early bird registration deadline: September 25, 2026",
			"Registration deadline and camera-ready submission: October 5, 2026",
		],
	},
};
