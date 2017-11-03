var quotes = ['"This is the best!"', '"Cool stuff."', '"I love these pictures!"',
                '"I really like this stuff."', '"Photos are nice."'];

function randomNumber() {
  return Math.floor(Math.random() * 5);
}

var number = randomNumber();

var quote = quotes[number] + '-Happy customer';

reviews.textContent = quote;
