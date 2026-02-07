import {
  api,
  clients,
  compo,
  
  facebook,
  git,
  github,
  instagram,
  
  responsive,
  techs,
  ui,
  projects_img,
} from "../assets/icons";


export const all_projects = [];

export const navLinks = [
  { href: "aboutme", label: "About Me", key: "about_me" },
  { href: "projects", label: "Projects", key: "projects" },
  { href: "services", label: "Services", key: "services" },
  {
    href: "education_experience",
    label: "Education and Experience",
    key: "education_experience",
  },
  { href: "cv", label: "CV", key: "cv" },
  { href: "contact_me", label: "Contact Me", key: "contact_me" },
];


export const projects = [];

export const statistics = [
  {
    value: 0,
    label: "projects completed",
    icon: projects_img,
  },
  {
    value: 0,
    label: "technologies mastered",
    icon: techs,
  },
  {
    value: 0,
    label: "happy clients",
    icon: clients,
  },
];

export const services = [
  {
    imgURL: responsive,
    labelKey: "responsive_design",
    subtextKey: "responsive_design_desc",
    techsKey: "responsive_design_techs",
  },
  {
    imgURL: compo,
    labelKey: "react_development",
    subtextKey: "react_development_desc",
    techsKey: "react_development_techs",
  },
  {
    imgURL: ui,
    labelKey: "ui_ux_implementation",
    subtextKey: "ui_ux_implementation_desc",
    techsKey: "ui_ux_implementation_techs",
  },
  {
    imgURL: git,
    labelKey: "version_control",
    subtextKey: "version_control_desc",
    techsKey: "version_control_techs",
  },
  {
    imgURL: api,
    labelKey: "api_integration",
    subtextKey: "api_integration_desc",
    techsKey: "api_integration_techs",
  },
];

export const languages = [
  {
    lang: "English",
    score: 60,
  },
  {
    lang: "Deutsh",
    score: 20,
  },
  {
    lang: "Portuguese",
    score: 10,
  },
];
export const skills = [
  "self_motivation",
  "problem_solving",
  "analytical_thinking",
  "clear_communicator",
  "creativity",
  "user_centered",
  "lifelong_learner",
  "organized",
  "Team_collaboration",
  "Time_management",
  "Agile_scrum_familiarity",
  "Communication_with_clients",
];

export const footerLinks = [
  {
    titleKey: "about_me",
    links: [
      { nameKey: "birth_date" },
      { nameKey: "location" },
      { nameKey: "profession" },
      { nameKey: "freelancer" },
    ],
  },
  {
    titleKey: "techs",
    links: [
      { nameKey: "html_css_js", link: "/" },
      { nameKey: "react", link: "/" },
      { nameKey: "bootstrap_tailwind", link: "/" },
      { nameKey: "mysql", link: "/" },
      { nameKey: "git_github", link: "/" },
    ],
  },
  {
    titleKey: "get_in_touch",
    links: [
      { nameKey: "email", link: "mailto:fodil.noureddine.web@gmail.com" },
      { nameKey: "phone", link: "tel:+213775863537" },
    ],
  },
];

export const socialMedia = [
  { src: github, altKey: "github", link: "https://github.com/Noureddine08f" },
  {
    src: facebook,
    altKey: "facebook",
    link: "https://www.facebook.com/nouraddinne.fodil.9",
  },
  {
    src: instagram,
    altKey: "instagram",
    link: "https://www.instagram.com/_noroo/",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  }),
};
export const infoVariants = {
  enter: { opacity: 0, y: 50 },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  exit: { opacity: 0 },
};
