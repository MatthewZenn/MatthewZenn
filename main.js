var textarea = document.getElementById('textarea');
var input = document.getElementById('input');
var path = document.getElementById('path').innerHTML;

const filepath = path;
var command = '';
var url = "file.txt";

var articles = [];

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
      
      break;

    case 'whoami':
      
      break;

    case 'hello there':
      textarea.innerHTML += 'GENERAL KENOBI! \n';
      break;

    default:
      fetchAsync();
      textarea.innerHTML += data;
      break;
  }
}

async function fetchAsync () {
  let response = await fetch('https://matthewzenn.github.io/MatthewZenn/articles/'+command);
  let data = await response.body();
  return data;
}