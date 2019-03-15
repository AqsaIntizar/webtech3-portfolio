function get_todos() {
  let todos = new Array;
  let todos_str = localStorage.getItem('txtAddNote');
  
      todos = JSON.parse(todos_str); 
  
  return todos;
}

function add() {
  
    let task = document.getElementById('txtAddNote').value;

    let todos = get_todos();
      
      todos.push(task);
      localStorage.setItem('txtAddNote', JSON.stringify(todos));
    
    
  
 

  show();

  return false;
}

function remove() {
  let id = this.getAttribute('id');
  let todos = get_todos();
  todos.splice(id, 1); //we gebruiken splice() om het specifieke element te verwijderen van de array en om dan de array op te slaan in de databank
  localStorage.setItem('txtAddNote', JSON.stringify(todos));
  
  show();
  
  return false;
}

function show() {
  let todos = get_todos();

  let html = '<div class="notes g--10 m--1 container--wrap" id="notes">';
  html='<div class="card">'+
  '<p>This is a sample card.</p>'+
  '<a href="#" class="card-remove">Remove</a>'+
  '</div>'

  for(let i=0; i<todos.length; i++) {
    let task = document.getElementById('txtAddNote').value;
    
      html += '<div class="card">' + '<p>' +todos[i] + '</p>' + '</br>' + '<a href="#" class="card-remove" id="' + i  + '">Remove</a></div>';
    
  };
  
  html += '</div>';

  document.getElementById('notes').innerHTML = html;

  let buttons = document.getElementsByClassName('remove');
  for (let i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', remove);
  };
}
let todos_str =  localStorage.getItem('txtAddNote');

if(todos_str.length >= 1){
document.getElementById('btnAddNote').addEventListener('click', add);
show();
}