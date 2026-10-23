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
		timeline: "Till 20th Dec. 2026",
		students: "₹500",
		researchScholar: "₹750",
		faculties: "₹1,000",
		industryParticipants: "₹1,500",
	},
	{
		phase: "Registration Fee (After Early Bird)",
		timeline: "After 20th Dec. 2026",
		students: "₹600",
		researchScholar: "₹850",
		faculties: "₹1,200",
		industryParticipants: "₹2,000",
	},
];

export const posterFeeSchedule: RegistrationFeeSchedule = {
	phase: "Registration Fee (Poster Presentation)",
	timeline: "Poster Presentation",
	students: "₹300",
	researchScholar: "₹500",
	faculties: "₹750",
	industryParticipants: "₹1,000",
};

export const registrationContent = {
	title: "Registration",
	paymentLink: "https://amity.edu/EventsPg/Patna/ICAIES2026",
	overview:
		"All the accepted paper(s) need to be registered by at least one of the author(s) to make a presentation at the conference. The paper without registration will not appear in the publication.",
	registrationNotes: {
		title: "Registration Notes & Guidelines",
		points: [
			"All the accepted paper(s) need to be registered by at least one of the author(s) to make a presentation at the conference. The paper without registration will not appear in the publication.",
			"The Fee is also transferable into our accounts through NEFT/RTGS. The details of the account will be provided on request of the same.",
			"Only full-time Research Scholars can register under the Research Scholar category.",
			"Authors will be asked to submit the Proof of UG/PG/Research Scholar to confirm the Category of Registration.",
		],
	},
	paymentInstructions: {
		title: "Payment Instructions",
		methods: [
			"Online registration payment can be completed via the official Amity Events payment portal link.",
			"Fee transfer through NEFT/RTGS into Amity University accounts (account details provided on request).",
			"Valid proof of UG/PG/Research Scholar status must be submitted to confirm registration category.",
			"Early Bird registration deadline: Till 20th Dec. 2026.",
			"Final registration & camera-ready submission deadline: 30th Dec. 2026.",
		],
	},
};
