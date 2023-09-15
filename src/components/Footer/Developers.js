import img from "../../Assets/Imgs/zahid.jpeg";
import img2 from "../../Assets/Imgs/Basit.jpeg";
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import MotionComponent from "../Header/Animation";

const DeveloperProfiles = () => {
  const developers = [
    {
      id: 1,
      name: "Zahid Hussain Khan",
      position: "Full Stack Developer",
      image: img,
      skills: ["React", "Node.js", "JavaScript", "MongoDB"],
      bio: "I am a passionate full-stack developer with expertise in React, Node.js, and JavaScript. I enjoy building scalable web applications.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/zahidhkhan/",
        github: "https://github.com/zahid-01",
        twitter: "https://twitter.com/ZAHID_KHAN101",
      },
    },
    {
      id: 2,
      name: "Basit Bashir",
      position: "Frontend Developer",
      image: img2,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      bio: "I'm a creative frontend developer with a strong background in HTML, CSS, and JavaScript. I love creating responsive and user-friendly web interfaces.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/basit-bashir-6b732b204/",
        github: "https://github.com/basit-bashir",
        twitter: "https://twitter.com/Basit__Bhatt",
      },
    },
  ];

  return (
    <MotionComponent>
      <div className="container mx-auto mt-8">
        {developers.map((developer) => (
          <div
            key={developer.id}
            className="relative flex flex-col md:flex-row md:space-x-4 p-4 shadow-md shadow-blue-500 rounded-md mb-4"
          >
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <span className="text-md font-semibold">Follow me</span>
              <div className="flex justify-center mt-1 space-x-4">
                <a
                  href={developer.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300 transition duration-300"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href={developer.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition duration-300"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href={developer.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-700 transition duration-300"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <img
              src={developer.image}
              alt={developer.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
            <div className="flex-grow tracking-[1px]">
              <h2 className="text-xl md:text-2xl font-semibold ">
                {developer.name}
              </h2>
              <p className="text-gray-500">{developer.position}</p>
              <p className="mt-4">{developer.bio}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Skills:</h3>
                <ul className="list-disc list-inside mt-2">
                  {developer.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MotionComponent>
  );
};

export default DeveloperProfiles;
