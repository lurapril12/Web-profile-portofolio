"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/urus.png";
import project1 from "../assets/myerems.png";
import project2 from "../assets/luredu.png";
import project3 from "../assets/jobjourney.png";
import project4 from "../assets/gnk.png";
import project5 from "../assets/glk.png";

const projects = [
    {
        title:"URUS Management System",
        description: "A management system for a company that provides services for the management of livestock. This system is used to manage the data of the livestock, the data of the employees, and the data of the customers.",
        devstack: "PHP, Codeigniter 4, MySQL, Bootstrap",
        link: "#",
        git: "#",
        src: project,
    },
    {
        title:"Myerems Management System",
        description: "Web application for approve and reject memo finance",
        devstack: "PHP, Codeigniter 4, MySQL, Bootstrap",
        link: "#",
        git: "#",
        src: project1,
    },
    {
        title:"Luredu Landing Page",
        description: "Luredu",
        devstack: "React, TailwindCSS",
        link: "https://educity-luriaprilia8-gmailcom-luriaprilia8gmailcoms-projects.vercel.app/",
        git: "https://github.com/lurapril12/educity",
        src: project2,
    },
    {
        title:"Jobjourney Landing Page",
        description: "Jobjourney",
        devstack: "React, TailwindCSS",
        link: "https://jobjourney-plum.vercel.app/",
        git: "https://github.com/lurapril12/educity",
        src: project3,
    },
    {
        title:"GNK Web Company Profile",
        description: "GNK Web Company Profile",
        devstack: "Wordpress, Elementor",
        link: "https://gnk.co.id/",
        src: project4,
    },
    {
        title:"GLK Web Company Profile",
        description: "GLK Web Company Profile",
        devstack: "Wordpress, Elementor",
        link: "https://galalaksana.com/",
        src: project5,
    },
];  

const Portofolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40" id="portofolio">
        
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>
            Selected <span className='text-orange-400'>Projects</span>
        </h1>

        <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y:75 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{once: true}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={`mt-12 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse gap-12' : 'md:flex-row'}`}
                >
                    <div className="space-y-2 max-w-[550px]">
                        <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-lg text-white/70 break-words p-4">{project.description}</p>
                        <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} className="mr-6">Link</a>
                            <a href={project.git}>Git</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image 
                            src={project.src} 
                            alt={project.title}
                            layout="intrinsic"
                            className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                        />
                    </div>
                
                </motion.div>
            ))}
        </div>

    </div>
  )
}

export default Portofolio;
