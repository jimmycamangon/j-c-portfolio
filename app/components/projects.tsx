import { Project } from './type';

const projects: Project[] = [
    {
        name: "DACCS (Digital Application of Certification and Clearance System)",
        description:
            "Simplify and digitize the process of requesting and obtaining essential certifications and clearances for residents of Barangay Caingin.",
        image: "DACCS.JPG",
        screenshots: [
            "DACCS_Admin Dashboard.JPG",
            "DACCS_Claiming List.JPG",
            "DACCS_Contact.JPG"
        ],
        id: 1,
    },
    {
        name: "QRS (Queue Reservation System)",
        description: "Streamline and optimize the queuing experience for students at St. Vincent School's registration and cashier offices through an online reservation system.",
        image: "QRS.JPG",
        screenshots: [
            "QRS_In Queue Page.JPG",
            "QRS_HomePage.JPG",
            "QRS_Login.JPG"
        ],
        id: 2,
    },
    {
        name: "AMS (Attendance Monitoring System)",
        description: "Enhance attendance tracking and management for grades 2 and 3 students North Marinig Elementary School.",
        image: "AMS.JPG",
        screenshots: [
            "AMS_Admin Page.JPG",
            "AMS_History.JPG",
            "AMS_Parent Page.JPG"
        ],
        id: 3,
    },
    {
        name: "Voting System",
        description: "Revolutionize the election process at AICS by enabling students to cast their votes online for various positions and initiatives, ensuring transparency and efficiency.",
        image: "Voting_System.JPG",
        screenshots: [
            "VS_Admin Dashboard.JPG",
            "VS_Admin Profile.JPG",
            "VS_Candidates Page.JPG"
        ],
        id: 4,
    }
];

export default projects;
