// catch item
let barIcon = document.querySelector('.bar-icon');
let sidebarArea = document.querySelector('.sidebar-whole-area');
let barArea = document.querySelector(".bar-area")
let removeBtn = document.getElementById("delete-btn");

// barIcon listener 
barIcon.addEventListener('click', () => {
    showSidebar();
})

// removebtn listener
removeBtn.addEventListener('click', () => {
    removeSidebar();
})

// show sidebar 
function showSidebar(){
    sidebarArea.style.display = 'block';
    barArea.style.display='none';
}

// remove sidebar
function removeSidebar(){
    sidebarArea.style.display = 'none';
    barArea.style.display='block';
}