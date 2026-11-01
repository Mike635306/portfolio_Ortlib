const githubBtn = document.getElementById('github-btn');
const msgBtn = document.getElementById('message-btn');
const tmeBtn = document.getElementById('tme');
const maxBtn = document.getElementById('btuq');
const TelegramBtn = document.getElementById('btue');
const GitHubBtn = document.getElementById('btuy');
const Max = document.getElementById('Write');
const TG = document.getElementById('Writeqe');
const Web = document.getElementById('Writew');
const webtg = document.getElementById('Writeqde');
const tfeBtn = document.getElementById('Writep');
const wddsBtn = document.getElementById('Writeqebr');
const GITHUB_LINK  = 'https://github.com/Mike635306';
const TME_LINK = 'https://max.ru/u/f9LHodD0cOIAPHSWh0OWloB_CmnT2fZS00JEq5LqoSYM8bh3WIooPGZCvdw';
const Telegram_LINK = 'https://t.me/Lomdea';

const translations = {
  ru: {
    loading: 'Загрузка 3D-сцены...',
    'nav.about': 'ОБО МНЕ',
    'nav.projects': 'Мои проекты',
    'nav.contacts': 'Контакты',
    'nav.services': 'Мои услуги',
    'hero.message': 'Написать мне',
    'about.title': 'Обо мне',
    'about.intro': '«Привет ✌️!» Меня зовут Ortlib Michael. Я 16-летний разработчик из России, которому нравится создавать программы и приложения. Мне нравится превращать идеи в работающие проекты и постоянно узнавать новое в мире программирования. В свободное время я также снимаю видео на FPV-дрон.',
    'about.skills': 'Навыки',
    'projects.title': 'Мои проекты',
    'projects.need': 'Если вам нужна',
    'projects.help': 'Помощь',
    'contacts.title': 'Контакты',
    'services.title': 'Мои услуги',
    'services.consultation.title': 'Консультация',
    'services.consultation.description': 'Вы можете задать любой вопрос о веб-сайтах.',
    'services.consultation.price': 'Цена: 1200 ₽',
    'services.website.title': 'Сайт под ключ',
    'services.website.description': 'Готов обсудить разумную и справедливую цену в личных сообщениях.',
    'services.website.price': 'Цена: от 15 000 ₽ до 170 000 ₽',
    'services.bot.title': 'Telegram-бот под ключ',
    'services.bot.description': 'Готов обсудить разумную и справедливую цену в личных сообщениях.',
    'services.bot.price': 'Цена: от 5 000 ₽ до 50 000 ₽',
    'services.write': 'Написать мне',
    typed: ['Веб-приложение', 'Лендинг', 'Веб-игра', 'Fullstack-приложение', 'Компьютерное моделирование']
  },
  en: {
    loading: 'Loading 3D Scene...',
    'nav.about': 'ABOUT ME',
    'nav.projects': 'My Projects',
    'nav.contacts': 'Contacts',
    'nav.services': 'My Services',
    'hero.message': 'Message me',
    'about.title': 'About me',
    'about.intro': '"Hi there ✌️!" My name is Ortlib Michael. I am a 16-year-old developer from Russia who loves building software and applications. I enjoy turning ideas into real, working projects and always look for new things to learn in the world of coding. In my free time, I also do FPV filming.',
    'about.skills': 'Skills',
    'projects.title': 'My Projects',
    'projects.need': 'If you need a',
    'projects.help': 'Help',
    'contacts.title': 'Contacts',
    'services.title': 'My Services',
    'services.consultation.title': 'Consultation',
    'services.consultation.description': 'You can ask any question regarding websites.',
    'services.consultation.price': 'Price: 1,200 RUB',
    'services.website.title': 'Turnkey website',
    'services.website.description': 'I am open to discussing reasonable and fair prices via private messages.',
    'services.website.price': 'Price: 15,000–170,000 RUB',
    'services.bot.title': 'Turnkey Telegram bot',
    'services.bot.description': 'I am open to discussing reasonable and fair prices via private messages.',
    'services.bot.price': 'Price: 5,000–50,000 RUB',
    'services.write': 'Write to me',
    typed: ['Web app', 'Landing page', 'Web game', 'Fullstack app', 'Computer modeling']
  },
  de: {
    loading: '3D-Szene wird geladen...',
    'nav.about': 'ÜBER MICH',
    'nav.projects': 'Meine Projekte',
    'nav.contacts': 'Kontakt',
    'nav.services': 'Meine Leistungen',
    'hero.message': 'Schreib mir',
    'about.title': 'Über mich',
    'about.intro': '„Hallo ✌️!“ Ich heiße Ortlib Michael. Ich bin ein 16-jähriger Entwickler aus Russland und erstelle gern Software und Anwendungen. Ich verwandle Ideen gern in funktionierende Projekte und lerne ständig Neues aus der Welt des Programmierens. In meiner Freizeit filme ich außerdem mit einer FPV-Drohne.',
    'about.skills': 'Fähigkeiten',
    'projects.title': 'Meine Projekte',
    'projects.need': 'Wenn du Folgendes brauchst:',
    'projects.help': 'Hilfe',
    'contacts.title': 'Kontakt',
    'services.title': 'Meine Leistungen',
    'services.consultation.title': 'Beratung',
    'services.consultation.description': 'Du kannst jede Frage zu Websites stellen.',
    'services.consultation.price': 'Preis: 1.200 RUB',
    'services.website.title': 'Website zum Festpreis',
    'services.website.description': 'Faire und angemessene Preise bespreche ich gern per Privatnachricht.',
    'services.website.price': 'Preis: 15.000–170.000 RUB',
    'services.bot.title': 'Telegram-Bot zum Festpreis',
    'services.bot.description': 'Faire und angemessene Preise bespreche ich gern per Privatnachricht.',
    'services.bot.price': 'Preis: 5.000–50.000 RUB',
    'services.write': 'Schreib mir',
    typed: ['Web-App', 'Landingpage', 'Webspiel', 'Fullstack-App', 'Computermodellierung']
  }
};

let typedInstance;

const applyLanguage = (language) => {
  const dictionary = translations[language];
  if (!dictionary) {
    return;
  }

  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) {
      element.textContent = translation;
    }
  });

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = undefined;
  }
  if (typeof Typed !== 'undefined' && document.querySelector('#element')) {
    typedInstance = new Typed('#element', {
      strings: dictionary.typed,
      typeSpeed: 50,
      loop: true,
      backDelay: 1500,
      showCursor: false
    });
  }
};

document.querySelectorAll('input[name="language"]').forEach((input) => {
  input.addEventListener('change', () => applyLanguage(input.value));
});
applyLanguage('ru');

const openLink = (button, url) => {
  button?.addEventListener('click', () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  });
};

openLink(githubBtn, GITHUB_LINK);
openLink(tmeBtn, TME_LINK);
openLink(msgBtn, Telegram_LINK);
openLink(maxBtn, TME_LINK);
openLink(TelegramBtn, Telegram_LINK);
openLink(GitHubBtn, GITHUB_LINK);
openLink(Max, TME_LINK);
openLink(TG, Telegram_LINK);
openLink(Web, TME_LINK);
openLink(webtg, Telegram_LINK);
openLink(tfeBtn, TME_LINK);
openLink(wddsBtn, Telegram_LINK);

