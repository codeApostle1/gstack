const noteContainer = document.querySelector('.notes-container');

const createBtn = document.querySelector('.btn');

let notes = document.querySelector('.input-box');

createBtn.addEventListener('click', ()=> {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', true);
    img.src = 'img/delete.svg' 
    noteContainer.appendChild(inputBox).append(img);
})

function showNotes(){
    
}

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML)
}


noteContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target === 'p') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateStorage();
            }
        })

    } 
    
} )