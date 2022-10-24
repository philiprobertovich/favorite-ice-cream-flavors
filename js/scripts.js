function addHTML() {
  let currentLoc = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.append('Favorite Ice Cream');
  currentLoc.after(h1);
  currentLoc = h1;

  const favoriteThings = ["Vanilla", "Chocolate", "Strawberry"];
  const ul = document.createElement('ul');

  favoriteThings.forEach(function(icecream) {
    const li = document.createElement('li');
    li.append(icecream);
    ul.prepend(li);
  });
  currentLoc.after(ul);

}; 

window.addEventListener('load', function() {
  addHTML();
});