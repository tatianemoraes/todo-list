document.addEventListener("DOMContentLoaded", function(event) {

  var addNewItem = document.querySelector('.btn-plus');
  addNewItem.onclick = function() {

    var textInput = document.querySelector('.input-text').value;

    var taskFirst = document.createElement('div');
    taskFirst.setAttribute('class','task');
    
    var taskText = document.createElement('div');
    taskText.setAttribute('class', 'task-text');

    var buttons = document.createElement('div');
    buttons.setAttribute('class','group-buttons');

    
    var listTask = document.querySelector('.content');
    listTask.appendChild(taskFirst);
    taskFirst.appendChild(taskText);
    taskText.append(textInput);
    

  }

});

