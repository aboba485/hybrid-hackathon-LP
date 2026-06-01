/**
 * Hybrid Hackathon - Internationalization (i18n) Module
 * Supports English (en) and Russian (ru)
 */

const TRANSLATIONS = {
    en: {
        // Hero Section
        hero_badge: "Early Access Beta",
        hero_date: "July 6–7",
        hero_title: "Entrepreneurs meet young AI builders. Two days. One real project.",
        hero_subtitle: "Hybrid Hackathon brings together 5 entrepreneurs and 15 gifted young builders in math, programming, and AI. Teams form organically, build fast, and present working prototypes to judges.",
        hero_details: "July 6–7 · 1.5-day experimental format · Limited access",
        entrepreneur_cta: "I'm an Entrepreneur",
        student_cta: "I'm a Student",
        orbit_entrepreneurs: "5 Entrepreneurs",
        orbit_students: "15 Young Builders",

        // About Section
        about_title: "A hybrid lab for business ideas and young technical talent",
        about_subtitle: "Hybrid Hackathon is a short intensive where entrepreneurs and young technical builders meet, form teams, build prototypes, and present results.",
        about_card1_title: "Meet",
        about_card1_text: "Entrepreneurs and young builders meet, pitch themselves, and explore possible collaborations.",
        about_card2_title: "Choose",
        about_card2_text: "Teams form naturally: students choose ideas, entrepreneurs choose builders.",
        about_card3_title: "Build",
        about_card3_text: "Teams spend 1.5 days turning ideas into prototypes, demos, or validated concepts.",
        about_card4_title: "Present",
        about_card4_text: "Final projects are presented to judges, mentors, and the community.",

        // Participants Section
        participants_title: "Participants",
        students_heading: "For gifted students",
        students_desc: "We are looking for unusually strong young builders: students with high IQ, olympiad background, programming experience, AI curiosity, or the kind of technical intuition that usually appears much later.",
        entrepreneurs_heading: "For entrepreneurs",
        entrepreneurs_desc: "Entrepreneurs come with real ideas, problems, or opportunities. The goal is not to buy a guaranteed product, but to enter a high-energy experimental environment where young builders can surprise you.",
        
        // Tags
        tag_iq: "high IQ",
        tag_olympiads: "olympiads",
        tag_ims: "IMS / advanced math",
        tag_coding: "coding projects",
        tag_ai: "AI experiments",
        tag_learning: "fast learning",

        // Benefits
        benefits_title: "Benefits",
        student_benefit1: "Work on a real business problem",
        student_benefit2: "Join a strong team",
        student_benefit3: "Build a prototype fast",
        student_benefit4: "Meet entrepreneurs and mentors",
        student_benefit5: "Compete for the prize fund",
        student_benefit6: "Get a serious portfolio project",
        entrepreneur_benefit1: "Access to young technical talent",
        entrepreneur_benefit2: "1.5-day sprint around your idea",
        entrepreneur_benefit3: "Possibility to test a concept quickly",
        entrepreneur_benefit4: "Fresh thinking from strong students",
        entrepreneur_benefit5: "Chance to identify future interns or collaborators",
        entrepreneur_benefit6: "Participation in a curated experimental format",

        // Prize Fund Section
        prize_title: "Prize fund grows with entrepreneur participation",
        prize_subtitle: "The prize fund is directly linked to the number of entrepreneur contributions. The more confirmed entrepreneur participants, the larger the final prize pool.",
        prize_contribution: "Entrepreneur contribution",
        prize_fund_label: "Prize fund",
        prize_food_label: "Food & event costs",
        prize_example_title: "With 5 entrepreneurs:",
        prize_fund_result: "≈ 1,000 € prize fund",
        prize_food_result: "≈ 250 € food & event support",
        prize_scale_title: "Prize fund scale",

        // Jury Section
        jury_title: "Jury",
        jury_subtitle: "Judges will be announced soon.",
        jury_note: "Final projects will be evaluated by entrepreneurs, product thinkers, and technology experts.",
        jury_placeholder1: "Judge #1",
        jury_placeholder2: "Judge #2",
        jury_placeholder3: "Judge #3",
        jury_coming_soon: "Coming soon",

        // Mentors Section
        mentors_title: "Mentors & experts",
        mentors_subtitle: "Mentors and experts will help teams sharpen ideas, validate assumptions, and prepare final presentations.",
        mentors_placeholder: "Mentor lineup coming soon",

        // Entrepreneur Form
        entrepreneur_form_title: "Apply as an Entrepreneur",
        form_contribution_label: "Participation contribution:",
        entrepreneur_form_desc: "This contribution supports the prize fund, food, and basic event costs. Sponsors may optionally contribute more.",
        entrepreneur_submit_btn: "Apply as Entrepreneur",
        entrepreneur_success: "Thank you. Your entrepreneur application has been received. We will contact you soon.",

        // Student Form
        student_form_title: "Apply as a Student",
        student_submit_btn: "Apply as Student",
        student_success: "Thank you. Your student application has been received. We will contact you soon.",

        // Form Fields
        form_full_name: "Full name",
        form_full_name_placeholder: "Enter your full name",
        form_email: "Email",
        form_email_placeholder: "Enter your email",
        form_phone: "Phone",
        form_phone_placeholder: "Enter your phone number",
        form_company: "Company / project",
        form_company_placeholder: "Enter your company or project name",
        form_idea: "Short description of idea or business challenge",
        form_idea_placeholder: "Describe your idea or challenge (optional)",
        form_sponsor_checkbox: "I want to become a sponsor",
        form_sponsor_amount: "Additional sponsor contribution (€)",
        form_sponsor_amount_placeholder: "Enter amount",
        form_age_grade: "Age / grade",
        form_age_grade_placeholder: "e.g., 16 years old / 10th grade",
        form_school: "School / university",
        form_school_placeholder: "Enter your school or university",
        form_strengths: "Strong sides",
        strength_math: "Mathematics",
        strength_ai: "AI",
        strength_programming: "Programming",
        form_background: "Tell us briefly what you have built, studied, or competed in",
        form_background_placeholder: "Projects, competitions, studies... (optional)",

        // Validation Errors
        error_required: "This field is required",
        error_email: "Please enter a valid email",
        error_strengths: "Please select at least one strength",
        error_generic: "Something went wrong. Please try again.",

        // Footer
        footer_text: "Hybrid Hackathon · July 6–7 · Early Access Beta",

        // Mobile CTA
        mobile_entrepreneur: "Entrepreneur",
        mobile_student: "Student"
    },

    ru: {
        // Hero Section
        hero_badge: "Early Access Beta",
        hero_date: "6–7 июля",
        hero_title: "Предприниматели встречают юных AI-билдеров. Два дня. Один реальный проект.",
        hero_subtitle: "Hybrid Hackathon объединяет 5 предпринимателей и 15 одаренных школьников и студентов с сильными навыками в математике, программировании и ИИ. Команды формируются органично, быстро собирают проекты и представляют рабочие прототипы жюри.",
        hero_details: "6–7 июля · экспериментальный формат на 1,5 дня · ограниченный набор",
        entrepreneur_cta: "Я предприниматель",
        student_cta: "Я школьник / студент",
        orbit_entrepreneurs: "5 предпринимателей",
        orbit_students: "15 юных билдеров",

        // About Section
        about_title: "Гибридная лаборатория для бизнес-идей и юных технических талантов",
        about_subtitle: "Hybrid Hackathon — это короткий интенсив, где предприниматели и молодые технические таланты встречаются, формируют команды, собирают прототипы и презентуют результат.",
        about_card1_title: "Встреча",
        about_card1_text: "Предприниматели и участники знакомятся, представляют себя и обсуждают возможные идеи.",
        about_card2_title: "Выбор",
        about_card2_text: "Команды формируются естественно: школьники выбирают интересные идеи, предприниматели — сильных участников.",
        about_card3_title: "Сборка",
        about_card3_text: "За 1,5 дня команды превращают идеи в прототипы, демо или проверенные концепции.",
        about_card4_title: "Презентация",
        about_card4_text: "Финальные проекты представляются жюри, менторам и сообществу.",

        // Participants Section
        participants_title: "Участники",
        students_heading: "Для одаренных школьников и студентов",
        students_desc: "Мы ищем необычно сильных молодых билдеров: ребят с высоким IQ, олимпиадным опытом, навыками программирования, интересом к ИИ или технической интуицией, которая обычно появляется гораздо позже.",
        entrepreneurs_heading: "Для предпринимателей",
        entrepreneurs_desc: "Предприниматели приходят с реальными идеями, задачами или возможностями. Цель — не купить гарантированный продукт, а попасть в энергичную экспериментальную среду, где сильные молодые участники могут удивить.",

        // Tags
        tag_iq: "высокий IQ",
        tag_olympiads: "олимпиады",
        tag_ims: "IMS / углубленная математика",
        tag_coding: "проекты по программированию",
        tag_ai: "эксперименты с ИИ",
        tag_learning: "быстрое обучение",

        // Benefits
        benefits_title: "Преимущества",
        student_benefit1: "Работа над реальной бизнес-задачей",
        student_benefit2: "Сильная команда",
        student_benefit3: "Быстрый прототип за короткое время",
        student_benefit4: "Знакомство с предпринимателями и менторами",
        student_benefit5: "Участие в борьбе за призовой фонд",
        student_benefit6: "Серьезный проект для портфолио",
        entrepreneur_benefit1: "Доступ к молодым техническим талантам",
        entrepreneur_benefit2: "1,5-дневный спринт вокруг вашей идеи",
        entrepreneur_benefit3: "Быстрый тест концепции",
        entrepreneur_benefit4: "Свежий взгляд от сильных школьников и студентов",
        entrepreneur_benefit5: "Шанс найти будущих стажеров или помощников",
        entrepreneur_benefit6: "Участие в кураторском экспериментальном формате",

        // Prize Fund Section
        prize_title: "Призовой фонд растет вместе с числом предпринимателей",
        prize_subtitle: "Призовой фонд напрямую зависит от количества подтвержденных предпринимательских взносов. Чем больше предпринимателей участвует, тем больше итоговый призовой фонд.",
        prize_contribution: "Взнос предпринимателя",
        prize_fund_label: "Призовой фонд",
        prize_food_label: "Еда и расходы",
        prize_example_title: "Если участвуют 5 предпринимателей:",
        prize_fund_result: "≈ 1 000 € призовой фонд",
        prize_food_result: "≈ 250 € еда и поддержка события",
        prize_scale_title: "Шкала призового фонда",

        // Jury Section
        jury_title: "Жюри",
        jury_subtitle: "Состав жюри будет объявлен скоро.",
        jury_note: "Финальные проекты будут оценивать предприниматели, продуктовые эксперты и специалисты в области технологий.",
        jury_placeholder1: "Жюри #1",
        jury_placeholder2: "Жюри #2",
        jury_placeholder3: "Жюри #3",
        jury_coming_soon: "Скоро",

        // Mentors Section
        mentors_title: "Менторы и эксперты",
        mentors_subtitle: "Менторы и эксперты помогут командам уточнить идеи, проверить гипотезы и подготовить финальные презентации.",
        mentors_placeholder: "Состав менторов скоро",

        // Entrepreneur Form
        entrepreneur_form_title: "Заявка для предпринимателя",
        form_contribution_label: "Участие:",
        entrepreneur_form_desc: "Этот взнос поддерживает призовой фонд, питание и базовые расходы события. Спонсоры могут дополнительно увеличить вклад.",
        entrepreneur_submit_btn: "Подать заявку как предприниматель",
        entrepreneur_success: "Спасибо. Ваша заявка предпринимателя получена. Мы скоро свяжемся с вами.",

        // Student Form
        student_form_title: "Заявка для школьника / студента",
        student_submit_btn: "Подать заявку как школьник / студент",
        student_success: "Спасибо. Ваша заявка школьника / студента получена. Мы скоро свяжемся с вами.",

        // Form Fields
        form_full_name: "Имя и фамилия",
        form_full_name_placeholder: "Введите ваше полное имя",
        form_email: "Email",
        form_email_placeholder: "Введите ваш email",
        form_phone: "Телефон",
        form_phone_placeholder: "Введите номер телефона",
        form_company: "Компания / проект",
        form_company_placeholder: "Название компании или проекта",
        form_idea: "Кратко опишите идею или бизнес-задачу",
        form_idea_placeholder: "Опишите идею или задачу (необязательно)",
        form_sponsor_checkbox: "Хочу стать спонсором",
        form_sponsor_amount: "Дополнительный спонсорский вклад (€)",
        form_sponsor_amount_placeholder: "Введите сумму",
        form_age_grade: "Возраст / класс",
        form_age_grade_placeholder: "напр., 16 лет / 10 класс",
        form_school: "Школа / вуз",
        form_school_placeholder: "Введите название школы или вуза",
        form_strengths: "Сильные стороны",
        strength_math: "Математика",
        strength_ai: "ИИ",
        strength_programming: "Программирование",
        form_background: "Кратко расскажите, что вы уже строили, изучали или в каких соревнованиях участвовали",
        form_background_placeholder: "Проекты, соревнования, учеба... (необязательно)",

        // Validation Errors
        error_required: "Это поле обязательно",
        error_email: "Введите корректный email",
        error_strengths: "Выберите хотя бы одну сильную сторону",
        error_generic: "Что-то пошло не так. Попробуйте еще раз.",

        // Footer
        footer_text: "Hybrid Hackathon · 6–7 июля · Early Access Beta",

        // Mobile CTA
        mobile_entrepreneur: "Предприниматель",
        mobile_student: "Школьник"
    }
};

/**
 * Get the current language from localStorage or detect from browser
 */
function getCurrentLanguage() {
    const stored = localStorage.getItem('hybrid_hackathon_lang');
    if (stored && (stored === 'en' || stored === 'ru')) {
        return stored;
    }
    
    // Detect browser language
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
    localStorage.setItem('hybrid_hackathon_lang', lang);
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
    
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key, lang);
        if (translation) {
            el.textContent = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = t(key, lang);
        if (translation) {
            el.placeholder = translation;
        }
    });
    
    // Update hidden language fields in forms
    document.querySelectorAll('input[name="language"]').forEach(el => {
        el.value = lang;
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language switcher buttons
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
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            applyTranslations(lang);
        });
    });
}

// Export for use in other modules
window.i18n = {
    getCurrentLanguage,
    setLanguage,
    t,
    applyTranslations,
    initLanguageSwitcher,
    TRANSLATIONS
};
