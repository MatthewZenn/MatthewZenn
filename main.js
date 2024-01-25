var textarea = document.getElementById('textarea');
var input = document.getElementById('input');
var root = document.getElementById('root').innerHTML;
var path = document.getElementById('path').innerHTML;
var paths = document.getElementById('paths').innerHTML;

const filepath = root+paths+path;
var command = 'help';

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

    default:
      break;
  }
}