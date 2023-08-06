"use client"

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import projects from "../data/projects";
import Image from "next/image";

const DisplayProject: React.FC = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get the "id" parameter from the searchParams object
    const id = searchParams.get("id");

    // Perform a null check before using the id
    const projectId = id ? parseInt(id, 10) : null;

    // Find the project object with the matching id
    const project = projectId !== null ? projects.find((p) => p.id === projectId) : null;

    // Display the project details if it's found
    if (project) {
        return (
            <div>
                <h2>Project Name: {project.name}</h2>
                <p>Description: {project.description}</p>
                <div>
                    {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="screenshot-container">
                            <Image
                                src={screenshot}
                                alt={`Screenshot ${index + 1}`}
                                width={300}
                                height={300}
                                style={{ width: "auto", height: "auto" }}
                                className="rounded-xl shadow-xl"
                            />

                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div>Project not found</div>;
    }
};

export default DisplayProject;
