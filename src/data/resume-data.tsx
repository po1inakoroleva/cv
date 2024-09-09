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
    "Junior Фронтенд разработчик",
  summary:
    "В настоящее время занимаюсь благотворительной платформой помощи животным 'У меня лапки'. Нахожусь в поиске работы Junior Frontend разработчиком.",
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
      start: "Январь 2023",
      end: "Декабрь 2023",
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
      company: "У меня лапки",
      link: "",
      badges: [],
      title: "Frontend Developer",
      logo: null,
      start: "Август 2024",
      end: "настоящее время",
      description: "Frontend разработка агрегатора проверенных благотворительных фондов и приютов для животных. Верстка по макету Figma, реализация взаимодействия с сервером по API (REST).",
    },
    {
      company: "МУП КБУ",
      link: "",
      badges: [],
      title: "Технический специалист",
      logo: null,
      start: "Июнь 2024",
      end: "настоящее время",
      description: "Отправка и получение данных с сервера, отслеживание запросов, исправление ошибок в системе при сбоях на сервере. Контроль за обменом данными между местной системой и всероссийским реестром.",
    },
    {
      company: "Cars7",
      link: "",
      badges: [],
      title: "Junior Flutter Developer (Стажировка)",
      logo: null,
      start: "Апрель 2024",
      end: "Май 2024",
      description: "Разработка сервисного приложения на Flutter. Верстка страниц мобильного приложения, реализация управления состоянием с помощью Flutter Bloc, работа с API.",
    },
    {
      company: "Image Generator (Open Source проект)",
      link: "",
      badges: [],
      title: "Junior Frontend Developer",
      logo: null,
      start: "Февраль 2024",
      end: "Апрель 2024",
      description: "Разработка платформы на Next.js, которая позволяет создавать стилизованные иллюстрации с помощью AI. Реализовала серверную часть приложения, адаптивную верстку, светлую и темную темы. Frontend написан на функциональных React компонентах, state менеджмент на Redux Toolkit. Для управления стилями использовался TailwindCSS.",
    },
    {
      company: "Фриланс",
      link: "",
      badges: ["Remote"],
      title: "Иллюстратор",
      logo: null,
      start: "Сентябрь 2019",
      end: "Январь 2021",
      description: "Реализовала несколько иллюстраций для блога 'МТС Инвестиции' и ряда небольших компаний. Работала с диджитал-издательством Svoemedia, которое специализируется на контент-проектах и создании сайтов для них, что позволило мне познакомиться с тем, как должен быть устроен приятный и понятный пользователю сайт.",
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
    "Bootstrap",
    "Tailwind",
    "MUI",
    "Mapbox",
    "DOM API",
    "REST API",
    "Webpack",
    "Axios",
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
      description: "Платформа для генерации изображений в едином минималистичном стиле с помощью AI. Может быть использована для стилизации ряда проектов: сайтов,  презентаций и т.п",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/image-generator",
      },
    },
    {
      title: "Чат (Slack)",
      techStack: [
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Axios",
        "Socket.IO",
        "React Router",
        "Formik",
        "react-i18next",
        "leo-profanity",
        "Rollbar",
        "React Bootstrap",
      ],
      description: "Упрощенная версия Slack-чата с возможностью добавлять, переименовывать и удалять каналы",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/SimpleChat",
      },
    },
    {
      title: "Карты",
      techStack: [
        "TypeScript",
        "React",
        "Redux Toolkit",
        "Axios",
        "MUI",
        "Formik",
        "Mapbox GL JS",
        "React Map GL",
      ],
      description: "Приложение для отображения гео-маркеров на карте",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/map",
      },
    },
     {
      title: "RSS агрегатор",
      techStack: [
        "JavaScript",
        "DOM API",
        "Webpack",
        "AJAX",
        "HTML",
        "CSS",
        "Bootstrap",
        "i18next",
      ],
      description: "Сервис для агрегации RSS-потоков, с помощью которых удобно читать разнообразные источники, например, блоги. Позволяет добавлять неограниченное количество RSS-лент, сам их обновляет и добавляет новые записи в общий поток.",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/RSSAggregator",
      },
    },
     {
      title: "Вычислитель отличий",
      techStack: [
        "JavaScript",
        "NodeJS",
        "GitHub Actions",
        "Jest",
        "ESLint",
        "Lodash",
        "Commander.js",
      ],
      description: "Консольная утилита, определяющая разницу между двумя структурами данных и поддерживающая разные форматы вывода на экран.",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/DifferenceGenerator",
      },
    },
     {
      title: "Игры разума",
      techStack: [
        "JavaScript",
        "NodeJS",
        "Git",
        "npm",
        "ESLint",
        "React Router",
        "Codeclimate",
      ],
      description: "Набор из пяти консольных арифметических игр. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.",
      logo: null,
      link: {
        label: "",
        href: "https://github.com/po1inakoroleva/BrainGames",
      },
    },
  ],
} as const;
