export interface ScheduleEvent {
	time: string;
	title: string;
	description?: string;
	speaker?: string;
	type: "ceremony" | "keynote" | "session" | "break" | "networking" | "poster";
	venue?: string;
	track?: string;
}

export interface ScheduleDay {
	date: string;
	dayLabel: string;
	events: ScheduleEvent[];
}

export const programSchedule: ScheduleDay[] = [
	{
		date: "October 21, 2026",
		dayLabel: "Day 1",
		events: [
			{
				time: "08:30 – 09:30",
				title: "Registration & Welcome Kit Distribution",
				description:
					"On-site registration, badge collection, and conference kit distribution for all attendees.",
				type: "ceremony",
				venue: "Main Lobby, Amity University Patna",
			},
			{
				time: "09:30 – 10:30",
				title: "Inaugural Ceremony",
				description:
					"Welcome address by the Vice-Chancellor, lamp lighting, keynote introduction, and address by the Chief Patron.",
				speaker: "Prof. (Dr.) Vivekanand Pandey, Vice-Chancellor",
				type: "ceremony",
				venue: "Auditorium",
			},
			{
				time: "10:30 – 11:00",
				title: "Tea Break & Networking",
				type: "break",
			},
			{
				time: "11:00 – 12:00",
				title: "Keynote Session I",
				description:
					"Invited keynote talk on recent advances in AI-Enabled Intelligent Systems and their real-world applications.",
				type: "keynote",
				venue: "Auditorium",
			},
			{
				time: "12:00 – 13:00",
				title: "Technical Session 1: AI-Enabled Intelligent Systems",
				description:
					"Paper presentations covering Machine Learning, Deep Learning, Explainable AI, Intelligent Agents, and Cognitive Computing.",
				type: "session",
				track: "Track 01",
				venue: "Hall A",
			},
			{
				time: "13:00 – 14:00",
				title: "Lunch Break",
				type: "break",
			},
			{
				time: "14:00 – 15:00",
				title: "Technical Session 2: Secure and Trusted Computing",
				description:
					"Paper presentations on AI for Cybersecurity, Privacy-Preserving ML, Adversarial AI, Blockchain, and Trust Management.",
				type: "session",
				track: "Track 02",
				venue: "Hall A",
			},
			{
				time: "15:00 – 16:00",
				title: "Technical Session 3: Scalable & High-Performance Computing",
				description:
					"Paper presentations on Distributed Computing, Cloud/Edge/Fog Architectures, and Green Computing.",
				type: "session",
				track: "Track 03",
				venue: "Hall B",
			},
			{
				time: "16:00 – 16:30",
				title: "Tea Break",
				type: "break",
			},
			{
				time: "16:30 – 17:30",
				title: "Poster Presentation Session",
				description:
					"Interactive poster presentations by researchers and students. Selected posters will be published in the Conference Abstract Book.",
				type: "poster",
				venue: "Exhibition Area",
			},
			{
				time: "17:30 – 18:00",
				title: "Day 1 Wrap-Up & Networking",
				description:
					"Summary of Day 1 proceedings, networking session, and informal discussions.",
				type: "networking",
			},
		],
	},
	{
		date: "October 22, 2026",
		dayLabel: "Day 2",
		events: [
			{
				time: "09:00 – 10:00",
				title: "Keynote Session II",
				description:
					"Invited keynote address on advances in Scalable Systems and Emerging Technologies for the future.",
				type: "keynote",
				venue: "Auditorium",
			},
			{
				time: "10:00 – 11:00",
				title: "Technical Session 4: Intelligent Networking & Communication",
				description:
					"Paper presentations on AI-Driven Network Optimization, 5G/6G, SDN/NFV, and Network Security.",
				type: "session",
				track: "Track 04",
				venue: "Hall A",
			},
			{
				time: "11:00 – 11:30",
				title: "Tea Break & Networking",
				type: "break",
			},
			{
				time: "11:30 – 12:30",
				title: "Technical Session 5: IoT and Cyber-Physical Systems",
				description:
					"Paper presentations on Smart IoT Architectures, Edge AI, Industrial IoT, Smart Cities, and Sensor Networks.",
				type: "session",
				track: "Track 05",
				venue: "Hall B",
			},
			{
				time: "12:30 – 13:30",
				title: "Technical Session 6: Data-Centric AI & Emerging Tech",
				description:
					"Paper presentations covering Big Data Analytics, Distributed Learning, Quantum-Inspired AI, Digital Twins, and Web3 systems.",
				type: "session",
				track: "Track 06, 07",
				venue: "Hall A",
			},
			{
				time: "13:30 – 14:30",
				title: "Lunch Break",
				type: "break",
			},
			{
				time: "14:30 – 15:30",
				title: "Technical Session 7: AI Applications & Case Studies",
				description:
					"Paper presentations on AI in Healthcare, Finance, Agriculture, Transportation, Education, and E-Governance.",
				type: "session",
				track: "Track 08",
				venue: "Hall B",
			},
			{
				time: "15:30 – 16:00",
				title: "Tea Break",
				type: "break",
			},
			{
				time: "16:00 – 17:00",
				title: "Panel Discussion",
				description:
					"Expert panel on 'The Future of AI-Enabled Systems: Challenges and Opportunities' with distinguished panelists from academia and industry.",
				type: "keynote",
				venue: "Auditorium",
			},
			{
				time: "17:00 – 18:00",
				title: "Valedictory & Closing Ceremony",
				description:
					"Best Paper Awards for each track, certificates distribution, closing remarks by Convenors, and vote of thanks.",
				type: "ceremony",
				venue: "Auditorium",
			},
		],
	},
];

export const scheduleNotes: string[] = [
	"All times are in Indian Standard Time (IST, UTC+5:30).",
	"Conference mode: Hybrid (Online/Offline). Online participants can join sessions via the virtual platform link shared after registration.",
	"Each technical session includes 10–12 minutes for paper presentations followed by Q&A.",
	"Poster presenters should set up their posters by 10:00 AM on Day 1. Poster dimensions: 36″ × 48″ (portrait orientation).",
	"Best Paper Award will be given for each track.",
	"Schedule is tentative and subject to minor adjustments.",
];
