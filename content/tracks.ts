export interface Track {
  number: string;
  title: string;
  topics: string[];
  icon: string;
}

export const tracks: Track[] = [
  {
    number: "01",
    title: "Intelligent Systems",
    icon: "Brain",
    topics: [
      "Machine Learning & Deep Learning",
      "Explainable & Trustworthy AI",
      "Intelligent Agents & Multi-Agent Systems",
      "Cognitive Computing & NLP",
      "Computer Vision & Image Processing",
      "Recommender Systems",
    ],
  },
  {
    number: "02",
    title: "Secure Computing",
    icon: "Shield",
    topics: [
      "AI for Cybersecurity",
      "Privacy-Preserving Machine Learning",
      "Blockchain & Distributed Ledger Technology",
      "Adversarial Machine Learning & Defense",
      "Cryptography & Network Security",
      "Malware Analysis & Intrusion Detection",
    ],
  },
  {
    number: "03",
    title: "Scalable & High-Performance Computing",
    icon: "Server",
    topics: [
      "Cloud, Edge & Fog Computing Architectures",
      "Distributed & Parallel Computing",
      "Green Computing & Energy Efficiency",
      "Scalable Data Processing & Analytics",
      "GPU/TPU Accelerated Computing",
    ],
  },
  {
    number: "04",
    title: "Networking & Communication",
    icon: "Wifi",
    topics: [
      "AI-Driven Network Optimization",
      "5G/6G Networks & Beyond",
      "Software-Defined Networking (SDN) & NFV",
      "Wireless & Mobile Networks",
      "Network Security & Privacy",
    ],
  },
  {
    number: "05",
    title: "IoT & Cyber-Physical Systems",
    icon: "Cpu",
    topics: [
      "Smart Cities & Smart Homes",
      "Industrial IoT (IIoT)",
      "Sensor Networks & Embedded Systems",
      "Wearable Technology",
      "Digital Health & Assistive Technologies",
    ],
  },
  {
    number: "06",
    title: "Emerging Technologies",
    icon: "Sparkles",
    topics: [
      "Quantum-Inspired AI & Quantum Computing",
      "Digital Twins & Metaverse",
      "Web3 & Decentralized Systems",
      "Generative AI & Large Language Models",
      "Robotics & Autonomous Systems",
    ],
  },
];
