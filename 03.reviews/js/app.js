// local data
const data = [
    {
        name:'Torikus Sadik',
        occupation:'JavaScript Developer',
        desc:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambary pop-up. Shaman humblebarg pickled coloring book salbia hoodie, cold-pressed four dollar toast everyday carry."
    },
    {
        name:'Fahim Morshed',
        occupation:'Java Developer',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium in quam harum fugit, voluptate velit accusamus perferendis qui. Aliquam perspiciatis beatae architecto mollitia quos fuga necessitat."
    },
    {
        name:'Shakil Haque',
        occupation:'Graphics Designer',
        desc:"Bicycle rights tumeric chartreuse before they sold out chambary pop-up. lorem ipsum lorem ipsu Shaman humblebarg pickled coloring book salbia hoodie, cold-pressed four dollar toast everyday carry lorem ipusum."
    }
]


// catch items
let showReviewContent = document.querySelector('.review-content');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let randomBtn = document.getElementById('random');



// initial index
let currentItem = 0;
function showContent(item){
    let reveiw = data[item];
    showReviewContent.innerHTML = `
    <h5>${reveiw.name}</h5>
    <h6>${reveiw.occupation}</h6>
    <p>${reveiw.desc}</p>

`
}

// next button listeners
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > data.length - 1){
        currentItem = 0;
    }
    showContent(currentItem);
})



// prev button listeners
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = data.length-1;
    }
    showContent(currentItem);
})


// random button listeners
randomBtn.addEventListener("click", () => {
    const rn = Math.floor(Math.random() * data.length-1);
    showContent(rn);
})

