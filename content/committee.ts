export interface CommitteeMember {
  name: string;
  designation?: string;
  affiliation?: string;
  role:
    | "chief-patron"
    | "mentor"
    | "patron"
    | "advisory"
    | "conference-chair"
    | "convenor"
    | "conference-executive-chair"
    | "co-convenor"
    | "member";
}

export const organizingCommittee: CommitteeMember[] = [
  // Chief Patrons
  {
    name: "Dr. Ashok K. Chauhan",
    designation: "Founder President, Amity Education Group",
    role: "chief-patron",
  },
  {
    name: "Dr. Atul Chauhan",
    designation: "Chancellor, Amity University",
    role: "chief-patron",
  },

  // Mentors
  {
    name: "Mr. U. Ramachandran",
    designation: "Sr. Vice President, Amity Education Group",
    role: "mentor",
  },
  {
    name: "Mr. Gaurav Gupta",
    designation: "Vice President, Amity Education Group",
    role: "mentor",
  },

  // Patron
  {
    name: "Prof. (Dr.) Vivekanand Pandey",
    designation: "Vice-Chancellor, Amity University, Patna",
    role: "patron",
  },

  // Advisory Committee
  {
    name: "Prof. (Dr.) Sushil Kumar",
    designation: "Deputy Controller of Examination, Amity University, Patna",
    role: "advisory",
  },

  // Conference Chair
  {
    name: "Prof. (Dr.) Rashmi Shekhar",
    designation: "Professor & Director, AIIT, Amity University, Patna",
    role: "conference-chair",
  },

  // Convenor(s)
  {
    name: "Dr. Arvind Kumar Mishra",
    designation: "Associate Professor, AIIT, Amity University, Patna",
    role: "convenor",
  },
  {
    name: "Mr. Sarvesh Kumar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "convenor",
  },
  {
    name: "Dr. Vinay Shankar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "convenor",
  },
  {
    name: "Dr. Upasana",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "convenor",
  },

  // Conference Executive Chair(s)
  {
    name: "Dr. Ravi Kumar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "conference-executive-chair",
  },
  {
    name: "Dr. Sushant Kumar Dubey",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "conference-executive-chair",
  },
  {
    name: "Mr. Vikash Kumar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "conference-executive-chair",
  },

  // Co-Convenor(s)
  {
    name: "Dr. Sakshi Pandey",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "co-convenor",
  },
  {
    name: "Dr. Priyadarshini Gupta",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "co-convenor",
  },
  {
    name: "Mr. Prasanna Kumar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "co-convenor",
  },

  // Organizing Committee Member(s)
  {
    name: "Dr. Naveen Kumar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Abhinav Sahay",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Suman Kumar Mishra",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Shyam Shankar Dwivedi",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Ms. Anu Priya",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Ms. Khushboo",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Ms. Roshni Sharma",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Niraj Kumar Rai",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Suryanarayan Ojha",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Amar Kumar",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Ranjit Choudhary",
    designation: "Assistant Professor, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Sunil Kumar",
    designation: "Academic Coordinator, AIIT, Amity University, Patna",
    role: "member",
  },
  {
    name: "Mr. Rahul Kumar",
    designation: "Academic Coordinator, AIIT, Amity University, Patna",
    role: "member",
  },
];

export const technicalCommittee = {
  title: "National Advisory Committee",
  description:
    "Our distinguished National Advisory Committee ensures the highest quality of peer review and academic rigor for all submissions.",
  members: [
    { name: "Dr. Rajesh Kumar", affiliation: "IIT Delhi, India" },
    { name: "Dr. Priya Sharma", affiliation: "NIT Patna, India" },
    { name: "Dr. Amit Singh", affiliation: "IIIT Allahabad, India" },
    { name: "Dr. Sunita Verma", affiliation: "BIT Mesra, India" },
    { name: "Dr. Manoj Gupta", affiliation: "IIT BHU, India" },
    { name: "Dr. Neha Agarwal", affiliation: "NIT Jamshedpur, India" },
    { name: "Dr. Vikram Patel", affiliation: "IIIT Bangalore, India" },
    { name: "Dr. Anita Kumari", affiliation: "NIT Rourkela, India" },
    { name: "Dr. Suresh Chand", affiliation: "IIT Kanpur, India" },
    { name: "Dr. Kavita Singh", affiliation: "IIIT Delhi, India" },
    { name: "Dr. Rahul Verma", affiliation: "NIT Calicut, India" },
    { name: "Dr. Deepa Gupta", affiliation: "IIT Guwahati, India" },
    { name: "Dr. Arun Kumar", affiliation: "IIIT Hyderabad, India" },
    { name: "Dr. Meena Sharma", affiliation: "NIT Warangal, India" },
    { name: "Dr. Sanjay Mishra", affiliation: "IIT Roorkee, India" },
    { name: "Dr. Pooja Rani", affiliation: "IIIT Sri City, India" },
    { name: "Dr. Ajay Kumar", affiliation: "NIT Durgapur, India" },
    { name: "Dr. Ritu Gupta", affiliation: "IIT Indore, India" },
    { name: "Dr. Vinod Sharma", affiliation: "NIT Hamirpur, India" },
    { name: "Dr. Smita Jha", affiliation: "IIIT Lucknow, India" },
    { name: "Dr. Neeraj Kumar Verma", affiliation: "Manipal University Jaipur, Rajasthan, India" },
  ],
};

export const internationalCommittee = {
  title: "International Advisory Committee",
  description:
    "Our distinguished International Advisory Committee brings together leading global experts to guide the strategic academic direction of ICAIES³ 2027.",
  members: [
    // { name: "Prof. Liliana Guran", affiliation: "Babeș-Bolyai University, Romania" },
    { name: "Dr. Prabha Sana", affiliation: "Infineon Technology, Germany" },
    { name: "Prof. D L Suthar", affiliation: "Wollo University, Dessie, Ethiopia" },
    { name: "Prof. Georgia Irina Oros", affiliation: "University of Oradea, Romania" },
    { name: "Prof. Bremananth Ramachandran", affiliation: "MIS, A'Sharqyiah University, Ibra, Oman" },
    { name: "Prof. Anurag Srivastava", affiliation: "West Virginia University, US" },
    { name: "Prof. Akshay Rathore", affiliation: "Singapore Institute of Technology (SIT), Singapore" },
  ],
};

export const roleLabels: Record<CommitteeMember["role"], string> = {
  "chief-patron": "Chief Patron",
  mentor: "Mentors",
  patron: "Patron",
  advisory: "Advisory Committee",
  "conference-chair": "Conference Chair",
  convenor: "Convenor(s)",
  "conference-executive-chair": "Conference Executive Chair(s)",
  "co-convenor": "Co-Convenor(s)",
  member: "Organizing Committee Member(s)",
};

export const roleOrder: CommitteeMember["role"][] = [
  "chief-patron",
  "mentor",
  "patron",
  "advisory",
  "conference-chair",
  "convenor",
  "conference-executive-chair",
  "co-convenor",
  "member",
];
