export const SITE = {
    title: "ECODAYS",
    description:
        "ECODAYS — Festival lingkungan tahunan yang menginspirasi aksi nyata untuk bumi yang lebih hijau.",
    url: "https://ecodays.info",
};

export const NAV = [
    { label: "Sponsor", href: "#sponsor" },
    { label: "Tentang", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Lomba", href: "#lomba" },
    { label: "Seminar", href: "#seminar" },
    { label: "Dokumentasi", href: "#dokumentasi" },
];

export const HERO = {
    title: "ECODAYS",
    cta: "Daftar Sekarang",
    ctaLink: "#lomba",
};

export const ABOUT = {
    title: "Tentang ECODAYS",
    description:
        "BSO dibawah naungan HMTK yang sudah berdiri sejak 2012 hingga sekarang. ECODAYS sendiri merupakan event yang diselengarakan rutin setiap tahunnya dengan tema yang beragam. Kami memiliki tujuan untuk mewadahi mahasiswa Indonesia dalam berkompetisi untuk merancang produk inovatif beserta sistem penerapannya dalam menciptakan ide, inovasi dan pengembangan <i>eco-technology</i> untuk mewujudkan <i>net zero emissions</i>. Mengembangkan bakat menulis, menampung aspirasi, dan menambahkan wawasan berbasis <i>eco-technology</i> para peserta untuk menciptakan ide, inovasi dan pengembangan <i>eco-technology</i> untuk mewujudkan <i>net zero emissions</i>.",
};

export const TIMELINE = [
    { date: "30 Sep 2026", label: "Seminar Nasional" },
    { date: "3–4 Okt 2026", label: "Lomba Utama" },
    { date: "4 Okt 2026", label: "Gala Night" },
];

export const LOMBA = [
    {
        id: "enasco",
        name: "ENASCO",
        fullName: "Ecodays National Essay Competition",
        poster: "enasco.webp",
        banner: "enasco.webp",
        theme: "From Small Steps to Big Impact: Driving Collective Action Toward a Zero Emission Future",
        subThemes: [
            "Green Economy for Net-Zero",
            "Renewable Energy and Biofuel",
            "Waste Treatment for Innovation",
            "Innovative Sustainable Materials",
            "Carbon Capture and Storage",
        ],
        fees: [
            { batch: "1st Batch", period: "1 – 17 Juni 2026", amount: "Rp50.000" },
            { batch: "2nd Batch", period: "18 Juni – 7 Juli 2026", amount: "Rp60.000" },
            { batch: "3rd Batch", period: "8 – 29 Juli 2026", amount: "Rp70.000" },
        ],
        timeline: [
            { date: "1 – 17 Jun 2026", label: "1st Batch Registration" },
            { date: "18 Jun – 7 Jul 2026", label: "2nd Batch Registration" },
            { date: "8 – 29 Jul 2026", label: "3rd Batch Registration" },
            { date: "16 Agu 2026", label: "Finalist Announcement" },
            { date: "2 Okt 2026", label: "Grand Final Ecodays 2026" },
            { date: "3 Okt 2026", label: "Awarding" },
        ],
        prizePool: "Rp5.000.000",
        awards: [
            "Winner: Coaching money + Trophy + E-certificate",
            "1st Runner Up: Coaching money + Trophy + E-certificate",
            "2nd Runner Up: Coaching money + Trophy + E-certificate",
            "Most Favourite Poster: Coaching money + E-certificate",
            "Finalist: E-certificate",
            "Participant: E-certificate",
        ],
        links: {
            guideBook: "uns.id/ENASCO2026",
            registration: "uns.id/ENASCO26REGISTRATION",
            moreInfo: "https://linktr.ee/ecodaysuns",
        },
        contacts: [
            { name: "Senjoyo", phone: "+62 813 2900 5605" },
            { name: "Khaila", phone: "+62 815 2841 6723" },
        ],
        description:
            "Kompetisi esai nasional yang mengajak generasi muda untuk berkontribusi dalam aksi nyata menuju masa depan zero emission melalui gagasan dan inovasi mereka.",
    },
    {
        id: "ichedece",
        name: "ICHEDECE",
        fullName: "Indonesia Chemical Reaction Car Development Challenge",
        poster: "ichedece.webp",
        banner: "ichedece.webp",
        theme: "From Small Steps to Big Impact: Driving Collective Action Toward a Zero Emission Future",
        timeline: [
            { date: "1 Jun – 12 Jul 2026", label: "Open Registration" },
            { date: "1 Jun – 12 Jul 2026", label: "JSA & Concept Submission" },
            { date: "13 – 31 Jul 2026", label: "JSA & Concept Review" },
            { date: "1 Agu 2026", label: "Finalist Announcement" },
            { date: "2 Agu – 7 Sep 2026", label: "Finalist Registration, Poster, JSA & Concept Revision" },
            { date: "1 Okt 2026", label: "Technical Meeting" },
            { date: "2 Okt 2026", label: "Presentation" },
            { date: "3 Okt 2026", label: "Inspection, Race & Gala Night" },
        ],
        prizePool: "USD 1.318,47",
        awards: [
            "Winner: Coaching money + Trophy + E-certificate",
            "1st Runner Up: Coaching money + Trophy + E-certificate",
            "2nd Runner Up: Coaching money + Trophy + E-certificate",
            "Most Innovative Design Car: Coaching money + E-certificate",
            "Most Favorite Poster: Coaching money + E-certificate",
            "Best Presentation: Coaching money + E-certificate",
            "Finalist: E-certificate",
        ],
        links: {
            guideBook: "uns.id/GuideBookICHEDECE26",
            registration: "uns.id/ICHEDECE26REGISTRATION",
            moreInfo: "uns.id/ecodaysuns",
        },
        contacts: [
            { name: "Dewangga P.W.", phone: "+62 851-5702-2951" },
            { name: "Cantika E.", phone: "+62 882-2101-7294" },
        ],
        description:
            "Kompetisi nasional pengembangan mobil reaksi kimia yang menantang kreativitas dan inovasi mahasiswa dalam menciptakan solusi transportasi ramah lingkungan.",
    },
];

export const SEMINAR = {
    title: "Seminar Nasional",
    theme: "Masa Depan Hijau: Inovasi dan Kolaborasi untuk Lingkungan Berkelanjutan",
    date: "5 Agustus 2026",
    time: "08:00 - 16:00 WIB",
    venue: "Gedung Serba Guna, Universitas Contoh",
    description:
        "Seminar nasional yang membahas isu-isu lingkungan terkini dan solusi berkelanjutan untuk masa depan yang lebih hijau.",
    registrationLink: "#seminar",
};

export const SPONSORS = {
    title: "Didukung Oleh",
};

export const CONTACT = {
    email: "ecodaysuns@ft.uns.ac.id",
    instagram: "@ecodaysuns",
    instagramUrl: "https://www.instagram.com/ecodaysuns",
    tiktok: "@ecodays_uns",
    tiktokUrl: "https://www.tiktok.com/@ecodays_uns",
    facebook: "@ecodaysuns",
    facebookUrl: "https://www.facebook.com/ecodaysuns",
    twitter: "@EcodaysUNS",
    twitterUrl: "https://twitter.com/EcodaysUNS",
};

export const FOOTER = {
    copyright: `© ${new Date().getFullYear()} ECODAYS. All rights reserved.`,
};
