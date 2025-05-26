import { Project } from './type';

const projects: Project[] = [
    {
        name: "DACCS (Digital Application of Certification and Clearance System)",
        description:
            "A digital platform that simplifies community document requests and processing.",
        image: "/DACCS.JPG",
        problem: "Residents of Barangay Caingin faced slow, manual workflows for securing barangay clearances, often requiring multiple visits.",
        solution: [
            "Digitizes certification and clearance requests",
            "Automates approvals and status updates for staff",
            "Cuts down processing time significantly"
        ],
        screenshots: [
            "/DACCS_Admin Dashboard.JPG",
            "/DACCS_Claiming List.JPG",
            "/DACCS_Contact.JPG",
            "/DACCS_Feature.JPG",
            "/DACCS_Form Page.JPG",
            "/DACCS_Information.JPG",
            "/DACCS_LandPage.JPG",
            "/DACCS_Login.JPG",
            "/DACCS_Pending List.JPG",
            "/DACCS_Processing List.JPG",
            "/DACCS_User Home Page.JPG"
        ],
        technologies: [
            "SOCKET IO",
            "EXPRESS JS",
            "JQUERY",
            "PHP",
            "MYSQL",
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "CHART JS",
            "API (TWILIO)"
        ],
        id: 1,
    },
    {
        name: "QRS (Queue Reservation System)",
        description: "A scheduling system that minimizes campus office queues through digital reservations.",
        image: "/QRS.JPG",
        problem: "Students spent excessive time waiting in line at key offices like registration and cashier, especially during enrollment periods.",
        solution: [
            "Allows students to reserve service slots online",
            "Decreases congestion during peak hours",
            "Delivers live queue and availability updates"
        ],
        screenshots: [
            "/QRS_In Queue Page.JPG",
            "/QRS_HomePage.JPG",
            "/QRS_Login.JPG",
            "/QRS_Contact.JPG",
            "/QRS_Modal.JPG",
            "/QRS_Staff Page.JPG",
            "/QRS_Queue Page.JPG"
        ],
        technologies: [
            "PHP",
            "MYSQL",
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "AJAX",
        ],
        id: 2,
    },
    {
        name: "AMS (Attendance Monitoring System)",
        description: "Smart attendance tracking system for elementary school students with real-time alerts and reports.",
        image: "/AMS.JPG",
        problem: "Manual attendance at North Marinig Elementary led to inaccuracies and consumed valuable class time.",
        solution: [
            "Automates check-ins for Grades 2–3 via QR scanning",
            "Sends instant absence notifications to teachers",
            "Generates daily and monthly attendance reports"
        ],
        screenshots: [
            "/AMS_Admin Page.JPG",
            "/AMS_History.JPG",
            "/AMS_Parent Page.JPG",
            "/AMS.JPG",
            "/AMS_Dashboard.JPG"
        ],
        technologies: [
            "SOCKET IO",
            "EXPRESS JS",
            "JQUERY",
            "PHP",
            "MYSQL",
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "CHART JS",
            "PUSHER JS",
            "API (TWILIO)"
        ],
        id: 3,
    },
    {
        name: "Voting System",
        description: "A secure and efficient online voting platform tailored for student government elections.",
        image: "/Voting_System.JPG",
        problem: "AICS relied on pen-and-paper voting, leading to low turnout, counting errors, and delayed results.",
        solution: [
            "Supports secure online voting for student elections",
            "Guarantees voter privacy and ballot integrity",
            "Provides instant vote tallying and result displays"
        ],
        screenshots: [
            "/VS_Admin Dashboard.JPG",
            "/VS_Admin_Profile.JPG",
            "/VS_Candidates Page.JPG",
            "/VS_Candidates Registration Page.JPG",
            "/VS_Positions Page.JPG",
            "/VS_Voters Page.JPG",
            "/VS_Voters Page 2.JPG",
            "/VS_Votes Page.JPG",
            "/VS_Voting Tally.JPG"
        ],
        technologies: [
            "JQUERY",
            "PHP",
            "MYSQL",
            "HTML",
            "CSS",
            "BOOTSTRAP",
            "JAVASCRIPT"
        ],
        id: 4,
    }
];

export default projects;
