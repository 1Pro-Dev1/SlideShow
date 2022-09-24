
let imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

let imgDisplay = document.querySelector("img");
let h2 = document.querySelector("h2")

let slideNum = 0;

let next = document.querySelector(".next");
let before = document.querySelector(".before");

next.addEventListener("click", () =>{
    if (slideNum == 3) {
        slideNum = 0;
        imgDisplay.src = `imgs/${imgs[slideNum]}`
        h2.innerText = slideNum +1
    } else {
        slideNum += 1;
        imgDisplay.src = `imgs/${imgs[slideNum]}`
        h2.innerText = slideNum +1
    }
})


before.addEventListener("click", () =>{
    if (slideNum == 0) {
        slideNum = 3;
        imgDisplay.src = `imgs/${imgs[slideNum]}`
        h2.innerText = slideNum +1
    } else {
        slideNum -= 1;
        imgDisplay.src = `imgs/${imgs[slideNum]}`
        h2.innerText = slideNum +1
    }
})

setInterval(function () {
    if (slideNum == 3) {
        slideNum = 0;
        imgDisplay.src = `imgs/${imgs[slideNum]}`
        h2.innerText = slideNum +1
    } else {
        slideNum += 1;
        imgDisplay.src = `imgs/${imgs[slideNum]}`
        h2.innerText = slideNum +1
    }
}, 2500)

