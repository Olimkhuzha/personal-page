/*
 * MercyMed website content — the ONE file staff edit to update the site.
 *
 * - Change text, team members, contact details and the WhatsApp number here.
 * - Every text has three versions: en (English), ru (Russian), ky (Kyrgyz).
 * - Set a value to null to show the "awaiting clinic" placeholder instead.
 * - A later admin panel can read and write this same structure.
 *
 * Sources: client questionnaire (Oct 2026), client presentation slides,
 * Q&A with Dr. Lukas, MercyMed logo guide. Nothing here is invented:
 * anything the clinic has not provided yet is null.
 */
window.SITE_CONTENT = {
  settings: {
    // Placeholder until MercyMed confirms the receptionist's WhatsApp number.
    whatsappNumber: "996000000000",
    whatsappIsPlaceholder: true,
    instagramUrl: null,
    address: null,
    openingHours: null,
    phone: null,
    email: null,
    prices: null
  },

  team: [
    {
      name: "Mahabat Alieva",
      photo: "assets/team/mahabat-alieva.jpg",
      photoFocus: "75% 20%",
      role: { en: "Director / Doula", ru: "Директор / доула", ky: "Директор / доула" },
      bio: {
        en: "Nurse from Kyrgyzstan who started MercyMed's work together with Dr. Jonathan over ten years ago. Certified doula supporting families through pregnancy, birth and after birth.",
        ru: "Медсестра из Кыргызстана, вместе с доктором Джонатаном начавшая работу MercyMed более десяти лет назад. Сертифицированная доула: сопровождает семьи во время беременности, родов и после них.",
        ky: "Кыргызстандык медайым, MercyMed ишин доктор Жонатан менен бирге он жылдан ашык мурун баштаган. Сертификатталган доула: үй-бүлөлөрдү кош бойлуулук, төрөт жана төрөттөн кийинки мезгилде коштойт."
      }
    },
    {
      name: "Jonathan Williams",
      photo: "assets/team/jonathan-williams.jpg",
      role: { en: "Chief doctor / Pediatrics", ru: "Главный врач / педиатрия", ky: "Башкы дарыгер / педиатрия" },
      bio: {
        en: "Chief doctor and pediatrician. Started MercyMed's mobile clinic work together with Mahabat over ten years ago.",
        ru: "Главный врач и педиатр. Более десяти лет назад вместе с Махабат начал выездные клиники MercyMed.",
        ky: "Башкы дарыгер жана педиатр. Он жылдан ашык мурун Махабат менен бирге MercyMed көчмө клиникаларын баштаган."
      }
    },
    {
      name: "Irina Pak",
      photo: "assets/team/irina-pak.jpg",
      role: { en: "Pediatrics / Family medicine", ru: "Педиатрия / семейная медицина", ky: "Педиатрия / үй-бүлөлүк медицина" },
      bio: {
        en: "Long-standing member of the MercyMed team from Kyrgyzstan.",
        ru: "Давний член команды MercyMed из Кыргызстана.",
        ky: "MercyMed командасынын көптөн бери иштеген кыргызстандык мүчөсү."
      }
    },
    {
      name: "Nasyikat Dononbaeva",
      photo: "assets/team/nasyikat-dononbaeva.jpg",
      role: { en: "Internal medicine / Pulmonology", ru: "Терапия / пульмонология", ky: "Ички оорулар / пульмонология" },
      bio: {
        en: "Long-standing member of the MercyMed team from Kyrgyzstan.",
        ru: "Давний член команды MercyMed из Кыргызстана.",
        ky: "MercyMed командасынын көптөн бери иштеген кыргызстандык мүчөсү."
      }
    },
    {
      name: "Nabat Gasimova",
      photo: "assets/team/nabat-gasimova.jpg",
      role: { en: "Pediatrics / Intensive care", ru: "Педиатрия / интенсивная терапия", ky: "Педиатрия / интенсивдүү терапия" },
      bio: {
        en: "Long-standing member of the MercyMed team from Kyrgyzstan.",
        ru: "Давний член команды MercyMed из Кыргызстана.",
        ky: "MercyMed командасынын көптөн бери иштеген кыргызстандык мүчөсү."
      }
    },
    {
      name: "Nancy Yau",
      photo: "assets/team/nancy-yau.jpg",
      role: { en: "Pediatrics", ru: "Педиатрия", ky: "Педиатрия" },
      bio: {
        en: "Pediatrician on the international team. Also consults in Chinese.",
        ru: "Педиатр из международной команды. Также консультирует на китайском языке.",
        ky: "Эл аралык командадагы педиатр. Кытай тилинде да кеңеш берет."
      }
    },
    {
      name: "Lukas Meyer-Landholt",
      photo: "assets/team/lukas-meyer-landholt.jpg",
      role: { en: "Pediatrics / Oncology", ru: "Педиатрия / онкология", ky: "Педиатрия / онкология" },
      bio: {
        en: "Pediatrician and pediatric oncologist from Switzerland. Also consults in German and French.",
        ru: "Педиатр и детский онколог из Швейцарии. Также консультирует на немецком и французском языках.",
        ky: "Швейцариядан келген педиатр жана балдар онкологу. Немис жана француз тилдеринде да кеңеш берет."
      }
    },
    {
      name: "Madison Smith",
      photo: "assets/team/madison-smith.jpg",
      role: { en: "Physical therapist", ru: "Физиотерапевт", ky: "Физиотерапевт" },
      bio: null
    },
    {
      name: "Simbat Sadyrbaeva",
      photo: "assets/team/simbat-sadyrbaeva.jpg",
      role: { en: "Gynecology", ru: "Гинекология", ky: "Гинекология" },
      bio: null
    },
    {
      name: "Nargiza Islamova",
      photo: "assets/team/nargiza-islamova.jpg", // slide 5 shows the ultrasound machine, not a portrait
      role: { en: "Ultrasound", ru: "УЗИ", ky: "УЗИ" },
      bio: null
    }
  ],

  strings: {
    /* ============================== ENGLISH ============================== */
    en: {
      meta: {
        title: "MercyMed — Evidence-based family medicine in Bishkek",
        description: "Private medical centre in Bishkek: pediatrics, family medicine, gynecology and more. Local and international doctors, consultations in Kyrgyz, Russian, English, Chinese, German and French."
      },
      ui: {
        skip: "Skip to content",
        menu: "Menu",
        language: "Language",
        pending: "awaiting clinic",
        draftBanner: "Website draft for client review. Items marked “awaiting clinic” still need MercyMed's input.",
        translationNote: ""
      },
      nav: {
        about: "About", services: "Services", team: "Team", corporate: "Corporate",
        international: "International", education: "Education", mobile: "Mobile clinics",
        contact: "Contact", cta: "Request appointment"
      },
      hero: {
        eyebrow: "Private medical centre in Bishkek",
        title1: "Evidence-based, international medicine.",
        title2: "Care for the whole family in one place.",
        text: "Children, teenagers, adults and pregnant patients are seen by local and international doctors in Tunguch microdistrict, near Ayu Grand.",
        cta: "Request appointment via WhatsApp",
        secondary: "See our services",
        langsLabel: "Consultations in",
        langs: ["Kyrgyz", "Russian", "English", "Chinese", "German", "French"]
      },
      highlights: [
        { title: "Family-oriented", text: "Adults, children, teenagers and pregnant patients can all be seen in one place." },
        { title: "Evidence-based medicine", text: "We follow evidence-based methods to diagnose and treat all of our patients." },
        { title: "Local and international specialists", text: "Family medicine, pediatrics, gynecology, pulmonology and ultrasound." },
        { title: "Training and skill development", text: "We provide training for doctors and medical students." }
      ],
      about: {
        kicker: "About us",
        title: "High-quality care based on modern medical knowledge",
        lead: "MercyMed is a private medical centre in Bishkek providing high-quality medical care based on modern medical knowledge and international experience.",
        historyTitle: "Our story",
        history: "For over 10 years our team has been running mobile clinics in the regions of Kyrgyzstan. The clinic in Bishkek opened in October 2023 to continue and expand this work: a fixed place for follow-up, a permanent team and our own medical licence.",
        ebmTitle: "What evidence-based medicine means",
        ebm: "Our medical decisions are based on research and international experience, not only on “the way it has always been done”. We try to limit unnecessary investigations and treatments, so patients do not pay for things they do not need.",
        missionTitle: "Our mission",
        mission: "To improve the quality of life of our patients through competent, compassionate and comprehensive medical care.",
        valuesTitle: "Our values",
        values: ["Compassion", "Holistic care", "Integrity", "Trust", "Sustainability"]
      },
      services: {
        kicker: "Medical services",
        title: "What we offer",
        intro: "We are an outpatient clinic: we see patients every day and can give medications and infusions, but we do not keep patients overnight.",
        groups: [
          { title: "Daily consultations", items: ["Pediatrics", "Family medicine", "Internal medicine and pulmonology", "Gynecology", "Physical therapy", "Pregnancy, birth and after birth support"] },
          { title: "Preventive check-ups", items: ["Growth and development check-ups", "Vision screening", "EKG", "Screening for anemia and diabetes", "Laboratory tests", "Check-ups for women and men"] },
          { title: "Medical documents and certificates", items: ["For schools", "For flying and travel/tourism", "For employment", "For insurance"] }
        ],
        extraTitle: "Additional services",
        extra: ["Ultrasound", "EKG", "Vision testing", "Audiometry (hearing test)", "Laboratory on site — 30% discount on all tests for our patients", "Birth preparation courses by our certified doula"],
        extraNote: "Additional services are arranged after a consultation with one of our doctors.",
        pricesLabel: "Prices"
      },
      appointment: {
        kicker: "Appointment",
        title: "Request an appointment",
        text: "Fill in four details and send them to our receptionist on WhatsApp. She will reply with available times and the right doctor for you.",
        firstName: "Name",
        lastName: "Surname",
        dob: "Date of birth",
        phone: "Mobile number",
        phoneHint: "With country code, e.g. +996 …",
        submit: "Continue in WhatsApp",
        privacy: "Your details are not stored on this website. They are only placed into a WhatsApp message that you send yourself.",
        placeholderNote: "Draft: messages go to a placeholder number until MercyMed confirms its WhatsApp number.",
        errRequired: "Please fill in this field.",
        errDob: "Please enter a valid date of birth.",
        errPhone: "Please enter a valid phone number.",
        msgIntro: "Hello MercyMed, I would like to request an appointment.",
        msgName: "Name", msgSurname: "Surname", msgDob: "Date of birth", msgPhone: "Mobile number"
      },
      corporate: {
        kicker: "For organisations",
        title: "For corporate clients",
        text: "Schools, companies and embassies looking for a clinic to work with for regular medical examinations.",
        items: ["Yearly staff check-ups", "Special deals for students", "One clinic for adults and children", "Medical documents and certificates"],
        cta: "Contact us"
      },
      international: {
        kicker: "For international patients",
        title: "Medical care in your language",
        text: "For expats living in Bishkek and for tourists and travellers who need a doctor while they are here.",
        items: ["Consultations and reports in English, Chinese, German and French, as well as Kyrgyz and Russian", "Local and international doctors working together", "Documents for flying, travel and insurance", "Short-term support while you travel"],
        cta: "Request appointment via WhatsApp"
      },
      team: {
        kicker: "Our team",
        title: "The people who will care for you",
        text: "Local and international specialists — and not only doctors.",
        experience: "Experience",
        bioLabel: "Short bio",
        photoNote: "Photos from the clinic presentation — awaiting confirmation.",
        noPhoto: "Photo"
      },
      education: {
        kicker: "Medical education",
        title: "Training the next doctors",
        text: "Training is one of the reasons MercyMed exists. Our local doctors learn from international expertise, and we learn from their knowledge of the local system.",
        items: ["Training in evidence-based medicine for our doctors", "Medical students have stayed with us for several weeks", "We hope to train resident doctors soon"],
        audience: "For hospitals, medical schools, residents and students who would like to work with us.",
        cta: "Contact us"
      },
      mobile: {
        kicker: "Mobile clinics",
        title: "The charitable heart of MercyMed",
        text: "For over 10 years we have travelled to villages and rural areas with less access to medical care, in all regions of Kyrgyzstan.",
        steps: [
          { title: "We are invited", text: "A village, health centre or local community invites us and prepares a place for the clinic." },
          { title: "The team travels", text: "Usually four or five doctors, a nurse, a receptionist and someone for the pharmacy, with a car full of medications." },
          { title: "We see patients", text: "Consultations, medications and recommendations — for one day or for several days." }
        ]
      },
      instagram: {
        title: "Follow us on Instagram",
        text: "Instagram is where we share news, photos and patient stories most often.",
        feedPending: "Instagram feed"
      },
      contact: {
        kicker: "Contact",
        title: "Visit us",
        location: "Location",
        locationValue: "Tunguch microdistrict, Bishkek — near Ayu Grand and Ala-Too University",
        address: "Address",
        hours: "Opening hours",
        phone: "Phone",
        email: "Email",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        cta: "Request appointment via WhatsApp"
      },
      footer: {
        tagline: "Evidence-based, international medicine for the whole family.",
        note: "Website draft by AUCA students — Team 3. Not yet approved by MercyMed."
      }
    },

    /* ============================== RUSSIAN ============================== */
    ru: {
      meta: {
        title: "MercyMed — доказательная семейная медицина в Бишкеке",
        description: "Частный медицинский центр в Бишкеке: педиатрия, семейная медицина, гинекология и другое. Местные и иностранные врачи, консультации на кыргызском, русском, английском, китайском, немецком и французском."
      },
      ui: {
        skip: "Перейти к содержанию",
        menu: "Меню",
        language: "Язык",
        pending: "ожидаем от клиники",
        draftBanner: "Черновик сайта для согласования с клиникой. Пункты с пометкой «ожидаем от клиники» требуют данных от MercyMed.",
        translationNote: "Перевод ожидает проверки сотрудниками MercyMed."
      },
      nav: {
        about: "О нас", services: "Услуги", team: "Команда", corporate: "Организациям",
        international: "Иностранцам", education: "Обучение", mobile: "Выездные клиники",
        contact: "Контакты", cta: "Записаться"
      },
      hero: {
        eyebrow: "Частный медицинский центр в Бишкеке",
        title1: "Доказательная и международная медицина.",
        title2: "Забота обо всей семье в одном месте.",
        text: "Детей, подростков, взрослых и беременных принимают местные и иностранные врачи в микрорайоне Тунгуч, рядом с Ayu Grand.",
        cta: "Записаться через WhatsApp",
        secondary: "Наши услуги",
        langsLabel: "Консультации на языках:",
        langs: ["кыргызский", "русский", "английский", "китайский", "немецкий", "французский"]
      },
      highlights: [
        { title: "Для всей семьи", text: "Взрослые, дети, подростки и беременные могут получить помощь в одном месте." },
        { title: "Доказательная медицина", text: "Мы диагностируем и лечим всех пациентов по методам доказательной медицины." },
        { title: "Местные и иностранные специалисты", text: "Семейная медицина, педиатрия, гинекология, пульмонология и УЗИ." },
        { title: "Обучение и развитие", text: "Мы обучаем врачей и студентов-медиков." }
      ],
      about: {
        kicker: "О нас",
        title: "Качественная помощь на основе современных медицинских знаний",
        lead: "MercyMed — частный медицинский центр в Бишкеке. Мы оказываем качественную медицинскую помощь на основе современных медицинских знаний и международного опыта.",
        historyTitle: "Наша история",
        history: "Более 10 лет наша команда проводит выездные клиники в регионах Кыргызстана. Клиника в Бишкеке открылась в октябре 2023 года, чтобы продолжить и расширить эту работу: постоянное место для повторных приёмов, постоянная команда и собственная медицинская лицензия.",
        ebmTitle: "Что такое доказательная медицина",
        ebm: "Наши медицинские решения основаны на исследованиях и международном опыте, а не только на том, «как всегда делали». Мы стараемся избегать лишних обследований и лечения, чтобы пациенты не платили за то, что им не нужно.",
        missionTitle: "Наша миссия",
        mission: "Улучшать качество жизни пациентов с помощью компетентной, сострадательной и всесторонней медицинской помощи.",
        valuesTitle: "Наши ценности",
        values: ["Сострадание", "Целостный подход", "Честность", "Доверие", "Устойчивость"]
      },
      services: {
        kicker: "Медицинские услуги",
        title: "Что мы предлагаем",
        intro: "Мы — амбулаторная клиника: принимаем пациентов каждый день, можем ставить уколы и капельницы, но не оставляем пациентов на ночь.",
        groups: [
          { title: "Ежедневные консультации", items: ["Педиатрия", "Семейная медицина", "Терапия и пульмонология", "Гинекология", "Физиотерапия", "Сопровождение беременности, родов и послеродового периода"] },
          { title: "Профилактические осмотры", items: ["Оценка роста и развития", "Проверка зрения", "ЭКГ", "Скрининг на анемию и диабет", "Лабораторные анализы", "Осмотры для женщин и мужчин"] },
          { title: "Медицинские справки и документы", items: ["Для школ", "Для перелётов и путешествий", "Для работы", "Для страховки"] }
        ],
        extraTitle: "Дополнительные услуги",
        extra: ["УЗИ", "ЭКГ", "Проверка зрения", "Аудиометрия (проверка слуха)", "Лаборатория в клинике — скидка 30% на все анализы для наших пациентов", "Курсы подготовки к родам с сертифицированной доулой"],
        extraNote: "Дополнительные услуги назначаются после консультации с одним из наших врачей.",
        pricesLabel: "Цены"
      },
      appointment: {
        kicker: "Запись",
        title: "Записаться на приём",
        text: "Заполните четыре поля и отправьте их нашему администратору в WhatsApp. Она ответит, какое время свободно и какой врач вам подойдёт.",
        firstName: "Имя",
        lastName: "Фамилия",
        dob: "Дата рождения",
        phone: "Мобильный номер",
        phoneHint: "С кодом страны, например +996 …",
        submit: "Продолжить в WhatsApp",
        privacy: "Ваши данные не сохраняются на сайте. Они только подставляются в сообщение WhatsApp, которое вы отправляете сами.",
        placeholderNote: "Черновик: сообщения уходят на временный номер, пока MercyMed не подтвердит свой номер WhatsApp.",
        errRequired: "Заполните это поле.",
        errDob: "Укажите правильную дату рождения.",
        errPhone: "Укажите правильный номер телефона.",
        msgIntro: "Здравствуйте, MercyMed! Хочу записаться на приём.",
        msgName: "Имя", msgSurname: "Фамилия", msgDob: "Дата рождения", msgPhone: "Мобильный номер"
      },
      corporate: {
        kicker: "Для организаций",
        title: "Корпоративным клиентам",
        text: "Для школ, компаний и посольств, которые ищут клинику для регулярных медицинских осмотров.",
        items: ["Ежегодные осмотры сотрудников", "Специальные предложения для студентов", "Одна клиника для взрослых и детей", "Медицинские справки и документы"],
        cta: "Связаться с нами"
      },
      international: {
        kicker: "Иностранным пациентам",
        title: "Медицинская помощь на вашем языке",
        text: "Для иностранцев, живущих в Бишкеке, а также туристов и путешественников, которым нужен врач.",
        items: ["Консультации и заключения на английском, китайском, немецком и французском, а также на кыргызском и русском", "Местные и иностранные врачи работают вместе", "Документы для перелётов, путешествий и страховки", "Краткосрочная помощь во время поездки"],
        cta: "Записаться через WhatsApp"
      },
      team: {
        kicker: "Наша команда",
        title: "Люди, которые о вас позаботятся",
        text: "Местные и иностранные специалисты — и не только врачи.",
        experience: "Опыт",
        bioLabel: "Кратко о себе",
        photoNote: "Фото из презентации клиники — ожидают подтверждения.",
        noPhoto: "Фото"
      },
      education: {
        kicker: "Медицинское образование",
        title: "Обучаем будущих врачей",
        text: "Обучение — одна из причин, по которой существует MercyMed. Наши местные врачи перенимают международный опыт, а мы учимся у них знанию местной системы.",
        items: ["Обучение наших врачей доказательной медицине", "Студенты-медики проходили у нас практику по несколько недель", "Мы надеемся скоро начать обучать ординаторов"],
        audience: "Для больниц, медицинских вузов, ординаторов и студентов, которые хотят сотрудничать с нами.",
        cta: "Связаться с нами"
      },
      mobile: {
        kicker: "Выездные клиники",
        title: "Благотворительное сердце MercyMed",
        text: "Более 10 лет мы выезжаем в сёла и отдалённые районы с ограниченным доступом к медицине — во всех областях Кыргызстана.",
        steps: [
          { title: "Нас приглашают", text: "Село, местный медпункт или община приглашает нас и готовит место для приёма." },
          { title: "Команда выезжает", text: "Обычно четыре-пять врачей, медсестра, администратор и сотрудник аптеки — с машиной, полной лекарств." },
          { title: "Мы принимаем пациентов", text: "Консультации, лекарства и рекомендации — один день или несколько дней." }
        ]
      },
      instagram: {
        title: "Мы в Instagram",
        text: "В Instagram мы чаще всего делимся новостями, фото и историями пациентов.",
        feedPending: "Лента Instagram"
      },
      contact: {
        kicker: "Контакты",
        title: "Приходите к нам",
        location: "Расположение",
        locationValue: "Микрорайон Тунгуч, Бишкек — рядом с Ayu Grand и университетом Ала-Тоо",
        address: "Адрес",
        hours: "Часы работы",
        phone: "Телефон",
        email: "Эл. почта",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        cta: "Записаться через WhatsApp"
      },
      footer: {
        tagline: "Доказательная и международная медицина для всей семьи.",
        note: "Черновик сайта, подготовленный студентами АУЦА — Команда 3. Ещё не утверждён MercyMed."
      }
    },

    /* ============================== KYRGYZ =============================== */
    ky: {
      meta: {
        title: "MercyMed — Бишкектеги далилдүү үй-бүлөлүк медицина",
        description: "Бишкектеги жеке медициналык борбор: педиатрия, үй-бүлөлүк медицина, гинекология жана башкалар. Жергиликтүү жана чет элдик дарыгерлер, кыргыз, орус, англис, кытай, немис жана француз тилдеринде кеңеш."
      },
      ui: {
        skip: "Мазмунга өтүү",
        menu: "Меню",
        language: "Тил",
        pending: "клиникадан күтүлүүдө",
        draftBanner: "Клиника менен макулдашуу үчүн сайттын долбоору. «Клиникадан күтүлүүдө» деп белгиленгендерге MercyMed маалыматы керек.",
        translationNote: "Котормо MercyMed кызматкерлеринин текшерүүсүн күтүүдө."
      },
      nav: {
        about: "Биз жөнүндө", services: "Кызматтар", team: "Команда", corporate: "Уюмдарга",
        international: "Чет элдиктерге", education: "Окутуу", mobile: "Көчмө клиникалар",
        contact: "Байланыш", cta: "Жазылуу"
      },
      hero: {
        eyebrow: "Бишкектеги жеке медициналык борбор",
        title1: "Далилдүү жана эл аралык медицина.",
        title2: "Бүт үй-бүлөгө бир жерде кам көрүү.",
        text: "Балдарды, өспүрүмдөрдү, чоңдорду жана кош бойлуу аялдарды жергиликтүү жана чет элдик дарыгерлер Түңгүч кичи районунда, Ayu Grand жанында кабыл алышат.",
        cta: "WhatsApp аркылуу жазылуу",
        secondary: "Биздин кызматтар",
        langsLabel: "Кеңеш берүү тилдери:",
        langs: ["кыргыз", "орус", "англис", "кытай", "немис", "француз"]
      },
      highlights: [
        { title: "Бүт үй-бүлө үчүн", text: "Чоңдор, балдар, өспүрүмдөр жана кош бойлуу аялдар бир жерден жардам ала алышат." },
        { title: "Далилдүү медицина", text: "Бардык пациенттерди далилдүү медицинанын ыкмалары менен текшерип, дарылайбыз." },
        { title: "Жергиликтүү жана чет элдик адистер", text: "Үй-бүлөлүк медицина, педиатрия, гинекология, пульмонология жана УЗИ." },
        { title: "Окутуу жана өнүгүү", text: "Дарыгерлерди жана медицина студенттерин окутабыз." }
      ],
      about: {
        kicker: "Биз жөнүндө",
        title: "Заманбап медициналык билимге негизделген сапаттуу жардам",
        lead: "MercyMed — Бишкектеги жеке медициналык борбор. Биз заманбап медициналык билимге жана эл аралык тажрыйбага негизделген сапаттуу медициналык жардам көрсөтөбүз.",
        historyTitle: "Биздин тарых",
        history: "10 жылдан ашык убакыттан бери биздин команда Кыргызстандын аймактарында көчмө клиникаларды өткөрүп келет. Бишкектеги клиника бул ишти улантуу жана кеңейтүү үчүн 2023-жылдын октябрында ачылган: кайра кабыл алуу үчүн туруктуу жер, туруктуу команда жана өзүбүздүн медициналык лицензия.",
        ebmTitle: "Далилдүү медицина деген эмне",
        ebm: "Биздин медициналык чечимдер «дайыма ушинтип жасалып келген» дегенге эмес, изилдөөлөргө жана эл аралык тажрыйбага негизделет. Пациенттер керексиз нерсеге акча төлөбөшү үчүн ашыкча текшерүүлөрдөн жана дарылоодон качабыз.",
        missionTitle: "Биздин миссия",
        mission: "Компетенттүү, боорукер жана ар тараптуу медициналык жардам аркылуу пациенттерибиздин жашоо сапатын жакшыртуу.",
        valuesTitle: "Биздин баалуулуктар",
        values: ["Боорукердик", "Ар тараптуу мамиле", "Чынчылдык", "Ишеним", "Туруктуулук"]
      },
      services: {
        kicker: "Медициналык кызматтар",
        title: "Эмне сунуштайбыз",
        intro: "Биз амбулатордук клиникабыз: пациенттерди күн сайын кабыл алабыз, ийне сайып, тамчылатма коё алабыз, бирок пациенттерди түнкүсүн калтырбайбыз.",
        groups: [
          { title: "Күнүмдүк кабыл алуу", items: ["Педиатрия", "Үй-бүлөлүк медицина", "Ички оорулар жана пульмонология", "Гинекология", "Физиотерапия", "Кош бойлуулукта, төрөттө жана төрөттөн кийин колдоо"] },
          { title: "Алдын алуу текшерүүлөрү", items: ["Өсүү жана өнүгүү текшерүүсү", "Көрүүнү текшерүү", "ЭКГ", "Аз кандуулукка жана диабетке скрининг", "Лабораториялык анализдер", "Аялдар жана эркектер үчүн текшерүү"] },
          { title: "Медициналык маалымкаттар жана документтер", items: ["Мектептер үчүн", "Учуу жана саякат үчүн", "Жумуш үчүн", "Камсыздандыруу үчүн"] }
        ],
        extraTitle: "Кошумча кызматтар",
        extra: ["УЗИ", "ЭКГ", "Көрүүнү текшерүү", "Аудиометрия (угууну текшерүү)", "Клиникадагы лаборатория — биздин пациенттерге бардык анализдерге 30% арзандатуу", "Сертификатталган доула менен төрөткө даярдоо курстары"],
        extraNote: "Кошумча кызматтар биздин дарыгерлердин биринин кабыл алуусунан кийин дайындалат.",
        pricesLabel: "Баалар"
      },
      appointment: {
        kicker: "Жазылуу",
        title: "Кабыл алууга жазылуу",
        text: "Төрт талааны толтуруп, WhatsApp аркылуу администраторубузга жөнөтүңүз. Ал бош убакытты жана сизге ылайыктуу дарыгерди айтып жооп берет.",
        firstName: "Аты",
        lastName: "Фамилиясы",
        dob: "Туулган күнү",
        phone: "Мобилдик номер",
        phoneHint: "Өлкө коду менен, мисалы +996 …",
        submit: "WhatsApp'та улантуу",
        privacy: "Сиздин маалыматтар сайтта сакталбайт. Алар өзүңүз жөнөткөн WhatsApp билдирүүсүнө гана коюлат.",
        placeholderNote: "Долбоор: MercyMed өзүнүн WhatsApp номерин ырастаганга чейин билдирүүлөр убактылуу номерге кетет.",
        errRequired: "Бул талааны толтуруңуз.",
        errDob: "Туулган күндү туура жазыңыз.",
        errPhone: "Телефон номерин туура жазыңыз.",
        msgIntro: "Саламатсызбы, MercyMed! Кабыл алууга жазылгым келет.",
        msgName: "Аты", msgSurname: "Фамилиясы", msgDob: "Туулган күнү", msgPhone: "Мобилдик номер"
      },
      corporate: {
        kicker: "Уюмдар үчүн",
        title: "Корпоративдик кардарларга",
        text: "Үзгүлтүксүз медициналык текшерүүлөр үчүн клиника издеген мектептерге, компанияларга жана элчиликтерге.",
        items: ["Кызматкерлерди жыл сайын текшерүү", "Студенттер үчүн атайын сунуштар", "Чоңдор жана балдар үчүн бир клиника", "Медициналык маалымкаттар жана документтер"],
        cta: "Биз менен байланышыңыз"
      },
      international: {
        kicker: "Чет элдик пациенттерге",
        title: "Өз тилиңизде медициналык жардам",
        text: "Бишкекте жашаган чет элдиктер, ошондой эле дарыгер керек болгон туристтер жана саякатчылар үчүн.",
        items: ["Англис, кытай, немис жана француз, ошондой эле кыргыз жана орус тилдеринде кеңеш жана корутунду", "Жергиликтүү жана чет элдик дарыгерлер бирге иштешет", "Учуу, саякат жана камсыздандыруу үчүн документтер", "Саякат учурунда кыска мөөнөттүү жардам"],
        cta: "WhatsApp аркылуу жазылуу"
      },
      team: {
        kicker: "Биздин команда",
        title: "Сизге кам көрө турган адамдар",
        text: "Жергиликтүү жана чет элдик адистер — дарыгерлер гана эмес.",
        experience: "Тажрыйба",
        bioLabel: "Кыскача",
        photoNote: "Сүрөттөр клиниканын презентациясынан — ырастоону күтүүдө.",
        noPhoto: "Сүрөт"
      },
      education: {
        kicker: "Медициналык билим берүү",
        title: "Келечектеги дарыгерлерди окутабыз",
        text: "Окутуу — MercyMed түзүлгөн себептердин бири. Жергиликтүү дарыгерлерибиз эл аралык тажрыйбадан үйрөнүшөт, а биз алардан жергиликтүү системаны үйрөнөбүз.",
        items: ["Дарыгерлерибизди далилдүү медицинага окутуу", "Медицина студенттери бизде бир нече жума практикадан өтүшкөн", "Жакында ординаторлорду окутууну баштайбыз деп үмүттөнөбүз"],
        audience: "Биз менен кызматташкысы келген ооруканаларга, медициналык окуу жайларга, ординаторлорго жана студенттерге.",
        cta: "Биз менен байланышыңыз"
      },
      mobile: {
        kicker: "Көчмө клиникалар",
        title: "MercyMed'дин кайрымдуу жүрөгү",
        text: "10 жылдан ашык убакыттан бери биз медициналык жардам жетишсиз айылдарга жана алыскы аймактарга — Кыргызстандын бардык облустарына барабыз.",
        steps: [
          { title: "Бизди чакырышат", text: "Айыл, жергиликтүү медпункт же жамаат бизди чакырып, кабыл алуу үчүн жай даярдайт." },
          { title: "Команда жолго чыгат", text: "Адатта төрт-беш дарыгер, медайым, администратор жана дарыкана кызматкери — дары-дармекке толгон унаа менен." },
          { title: "Пациенттерди кабыл алабыз", text: "Кеңеш, дары-дармек жана сунуштар — бир күн же бир нече күн." }
        ]
      },
      instagram: {
        title: "Биз Instagram'да",
        text: "Жаңылыктарды, сүрөттөрдү жана пациенттердин окуяларын көбүнчө Instagram'да бөлүшөбүз.",
        feedPending: "Instagram тасмасы"
      },
      contact: {
        kicker: "Байланыш",
        title: "Бизге келиңиз",
        location: "Жайгашкан жери",
        locationValue: "Түңгүч кичи району, Бишкек — Ayu Grand жана Ала-Тоо университетинин жанында",
        address: "Дареги",
        hours: "Иш убактысы",
        phone: "Телефон",
        email: "Эл. почта",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        cta: "WhatsApp аркылуу жазылуу"
      },
      footer: {
        tagline: "Бүт үй-бүлө үчүн далилдүү жана эл аралык медицина.",
        note: "Сайттын долбоорун АУЦА студенттери даярдады — 3-команда. MercyMed тарабынан азырынча бекитиле элек."
      }
    }
  }
};
