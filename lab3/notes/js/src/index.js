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
    //verwijder het geselecteerde object 
    this.parentNode.removeChild(this);
    //get the saved notes
    let storedtitle = JSON.parse(localStorage.getItem("note"));
    //Get the title by tag name
    let cardtitle = this.getElementsByTagName("p")[0].innerHTML;
    //Get the index of the title
    let index = storedtitle.indexOf(cardtitle);
    //als de variable bestaat
    if (index != -1) {
    //splice() past de inhoud van een array aan door bestaande elementen te verwijderen en/of nieuwe elementen toe te voegen.
    storedtitle.splice(index, 1);
    //voegt het toe aan de local storage met setItem
    localStorage.setItem("note", JSON.stringify(storedtitle));
    };

}

}
class App{
  constructor() {
      console.log("👊🏼 The Constructor!");
      
      //get the add note button
      let btnAdd = document.querySelector("#btnAddNote");
      //add addEventListener to the button 
      //add the createNote function 
      btnAdd.addEventListener("click", this.createNote.bind(this));


      //get the input 
      let addNote = document.getElementById("txtAddNote");
        // let it work with enter
        addNote.addEventListener("keyup", function (e) {
            if (e.keyCode === 13) {
                btnAdd.click();
            }
            e.preventDefault();
        });
        //refereert naar een functie
        this.loadNotesFromStorage();

  }

  loadNotesFromStorage() {
    //als het uit note uit de localstorage komt dan...
    if (localStorage.getItem("note")) {
      //put the data in a let 
      let titlesStored = JSON.parse(localStorage.getItem("note"));
      //make a for loop to loop all the notes 
      for (let i = 0; i < titlesStored.length; i++) {
        let noteGetFromStorage = new Note(titlesStored[i]);
        //add this to the function add()
        noteGetFromStorage.add();
      }
    } else {

      console.log("something went wrong");
    }
 
  }

  createNote() {
    //get the value from the textfield
    let addNote = document.getElementById("txtAddNote").value;

    //if the textfield is empty... and has the same type
    if (addNote !== "") {
        
        let note = new Note(addNote);
        //call the functions
        note.add();
        note.saveToStorage();
        this.resetInputField();
    } 
    
    else {
        //print in console 
        console.log('string is empty');
          }

  }

  resetInputField() {
    //set the text input to an empty string
   document.querySelector("#txtAddNote").value = '';
  }
}

let app = new App();