const noteContainer = document.querySelector('.notes-container');

showNoteBtn = document.querySelector('#showNotes');

const createBtn = document.querySelector('.btn');

let notes = document.querySelector('.input-box');


showNoteBtn.addEventListener('click', showNotes)

createBtn.addEventListener('click', ()=> {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', true);
    img.src = 'img/delete.svg' 
    noteContainer.appendChild(inputBox).append(img);
})

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
// showNotes();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML)
}


noteContainer.addEventListener('click', (e) => {
    
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');

         notes.forEach(nt => {
            nt.onkeyup = () => {
                updateStorage();
            }
        });
        
    }

})


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
}
)

















































































































































































































































    

  