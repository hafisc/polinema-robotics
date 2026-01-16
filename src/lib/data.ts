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
        description: "Tim elit yang berfokus pada KRAI (Kontes Robot Abu Indonesia). Menguasai presisi, kecepatan, dan otonomi strategis.",
        category: "Robot Sentuh & Non-Sentuh",
        image: "/images/teams/aburobonema.jpg", // Placeholder
        color: "from-cyan-500 to-blue-500",
    },
    {
        id: "aroc-pl",
        name: "AROC-PL",
        description: "Tim Riset Humanoid yang mensimulasikan gerak dan interaksi manusia untuk KRAI dan tantangan global.",
        category: "Humanoid",
        image: "/images/teams/aroc.jpg",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "robsonema",
        name: "ROBSONEMA",
        description: "Spesialis dalam Robot Sepak Bola Beroda, menggabungkan visi AI dan kontrol omni-directional.",
        category: "Sepak Bola Beroda",
        image: "/images/teams/robsonema.jpg",
        color: "from-orange-500 to-red-500",
    },
    {
        id: "rotama",
        name: "ROTAMA",
        description: "Seni dalam Robotika. Menciptakan pertunjukan tari robotik yang sinkron untuk KRSTI.",
        category: "Robot Tari",
        image: "/images/teams/rotama.jpg",
        color: "from-emerald-500 to-teal-500",
    },
    {
        id: "robosarema",
        name: "ROBOSAREMA",
        description: "Robot spesialis SAR (Search and Rescue) merancang solusi untuk mitigasi bencana.",
        category: "SAR / Penyelamatan",
        image: "/images/teams/robosarema.jpg",
        color: "from-yellow-500 to-orange-500",
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
        role: "Ketua",
        image: "",
        socials: { linkedin: "#", github: "#" },
    },
    {
        id: "m2",
        name: "user 2",
        role: "Kepala Teknik",
        image: "",
        socials: { linkedin: "#", instagram: "#" },
    },
    {
        id: "m3",
        name: "user 3",
        role: "Programmer Utama",
        image: "",
        socials: { github: "#" },
    },
    {
        id: "m4",
        name: "user 4",
        role: "Mekanik Utama",
        image: "",
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
