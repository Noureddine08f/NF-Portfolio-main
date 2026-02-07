// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  //enghlisch version
  en: {
    translation: {
      about: {
        my_picture_alt: "my picture",
        greeting: "Hi, I'm",
        my_name: "Noureddine",
        last_name: "Fodil",
        profession1: "Front End",
        profession2: "developer",
        from: "From",
        location: " Algeria",
        description:
          "A passionate Frontend Developer with over 1 years of experience crafting responsive and accessible websites using HTML, CSS, JavaScript, and React.js. Focused on performance, user experience, and clean code.",
        language_proficiency: "Language Proficiency",
        english: "English",
        english_level: "60%",
        german: "German",
        german_level: "45% (still learning)",
        french: "French",
        french_level: "20%(still learning)",
        arabic: "Arabic",
        arabic_level: "100% (Native)",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        fluent: "Fluent",
        see_projects: "See My Projects",
        welcome_note: "Welcome to My Portfolio",
        available: "Available for work",
        years_experience: "Years of Experience",
        profession: ["Frontend Developer", "UI/UX Enthusiast"], // Array for multiple professions
      },
      stats: {
        years_of_experience: "Years of Experience",
        projects_completed: "Projects Completed",
        technologies_mastered: "Techs Mastered",
        happy_clients: "Happy Clients",
      },
      nav: {
        about_me: "About Me",
        projects: "Projects",
        services: "Services",
        education_experience: "Education & Experience",

        cv: "CV",
        contact_me: "Contact Me",
        menu: "Menu",
        dark_mode: "Dark Mode",
        light_mode: "Light Mode",
        logo_alt: "My Portfolio Logo",
        footer: "NF | Portfolio",
      },
      projects: {
        // Titles and UI text
        projects: "My Projects",
        see_more: "See More",
        title_part1: "Few of my",
        title_part2: "Projects",

      },
      services: {
        title_part1: "I Provide You",
        title_part2: "Super",
        title_part3: "Quality",
        title_part4: "services",

        responsive_design: "Responsive Web Design & Development",
        responsive_design_desc:
          "Build fully responsive websites that look great on desktop, tablet, and mobile.",
        responsive_design_techs: [
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Flexbox",
          "Grid",
          "Media Queries",
        ],

        react_development: "Modern Front-End App Development with React",
        react_development_desc:
          "Develop scalable and maintainable front-end applications using component-based architecture.",
        react_development_techs: [
          "React.js",
          "Hooks",
          "JSX",
          "Component Reusability",
          "State Management",
        ],

        ui_ux_implementation: "UI/UX Implementation from Design Files",
        ui_ux_implementation_desc:
          "Convert design prototypes (Figma, XD, Sketch) into pixel-perfect, production-ready websites.",
        ui_ux_implementation_techs: [
          "HTML",
          "CSS",
          "Tailwind",
          "JavaScript",
          "Figma-to-code skills",
        ],

        version_control: "Version Control & Team Collaboration",
        version_control_desc:
          "Use Git and GitHub to collaborate with teams, manage branches, resolve merge conflicts, and track changes.",
        version_control_techs: ["Git", "GitHub", "Git Flow", "Pull Requests"],

        api_integration: "REST API Integration & Dynamic Data Handling",
        api_integration_desc:
          "Connect front-end apps to back-end APIs to display real-time or user-generated content.",
        api_integration_techs: [
          "JavaScript (Fetch, Axios)",
          "React (useEffect, useState)",
          "JSON",
          "HTTP methods",
        ],
        subtitle: "What I Offer",
       
        description:
          "Custom solutions to bring your ideas to life, from frontend design to backend development.",
      },
      education_experience: {
        education: "Education",
        experience: "Experience",

        academic_journey: "My Academic Journey",
        bachelors_degree: "Baccalaureate in Natural and Life Sciences ",
        undergraduate_studies:
          "Professional Training in Web And App Development",
        professional_experience: "Professional Experience",
        agriculture_institution:
          "National Specialized Institute of Vocational Training, (Internship)",
        agriculture_description:
          "Developing a full web application as a graduation project.\n Working with: React.js, Laravel, Tailwind CSS, SQLite",
       
        subtitle: "My Journey",
        title: "Education & Experience",
        bachelors_details: "Abdelhamid Kebabti High School, Algeria.",
        undergraduate_details:
          "National Specialized Institute of Vocational Training, Mohamed Tayeb Boucenna, Algeria.",
      },

      skills: {
        self_motivation: "Self-Motivation",
        problem_solving: "Problem-Solving",
        analytical_thinking: "Analytical Thinking",
        clear_communicator: "Clear Communicator",
        creativity: "Creativity",
        user_centered: "User-Centered",
        lifelong_learner: "Lifelong Learner",
        organized: "Organized",
        Team_collaboration: "Team collaboration",
        Time_management: "Time management",
        Agile_scrum_familiarity: "Agile/scrum familiarity",
        Communication_with_clients: "Communication with clients",
      },
      cv: {
        title_part1: "Take A Look At My",
        title_part2: "CV",
        subtitle:
          "A summary of my professional journey, skills, and accomplishments",
        and: "And",
        cv_preview_alt: "CV Preview",
        download_text: "Download Full CV",
        click_to_download: "Click to save PDF",
        download_button: "Download Full CV",
        thank_you_part1: "Thank You For Your",
        thank_you_part2: "Time",
        thank_you_message:
          "I appreciate you taking the time to review my qualifications. Feel free to reach out if you'd like to discuss potential opportunities.",
        profile_alt: "Profile",
      },
      footer: {
        logo_alt: "Logo",
        description:
          "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and React, allowing me to build user-friendly interfaces and seamless user experiences. With experience in both front-end and back-end technologies, I create comprehensive solutions tailored to specific needs. I'm constantly learning new technologies and frameworks to stay at the forefront of web development.",
        copyright_alt: "Copyright sign",
        copyright_text: "Copyright. All rights reserved.",
        terms_conditions: "Terms & Conditions",

        // About Me section
        about_me: "About Me",
        birth_date: "08/08/2004 ",
        location: " Algeria",
        profession: "Web Developer",
        freelancer: "Freelancer",

        // Techs section
        techs: "Techs",
        html_css_js: "HTML & CSS & JS",
        react: "React JS ",
        bootstrap_tailwind: "Bootstrap & Tailwind CSS",
        mysql: "MySQL",
        git_github: "Git & GitHub",

        // Get in touch section
        get_in_touch: "Get in touch",
        email: "fodil.noureddine.web@gmail.com",
        phone: "+213775863537",

        // Social media
        github: "GitHub",
        facebook: "Facebook",
        instagram: "Instagram",
      },
    },
  },

  //deutsch version
  de: {
    translation: {
      about: {
        my_picture_alt: "Mein Bild",
        greeting: "Hallo, ich bin",
        my_name: "Noureddine",
        last_name: "Fodil",
        profession1: "Frontend",
        profession2: "Entwickler",
        from: "Aus",
        location: "Algerien",
        description:
          "Ein leidenschaftlicher Frontend-Entwickler mit über 1 Jahr Erfahrung in der Erstellung responsiver und barrierefreier Websites mit HTML, CSS, JavaScript und React.js. Fokus auf Performance, Benutzererlebnis und sauberen Code.",
        language_proficiency: "Sprachkenntnisse",
        english: "Englisch",
        english_level: "60%",
        german: "Deutsch",
        german_level: "45% (lerne noch)",
        french: "Französisch",
        french_level: "20% (lerne noch)",
        arabic: "Arabisch",
        arabic_level: "100% (Muttersprache)",
        beginner: "Anfänger",
        intermediate: "Mittelstufe",
        advanced: "Fortgeschritten",
        fluent: "Fließend",
        see_projects: "Meine Projekte ansehen",
        welcome_note: "Willkommen in meinem Portfolio",
        available: "Verfügbar für Arbeit",
        years_experience: "Jahre Erfahrung",
        profession: ["Frontend Entwickler", "UI/UX Enthusiast"],
      },

      stats: {
        years_of_experience: "Jahre Erfahrung",
        projects_completed: "Abgeschlossene Projekte",
        technologies_mastered: "Beherrschte Technologien",
        happy_clients: "Zufriedene Kunden",
      },

      nav: {
        about_me: "Über mich",
        projects: "Projekte",
        services: "Dienstleistungen",
        education_experience: "Ausbildung & Erfahrung",
        cv: "Lebenslauf",
        contact_me: "Kontakt",
        menu: "Menü",
        dark_mode: "Dunkelmodus",
        light_mode: "Hellmodus",
        logo_alt: "Mein Portfolio Logo",
        footer: "NF | Portfolio",
      },

      projects: {
        projects: "Meine Projekte",
        see_more: "Mehr sehen",
        title_part1: "Einige meiner",
        title_part2: "Projekte",
       
      },

      services: {
        title_part1: "Ich biete Ihnen",
        title_part2: "hochwertige",
        title_part3: "Web",
        title_part4: "Dienstleistungen",

        responsive_design: "Responsives Webdesign & Entwicklung",
        responsive_design_desc:
          "Erstellung vollständig responsiver Websites für Desktop, Tablet und Mobilgeräte.",

        react_development: "Moderne Frontend-Entwicklung mit React",
        react_development_desc:
          "Entwicklung skalierbarer Frontend-Anwendungen mit komponentenbasierter Architektur.",

        ui_ux_implementation: "UI/UX Umsetzung aus Design-Dateien",
        ui_ux_implementation_desc:
          "Umwandlung von Figma-, XD- oder Sketch-Designs in produktionsreife Websites.",

        version_control: "Versionskontrolle & Teamarbeit",
        version_control_desc:
          "Zusammenarbeit mit Git und GitHub, Branches verwalten und Konflikte lösen.",

        api_integration: "REST API Integration",
        api_integration_desc:
          "Verbindung von Frontend-Apps mit Backend-APIs zur dynamischen Datenanzeige.",
      },

      education_experience: {
        education: "Ausbildung",
        experience: "Erfahrung",
        academic_journey: "Mein Bildungsweg",
        bachelors_degree: "Abitur in Natur- und Lebenswissenschaften",
        undergraduate_studies: "Berufsausbildung in Web- und App-Entwicklung",
        professional_experience: "Berufserfahrung",
        agriculture_institution:
          "Nationales Berufsbildungsinstitut (Praktikum)",
        agriculture_description:
          "Entwicklung einer vollständigen Webanwendung als Abschlussprojekt.",
        subtitle: "Mein Weg",
        title: "Ausbildung & Erfahrung",
      },

      skills: {
        self_motivation: "Selbstmotivation",
        problem_solving: "Problemlösung",
        analytical_thinking: "Analytisches Denken",
        clear_communicator: "Klare Kommunikation",
        creativity: "Kreativität",
        user_centered: "Benutzerzentriert",
        lifelong_learner: "Lebenslanges Lernen",
        organized: "Organisiert",
        Team_collaboration: "Teamarbeit",
        Time_management: "Zeitmanagement",
        Agile_scrum_familiarity: "Agile/Scrum Kenntnisse",
        Communication_with_clients: "Kundenkommunikation",
      },

      cv: {
        title_part1: "Wirf einen Blick auf",
        title_part2: "meinen Lebenslauf",
        subtitle:
          "Eine Zusammenfassung meines beruflichen Werdegangs, meiner Fähigkeiten und Erfolge",
        and: "und",
        cv_preview_alt: "Vorschau des Lebenslaufs",
        download_text: "Vollständigen Lebenslauf herunterladen",
        click_to_download: "Klicken, um die PDF-Datei zu speichern",
        download_button: "Lebenslauf herunterladen",
        thank_you_part1: "Vielen Dank für Ihre",
        thank_you_part2: "Zeit",
        thank_you_message:
          "Vielen Dank, dass Sie sich die Zeit genommen haben, meine Qualifikationen zu prüfen. Kontaktieren Sie mich gerne für weitere Informationen.",
        profile_alt: "Profilbild",
      },

      footer: {
        about_me: "Über mich",
        location: "Algerien",
        profession: "Webentwickler",
        freelancer: "Freelancer",
        get_in_touch: "Kontakt aufnehmen",
        email: "fodil.noureddine.web@gmail.com",
        phone: "+213775863537",
        github: "GitHub",
        facebook: "Facebook",
        instagram: "Instagram",
      },
    },
  },

  //arabic version
  ar: {
    translation: {
      about: {
        my_picture_alt: "صورتي",
        greeting: "أهلاً، أنا",
        my_name: "نور الدين",
        last_name: "فضيل",
        profession1: "مطور",
        profession2: "واجهات أمامية",
        from: "من",
        location: "الجزائر",
        description:
          "مطور واجهات أمامية شغوف بخبرة تزيد عن سنتين في بناء مواقع ويب متجاوبة وسهلة الوصول باستخدام HTML و CSS و JavaScript و React.js. أركز على الأداء وتجربة المستخدم والكود النظيف.",
        language_proficiency: "إتقان اللغات",
        english: "الإنجليزية",
        english_level: "60%",
        german: "الألمانية",
        german_level: "20% (ما زلت أتعلم)",
        french: "الفرنسية",
        french_level: "80%",
        arabic: "العربية",
        arabic_level: "100% (اللغة الأم)",
        beginner: "مبتدئ",
        intermediate: "متوسط",
        advanced: "متقدم",
        fluent: "طلاقة",
        see_projects: "شاهد مشاريعي",
        welcome_note: "مرحباً بكم في معرض أعمالي",
        available: "متاح للعمل",
        years_experience: "سنوات الخبرة",
        profession: ["مطور واجهات أمامية", "هاوي UI/UX"],
      },
      stats: {
        years_of_experience: "سنوات الخبرة",
        projects_completed: "مشاريع مكتملة",
        technologies_mastered: "تقنيات متقنة",
        happy_clients: "عملاء سعداء",
      },
      nav: {
        about_me: "من أنا",
        projects: "المشاريع",
        services: "الخدمات",
        education_experience: "التعليم والخبرة",

        cv: "السيرة الذاتية",
        contact_me: "تواصل معي",
        menu: "القائمة",
        dark_mode: "الوضع الليلي",
        light_mode: "الوضع النهاري",
        logo_alt: "شعار محفظتي",
        footer: "GA | محفظة الأعمال",
      },
      projects: {
        projects: "مشاريعي",
        see_more: "شاهد المزيد",
        title_part1: "بعض من",
        title_part2: "مشاريعي",
        
      },
      services: {
        title_part1: "أقدم لكم",
        title_part2: "خدمات",
        title_part3: "عالية",
        title_part4: "الجودة",

        responsive_design: "تصميم وتطوير مواقع ويب متجاوبة",
        responsive_design_desc:
          "بناء مواقع ويب متجاوبة بالكامل تبدو رائعة على سطح المكتب والأجهزة اللوحية والهواتف المحمولة.",

        react_development:
          "تطوير تطبيقات الواجهة الأمامية الحديثة باستخدام React",
        react_development_desc:
          "تطوير تطبيقات واجهات أمامية قابلة للتوسع والصيانة باستخدام بنية قائمة على المكونات.",

        ui_ux_implementation:
          "تنفيذ واجهة المستخدم/تجربة المستخدم من ملفات التصميم",
        ui_ux_implementation_desc:
          "تحويل نماذج التصميم (Figma, XD, Sketch) إلى مواقع ويب مثالية بدقة وجاهزة للإنتاج.",

        version_control: "التحكم في الإصدار والتعاون الجماعي",
        version_control_desc:
          "استخدام Git و GitHub للتعاون مع الفرق، وإدارة الفروع، وحل تعارضات الدمج، وتتبع التغييرات.",

        api_integration: "تكامل REST API والتعامل مع البيانات الديناميكية",
        api_integration_desc:
          "ربط تطبيقات الواجهة الأمامية بواجهات برمجة التطبيقات للعرض المحتوى في الوقت الفعلي أو المحتوى الذي ينشئه المستخدم.",

        subtitle: "ماذا أقدم",
        description:
          "حلول مخصصة لتحويل أفكارك إلى واقع، من تصميم الواجهة الأمامية إلى تطوير الخلفية.",
      },
      education_experience: {
        education: "التعليم",
        experience: "الخبرة",

        academic_journey: "رحلتي الأكاديمية",
        bachelors_degree: "شهادة البكالوريا في العلوم الطبيعية وعلوم الحياة",
        undergraduate_studies: "تكوين مهني في تطوير الويب و التطبيقات",
        professional_experience: "الخبرة المهنية",
        agriculture_institution:
          "المعهد الوطني المتخصص في التكوين المهني، محمد الطيب بوسنة (تدريب)",
        agriculture_description:
          "تطوير تطبيق ويب كامل كمشروع تخرج. العمل مع: React.js، Laravel، Tailwind CSS، SQLite",
        
        subtitle: "رحلتي",
        title: "التعليم والخبرة",
        bachelors_details: " ثانوية عبد الحميد قباطي،الجزائر .",
        undergraduate_details:
          " المعهد الوطني المتخصص في التكوين والتعليم المهنين محمد الطيب بوسنة.",
      },
      skills: {
        self_motivation: "التحفيز الذاتي",
        problem_solving: "حل المشكلات",
        analytical_thinking: "التفكير التحليلي",
        clear_communicator: "تواصل واضح",
        creativity: "الإبداع",
        user_centered: "التركيز على المستخدم",
        lifelong_learner: "تعلم مستمر",
        organized: "منظم",
        Team_collaboration: "التعاون الجماعي",
        Time_management: "إدارة الوقت",
        Agile_scrum_familiarity: "الإلمام بـ Agile/Scrum",
        Communication_with_clients: "التواصل مع العملاء",
      },
      cv: {
        title_part1: "ألقِ نظرة على",
        title_part2: "سيرتي الذاتية",
        subtitle: "ملخص لرحلتي المهنية ومهاراتي وإنجازاتي",
        and: "و",
        cv_preview_alt: "معاينة السيرة الذاتية",
        download_text: "تحميل السيرة الذاتية الكاملة",
        click_to_download: "اضغط لحفظ ملف PDF",
        download_button: "تحميل السيرة الذاتية",
        thank_you_part1: "شكراً على",
        thank_you_part2: "وقتك",
        thank_you_message: "أقدر وقتك في مراجعة مؤهلاتي.",
        profile_alt: "الملف الشخصي",
      },
      footer: {
        logo_alt: "الشعار",
        description:
          "أنا مطور ويب شغوف أركز على إنشاء تطبيقات ويب ديناميكية ومتجاوبة.",
        copyright_alt: "علامة حقوق النشر",
        copyright_text: "حقوق النشر. جميع الحقوق محفوظة.",
        terms_conditions: "الشروط والأحكام",
        about_me: "من أنا",
        birth_date: "08/08/2004 ",
        location: "الجزائر",
        profession: "مطور ويب",
        freelancer: "مستقل",
        student_at: " ",
        university: "",
        techs: "التقنيات",
        html_css_js: "HTML & CSS & JS",
        react: "React JS ",
        bootstrap_tailwind: "Bootstrap & Tailwind CSS",
        mysql: "MySQL",
        mongodb: "MongoDB",
        git_github: "Git & GitHub",
        get_in_touch: "تواصل معي",
        linkedin: "لينكد إن",
        github: "جيت هب",
        facebook: "فيسبوك",
        instagram: "إنستغرام",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
