const widget = document.querySelector('.chat-widget');
const chatInput = document.querySelector("#chat-widget__input");
const messages = document.querySelector('#chat-widget__messages');
const container = document.querySelector('.chat-widget__messages-container')
let queue = 0;
let waiter = '';

const bot = [
   "Где ваша совесть?",
   "Добрый день.",
   "До свидания.",
   "Добрый день! До свидания!",
   "К сожелению, все операторы заняты. Не пишите нам больше.",
   "Мы ничего не будем Вам продавать.",
   "Вы некупили ни одного товара, чтобы так с нами разговаривать!"
];


widget.addEventListener('click', () => {
   widget.classList.add('chat-widget_active');
   console.log(waiter)
});

chatInput.addEventListener('keypress', (e) => {
   if (e.keyCode === 13 && chatInput.value !== '') {
      messages.innerHTML += '<div class="message message_client"><div class="message__time">' + getTime() + '</div><div class="message__text">' + chatInput.value + '</div></div>';
      chatInput.value = "";
      queue = queue + 1;
      waiter = 1;
   }

   if (queue % 2 !== 0) {
      messages.innerHTML += '<div class="message"><div class="message__time">' + getTime() + '</div><div class="message__text">' + bot[rand()] + '</div></div>';
      queue = queue - 1;
      waiter = 0;
   };

   if (waiter !== 1) {
      heyGay()
   } else {
      clearTimeout(heyGay());
   }

   container.scrollTop = 1e9;
})

const getTime = (time) => {
   time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
   return time;
};

const rand = (min, max) => {
   min = 0
   max = bot.length - 1;
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function heyGay() {
   setTimeout(() => {
      messages.innerHTML += '<div class="message"><div class="message__time">' + getTime() + '</div><div class="message__text">Hey Gay, where are You?</div></div>';
      container.scrollTop = 1e9;
      heyGay();
   }, 30000);
}

document.addEventListener('click', (e) => {
   const outOffClick = e.composedPath().includes(widget);
   if (!outOffClick) {
      widget.classList.remove('chat-widget_active');
   }
})