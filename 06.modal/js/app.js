// catch items
let openModalBtn = document.getElementById('btn');
let modalDisplay = document.querySelector('.modal-display');
let modalArea = document.querySelector('.modal-area');
let deleteModalBtn = document.getElementById("delete-btn");

// listeners
openModalBtn.addEventListener('click', () => {
    modalDisplay.style.display = 'block';
})

// delete modal after clcik delete icon
deleteModalBtn.addEventListener('click', () => {
    modalDisplay.style.display = 'none';
})

// delete modal after click overly area
modalArea.addEventListener('click', () => {
    modalDisplay.style.display = 'none';
})