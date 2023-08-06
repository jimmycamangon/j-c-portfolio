import { Project } from './type';

const projects: Project[] = [
    {
        name: "DACCS (Digital Application of Certification and Clearance System)",
        description:
            "Simplify and digitize the process of requesting and obtaining essential certifications and clearances for residents of Barangay Caingin.",
        image: "/../public/DACCS.JPG",
        screenshots: [
            "/../public/DACCS/Admin Dashboard.JPG",
            "/../public/DACCS/Claiming List.JPG",
            "/../public/DACCS/Contact.JPG"
        ],
        id: 1,
    },
    {
        name: "QRS (Queue Reservation System)",
        description: "Streamline and optimize the queuing experience for students at St. Vincent School's registration and cashier offices through an online reservation system.",
        image: "/../public/QRS.JPG",
        screenshots: [
            "/../public/QRS/Contact.JPG",
            "/../public/QRS/HomePage.JPG",
            "/../public/QRS/Login.JPG"
        ],
        id: 2,
    },
    {
        name: "AMS (Attendance Monitoring System)",
        description: "Enhance attendance tracking and management for grades 2 and 3 students North Marinig Elementary School.",
        image: "/../public/AMS.JPG",
        screenshots: [
            "/../public/AMS/Admin Page.JPG",
            "/../public/AMS/History.JPG",
            "/../public/AMS/Parent Page.JPG"
        ],
        id: 3,
    },
    {
        name: "Voting System",
        description: "Revolutionize the election process at AICS by enabling students to cast their votes online for various positions and initiatives, ensuring transparency and efficiency.",
        image: "/../public/Voting_System.JPG",
        screenshots: [
            "/../public/VS/Admin Dashboard.JPG",
            "/../public/VS/Admin Profile.JPG",
            "/../public/VS/Candidates Page.JPG"
        ],
        id: 4,
    }
];

export default projects;
