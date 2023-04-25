var submitButton = document.querySelector('#app form button');
var zipCodeField = document.querySelector('#app form input');
var content = document.querySelector('#app main');

submitButton.addEventListener('click', run);

function run(event) {
event.preventDefault();

var zipCode = zipCodeField.value;
zipCode = zipCode.trim();
zipCode = zipCode.replace(' ', '');
zipCode = zipCode.replace('.', '');

axios
  .get( 'https://viacep.com.br/ws/' + zipCode + '/json/')
  .then(function(response){
    createLine(response.data.logradouro);
    createLine(response.data.bairro);
    createLine(response.data.localidade + '/' + response.data.uf);
  })
  .catch(function(error){
    console.log(error);
  });

  function createLine(text){
    var line = document.createElement('p');
    var text = document.createTextNode(text);

    line.appendChild(text);
    content.appendChild(line);
  }




}



