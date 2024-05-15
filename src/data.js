import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";

export const filters = [
    {
        name: "Todos",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Web Responsive",
        id: "responsive",
    },
    {
        name: "Desktop",
        id: "desktop",
    },
];

export const projects = [
    {
        name: "CapaciTechKids",
        image: p2,
        url:"https://youtu.be/EzXp-G3zEt0",
        tags: ["dashboard", "responsive","desktop"],
    },
    {
        name: "Memory Cards",
        image: p1,
        url:"https://memory-cards-five.vercel.app",
        tags: ["desktop"],
    },
    {
        name: "Info SpaceX",
        image: p3,
        url:"https://main--info-spacex.netlify.app",
        tags: ["desktop","responsive"],
    },
    {
        name: "Digital Garage Agency",
        image: p3,
        url:"https://digitalgarageagency.netlify.app",
        tags: ["desktop","responsive"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "PROYECTOS<br />GENIALES<br />COMPLETOS",
    },
    {
        id: 2,
        year: 4,
        description: "AÑOS DE<br />EXPERIENCIA",
    },
    {
        id: 3,
        year: 15,
        description: "TECNOLOGÍAS<br />UTILIZADAS",
    },
];
