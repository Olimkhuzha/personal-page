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
    // Contact details given by the team lead, 18 Nov 2026 (docs/CLIENT-REQUIREMENTS.md §10).
    instagramUrl: "https://www.instagram.com/mercymed.kg/",
    instagramHandle: "@mercymed.kg",
    address: {
      en: "Isakeeva St. 18/15, Ala-Too complex",
      ru: "ул. Исакеева, 18/15, комплекс «Ала-Тоо»",
      ky: "Исакеев көчөсү, 18/15, «Ала-Тоо» комплекси"
    },
    openingHours: null,
    // Shown in Contact only. The booking form keeps using whatsappNumber above.
    phone: "+996 770 231 813",
    email: "medicalcenter@mercymed.kg",
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
        translationNote: "",
        newTab: "(opens in a new tab)"
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
        text: "Local and international doctors in Tunguch, Bishkek.",
        cta: "Request appointment via WhatsApp",
        secondary: "See our services",
        instaLabel: "Our latest news on Instagram:"
      },
      highlights: [
        { title: "Family-oriented", text: "Children, teenagers, adults and pregnant patients in one place." },
        { title: "Evidence-based medicine", text: "Decisions based on research, without unnecessary tests." },
        { title: "Local and international specialists", text: "Doctors from Kyrgyzstan and abroad working together." },
        { title: "Training and skill development", text: "We train doctors and medical students." }
      ],
      about: {
        kicker: "About us",
        title: "High-quality care based on modern medical knowledge",
        lead: "MercyMed is a private medical centre in Bishkek.",
        historyTitle: "Our story",
        history: "Our team has run mobile clinics across Kyrgyzstan for over 10 years. In October 2023 we opened the clinic in Bishkek: a permanent place and team for follow-up care, with our own medical licence.",
        ebmTitle: "What evidence-based medicine means",
        ebm: "Our decisions are based on research and international experience, not just habit. We avoid unnecessary tests and treatments, so you don't pay for what you don't need.",
        missionTitle: "Our mission",
        mission: "To improve the quality of life of our patients through competent, compassionate and comprehensive medical care.",
        valuesTitle: "Our values",
        values: ["Compassion", "Holistic care", "Integrity", "Trust", "Sustainability"]
      },
      services: {
        kicker: "Medical services",
        title: "What we offer",
        intro: "We see patients every day and can give medications and infusions. No overnight stays.",
        groups: [
          { title: "Daily consultations", items: ["Pediatrics", "Family medicine", "Internal medicine and pulmonology", "Gynecology", "Physical therapy", "Pregnancy, birth and after birth support"] },
          { title: "Preventive check-ups", items: ["Growth and development check-ups", "Screening for anemia and diabetes", "Laboratory tests", "Check-ups for women and men"] },
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
        text: "Send us four details on WhatsApp. Our receptionist will reply with a time and the right doctor for you.",
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
        text: "We travel to villages and rural areas with less access to medical care, in all regions of Kyrgyzstan.",
        steps: [
          { title: "We are invited", text: "A village, health centre or local community invites us and prepares a place for the clinic." },
          { title: "The team travels", text: "Usually four or five doctors, a nurse, a receptionist and someone for the pharmacy, with a car full of medications." },
          { title: "We see patients", text: "Consultations, medications and recommendations — for one day or for several days." }
        ]
      },
      instagram: {
        title: "Follow us on Instagram",
        text: "Instagram is where we share news, photos and patient stories most often.",
        feedPending: "Instagram feed",
        cta: "Open @mercymed.kg on Instagram"
      },
      contact: {
        kicker: "Contact",
        title: "Visit us",
        location: "Location",
        locationValue: "Tunguch microdistrict, Bishkek — near Ayu Grand and Ala-Too University",
        address: "Address",
        hours: "Opening hours",
        phone: "Phone / WhatsApp",
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
        translationNote: "Перевод ожидает проверки сотрудниками MercyMed.",
        newTab: "(откроется в новой вкладке)"
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
        text: "Местные и иностранные врачи в Тунгуче, Бишкек.",
        cta: "Записаться через WhatsApp",
        secondary: "Наши услуги",
        instaLabel: "Наши новости в Instagram:"
      },
      highlights: [
        { title: "Для всей семьи", text: "Дети, подростки, взрослые и беременные — в одном месте." },
        { title: "Доказательная медицина", text: "Решения на основе исследований, без лишних анализов." },
        { title: "Местные и иностранные специалисты", text: "Врачи из Кыргызстана и других стран работают вместе." },
        { title: "Обучение и развитие", text: "Мы обучаем врачей и студентов-медиков." }
      ],
      about: {
        kicker: "О нас",
        title: "Качественная помощь на основе современных медицинских знаний",
        lead: "MercyMed — частный медицинский центр в Бишкеке.",
        historyTitle: "Наша история",
        history: "Наша команда более 10 лет проводит выездные клиники по всему Кыргызстану. В октябре 2023 года мы открыли клинику в Бишкеке: постоянное место и команда для повторных приёмов, с собственной медицинской лицензией.",
        ebmTitle: "Что такое доказательная медицина",
        ebm: "Наши решения основаны на исследованиях и международном опыте, а не только на привычке. Мы избегаем лишних обследований и лечения, чтобы вы не платили за то, что вам не нужно.",
        missionTitle: "Наша миссия",
        mission: "Улучшать качество жизни пациентов с помощью компетентной, сострадательной и всесторонней медицинской помощи.",
        valuesTitle: "Наши ценности",
        values: ["Сострадание", "Целостный подход", "Честность", "Доверие", "Устойчивость"]
      },
      services: {
        kicker: "Медицинские услуги",
        title: "Что мы предлагаем",
        intro: "Мы принимаем пациентов каждый день, ставим уколы и капельницы. Без ночного пребывания.",
        groups: [
          { title: "Ежедневные консультации", items: ["Педиатрия", "Семейная медицина", "Терапия и пульмонология", "Гинекология", "Физиотерапия", "Сопровождение беременности, родов и послеродового периода"] },
          { title: "Профилактические осмотры", items: ["Оценка роста и развития", "Скрининг на анемию и диабет", "Лабораторные анализы", "Осмотры для женщин и мужчин"] },
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
        text: "Заполните четыре поля и отправьте их в WhatsApp. Администратор предложит время и подходящего врача.",
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
        text: "Мы выезжаем в сёла и отдалённые районы с ограниченным доступом к медицине — во всех областях Кыргызстана.",
        steps: [
          { title: "Нас приглашают", text: "Село, местный медпункт или община приглашает нас и готовит место для приёма." },
          { title: "Команда выезжает", text: "Обычно четыре-пять врачей, медсестра, администратор и сотрудник аптеки — с машиной, полной лекарств." },
          { title: "Мы принимаем пациентов", text: "Консультации, лекарства и рекомендации — один день или несколько дней." }
        ]
      },
      instagram: {
        title: "Мы в Instagram",
        text: "В Instagram мы чаще всего делимся новостями, фото и историями пациентов.",
        feedPending: "Лента Instagram",
        cta: "Открыть @mercymed.kg в Instagram"
      },
      contact: {
        kicker: "Контакты",
        title: "Приходите к нам",
        location: "Расположение",
        locationValue: "Микрорайон Тунгуч, Бишкек — рядом с Ayu Grand и университетом Ала-Тоо",
        address: "Адрес",
        hours: "Часы работы",
        phone: "Телефон / WhatsApp",
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
        translationNote: "Котормо MercyMed кызматкерлеринин текшерүүсүн күтүүдө.",
        newTab: "(жаңы өтмөктө ачылат)"
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
        text: "Жергиликтүү жана чет элдик дарыгерлер Түңгүчтө, Бишкекте.",
        cta: "WhatsApp аркылуу жазылуу",
        secondary: "Биздин кызматтар",
        instaLabel: "Биздин жаңылыктар Instagram'да:"
      },
      highlights: [
        { title: "Бүт үй-бүлө үчүн", text: "Балдар, өспүрүмдөр, чоңдор жана кош бойлуу аялдар — бир жерде." },
        { title: "Далилдүү медицина", text: "Изилдөөлөргө негизделген чечимдер, ашыкча анализдерсиз." },
        { title: "Жергиликтүү жана чет элдик адистер", text: "Кыргызстандык жана чет элдик дарыгерлер бирге иштешет." },
        { title: "Окутуу жана өнүгүү", text: "Дарыгерлерди жана медицина студенттерин окутабыз." }
      ],
      about: {
        kicker: "Биз жөнүндө",
        title: "Заманбап медициналык билимге негизделген сапаттуу жардам",
        lead: "MercyMed — Бишкектеги жеке медициналык борбор.",
        historyTitle: "Биздин тарых",
        history: "Биздин команда 10 жылдан ашык Кыргызстан боюнча көчмө клиникаларды өткөрүп келет. 2023-жылдын октябрында Бишкекте клиника ачтык: кайра кабыл алуу үчүн туруктуу жер жана команда, өзүбүздүн медициналык лицензия менен.",
        ebmTitle: "Далилдүү медицина деген эмне",
        ebm: "Биздин чечимдер адатка гана эмес, изилдөөлөргө жана эл аралык тажрыйбага негизделет. Керексиз нерсеге акча төлөбөшүңүз үчүн ашыкча текшерүүлөрдөн жана дарылоодон качабыз.",
        missionTitle: "Биздин миссия",
        mission: "Компетенттүү, боорукер жана ар тараптуу медициналык жардам аркылуу пациенттерибиздин жашоо сапатын жакшыртуу.",
        valuesTitle: "Биздин баалуулуктар",
        values: ["Боорукердик", "Ар тараптуу мамиле", "Чынчылдык", "Ишеним", "Туруктуулук"]
      },
      services: {
        kicker: "Медициналык кызматтар",
        title: "Эмне сунуштайбыз",
        intro: "Пациенттерди күн сайын кабыл алабыз, ийне сайып, тамчылатма коё алабыз. Түнкүсүн калтырбайбыз.",
        groups: [
          { title: "Күнүмдүк кабыл алуу", items: ["Педиатрия", "Үй-бүлөлүк медицина", "Ички оорулар жана пульмонология", "Гинекология", "Физиотерапия", "Кош бойлуулукта, төрөттө жана төрөттөн кийин колдоо"] },
          { title: "Алдын алуу текшерүүлөрү", items: ["Өсүү жана өнүгүү текшерүүсү", "Аз кандуулукка жана диабетке скрининг", "Лабораториялык анализдер", "Аялдар жана эркектер үчүн текшерүү"] },
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
        text: "Төрт талааны толтуруп, WhatsApp аркылуу жөнөтүңүз. Администратор убакытты жана ылайыктуу дарыгерди сунуштайт.",
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
        text: "Биз медициналык жардам жетишсиз айылдарга жана алыскы аймактарга — Кыргызстандын бардык облустарына барабыз.",
        steps: [
          { title: "Бизди чакырышат", text: "Айыл, жергиликтүү медпункт же жамаат бизди чакырып, кабыл алуу үчүн жай даярдайт." },
          { title: "Команда жолго чыгат", text: "Адатта төрт-беш дарыгер, медайым, администратор жана дарыкана кызматкери — дары-дармекке толгон унаа менен." },
          { title: "Пациенттерди кабыл алабыз", text: "Кеңеш, дары-дармек жана сунуштар — бир күн же бир нече күн." }
        ]
      },
      instagram: {
        title: "Биз Instagram'да",
        text: "Жаңылыктарды, сүрөттөрдү жана пациенттердин окуяларын көбүнчө Instagram'да бөлүшөбүз.",
        feedPending: "Instagram тасмасы",
        cta: "Instagram'да @mercymed.kg баракчасын ачуу"
      },
      contact: {
        kicker: "Байланыш",
        title: "Бизге келиңиз",
        location: "Жайгашкан жери",
        locationValue: "Түңгүч кичи району, Бишкек — Ayu Grand жана Ала-Тоо университетинин жанында",
        address: "Дареги",
        hours: "Иш убактысы",
        phone: "Телефон / WhatsApp",
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
