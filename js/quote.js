const quoteTxt = document.getElementById("quote-txt");
const quoteSrc = document.getElementById("quote-src");

/* The two arrays below act as a bank of quotes. The first array holds the quotes, the second array holds the authors at the same indexes. */
const quoteArray = new Array();
quoteArray[0] = "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.";
quoteArray[1] = "Strive not to be a success, but rather to be of value.";
quoteArray[2] = "I may not have gone where I intended to go, but I think I have ended up where I needed to be.";
quoteArray[3] = "A reader lives a thousand lives before he dies. The man who never reads lives only one.";
quoteArray[4] = "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.";
quoteArray[5] = "Never miss a good chance to shut up.";
quoteArray[6] = "The scariest moment is always just before you start.";
quoteArray[7] = "Whether you believe you can do a thing or not, you are right.";
quoteArray[8] = "Coming back to where you started is not the same as never leaving.";
quoteArray[9] = "When I ask how old your toddler is, I don't need to hear '27 months.' 'He's two' will do just fine. He's not a cheese. And I didn't really care in the first place.";
quoteArray[10] = "Don't let circumstances control you. You change your circumstances.";

const authorArray = new Array();
authorArray[0] = "Bernard M. Baruch";
authorArray[1] = "Albert Einstein";
authorArray[2] = "Douglas Adams";
authorArray[3] = "George R.R. Martin";
authorArray[4] = "Carl Sagan";
authorArray[5] = "Will Rogers";
authorArray[6] = "Stephen King";
authorArray[7] = "Henry Ford";
authorArray[8] = "Terry Pratchett";
authorArray[9] = "George Carlin";
authorArray[10] = "Jackie Chan";

const index = Math.floor(Math.random() * quoteArray.length); //randomly selects a matching index from each array

quoteTxt.innerHTML = '"' + quoteArray[index] + '"';
quoteSrc.innerHTML = '- ' + authorArray[index];