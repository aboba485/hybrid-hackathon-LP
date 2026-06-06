/**
 * Hybrid Lab - Internationalization (i18n) Module
 * Supports English (en) and Russian (ru)
 */

const TRANSLATIONS = {
    en: {
        // Hero Section
        hero_badge: "Closed Beta · July 11–12",
        hero_title: "Build with AI-native talent. Learn AI by doing.",
        hero_subtitle: "A two-day Hybrid Lab sprint for entrepreneurs who want to understand AI through real work — and prototype a project that matters to their business.",
        hero_meta: "5 entrepreneurs · rare teenage talent core · one room · real projects",
        cta_apply: "Apply as an Entrepreneur",
        cta_how: "See how it works",

        // Partners
        partners_label: "Partners & Supporters",

        // Values Section
        values_title: "What Entrepreneurs Get",
        value1_number: "Value 01",
        value1_title: "X10 AI Literacy",
        value1_text: "In two days, you may move through a learning curve that would normally take months. Not through lectures, but by working side by side with AI-native builders who search, code, prototype, and iterate with AI as a natural medium.",
        value1_bullet1: "Learn by watching real AI workflows",
        value1_bullet2: "Cross practical thresholds in prompting, research, coding, and prototyping",
        value1_bullet3: "Understand what AI can actually do for your business",
        value1_bullet4: "Leave with sharper instincts, not just notes",
        value2_number: "Value 02",
        value2_title: "A Meaningful Prototype",
        value2_text: "Bring a real challenge, workflow, opportunity, or product idea. During the sprint, you can form a team and turn it into a prototype, demo, internal tool, or first working version.",
        value2_bullet1: "Prototype around your own business request",
        value2_bullet2: "Test an idea quickly",
        value2_bullet3: "See how young AI-native builders approach complexity",
        value2_bullet4: "Leave with a concrete next step",

        // How It Works Section
        how_title: "How The Sprint Works",
        step1_title: "Bring a challenge",
        step1_text: "Come with a business idea, workflow, pain point, product hypothesis, or innovation question.",
        step2_title: "Meet the talent core",
        step2_text: "Entrepreneurs and young builders meet, discuss possible directions, and choose who they want to work with.",
        step3_title: "Build in public",
        step3_text: "Teams work in the same physical space, using AI, code, research, and fast prototyping.",
        step4_title: "Present to judges",
        step4_text: "Final projects are presented and the winning team receives the prize.",

        // Talent Core Section
        talent_title: "The Talent Core",
        talent_intro: "At the center of the sprint is a small circle of AI-native teenagers with unusual technical range. This is a collective portrait of the group — not a claim that every participant has every achievement.",
        talent1: "Students from IMS, one of the strongest mathematics schools in Cyprus",
        talent2: "Several teenagers with IQ levels found in roughly 0.05% of the population",
        talent3: "Best Computer Science result in Europe at IGCSE level",
        talent4: "Winners of Cyprus mathematics olympiads",
        talent5: "Successful commercial software development experience",
        talent6: "Designed and 3D-printed a robotic arm prototype for chemical experiments with computer vision",
        talent7: "Optimized workflows for businesses and business owners",
        talent8: "Practical fluency with AI tools, coding, fast research, and prototyping",

        // What You Can Build Section
        build_title: "What Could Be Prototyped",
        build1: "AI assistant for internal operations",
        build2: "Workflow automation",
        build3: "Customer support or sales assistant",
        build4: "Analytics dashboard",
        build5: "Document processing tool",
        build6: "Educational or training product",
        build7: "Computer vision prototype",
        build8: "Internal knowledge base",
        build9: "MVP for a new product idea",
        build_note: "The best projects are not abstract. They start from a real business tension.",

        // Disclaimer Section
        disclaimer_title: "No Fake Guarantees. Real Conditions for Acceleration.",
        disclaimer_text: "Hybrid Hackathon does not guarantee a finished product. The default recommendation is to form projects around entrepreneurs' real requests, but teams are formed organically: entrepreneurs and young builders choose each other after meeting, discussing ideas, and sensing where the strongest collaboration can happen.",

        // Contribution Section
        contribution_title: "Contribution Model",
        contribution_entrepreneur: "Entrepreneur",
        contribution_patron: "Patron",
        contribution_note: "100% of contributions go into prizes, venue, and food. The winning team receives the prize. Patrons help increase the quality of the event and the final prize pool.",

        // Jury Section
        jury_title: "Jury & Mentors",
        jury_placeholder: "To be announced soon",

        // Form
        form_title: "Apply as an Entrepreneur",
        form_name_label: "Full Name",
        form_name_placeholder: "Enter your full name",
        form_email_label: "Email",
        form_email_placeholder: "Enter your email",
        form_phone_label: "Phone",
        form_phone_placeholder: "Enter your phone number",
        form_company_label: "Company / Project",
        form_company_placeholder: "Enter your company or project name",
        form_idea_label: "What challenge, workflow, or idea would you like to explore?",
        form_idea_placeholder: "Describe your idea or challenge (optional)",
        form_participation_label: "Participation Type",
        form_type_entrepreneur: "Entrepreneur",
        form_type_patron: "Patron",
        form_consent: "I agree to be contacted about Hybrid Hackathon.",
        form_submit: "Apply",
        form_success: "Thank you. Your application has been received. We will contact you soon.",

        // Validation Errors
        error_required: "This field is required",
        error_email: "Please enter a valid email",
        error_consent: "You must agree to be contacted",
        error_generic: "Something went wrong. Please try again.",

        // Footer
        footer_text: "Hybrid Lab · July 11–12"
    },

    ru: {
        // Hero Section
        hero_badge: "Closed Beta · 11–12 июля",
        hero_title: "Соберите проект с AI-native талантами. Научитесь ИИ через действие.",
        hero_subtitle: "Двухдневный Hybrid Lab sprint для предпринимателей, которые хотят понять ИИ через реальную работу — и собрать прототип проекта, важного для своего бизнеса.",
        hero_meta: "5 предпринимателей · редкое ядро подростков · одна комната · реальные проекты",
        cta_apply: "Подать заявку предпринимателя",
        cta_how: "Как это работает",

        // Partners
        partners_label: "Партнеры и поддержка",

        // Values Section
        values_title: "Что получают предприниматели",
        value1_number: "Ценность 01",
        value1_title: "X10 AI Literacy",
        value1_text: "За два дня вы можете пройти участок кривой обучения, на который обычно уходят месяцы. Не через лекции, а через работу бок о бок с AI-native билдерами, для которых поиск, кодинг, прототипирование и итерации с ИИ уже стали естественной средой.",
        value1_bullet1: "Увидеть реальные AI-workflows в действии",
        value1_bullet2: "Пройти практические пороги в prompting, research, coding и prototyping",
        value1_bullet3: "Понять, что ИИ реально может дать вашему бизнесу",
        value1_bullet4: "Уйти не с конспектом, а с более точной интуицией",
        value2_number: "Ценность 02",
        value2_title: "Значимый прототип",
        value2_text: "Принесите реальную задачу, workflow, возможность или продуктовую идею. Во время sprint вы сможете сформировать команду и превратить это в прототип, демо, внутренний инструмент или первую рабочую версию.",
        value2_bullet1: "Строить вокруг собственного бизнес-запроса",
        value2_bullet2: "Быстро проверить идею",
        value2_bullet3: "Увидеть, как AI-native подростки подходят к сложности",
        value2_bullet4: "Уйти с конкретным следующим шагом",

        // How It Works Section
        how_title: "Как устроен sprint",
        step1_title: "Принесите задачу",
        step1_text: "Приходите с бизнес-идеей, workflow, болевой точкой, продуктовой гипотезой или вопросом для инновационного проекта.",
        step2_title: "Познакомьтесь с ядром талантов",
        step2_text: "Предприниматели и молодые билдеры знакомятся, обсуждают возможные направления и выбирают, с кем хотят работать.",
        step3_title: "Собирайте вживую",
        step3_text: "Команды работают в одном физическом пространстве, используя ИИ, код, исследование и быстрое прототипирование.",
        step4_title: "Презентуйте жюри",
        step4_text: "Финальные проекты представляются жюри, а команда-победитель получает приз.",

        // Talent Core Section
        talent_title: "Ядро талантов",
        talent_intro: "В центре sprint — небольшой круг AI-native подростков с необычным техническим диапазоном. Это коллективный портрет группы, а не утверждение, что каждый участник обладает всеми достижениями сразу.",
        talent1: "Ученики IMS, одной из сильнейших математических школ Кипра",
        talent2: "Несколько подростков с IQ уровня, который встречается примерно у 0,05% людей",
        talent3: "Лучший результат по Computer Science в Европе на уровне IGCSE",
        talent4: "Победители математических олимпиад Кипра",
        talent5: "Успешный опыт коммерческой разработки",
        talent6: "Проектирование и 3D-печать прототипа роботизированной руки для химических экспериментов с компьютерным зрением",
        talent7: "Оптимизация workflow для бизнесов и их владельцев",
        talent8: "Практическая беглость в AI-инструментах, кодинге, быстром исследовании и прототипировании",

        // What You Can Build Section
        build_title: "Что можно прототипировать",
        build1: "AI-ассистент для внутренних операций",
        build2: "Автоматизация workflow",
        build3: "Ассистент для поддержки клиентов или продаж",
        build4: "Аналитический dashboard",
        build5: "Инструмент обработки документов",
        build6: "Образовательный или training-продукт",
        build7: "Computer vision prototype",
        build8: "Внутренняя база знаний",
        build9: "MVP новой продуктовой идеи",
        build_note: "Лучшие проекты начинаются не с абстрактной идеи, а с реального напряжения в бизнесе.",

        // Disclaimer Section
        disclaimer_title: "Без фальшивых гарантий. С реальными условиями для ускорения.",
        disclaimer_text: "Hybrid Hackathon не гарантирует готовый продукт. По умолчанию мы рекомендуем формировать проекты вокруг реальных запросов предпринимателей, но команды складываются органично: предприниматели и молодые билдеры выбирают друг друга после знакомства, обсуждения идей и понимания, где может получиться самая сильная совместная работа.",

        // Contribution Section
        contribution_title: "Модель участия",
        contribution_entrepreneur: "Предприниматель",
        contribution_patron: "Патрон",
        contribution_note: "100% взносов идут в событие: призы, аренду и еду. Приз получает вся команда победителей. Патроны помогают усилить событие и увеличить итоговый призовой фонд.",

        // Jury Section
        jury_title: "Жюри и менторы",
        jury_placeholder: "Скоро будет объявлено",

        // Form
        form_title: "Заявка для предпринимателя",
        form_name_label: "Имя и фамилия",
        form_name_placeholder: "Введите ваше полное имя",
        form_email_label: "Email",
        form_email_placeholder: "Введите ваш email",
        form_phone_label: "Телефон",
        form_phone_placeholder: "Введите номер телефона",
        form_company_label: "Компания / проект",
        form_company_placeholder: "Название компании или проекта",
        form_idea_label: "Какую задачу, workflow или идею вы хотели бы исследовать?",
        form_idea_placeholder: "Опишите идею или задачу (необязательно)",
        form_participation_label: "Тип участия",
        form_type_entrepreneur: "Предприниматель",
        form_type_patron: "Патрон",
        form_consent: "Я согласен/согласна, чтобы со мной связались по поводу Hybrid Hackathon.",
        form_submit: "Подать заявку",
        form_success: "Спасибо. Ваша заявка получена. Мы скоро свяжемся с вами.",

        // Validation Errors
        error_required: "Это поле обязательно",
        error_email: "Введите корректный email",
        error_consent: "Необходимо согласие на связь",
        error_generic: "Что-то пошло не так. Попробуйте еще раз.",

        // Footer
        footer_text: "Hybrid Lab · 11–12 июля"
    }
};

/**
 * Get the current language from localStorage or detect from browser
 */
function getCurrentLanguage() {
    const stored = localStorage.getItem('hybrid_lab_lang');
    if (stored && (stored === 'en' || stored === 'ru')) {
        return stored;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('ru')) {
        return 'ru';
    }
    
    return 'en';
}

/**
 * Set the current language and save to localStorage
 */
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ru') {
        lang = 'en';
    }
    localStorage.setItem('hybrid_lab_lang', lang);
    return lang;
}

/**
 * Get a translation for a key
 */
function t(key, lang) {
    lang = lang || getCurrentLanguage();
    return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || key;
}

/**
 * Apply translations to all elements with data-i18n attributes
 */
function applyTranslations(lang) {
    lang = lang || getCurrentLanguage();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key, lang);
        if (translation) {
            el.textContent = translation;
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = t(key, lang);
        if (translation) {
            el.placeholder = translation;
        }
    });
    
    document.querySelectorAll('input[name="language"]').forEach(el => {
        el.value = lang;
    });
    
    document.documentElement.lang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Initialize language switcher
 */
function initLanguageSwitcher() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
    applyTranslations(currentLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            applyTranslations(lang);
        });
    });
}

window.i18n = {
    getCurrentLanguage,
    setLanguage,
    t,
    applyTranslations,
    initLanguageSwitcher,
    TRANSLATIONS
};
