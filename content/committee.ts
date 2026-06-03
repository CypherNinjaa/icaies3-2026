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
  {
    name: "Dr. Partha Pakray",
    designation: "Associate Professor, Department of CSE, NIT, Silchar",
    role: "advisory",
  },
  {
    name: "Dr. E Sivasankar",
    designation:
      "Associate Professor, Department of Computer Science & Engineering, NIT, Trichy",
    role: "advisory",
  },

  // Conference Chair
  {
    name: "Prof. (Dr.) Rashmi Shekhar",
    designation: "Professor & Director, AIIT, Amity University, Patna",
    role: "conference-chair",
  },

  // Convenors
  {
    name: "Mr. Sarvesh Kumar",
    designation: "AIIT, Amity University, Patna",
    role: "convenor",
  },
  {
    name: "Dr. Arvind Kumar Mishra",
    designation: "AIIT, Amity University, Patna",
    role: "convenor",
  },
  {
    name: "Mr. Vikash Kumar",
    designation: "AIIT, Amity University, Patna",
    role: "convenor",
  },

  // Co-Convenors
  {
    name: "Dr. Naveen Kumar",
    designation: "AIIT, Amity University, Patna",
    role: "co-convenor",
  },
  {
    name: "Dr. Upasana",
    designation: "AIIT, Amity University, Patna",
    role: "co-convenor",
  },
  {
    name: "Mr. Prasanna Kumar",
    designation: "AIIT, Amity University, Patna",
    role: "co-convenor",
  },
  {
    name: "Dr. Priyadarshini",
    designation: "AIIT, Amity University, Patna",
    role: "co-convenor",
  },

  // Members
  { name: "Dr. Sushant Kumar Dubey", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Dr. Ravi Kumar", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Dr. Vinay Shankar", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Abhinav Sahay", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. S.S Dwivedi", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Ramesh Kumar", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Ms. Anu Priya", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Ms. Khushboo", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Dr. Sakshi Pandey", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Ms. Roshni Sharma", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Niraj Kumar Rai", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Suryanarayan Ojha", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Amar Kumar", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Ranjit Choudhary", designation: "AIIT, Amity University, Patna", role: "member" },
  // { name: "Ms. Priyadarshini Gupta", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Sunil Kumar", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Rahul Kumar", designation: "AIIT, Amity University, Patna", role: "member" },
  { name: "Mr. Suman Kumar Mishra", designation: "AIIT, Amity University, Patna", role: "member" },
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
  ],
};

export const roleLabels: Record<CommitteeMember["role"], string> = {
  "chief-patron": "Chief Patron",
  mentor: "Mentors",
  patron: "Patron",
  advisory: "Advisory Committee",
  "conference-chair": "Conference Chair",
  convenor: "Convenors",
  "co-convenor": "Co-Convenors",
  member: "Members",
};

export const roleOrder: CommitteeMember["role"][] = [
  "chief-patron",
  "mentor",
  "patron",
  "advisory",
  "conference-chair",
  "convenor",
  "co-convenor",
  "member",
];
