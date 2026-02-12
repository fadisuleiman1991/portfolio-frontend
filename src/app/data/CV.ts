export interface CV {
    personalInfo: PersonalInformation;
    contact: Contact;
    skills: Skill[];
    experiences: Experience[];
    projects: Project[];
    activities: Activity[];
    onlineProfiles: OnlineProfile[]
    languages: Language[];
    trainings: Training[];
    educations: Education[];
};

export interface PersonalInformation {
    name: string;
    jobTitle: string;
    gender: string;
    maritalStatus: string;
    birthDate: string;
    birthPlace: string;
    nationality: string;
    profileImage: string;
}

export interface Contact {
    email: string;
    phone: string;
    city: string;
    country: string;
}

export interface Skill {
    name: string;
    content: string[];
};

export interface Experience {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | "Present";
    responsibilities?: string[];
    isSecondaryJob?: boolean;
};

export interface Project {
    name: string;
    startDate: string;
    endDate: string | "Present";
    description: string;
    role: string;
    technologies: string[];
    link?: string;
    sourceCode?: string;
};

export interface Activity {
    name: string;
    startDate: string;
    endDate: string | "Present";
    responsibilities?: string[];
};

export interface OnlineProfile {
    name: string;
    link: string;
};

export interface Language {
    name: string;
    level: string;
};

export interface Training {
    name: string;
    institution: string;
    startDate: string;
    endDate: string | "Present";
};

export interface Education {
    name: string;
    degree: string;
    institution: string;
    startDate: string;
    endDate: string | "Present";
};

