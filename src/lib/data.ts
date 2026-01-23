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
        description: "Tim spesialis KRAI (Kontes Robot ABU Indonesia). Mengembangkan robot manual dan otomatis dengan presisi tinggi.",
        category: "KRAI",
        image: "/images/teams/aburobonema.jpg", // Placeholder
        color: "from-cyan-500 to-blue-600",
    },
    {
        id: "aroc-pl",
        name: "AROC-PL",
        description: "Tim Robot Humanoid (KRSBI Humanoid). Riset mendalam tentang keseimbangan, visi komputer, dan berjalan otonom.",
        category: "KRSBI Humanoid",
        image: "/images/teams/aroc.png",
        color: "from-rose-500 to-pink-600",
    },
    {
        id: "botema",
        name: "BOTEMA",
        description: "Tim Robot Sepak Bola Beroda (KRSBI Beroda). Fokus pada navigasi omni-directional dan strategi permainan berbasis AI.",
        category: "KRSBI Beroda",
        image: "/images/teams/botema.jpg",
        color: "from-amber-500 to-orange-600",
    },
    
    {
        id: "robosarema",
        name: "ROBOSAREMA",
        description: "Tim Robot SAR (KRSRI). Robot otonom berkaki yang dirancang untuk misi penyelamatan di medan bencana.",
        category: "KRSRI",
        image: "/images/teams/robosarema.jpeg",
        color: "from-emerald-500 to-green-600",
    },
];

export const achievements: Achievement[] = [
    {
        id: "ach-1",
        year: "2024",
        title: "Juara Nasional KRAI",
        category: "KRAI Regional II",
        medal: "Gold",
    },
    {
        id: "ach-2",
        year: "2023",
        title: "Penghargaan Desain Terbaik",
        category: "KRSBI Beroda",
        medal: "Silver",
    },
    {
        id: "ach-3",
        year: "2023",
        title: "Juara 3 Kategori Tari",
        category: "KRSTI Nasional",
        medal: "Bronze",
    },
    {
        id: "ach-4",
        year: "2022",
        title: "Juara 2 Nasional",
        category: "KRAI Nasional",
        medal: "Silver",
    },
];

export const members: Member[] = [
    {
        id: "m1",
        name: "user 1",
        role: "Dosen Pembimbing ABUROBONEMA",
        image: "",
        socials: { linkedin: "#", github: "#" },
    },
    {
        id: "m2",
        name: "user 2",
        role: "DOSEN PEMBIMBING AROC-PL",
        image: "",
        socials: { linkedin: "#", instagram: "#" },
    },
    {
        id: "m3",
        name: "user 3",
        role: "Dosen Pembimbing ROBOSAREMA",
        image: "",
        socials: { github: "#" },
    },
    
    {
        id: "m5",
        name: "user 5",
        role: "Dosen Pembimbing BOTEMA",
        image: "",
        socials: { instagram: "#" },
    },
];

export const galleryImages = [
    "/images/gallery/UMS_2163.jpg",
    "/images/gallery/UMS_2171.jpg",
    "/images/gallery/UMS_2255.jpg",
    "/images/gallery/UMS_2977.jpg",
    "/images/gallery/UMS_3022.jpg",
    "/images/gallery/UMS_3556.jpg",
    "/images/gallery/WEB_6506.JPG",
];
