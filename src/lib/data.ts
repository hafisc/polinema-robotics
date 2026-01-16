export interface Team {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    color: string;
}

export interface Achievement {
    id: string;
    year: string;
    title: string;
    category: string;
    medal: "Gold" | "Silver" | "Bronze";
}

export interface Member {
    id: string;
    name: string;
    role: string;
    image: string;
    socials: {
        linkedin?: string;
        github?: string;
        instagram?: string;
    };
}

export const teams: Team[] = [
    {
        id: "aburobonema",
        name: "ABUROBONEMA",
        description: "The elite team focusing on KRAI (Kontes Robot Abu Indonesia). Mastering precision, speed, and strategic autonomy.",
        category: "Touch & Non-Touch Robot",
        image: "/images/teams/aburobonema.jpg", // Placeholder
        color: "from-cyan-500 to-blue-500",
    },
    {
        id: "aroc-pl",
        name: "AROC-PL",
        description: "Humanoid Research Team simulating human motion and interaction for KRAI and global challenges.",
        category: "Humanoid",
        image: "/images/teams/aroc.jpg",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "robsonema",
        name: "ROBSONEMA",
        description: "Specialized in Wheeled Soccer Robots, combining AI vision and omni-directional control.",
        category: "Wheeled Soccer",
        image: "/images/teams/robsonema.jpg",
        color: "from-orange-500 to-red-500",
    },
    {
        id: "rotama",
        name: "ROTAMA",
        description: "The Art in Robotics. Creating synchronized robotic dance performances for KRSTI.",
        category: "Dance Robot",
        image: "/images/teams/rotama.jpg",
        color: "from-emerald-500 to-teal-500",
    },
    {
        id: "robosarema",
        name: "ROBOSAREMA",
        description: "Search and Rescue specialized robots designing solutions for disaster mitigation.",
        category: "SAR / Rescue",
        image: "/images/teams/robosarema.jpg",
        color: "from-yellow-500 to-orange-500",
    },
];

export const achievements: Achievement[] = [
    {
        id: "ach-1",
        year: "2024",
        title: "National Champion KRAI",
        category: "KRAI Regional II",
        medal: "Gold",
    },
    {
        id: "ach-2",
        year: "2023",
        title: "Best Design Award",
        category: "KRSBI Beroda",
        medal: "Silver",
    },
    {
        id: "ach-3",
        year: "2023",
        title: "3rd Place Dance Category",
        category: "KRSTI National",
        medal: "Bronze",
    },
    {
        id: "ach-4",
        year: "2022",
        title: "First Runner Up",
        category: "KRAI National",
        medal: "Silver",
    },
];

export const members: Member[] = [
    {
        id: "m1",
        name: "Alex 'Cyber' Wijaya",
        role: "Chairperson",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        socials: { linkedin: "#", github: "#" },
    },
    {
        id: "m2",
        name: "Sarah 'Spark' Putri",
        role: "Head of Engineering",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        socials: { linkedin: "#", instagram: "#" },
    },
    {
        id: "m3",
        name: "Dimas 'Glitch' Pratama",
        role: "Lead Programmer",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        socials: { github: "#" },
    },
    {
        id: "m4",
        name: "Nadia 'Servo' Kusuma",
        role: "Lead Mechanic",
        image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        socials: { instagram: "#" },
    },
];

export const galleryImages = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
];
