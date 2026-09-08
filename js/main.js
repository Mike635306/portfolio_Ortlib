const githubBtn = document.getElementById('github-btn');
const msgBtn = document.getElementById('message-btn');
const tmeBtn = document.getElementById('tme');
const maxBtn = document.getElementById('btuq');
const TelegramBtn = document.getElementById('btue');
const GitHubBtn = document.getElementById('btuy');
const GITHUB_LINK  = 'https://github.com/Mike635306';
const TME_LINK = 'https://max.ru/u/f9LHodD0cOIAPHSWh0OWloB_CmnT2fZS00JEq5LqoSYM8bh3WIooPGZCvdw';
const Telegram_LINK = 'https://web.telegram.org/a/#-1001674224047';

const openLink = (button, url) => {
  button?.addEventListener('click', () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  });
};

openLink(githubBtn, GITHUB_LINK);
openLink(tmeBtn, TME_LINK);
openLink(msgBtn, TME_LINK);
openLink(maxBtn, TME_LINK);
openLink(TelegramBtn, Telegram_LINK);
openLink(GitHubBtn, GITHUB_LINK);


document.addEventListener('DOMContentLoaded',()=>{
if (typeof Typed === 'undefined' || !document.querySelector('#element')) {
  return;
}

new Typed('#element', {
      strings: ['Web app','Landing page','Web game','Fullstack app','Computer modeling'],
      typeSpeed: 50,
      loop:true,
      backDelay:1500,
      showCursor:false
    });

})


