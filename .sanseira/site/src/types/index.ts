export type CardData = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export type PricingData = {
    title: string;
    price: string;
    features: string[];
};

export type AIMetrics = {
    title: string;
    shortDescription: string;
    fullDescription: string;
};

export type PartnerData = {
    url: string;
    name: string;
};

export enum UserCategory {
    Student = 'student',
    School = 'school',
    Manager = 'manager'
}

export enum Institution {
    HighSchool = 'High School',
    College = 'College',
    University = 'University',
    Enterprise = 'Enterprise'
}

export type UserData = {
    firstNames: string;
    lastName: string;
    email: string;
    phone: string;
    qualification: string;
    whatsApp: string;
    category: UserCategory;
    institution: Institution;
};