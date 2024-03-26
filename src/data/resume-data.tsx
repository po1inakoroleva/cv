import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Полина Королева",
  initials: "",
  location: "Новосибирск, Россия",
  locationLink: "https://www.google.com/maps/place/Novosibirsk",
  about:
    "Фронтенд разработчик",
  summary:
    "",
  avatarUrl: "https://avatars.githubusercontent.com/u/122518073?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "polinakorolevaaaaa@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/po1inakoroleva",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/po1inakoroleva/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hexlet",
      degree: "Frontend разработчик",
      start: "Январь 2022",
      end: "Декабрь 2022",
    },
    {
      school: "Новосибирский национальный исследовательский государственный университет",
      degree: "Социология, Экономический факультет (неоконченное)",
      start: "Сентябрь 2020",
      end: "Декабрь 2022",
    },
  ],
  work: [
    {
      company: "Фриланс",
      link: "",
      badges: ["Remote"],
      title: "Иллюстратор",
      logo: null,
      start: "Сентябрь 2019",
      end: "Январь 2021",
      description: "Реализовала несколько иллюстраций для блога 'МТС Инвестиции' и ряданебольших компаний.\nРаботала с диджитал-издательством Svoemedia, которое специализируется на контент-проектах и создании сайтов для них, что позволило мне познакомиться с тем, как должен быть устроен приятный и понятный пользователю сайт.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux Toolkit",
    "Next.js",
    "HTML",
    "CSS",
    "DOM API",
    "REST API",
    "Git",
    "Github Actions",
  ],
  projects: [
    {
      title: "Image Generator",
      techStack: [
        "TypeScript",
        "Next.js",
        "React",
        "Redux Toolkit",
        "TailwindCSS",
        "PostCSS",
        "next-intl",
      ],
      description: "A platform to create images in the same style using AI",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/image-generator",
      },
    },
  ],
} as const;
