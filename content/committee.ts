export interface CommitteeMember {
  name: string;
  designation?: string;
  affiliation?: string;
  role:
    | "chief-patron"
    | "patron"
    | "director"
    | "convenor"
    | "co-convenor"
    | "member";
}

export const organizingCommittee: CommitteeMember[] = [
  {
    name: "Dr. Ashok K. Chauhan",
    designation: "Founder President, Amity Education Group",
    role: "chief-patron",
  },
  {
    name: "Prof. (Dr.) Vivekanand Pandey",
    designation: "Vice-Chancellor, Amity University Patna",
    role: "patron",
  },
  {
    name: "Prof. (Dr.) Rashmi Shekhar",
    designation: "Director, AIIT",
    role: "director",
  },
  {
    name: "Mr. Sarvesh Kumar",
    designation: "Assistant Professor, AIIT",
    role: "convenor",
  },
  {
    name: "Mr. Vikash Kumar",
    designation: "Assistant Professor, AIIT",
    role: "convenor",
  },
  {
    name: "Dr. Naveen Kumar",
    designation: "Assistant Professor, AIIT",
    role: "co-convenor",
  },
  { name: "Dr. Sushant Kumar Dubey", role: "member" },
  { name: "Dr. Ravi Kumar", role: "member" },
  { name: "Dr. Vinay Shankar", role: "member" },
  { name: "Dr. Arvind Kumar Mishra", role: "member" },
  { name: "Dr. Upasana", role: "member" },
  { name: "Mr. Abhinav Sahay", role: "member" },
  { name: "Mr. S.S Dwivedi", role: "member" },
  { name: "Mr. Ramesh Kumar", role: "member" },
  { name: "Ms. Anu Priya", role: "member" },
  { name: "Ms. Khushboo", role: "member" },
  { name: "Ms. Sakshi Pandey", role: "member" },
  { name: "Ms. Roshni Sharma", role: "member" },
  { name: "Mr. Niraj Kumar Rai", role: "member" },
  { name: "Mr. Suryanarayan Ojha", role: "member" },
  { name: "Mr. Amar Kumar", role: "member" },
  { name: "Mr. Ranjit Choudhary", role: "member" },
  { name: "Ms. Priyadarshini Gupta", role: "member" },
  { name: "Mr. Sunil Kumar", role: "member" },
];

export const technicalCommittee = {
  title: "Technical Program Committee",
  description:
    "Our distinguished Technical Program Committee ensures the highest quality of peer review and academic rigor for all submissions.",
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
  patron: "Patron",
  director: "Director, AIIT",
  convenor: "Convenors",
  "co-convenor": "Co-Convenor",
  member: "Members",
};

export const roleOrder: CommitteeMember["role"][] = [
  "chief-patron",
  "patron",
  "director",
  "convenor",
  "co-convenor",
  "member",
];
