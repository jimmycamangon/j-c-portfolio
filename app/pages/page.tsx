"use client";

import { useSearchParams, useRouter } from "next/navigation";
import projects from "../components/projects";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const DisplayProject: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter(); 

  // Get the "id" parameter from the searchParams object
  const id = searchParams.get("id");

  // Perform a null check before using the id
  const projectId = id ? parseInt(id, 10) : null;

  // Find the project object with the matching id
  const project =
    projectId !== null ? projects.find((p) => p.id === projectId) : null;

  // Display the project details if it's found
  if (project) {
    return (
      <div>
        <div className="w-full mx-auto px-5 p-5">
          <button
            onClick={() => router.back()} // Use router.back() to go to the previous page
            className="flex space-x-2 justify-end items-center transition-transform hover:-translate-x-3"
          >
            <FaArrowLeft className="text-primaryColor dark:text-secondaryColor" />
            <h1 className="text-primaryColor dark:text-secondaryColor underline">
              Back
            </h1>
          </button>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl overflow-x-hidden dark:bg-lightTheme dark:text-textDark p-5 m-6 rounded-lg">
          <h2 className="font-bold text-center text-3xl py-2 text-primaryColor">
            {project.name}
          </h2>
          <div className="border-b border-gray-400 pb-3 text-sm py-10">
            <span className="font-bold text-primaryColor text-lg">
              Description:
            </span>
            <br />
            <p className="indent-8 py-5">{project.obj}</p>
          </div>
          <div className="py-5">
            <p className="font-bold text-primaryColor text-lg">How it works:</p>
            <ul className="m-5">
              {project.key_features.map((feature, index) => (
                <li key={index} className="py-2 text-sm">
                  - {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="font-bold text-primaryColor text-lg">
            Technologies Used:
          </div>
          <div className="flex flex-row flex-wrap justify-center md:justify-start items-center py-5">
            {project.technologies.map((technology, index) => (
              <div
                key={index}
                className="px-3 py-1 mr-2 mt-2 border border-gray-200 rounded text-xs"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-center font-bold text-lg text-primaryColor dark:text-secondaryColor">
          Screenshots
        </h1>
        <div className="flex flex-wrap flex-row mx-auto max-w-7xl px-4 md:max-w-10xl overflow-x-hidden justify-center items-center">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-container p-2 py-10">
              <Image
                src={screenshot}
                alt={`Screenshot`}
                width={300}
                height={300}
                style={{ width: "auto", height: "auto", cursor: "pointer" }}
                className="rounded-xl shadow-xl"
                onClick={() => {
                  setSelectedImage(screenshot);
                  setShowModal(true);
                }}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-textDark bg-opacity-70 z-50">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-lightTheme text-4xl  p-2 rounded-full hover:bg-opacity-70 transition"
            >
              <IoCloseSharp />
            </button>
            <div className="max-w-3xl max-h-full overflow-auto relative">
              <Image
                src={selectedImage}
                alt="Large Screenshot"
                layout="responsive"
                width={1200}
                height={800}
                className="rounded-md"
              />
            </div>
          </div>
        )}

        <Footer />
      </div>
    );
  } else {
    return <div>Project not found</div>;
  }
};

export default DisplayProject;
