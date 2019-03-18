class Note {
  constructor(title) {
   this.title = title;
   this.element = this.createElement(title);
  }
  
  createElement(title){
    //create the note
    let newNote = document.createElement('div');
    //add a class to your note
    newNote.setAttribute("class", "card");


    //create the title of the note
    let note_titel = document.createElement("p");
    //add a class to your title
    note_titel.setAttribute("class", "titleNote");
    //give your title a value
    note_titel.innerHTML = title;
    //add your titel to your note
    newNote.appendChild(note_title);


    //create the remove link
    let a = document.createElement("a");
    //add a class to your remove link
    a.setAttribute("class", "card-remove");
    //add a "href" to your link so it will become a link and give it a direction
    a.setAttribute("href", "#");
    //give your link a value
    a.innerHTML = "remove";
    //add your link to your note
    newNote.appendChild(a);

    //1.voert functie remove() uit om het te verwijderen
    //2.bind=> vebind het met de geselecteerde note en wordt alleen daarop uitgevoerd
    a.addEventListener('click', this.remove.bind(newNote));

    //return de volledige note
    return newNote;
  }
  
  add(){
    //add the new notes to the other notes
    document.querySelector(".notes").appendChild(this.element)
  }
  
  saveToStorage(){
    
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();


