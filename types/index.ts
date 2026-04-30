export interface NavLink {
  label: string;
  href: string;
}

export interface CourseCard {
  title: string;
  description: string;
  logo: string;
  href: string;
  tag?: string;
}

export interface CurriculumModule {
  number: string;
  title: string;
  professor?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  avatar?: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface BonusItem {
  title: string;
  description?: string;
  professor?: string;
  professorPhoto?: string;
}

export interface Benefit {
  text: string;
  icon?: string;
}

export interface PriceOption {
  installments: number;
  installmentValue: string;
  total?: string;
  highlighted?: boolean;
}

export interface LeadFormData {
  name: string;
  email: string;
}
