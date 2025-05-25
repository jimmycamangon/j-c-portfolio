import { Project } from './type';

const projects: Project[] = [
    {
        name: "DACCS (Digital Application of Certification and Clearance System)",
        description:
            "Simplify and digitize the process of requesting and obtaining essential certifications and clearances for residents of Barangay Caingin.",
        image: "/DACCS.JPG",
        obj: "Addressing the ongoing difficulties experienced by the Caingin barangay community, a proactive team of students, led by myself as the programmer, has skillfully crafted the Digital Application for Clearance and Certification System (DACCS). This innovative platform equips the residents of Barangay Caingin with the ability to effortlessly solicit vital certifications and clearances through an online interface, effectively simplifying what was previously a time-intensive and arduous procedure.        ",
        key_features: [
            "Begin the process by creating a secure and personalized user account on our platform. Provide essential information and create login credentials for easy access.",
            "Initiate a verification request to establish your identity within our system. This step ensures the security and reliability of document requests.",
            "Once your verification is successfully completed, you gain unrestricted access to the document request feature, enabling you to make requests seamlessly.",
            "Choose the specific type of document you require from a comprehensive list of options: (Barangay Clearance, Barangay ID, Barangay Indigency, Barangay Residency, Barangay Cedula",
            "Enter the necessary information into a well-structured form, ensuring accuracy and completeness to facilitate a smooth request process.",
            "After completing the form, submit your request and await a notification regarding the status of your submission.",
            "Upon successful validation of your request, you will receive a `Processing` notification. In case of any discrepancies, you will be prompted to review and correct your submission.",
            "Once your request is verified and processed, you will be notified that your requested document is ready for collection. At this point, you can proceed to the Barangay Hall to claim your document."
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
        description: "Streamline and optimize the queuing experience for students at St. Vincent School's registration and cashier offices through an online reservation system.",
        image: "/QRS.JPG",
        obj: "In our quest for an improved campus experience, we introduce the Queue Reservation System (QRS). During our On-the-Job Training, my team and I, under my programming leadership, identified a pressing concern at St. Vincent School: students enduring queues at registration and cashier offices. To address this, we innovated a solution—an online reservation system allowing students to secure their place in line seamlessly.",
        key_features: [
            "Begin by registering an account as a student. Provide accurate details and create your secure login credentials to ensure a personalized and protected experience.",
            "Initiate the verification process by submitting your Student ID for validation. This step ensures the authenticity of your student status and enhances the credibility of your document requests.",
            "Upon successful verification, you will gain immediate access to the request queue, allowing you to proceed with your document requests efficiently.",
            "Select the appropriate office based on your specific needs: (Registrar's Office or Cashier's Office)",
            "Navigate the current queue to monitor your position and estimate the waiting time for your turn.",
            "Join the queue and receive your unique Queue Number, establishing your place in line.",
            "As each transaction concludes, your Queue Number will automatically decrease until it reaches 1, signaling your imminent turn for your transaction.",
            "Once your turn arrives, proceed with your transaction. After successful completion, your request is considered fulfilled and the process is marked as completed."
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
        description: "Enhance attendance tracking and management for grades 2 and 3 students North Marinig Elementary School.",
        image: "/AMS.JPG",
        obj: "My involvement in the development of the Attendance Monitoring System (AMS) was driven by a unique opportunity. Collaborating with fellow students, we undertook a project for a school client aiming to enhance and expedite attendance tracking for children in grades 2 and 3.",
        key_features: [
            "Initiate the process by registering an account as a parent. Provide accurate details and establish secure login credentials to ensure a personalized and protected experience.",
            "Input your child's unique Learner Reference Number (LRN) into your account's homepage. This step establishes the connection between the parent and the student for seamless monitoring.",
            "Upon providing the student's LRN, the parent will receive a notification confirming the connection to their child's profile, enabling them to receive updates and information.",
            "Each student is assigned a personalized QR code containing their LRN and relevant information. This QR code serves as a quick and secure identification method.",
            "For daily attendance tracking, the student's QR code must be scanned at the Guard House during morning, afternoon, or any other attendance event.",
            "Following each QR code scan, an SMS notification is automatically sent to the parent associated with the child's LRN. This notification provides details on the student's time in and time out, allowing the parent to stay informed about their child's attendance."
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
        description: "Revolutionize the election process at AICS by enabling students to cast their votes online for various positions and initiatives, ensuring transparency and efficiency.",
        image: "/Voting_System.JPG",
        obj: "In response to the imperative need for an advanced voting solution at the Asian Institute of Computer Studies (AICS) during our senior high school years, we embarked on a transformative thesis project. This Voting System replaces the archaic manual voting process that was previously prevalent within the school. Our innovation has successfully transitioned essential processes, such as electing EEP officers, to an efficient and accessible online platform, facilitating student participation in school governance.",
        key_features: [
            "Commence by creating a student account in person at the school's office. Provide accurate information and establish a secure login credential to ensure a personalized and protected experience.",
            "Request a password from the school's staff. This password, alongside your student ID, will serve as your login credentials, eliminating the need for additional verification steps.",
            "Upon logging in, students gain access to the system's interface, allowing them to navigate and explore the list of candidates participating in the election.",
            "Select the preferred candidate by casting your vote. This process enables students to express their choices openly and confidentially.",
            "After submitting the vote, the system instantly records the vote directly into the admin's dashboard or the school's dedicated Election Database. This ensures the accuracy and integrity of the election process."
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
