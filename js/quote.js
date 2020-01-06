// Object keys are authors - values are quotations
const quoteBank = {
  'Bernard M. Baruch' : 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
  'Albert Einstein' : 'Strive not to be a success, but rather to be of value.',
  'Douglas Adams' : 'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
  'George R.R. Martin' : 'A reader lives a thousand lives before he dies. The man who never reads lives only one.',
  'Carl Sagan' : 'One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.',
  'Will Rogers' : 'Never miss a good chance to shut up.',
  'Stephen King' : 'The scariest moment is always just before you start.',
  'Henry Ford' : 'Whether you believe you can do a thing or not, you are right.',
  'Terry Pratchett' : 'Coming back to where you started is not the same as never leaving.',
  'George Carlin' : 'When I ask how old your toddler is, I don\'t need to hear "27 months." "He\'s two" will do just fine. He\'s not a cheese. And I didn\'t really care in the first place.',
  'Jackie Chan' : 'Don\'t let circumstances control you. You change your circumstances.'
};

// Generates random index from quoteBank
const randomIndex = Math.floor(Math.random() * Object.keys(quoteBank).length);

// Assigns random author and corresponding quotation from quoteBank to HTML
document.querySelector('blockquote p').innerHTML = `"${Object.values(quoteBank)[randomIndex]}"`;
document.querySelector('blockquote footer').innerHTML = `- ${Object.keys(quoteBank)[randomIndex]}`;