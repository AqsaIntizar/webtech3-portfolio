class Note {
  constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
  }

  createElement(title){
      //create a note
      let newNote = document.createElement('div');
      //give the note a class
      newNote.setAttribute("class", "card");


      //Create a title with a p tag
      let noteTitle = document.createElement("p");
      //Give the title a class
      noteTitle.setAttribute("class", "note-title");
      //set the value from the title to the input
      noteTitle.innerHTML = title;
      //add the title to note
      newNote.appendChild(noteTitle);


      //create a remove link
      let a = document.createElement('a');
      //Give the link a href to give it a direction
      a.setAttribute("href", "#");
      //Give the link a class
      a.setAttribute("class", "card-remove");
      //Give the link a value
      a.innerHTML = "Remove";
      //add the link to new note
      newNote.appendChild(a);
      //1.voert functie remove() uit om het te verwijderen
      //2.bind=> vebind het met de geselecteerde note en wordt alleen daarop uitgevoerd
      a.addEventListener('click', this.remove.bind(newNote));

      //return de volledige note (met de titel en remove link)
      return newNote;
  }

  add(){
      //add the new note to the other notes 
      document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage(){

      //new array 
      let notesStorage = [];
      //een localStorage geraakt niet aan een array alleen aan een string
      let saveNote = JSON.parse(localStorage.getItem("note"));
      //Als het type en de waarde hetzelde zijn dan...
      if (localStorage.getItem("note") === null) {
          //push() adds an Item to the end of the array (het is een lege Array dus het voegt niks toe)
          notesStorage.push(this.title);
          //voegt het toe aan de local storage met setItem
          localStorage.setItem("note", JSON.stringify(notesStorage));
      } else {
          //push() adds an Item to the end of the array (voegt de input toe aan de array
          saveNote.push(this.title);
          //voegt het toe aan de local storage met setItem
          localStorage.setItem("note", JSON.stringify(saveNote));
      }
  }

  remove(){
    
}

}
class App{
  constructor() {
      console.log("👊🏼 The Constructor!");

  }

  loadNotesFromStorage() {

 
  }

  createNote() {

  }

  resetInputField() {

  }
}

let app = new App();