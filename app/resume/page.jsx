"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
import CIcon from '@coreui/icons-react';
import { cibTableau } from '@coreui/icons';

//about data
const about = {
    title: "About me",
    description:
        "Lorem ipsum dolor sit amet conscteur.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Zubair Ahmed",
        },
        {
            fieldName: "Phone",
            fieldValue: "+1 (540)385-9823",
        },
        {
            fieldName: "Experience",
            fieldValue: "4 Years",
        },
        {
            fieldName: "Linkedin",
            fieldValue: "www.linedin.com/in/syed-zubairahmed/",
        },
        {
            fieldName: "Email",
            fieldValue: "syedzuba@buffalo.edu",
        },
        {
            fieldName: "Languages",
            fieldValue: "English,Hindi,Urdu",
        },
        
    ],
};

//experience data
const experience = {
    icon: "",
    title: "My experience",
    description:
        "Lorem ipsum dolor sit amet conscteur.",
    items: [
        {
            company: "Petal Jewelry Inc.,",
            position: "Software Engineer",
            duration: "Aug. 2022 - Dec. 2023",
        },
        {
            company: "Qualcomm",
            position: "Programmer Analyst",
            duration: "Jul. 2018 - Sep. 2020",
        },
        {
            company: "Qualcomm",
            position: "Financial Performace Intern",
            duration: "Jan. 2018 - Jun. 2018",
        },
        {
            company: "GrabOn",
            position: "SEO Intern",
            duration: "May. 2016 - Aug. 2016",
        },
    ],
};

//education data
const education = {
    icon: "",
    title: "My education",
    description:
        "Lorem ipsum dolor sit amet conscteur.",
    items: [
        {
            institution: "State University of New York at Buffalo",
            degree: "Master of Science in CSE",
            duration: "Aug. 2024 - Dec. 2025",
        },
        {
            institution: "Carnegie Mellon University",
            degree: "Coursework in ECE",
            duration: "Jan. 2021 - May 2022",
        },
        {
            institution: "Vasavi College of Engineering",
            degree: "B.Tech in Computer Science and Engineering",
            duration: "Aug. 2014 - May 2018",
        },
    ],
};

//skills data
const skills = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing lit. Voluptates quibusdam, sunt explicabo inventore.",
    skillset: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwindcss",
        }, 
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: (
                <CIcon
                    icon={cibTableau}
                    size="xxl"
                    className="w-16 h-16 transition-all duration-300"
                    style={{
                        filter: "invert(1)",
                        transition: "filter 0.1s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(100%) saturate(100%) invert(50%) sepia(95%) saturate(500%) hue-rotate(120deg) brightness(90%) contrast(100%)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "invert(1)")}
                />
            ),
            name: "Tableau",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/*content*/}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className = "h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className = "h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.institution}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.degree}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillset.map((skill,index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                        </TabsContent>
                        {/* about */}
                        <TabsContent 
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index) => {
                                        return (
                                            <li key={index} className="flex items-xenter justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;