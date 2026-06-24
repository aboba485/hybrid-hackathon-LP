/**
 * Hybrid Lab - Internationalization (i18n) Module
 * Supports English (en) and Russian (ru)
 */

const TRANSLATIONS = {
    en: {
        // Hero Section
        hero_badge: "Open Beta. Early Access · July 11–12",
        hero_title: "Build what you wanted to build with AI — but were afraid to start",
        hero_subtitle: "While you build a prototype that matters to your business side by side with super-smart AI-native teenagers, you personally cross several thresholds of AI mastery — in turbo mode, in just 1.5 days.",
        hero_meta: "4–6 entrepreneurs · AI-native teenagers · one room · real projects · 1.5 days and one non-stop building night",
        hero_facts: "📅 July 11–12 · 📍 Limassol · 👥 only 6 seats · ⏱ 1.5 days · 💶 €250",
        cta_apply: "Apply as an Entrepreneur",
        cta_chat: "✈ Ask a question on Telegram",
        cta_how: "How it works",
        hero_sticker: "AI without the hype. Just work.",

        // Partners
        partners_title: "Partners & Support",
        partners_subtitle: "The project is supported by partners who help create the environment, prize pool, food, and event infrastructure.",
        dodo_label: "Official provider and sponsor of the project",
        metagames_label: "Project partner",
        hybridlab_label: "Organizer and project lab",

        // Core Proposition - Effect of the Monkey
        core_title: "Turbo learning through imitation and shared work",
        core_text1: "The fastest way to learn a new mode of work is to be next to people for whom it already feels natural. You will watch, try, argue, assign tasks, fail, refine, and build again — together with teenagers who already live inside AI tools.",
        core_text2: "This is not a lecture or a webinar. It is physical co-working where entrepreneurial intent meets AI-native speed.",

        // AI Literacy Section
        ai_title: "AI Turbo Mode Without the Pafos",
        ai_subtitle: "A super crash course in AI literacy: a brain-opening shift in how you work with AI and get x10 results.",
        ai_text: "In two days, you may move through a learning curve that usually takes months. Not through lectures, but through shared work side by side with students for whom search, coding, prototyping, and AI iteration are already a natural environment.",
        ai_bullet1: "see and touch real custom AI workflows in action",
        ai_bullet2: "cross practical thresholds and dead ends in AI harnessing and coding",
        ai_bullet3: "understand what AI can actually do for your business",
        ai_bullet4: "leave with a huge amount of new experience, insights, and an IQ-140 energy charge",

        // Prototype Section
        proto_title: "A prototype for a project that matters to you",
        proto_text: "During the sprint, you can form a team and turn your challenge into a prototype, demo, internal tool, or first working version.",
        proto_bullet1: "build around your own business request",
        proto_bullet2: "test an idea quickly",
        proto_bullet3: "answer hard questions and get direct feedback",
        proto_bullet4: "see how AI-native teenagers approach complexity",
        proto_bullet5: "leave with a concrete next step",

        // Talent Core Section
        talent_title: "The talent core",
        talent_intro: "For these 1.5 days and one non-stop building night, your partners in the adventure will include a selected group of young builders: people you can learn AI from — and people you can teach project management, communication, and entrepreneurial thinking to.",
        talent_clarification: "This is a collective portrait of the group, not a claim that every participant has every achievement.",
        talent1: "students from IMS, the strongest mathematics school in Cyprus",
        talent2: "winners of Cyprus mathematics olympiads",
        talent3: "students with top Computer Science results in Europe",
        talent4: "teenagers with IQ levels found in roughly the top 0.05%",
        talent5: "nerds, Sheldons, super-geeks, neurodiverse and experiment-ready students with real AI project experience",
        talent6: "a young team that designed and 3D-printed a robotic arm prototype for chemical experiments with computer vision",
        talent7: "creators of working workflows for medium and large businesses and their owners, saving hundreds of hours and tens of thousands of euros per month",

        // Format Section
        format_title: "Format",
        format_text: "4–6 entrepreneurs and managers bring challenges they genuinely care about to a unique group of super-teenagers. In one physical space, they spend 1.5 days building real projects of any complexity. Judges and mentors help on request and award the best project.",
        format_extra: "We do not limit the theme. We encourage creative exploration: try radical experiments in the strongest environment of the first native-AI generation.",

        // How It Works Section
        how_title: "How the sprint works",
        step1_title: "Bring a challenge",
        step1_text: "Come with a business idea, workflow, pain point, product hypothesis, or question for an innovation project.",
        step2_title: "Meet the talent core",
        step2_text: "Entrepreneurs and young builders meet, discuss possible directions, and choose who they want to work with.",
        step3_title: "Build live",
        step3_text: "Teams work in the same physical space, using AI, code, research, and fast prototyping.",
        step4_title: "Present to the jury",
        step4_text: "Final projects are presented to the jury, and the winning team receives the prize.",

        // What Can Be Prototyped
        build_title: "What can be prototyped?",
        build1: "AI assistant for internal operations",
        build2: "workflow automation",
        build3: "your boldest business idea",
        build4: "the project you were afraid to start",
        build5: "customer support or sales assistant",
        build6: "analytics dashboard",
        build7: "document processing tool",
        build8: "educational or training product",
        build9: "computer vision prototype",
        build10: "internal knowledge base",
        build11: "MVP for a new product idea",
        build_note: "The best projects do not start from abstract ideas. They start from real business tension.",

        // Disclaimer Section
        disclaimer_title: "No fake guarantees. Real conditions for acceleration.",
        disclaimer_text: "Hybrid Hackathon does not guarantee a finished product. By default, we recommend forming projects around entrepreneurs' real requests, but teams emerge organically: entrepreneurs and young builders choose each other after meeting, discussing ideas, and sensing where the strongest collaboration can happen.",

        // What We Need From You
        need_title: "What we need from you",
        need1: "a bold idea for a program, bot, app, or business-process automation you wanted but did not dare to build",
        need2: "full-time Saturday commitment and participation in the winning team award ceremony on Sunday, 14:00–16:00",
        need3: "250 € contribution: it goes fully into prizes, venue, and food",
        need4: "an open mind, a mentor's heart, and entrepreneurial skills to multiply your idea by creative potential, AI mastery, and IQ",

        // Contribution Section
        contribution_title: "Contribution model",
        contribution_entrepreneur: "Entrepreneur",
        contribution_patron: "Patron",
        contribution_note: "100% of contributions go into the event: prizes, venue, and food. The winning team receives the prize. Patrons help strengthen the event and increase the final prize pool.",

        // Jury and Mentors
        jury_title: "Jury and mentors",
        jury_kirill_name: "Kirill Krinkin",
        jury_kirill_desc: "JetBrains Research · AI & robotics · Computer Science Center lecturer.",
        jury_evgeny_name: "Evgeny Tarasov",
        jury_evgeny_desc: "Founder of Basium — a platform for launching online businesses.",
        jury_claude_name: "Claude.ai",
        jury_claude_desc: "Co-host of the legendary \"AI Turbo Mode Without the Pafos\".",

        // Project Moderators
        moderators_title: "Project moderators",
        mod_timur_name: "Timur Atnashev, PhD",
        mod_timur_desc: "Co-founder of MetaGames Lab · business tracker.",
        mod_ekaterina_name: "Ekaterina Astafieva",
        mod_ekaterina_desc: "Leading GR specialist · InDrive / La Roche.",

        // Form
        form_title: "Apply as an Entrepreneur",
        form_note: "Only 6 seats for entrepreneurs. Applying isn't a payment — we'll first meet and get to know each other.",
        form_chat_prefix: "Not ready to apply yet?",
        form_chat_link: "Ask a question on Telegram →",
        form_name_label: "Full name",
        form_name_placeholder: "Enter your full name",
        form_email_label: "Email",
        form_email_placeholder: "Enter your email",
        form_phone_label: "Telegram / Phone",
        form_phone_placeholder: "@username or phone number",
        form_company_label: "Company / project",
        form_company_placeholder: "Enter your company or project name",
        form_idea_label: "What challenge, workflow, program, bot, app, or business idea matters to you?",
        form_idea_placeholder: "Describe your idea or challenge",
        form_participation_label: "Participation type",
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
        hero_badge: "Open Beta. Early Access · 11–12 июля",
        hero_title: "Сделайте то, что ХОТЕЛИ, но боялись сделать с ИИ",
        hero_subtitle: "Пока вы вместе с супер-умными AI-native подростками собираете прототип нужного вам проекта, вы сами в турбо-режиме проходите несколько порогов освоения ИИ — всего за полтора дня.",
        hero_meta: "4–6 предпринимателей · AI-native подростки · одна комната · реальные проекты · полтора дня и ночь non-stop сборки",
        hero_facts: "📅 11–12 июля · 📍 Лимассол · 👥 всего 6 мест · ⏱ 1.5 дня · 💶 250 €",
        cta_apply: "Подать заявку предпринимателя",
        cta_chat: "✈ Задать вопрос в Telegram",
        cta_how: "Как это работает",
        hero_sticker: "ИИ без пафоса. Только работа.",

        // Partners
        partners_title: "Партнеры и поддержка",
        partners_subtitle: "Проект проходит при поддержке партнеров, которые помогают собрать среду, призовой фонд, еду и инфраструктуру события.",
        dodo_label: "Официальный провайдер и спонсор проекта",
        metagames_label: "Партнер проекта",
        hybridlab_label: "Организатор и лаборатория проекта",

        // Core Proposition - Effect of the Monkey
        core_title: "Турбо-обучение через «эффект обезьяны»",
        core_text1: "Самый быстрый способ освоить новый способ работы — оказаться рядом с теми, для кого он уже естественен. Вы будете смотреть, пробовать, спорить, ставить задачи, ошибаться, уточнять и снова собирать — вместе с подростками, которые уже живут внутри AI-инструментов.",
        core_text2: "Это не лекция и не вебинар. Это физическая совместная работа, где предпринимательская задача встречается с AI-native скоростью.",

        // AI Literacy Section
        ai_title: "Турбо режим ИИ (без) пафоса",
        ai_subtitle: "Супер crash course AI-грамотности: взрыв мозга и гарантированное изменение отношения к тому, как работать с AI и получать результаты x10.",
        ai_text: "За два дня вы можете пройти участок кривой обучения, на который обычно уходят месяцы. Не через лекции, а через совместную работу бок о бок со школьниками, для которых поиск, кодинг, прототипирование и итерации с ИИ уже стали естественной средой.",
        ai_bullet1: "увидеть и потрогать руками реальные авторские AI-workflows в действии",
        ai_bullet2: "пройти самому практические пороги и тупики в harnessing и coding с ИИ",
        ai_bullet3: "понять, что ИИ реально может дать вашему бизнесу",
        ai_bullet4: "уйти с вагоном нового опыта, инсайтами и зарядом IQ 140",

        // Prototype Section
        proto_title: "Прототип проекта, который важен именно вам",
        proto_text: "Во время sprint вы сможете сформировать команду и превратить свою задачу в прототип, демо, внутренний инструмент или первую рабочую версию.",
        proto_bullet1: "строить вокруг собственного бизнес-запроса",
        proto_bullet2: "быстро проверить идею",
        proto_bullet3: "ответить на вопросы и получить жесткую обратную связь по проекту",
        proto_bullet4: "увидеть, как AI-native подростки подходят к сложности",
        proto_bullet5: "уйти с конкретным следующим шагом",

        // Talent Core Section
        talent_title: "Ядро талантов",
        talent_intro: "Среди ваших партнеров по приключению на эти полтора дня и ночь non-stop программирования — отборные юные билдеры, у которых вы сможете учиться ИИ, и которых вы сами сможете научить управлению проектами, коммуникации и предпринимательскому мышлению.",
        talent_clarification: "Это коллективный портрет группы, а не утверждение, что каждый участник обладает всеми достижениями сразу.",
        talent1: "ученики IMS, самой сильной математической школы Кипра",
        talent2: "победители математических олимпиад Кипра",
        talent3: "школьники с лучшими результатами по Computer Science в Европе",
        talent4: "подростки с IQ уровня, который встречается у топ 0,05% людей",
        talent5: "nerds, Шелдоны, супер-ботаники, нейроразнообразные и готовые к эксперименту школьники с реальным опытом AI-проектов",
        talent6: "команда юных создателей прототипа роботизированной руки для химических экспериментов с компьютерным зрением: 3D-печать, программирование, computer vision",
        talent7: "создатели работающих workflows для среднего и крупного бизнеса и их владельцев, экономящих сотни часов и десятки тысяч евро в месяц",

        // Format Section
        format_title: "Формат",
        format_text: "4–6 предпринимателей и управленцев приходят с дорогими их сердцу задачами к уникальной сборной супер-подростков. В одном помещении они полтора дня делают реальные проекты любой сложности. Жюри и менторы помогают по запросу и награждают лучший проект.",
        format_extra: "Мы не ставим ограничений в выборе темы и поощряем творческий поиск: попробуйте радикальные эксперименты в сильном окружении первого native-AI поколения.",

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

        // What Can Be Prototyped
        build_title: "Что можно прототипировать?",
        build1: "AI-ассистент для внутренних операций",
        build2: "автоматизацию workflow",
        build3: "вашу самую крутую бизнес-идею",
        build4: "проект, за который вы побоялись взяться",
        build5: "ассистент для поддержки клиентов или продаж",
        build6: "аналитический dashboard",
        build7: "инструмент обработки документов",
        build8: "образовательный или training-продукт",
        build9: "computer vision prototype",
        build10: "внутреннюю базу знаний",
        build11: "MVP новой продуктовой идеи",
        build_note: "Лучшие проекты начинаются не с абстрактной идеи, а с реального напряжения в бизнесе.",

        // Disclaimer Section
        disclaimer_title: "Без фальшивых гарантий. С реальными условиями для ускорения.",
        disclaimer_text: "Hybrid Hackathon не гарантирует готовый продукт. По умолчанию мы рекомендуем формировать проекты вокруг реальных запросов предпринимателей, но команды складываются органично: предприниматели и молодые билдеры выбирают друг друга после знакомства, обсуждения идей и понимания, где может получиться самая сильная совместная работа.",

        // What We Need From You
        need_title: "Что нужно от вас?",
        need1: "крутая и интересная вам идея для программы, бота, приложения или автоматизации бизнес-процесса, которую вы хотели, но не решались сделать",
        need2: "коммитмент на субботу full-time и участие в награждении команды победителей в воскресенье в 14:00–16:00",
        need3: "взнос 250 €: он полностью идет в призовой фонд, аренду и еду",
        need4: "открытый ум, доброе сердце наставника и предпринимательские навыки, чтобы умножить вашу идею на творческий потенциал, AI-мастерство и IQ",

        // Contribution Section
        contribution_title: "Модель участия",
        contribution_entrepreneur: "Предприниматель",
        contribution_patron: "Патрон",
        contribution_note: "100% взносов идут в событие: призы, аренду и еду. Приз получает вся команда победителей. Патроны помогают усилить событие и увеличить итоговый призовой фонд.",

        // Jury and Mentors
        jury_title: "Жюри и менторы",
        jury_kirill_name: "Кирилл Кринкин",
        jury_kirill_desc: "JetBrains Research · ИИ и робототехника · преподаватель Computer Science Center.",
        jury_evgeny_name: "Евгений Тарасов",
        jury_evgeny_desc: "Основатель Basium — платформы для запуска онлайн-бизнеса.",
        jury_claude_name: "Claude.ai",
        jury_claude_desc: "Со-ведущий легендарного «Турбо режим ИИ (без) пафоса».",

        // Project Moderators
        moderators_title: "Модераторы проекта",
        mod_timur_name: "Тимур Атнашев, PhD",
        mod_timur_desc: "Со-основатель MetaGames Lab · бизнес-трекер.",
        mod_ekaterina_name: "Екатерина Астафьева",
        mod_ekaterina_desc: "Ведущий специалист по GR · InDrive / La Roche.",

        // Form
        form_title: "Подать заявку предпринимателя",
        form_note: "Всего 6 мест для предпринимателей. Заявка — это не оплата: сначала познакомимся и созвонимся.",
        form_chat_prefix: "Пока не готовы подавать заявку?",
        form_chat_link: "Задать вопрос в Telegram →",
        form_name_label: "Имя и фамилия",
        form_name_placeholder: "Введите ваше полное имя",
        form_email_label: "Email",
        form_email_placeholder: "Введите ваш email",
        form_phone_label: "Telegram / Телефон",
        form_phone_placeholder: "@username или номер телефона",
        form_company_label: "Компания / проект",
        form_company_placeholder: "Название компании или проекта",
        form_idea_label: "Какая задача, workflow, программа, бот, приложение или бизнес-идея вам важна?",
        form_idea_placeholder: "Опишите идею или задачу",
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
    if (browserLang && browserLang.toLowerCase().startsWith('en')) {
        return 'en';
    }

    // Russian is the default language
    return 'ru';
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
