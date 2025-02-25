const images = [
    {
        image: 'assets/img/01.jpg',
        title: 'Svezia',
        text: 'Scandinavia\'s blend of nature and innovation.',
    },
    {
        image: 'assets/img/02.jpg',
        title: 'Norvegia',
        text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
    },
    {
        image: 'assets/img/03.jpg',
        title: 'Alaska',
        text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
    },
    {
        image: 'assets/img/04.jpg',
        title: 'Gran Canyon',
        text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
    },
    {
        image: 'assets/img/05.jpg',
        title: 'Skyrim',
        text: 'Epic Nordic fantasy with dragons and ancient magic.',
    }
];
const imageContainerEl = document.querySelector(".imageContainer")
console.log(imageContainerEl);
const nextEl = document.querySelector(".next")
const prevEl = document.querySelector(".prev")
const autoEl = document.querySelector(".auto")
const stopEl = document.querySelector(".stop")
const thumbnailsEl = document.querySelector(".thumbnails")
//declare counter and auto(variable for set interval)
let counter = 0
let auto
//create a markup Function
addMarkup(images)
miniCard(images)

nextEl.addEventListener("click", () => {
    play()

})
prevEl.addEventListener("click", () => {
    preview()
})

autoEl.addEventListener("click", () => {
    auto = setInterval(play, 1000)
})
stopEl.addEventListener("click", () => {
    clearInterval(auto)
})

//funcion

//add markup in page
function addMarkup(arr) {
    for (let i = 1; i < arr.length; i++) {
        imageContainerEl.insertAdjacentHTML('beforeend', `<img src="${arr[i].image}" alt="">`)


    }

}
function miniCard(arr) {
    //add html
    for (let i = 0; i < arr.length; i++) {
        thumbnailsEl.insertAdjacentHTML('beforeend', `
            <div class="col-2">
                <img src="${arr[i].image}" alt="">
            </div>`)
        //change image on click
        thumbnailsEl.children[i].addEventListener("click", () => {
            console.log("clickkkkk");
            imageContainerEl.children[counter].classList.remove("active")
            counter = i
            imageContainerEl.children[counter].classList.add("active")
        })
    }

}

//remove and add class "active"
const play = () => {
    imageContainerEl.children[counter].classList.remove("active")
    counter++
    if (counter >= images.length) {
        counter = 0
    }
    imageContainerEl.children[counter].classList.add("active")

}
const preview = () => {
    imageContainerEl.children[counter].classList.remove("active")
    counter--
    if (counter <= 0) {
        counter = images.length - 1
    }

    imageContainerEl.children[counter].classList.add("active")
}




