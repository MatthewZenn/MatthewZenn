var textarea = document.getElementById('textarea');
var input = document.getElementById('input');
var path = document.getElementById('path').innerHTML;
var command = '';
var articles = ['Polybius.txt', 'lorem.txt', 'haus.txt'];

window.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    logic();
  }
});

function logic(){
  command = input.value;
  textarea.innerHTML += '<br>' + path + input.value + '\n';
  input.value = '';

  switch (command) {
    case 'clear':
      textarea.innerHTML = '';
      break;

    case 'help':
      textarea.innerHTML += "whoami \n" + "articles \n" + "help \n" +"socials \n" +"clear \n";
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

    case 'socials':
      textarea.innerHTML += 'Github:    <a href="https://github.com/MatthewZenn">https://github.com/MatthewZenn</a> \n' + 'YouTube:    <a href="https://www.youtube.com/@ZennMagic">https://www.youtube.com/@ZennMagic</a> \n' + 'Instagram:    <a href="https://www.instagram.com/zenn.magic/">https://www.instagram.com/zenn.magic/</a> \n';
      break;
  
    default:
      if (articles.includes(command)) {
        articleFetch();
        break;
      }
      else {
        textarea.innerHTML += command + ' is not recogized as an internal or external command \n';
        break;
      }
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