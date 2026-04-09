export type Hero = {
    greeting: string;
};

export type Profile = {
    name: string;
    title: string;
    location: string;
    summary: string;
    intro: string;
};

export type EducationItem = {
    title: string;
    period: string;
    details: string;
};

export type ExperienceItem = {
    title: string;
    period: string;
    details: string[];
};

export type RepositoryItem = {
    name: string;
    description: string;
    stack: string[];
    extraLanguages?: string[];
    url: string;
};

export type SidebarLink = {
    label: string;
    value: string;
    href?: string;
};

export type CvData = {
    hero: Hero;
    profile: Profile;
    education: EducationItem[];
    experience: ExperienceItem[];
    repositories: RepositoryItem[];
    skills: string[];
    strengths: string[];
    languages: string[];
    links: SidebarLink[];
};