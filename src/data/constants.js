import HeroImg from '../../src/images/OsaidAthar.pdf'
import Postman from "../../src/icons/postman.png"
import React from "../../src/icons/react.png"
import NextJs from "../../src/icons/next-js.png"
import Html from "../../src/icons/html.png"
import Css from "../../src/icons/css.png"
import Js from "../../src/icons/javascript.png"
import NodeJs from "../../src/icons/node-js.webp"
import Python from "../../src/icons/python.png"
import MongoDb from "../../src/icons/mongodb.png"
import Firebase from "../../src/icons/firebase.png"
import Git from "../../src/icons/git.png"
import GitHub from "../../src/icons/github.svg"
import VsCode from "../../src/icons/visual-studio.png"

import Abdul from "../../src/Course/Abdul.webp"
import Angela from "../../src/Course/Angela.webp"
import NavinReddy from "../../src/Course/NavinReddy.webp"
import Jonas from "../../src/Course/Jonas.webp"
import Andrie from "../../src/Course/Andrie.png"

export const Bio = {
  name: "Osaid Athar",
  roles: [
    "Full Stack Developer",
    "Android Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/osaidAthar",
  resume:
    HeroImg,
  linkedin: "https://www.linkedin.com/in/osaid-athar-486774247/",
  twitter: "https://twitter.com/OsaidAthar2",
  insta: "https://www.instagram.com/",
  github: "https://github.com/osaidAthar",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:React,
        
      },
      {
        name: "React",
        image: React,
      },
      {
        name: "Next Js",
        image:NextJs,
      },
      {
        name: "HTML",
        image: Html,
      },
      {
        name: "CSS",
        image:Css,
      },
      {
        name: "JavaScript",
        image:Js,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: NodeJs,
      },
      {
        name: "Python",
        image:Python,
      },
      {
        name: "MongoDB",
        image:MongoDb,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:Git,
      },
      {
        name: "GitHub",
        image:GitHub,
      },
      {
        name: "VS Code",
        image:VsCode,
      },
      {
        name: "Postman",
        image:Postman,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://poseithealth.com/static/media/logo.a3dfe3a479adb0b21ed23d7e7ba34022.svg",
    role: "Fullstack Developer",
    company: "VisionAi",
    date: "June 2022 - Present",
    desc: "Working on the frontend and backend of the mobile application using ReactJS, React.",
    skills: [
      "ReactJS",
      "React",
    ],
    // doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/60/RCoE_logo.jpg",
    school: "Rizvi college sci art and com | Maharashtra Board",
    date: "Mar 2020 - Apr 2021",
    // grade: "48.2%",
    desc: "I completed my class 12 high school education at Rizvi college sci art and com | Maharashtra Board, where I studied Science with Computer Science.",
    degree: "HSC(XII), Science with Computer",
  },
  {
    id: 1,
    img: "https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626935.jpg?w=740&t=st=1704650043~exp=1704650643~hmac=99cb4b47f9800ad6054fa015c6035e5eb33da25edd0a529c7109c86b799fa2bc",
    school: "Rahnuma english high school| Maharashtra Board",
    date: "Apr 2017 - Mar 2018",
    // grade: "63.3%",
    desc: "I completed my class 10 education at Rahnuma english high school| Maharashtra Board, where I studied Science with Computer Application.",
    degree: "SSC(X), Science with Computer",
  },
];

export const projects = [
  
  {
    id: 0,
    title: "Doctor App",
    date: "Nov 2023 - Dec 2023",
    description:
      "Implemented user-friendly interface for browsing doctor profiles, checking availability, and booking appointments.Improved accessibility by allowing doctors to update schedules and manage appointmen",
    image:
      "https://i.ibb.co/56S9sbN/Sc.jpg",
    tags: ["React Js", "React", "MongoDb"],
    category: "web app",
    github: "https://github.com/osaidAthar/Doctor-APP",
    webapp: "#",
    member: [
      {
        name: "Osaid Athar",
        img: "https://avatars.githubusercontent.com/u/62842226?s=96&v=4",
        linkedin: "https://www.linkedin.com/in/osaid-athar-486774247/",
        github: "https://github.com/osaidAthar/",
      }
    ],
  },
  
];

export const course = [
  
  {
    id: 0,
    title: "Dr. Angela Yu",
    date: "Jan 2022",
    description:
      "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    image:Angela,
    tags: ["Python"],
    category: "python",
    buynow: "https://www.udemy.com/course/100-days-of-code/?src=sac&kw=100+da",
    certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-54ed40d0-8bab-4e0f-82a5-9ef896edfeb5.jpg",
  },
  {
    id: 1,
    title: "Abdul Bari",
    date: "Mar 2023",
    description:
      "Learn JAVA Programming - Beginner to Master",
    image:Abdul,
    tags: ["Java"],
    category: "java",
    buynow: "https://www.udemy.com/course/java-se-programming/",
    certificate: "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1695299411~exp=1695300011~hmac=740de17c7112cf4e6d1ab49408878b24230ed2e7c03680b6fb1e79b07811338d",
  },
  {
    id: 2,
    title: "Navin Reddy",
    date: "Mar 2023",
    description:NavinReddy,
    image:
      "https://img-c.udemycdn.com/course/750x422/1793080_8158_3.jpg",
    tags: ["Python"],
    category: "python",
    buynow: "https://www.udemy.com/course/python-tutorials-for-by-navinreddy/",
    certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-1fa1a7e9-178f-4645-a302-e07f69f6eef1.jpg",
  },
  {
    id: 3,
    title: "Jonas Schmed",
    date: "Mar 2023",
    description:
      "The Complete JavaScript Course 2022: From Zero to Expert!",
    image:Jonas,
    tags: ["JavaScript"],
    category: "javascript",
    buynow: "https://www.udemy.com/course/the-complete-javascript-course/",
    certificate: "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1060&t=st=1695299411~exp=1695300011~hmac=740de17c7112cf4e6d1ab49408878b24230ed2e7c03680b6fb1e79b07811338d",
  },
  {
    id: 4,
    title: "Andrei Neagoie",
    date: "Mar 2023",
    description:
      "The Complete Web Developer",
    image:Andrie,
    tags: ["Web Developer"],
    category: "web developer",
    buynow: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
    certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-eb3d9bfe-6f5e-449d-b99b-c153e35a6a36.jpg",
  },
  
];
export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
