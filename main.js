var textarea = document.getElementById('textarea');
var input = document.getElementById('input');
var path = document.getElementById('path').innerHTML;

const filepath = path;
var command = '';

var articles = ['Polybius.txt', 'Lorem.txt', 'Space.txt'];

window.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    logic();
  }
});

function logic(){
  command = input.value;
  textarea.innerHTML += filepath + input.value + '\n';
  input.value = '';

  switch (command) {
    case 'clear':
      textarea.innerHTML = '';
      break;

    case 'help':
      textarea.innerHTML += "whoami \n" + "articles \n" + "help \n" +"clear \n";
      break;
    case 'articles':
      textarea.innerHTML += articles.join("\n")+'\n';
      break;

    case 'whoami':
      aboutFetch();
      break;

    case 'hello there':
      textarea.innerHTML += 'GENERAL KENOBI! \n';
      break;

    default:
      articleFetch();
      break;
  }
}

async function articleFetch () {
  let response = await fetch('https://matthewzenn.github.io/MatthewZenn/articles/'+command);
  let data = await response.text();
  textarea.innerHTML += data+'\n';
  return;
}

async function aboutFetch () {
  let response = await fetch('https://matthewzenn.github.io/MatthewZenn/info/about.txt');
  let data = await response.text();
  textarea.innerHTML += data+'\n';
  return;
}