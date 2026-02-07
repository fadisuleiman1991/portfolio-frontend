export interface CV {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    profileImage?: string;
  };
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  activities: Activity[];
  onlineProfiles: OnlineProfile[]
  languages: Language[];
  trainings: Training[];
  educations: Education[];
}

export interface Skill {
    name: string;
    content: string[];
}

export interface Experience
{
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | "Present";
    responsibilities?: string[];
    isSecondaryJob?: boolean;
}

export interface Project
{
    name: string;
    startDate: string;
    endDate: string | "Present";
    description: string;
    role: string;
    technologies: string[];
    link?: string;
    sourceCode?: string;
}

export interface Activity
{
    name: string;
    startDate: string;
    endDate: string | "Present";
    responsibilities?: string[];
}

export interface OnlineProfile {
    name: string;
    link: string;
}

export interface Language
{
    name: string;
    level: string
}

export interface Training {
    name: string;
    institution: string;
    startDate: string;
    endDate: string | "Present";
}

export interface Education
{
    name: string;
    degree: string;
    institution: string;
    startDate: string;
    endDate: string | "Present";
}

