export interface Track {
	number: string;
	title: string;
	topics: string[];
	icon: string;
}

export const tracks: Track[] = [
	{
		number: "01",
		title: "AI-Enabled Intelligent Systems",
		icon: "Brain",
		topics: [
			"Machine Learning and Deep Learning",
			"Explainable, Interpretable and Trustworthy AI",
			"Intelligent Agents and Autonomous Systems",
			"Reinforcement Learning and Hybrid AI Models",
			"Cognitive Computing and Decision Support Systems",
		],
	},
	{
		number: "02",
		title: "Secure and Trusted Computing Systems",
		icon: "Shield",
		topics: [
			"AI for Cybersecurity and Threat Intelligence",
			"Secure and Privacy-Preserving Machine Learning",
			"Adversarial AI and Defense Strategies",
			"Blockchain and Distributed Ledger Technologies",
			"Trust Management, Ethics and Responsible AI",
		],
	},
	{
		number: "03",
		title: "Scalable & High-Performance Computing",
		icon: "Server",
		topics: [
			"Distributed, Parallel and High-Performance Computing",
			"Cloud, Edge and Fog Computing Architectures",
			"Scalable Data Processing and Storage Systems",
			"Resource Scheduling and Load Balancing",
			"Energy-Efficient and Green Computing",
		],
	},
	{
		number: "04",
		title: "Intelligent Networking and Communication",
		icon: "Wifi",
		topics: [
			"AI-Driven Network Design and Optimization",
			"Secure Communication Protocols",
			"Software-Defined Networking (SDN) and NFV",
			"5G/6G and Next-Generation Networks",
			"Network Security",
			"Traffic Analysis and Monitoring",
		],
	},
	{
		number: "05",
		title: "Internet of Things and Cyber-Physical Systems",
		icon: "Cpu",
		topics: [
			"Intelligent and Secure IoT Architectures",
			"Edge AI for IoT and CPS",
			"Industrial IoT and Smart Manufacturing",
			"Smart Cities",
			"Smart Homes and Infrastructure",
			"Sensor Networks and Embedded Systems",
		],
	},
	{
		number: "06",
		title: "Data-Centric and Scalable AI Systems",
		icon: "Server",
		topics: [
			"Big Data Analytics and Data Mining",
			"Distributed and Collaborative Learning",
			"Data Privacy",
			"Governance and Compliance",
			"Knowledge Engineering and Information Systems",
			"AI-Driven Data Management",
		],
	},
	{
		number: "07",
		title: "Emerging Technologies and Future Systems",
		icon: "Sparkles",
		topics: [
			"Quantum-Inspired AI and Computing",
			"Digital Twins and Metaverse Technologies",
			"Web3, Decentralized and Blockchain-Based Systems",
			"Autonomous and Self-Adaptive Systems",
			"Human-Centered and Ethical Intelligent Systems",
		],
	},
	{
		number: "08",
		title: "AI Applications and Case Studies",
		icon: "Brain",
		topics: [
			"AI in Healthcare and Biomedical Systems",
			"AI in Finance, FinTech and Fraud Detection",
			"AI for Agriculture and Environmental Sustainability",
			"Intelligent Transportation and Smart Mobility",
			"AI for Education",
			"E-Governance and Public Services",
		],
	},
];
