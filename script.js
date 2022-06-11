const quote = document.querySelector('.main-quote');
const button = document.querySelector('.main-button');
const picture = document.querySelector('.main-picture');
const buttonEn = document.querySelector('.lang-en');
const buttonRu = document.querySelector('.lang-ru');

const urlEn = 'https://type.fit/api/quotes';
const urlRu = './assets/quotes.json';
let arrayQuotesEn = [];
let arrayQuotesRu = [];
let selectEn = true;

async function getDataEn() {
  const res = await fetch(urlEn);
  const data = await res.json();  
  arrayQuotesEn = data;
  randomQuote();  
}
getDataEn();

async function getDataRu() {    
  const res = await fetch(urlRu);
  const data = await res.json();   
  arrayQuotesRu = data;
}
getDataRu();

const randomQuote = () => {
  if (selectEn) {
    let randomNumber = Math.round( Math.random() * arrayQuotesEn.length );  
    quote.textContent = arrayQuotesEn[randomNumber].text;
    picture.style.visibility = 'visible';
    setTimeout(() => {
      picture.style.visibility = 'hidden';
    }, 2000);
  } else {
    let randomNumber = Math.round( Math.random() * arrayQuotesRu.length );  
    quote.textContent = arrayQuotesRu[randomNumber].text;
    picture.style.visibility = 'visible';
    setTimeout(() => {
      picture.style.visibility = 'hidden';
    }, 2000);
  }  
};

button.addEventListener('click', randomQuote);

buttonEn.addEventListener('click', () => {
  buttonEn.style.color = '#BDAE82';
  buttonRu.style.color = '#FFFFFF';
  button.textContent = 'SHOW ME THE QUOTE!';
  selectEn = true;
  randomQuote();
});

buttonRu.addEventListener('click', () => {
  buttonEn.style.color = '#FFFFFF';
  buttonRu.style.color = '#BDAE82';
  button.textContent = 'ПОКАЖИ МНЕ ЦИТАТУ!';
  selectEn = false;
  randomQuote();
});