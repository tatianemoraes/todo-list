document.addEventListener("DOMContentLoaded", function(event) {

  // este elemento é o meu botão add nova tarefa
  var addNewItem = document.querySelector('.btn-plus');

  // chamei o add task e coloquei nele uma função click que toda vez
  // que eu clicar nele, irá gerar dinamicamente toda uma estrutura nova 
  // de tarefa com uma série de estilos e regras

  addNewItem.onclick = function() {

    // vou ver quantas tarefas ja existem
    var verifyHasExistAnyTask = document.querySelectorAll('.task');
    var quantityTasks = verifyHasExistAnyTask.length;

    // esta div é a div principal da task criada
    var divTasks = document.createElement('div');

    // chamei a div criada e adicionei um atributo class com nome task
    divTasks.setAttribute('class','task');

    // estou adicionando a posição de cada task nova
    divTasks.setAttribute('id', quantityTasks+1);
    
    // esta div é a div que vai receber o texto digitado
    var divForTextInputed = document.createElement('div');

    // chamei a div criada e adicionei um atributo class com nome task-text
    divForTextInputed.setAttribute('class', 'task-text');

    // este é o texto digitado
    var textInput = document.querySelector('.input-text').value;

    // se o text input estiver vazio não poderá adicionar nada;
    if(textInput === '') {
      return;
    }

    // esta é a div de grupo de botões, que conterá 02 botões
    var groupButtons = document.createElement('div');

    // chamei a div criada e adicionei um atributo class com nome group-bottons
    groupButtons.setAttribute('class','group-buttons');

    // este botão será um dos botões que ficará dentro da div group-buttons
    // este botão irá ter a possibilidade de editar o texto que foi adicionado
    var buttonEdit = document.createElement('button'); 

    // chamei o botão criado e adicionei um atributo class com nome button-edit
    buttonEdit.setAttribute('class', 'button-edit');
    
    // adicionei o atributo value e posição na lista para poder editar o item
    // selecionado no meu click edit
    buttonEdit.setAttribute('value', quantityTasks+1);

    // este botão será um botão secundário que também irá ficar dentro da div
    // group buttons
    // este botão irá ter a possibilidade de remover o texto criado
    var buttonDelete = document.createElement('button');

    // chamei o botão criado e adicionei um atributo class com nome 
    // button-delete
    buttonDelete.setAttribute('class', 'button-delete');
    
    // adicionei o atributo value e posição na lista para poder deletar o item
    // selecionado no meu click delete
    buttonDelete.setAttribute('value', quantityTasks+1);

    // esta é a div PAI que irá renderizar todas as tasks adicionadas 
    // dinamicamente feita pelo usuário
    var listTask = document.querySelector('.content');
    
    // chamei a div PAI e dentro dela eu adicionei a div principal da task 
    // criada
    listTask.appendChild(divTasks);
    
    // agora eu coloquei a div que irá renderizar o texto digitado dentro
    divTasks.appendChild(divForTextInputed);

    // agora coloquei o texto digitado dentro da div acima
    divForTextInputed.append(textInput);

    // agora procurei pela div task e após encontrá-la, adicionei
    // a div de grupo de botões dentro dela
    divTasks.appendChild(groupButtons);

    // após ter adicionado a div de botões dentro da div task, dentro
    // da div group buttons que já foi inserida na DOM, vou adicionar o
    // botão edit e delete
    groupButtons.appendChild(buttonEdit);
    groupButtons.appendChild(buttonDelete);

    // após eu ter feito todo o componente de text vou limpar o input    
    document.querySelector('.input-text').value = '';

    var removeTask = document.querySelectorAll('.task');

    removeTask.forEach(function(value, index){
     value.addEventListener('click', function(item) {
       if(item.target.className === 'button-delete'){
        value.remove(item)
       }
     });
    });


    var editTask = document.querySelectorAll('.task');

    var oldText = '';
    var newText = '';

    editTask.forEach(function(value){
      value.addEventListener('click', function(item){

        // se o texto estiver vazio ele recebe o parametro digitado
        if(oldText === '') {
          oldText = item.currentTarget.firstChild.innerText;
        }
        
        //se clicar no editar irá mudar a estrutura toda inline selecionada
        if(item.target.className === 'button-edit'){
          item.currentTarget.firstChild.innerHTML 
          = '<input  class="input-text-edit" value="'+oldText+'">';
          item.path[1].innerHTML 
          = '<button class="button-confirm"></button> <button class="button-cancel"></button>';
        }

        //se clicar no cancelar faça isso
        if(item.target.className === 'button-cancel'){
          item.currentTarget.firstChild.innerHTML 
          = '<div class="task-text">'+ oldText +'</div>';
          item.path[1].innerHTML 
          = '<button class="button-edit"></button> <button class="button-delete"></button>'; 
        }
        // se clicar no confirm salvará o texto novo digitado
        if(item.target.className === 'button-confirm') {
          newText = document.querySelector('.input-text-edit').value;
          item.currentTarget.firstChild.innerHTML 
          = '<div class="task-text">'+ newText +'</div>';
          item.path[1].innerHTML 
          = '<button class="button-edit"></button> <button class="button-delete"></button>';
          oldText = newText;
        }
      });
    });
  };
});

