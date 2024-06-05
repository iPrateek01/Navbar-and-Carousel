document.addEventListener("DOMContentLoaded",function(){
const hambutton = document.querySelector(".hambutton")
const navmenu = document.querySelector(".navmenu")
hambutton.addEventListener("click", function(){
    // hambutton.classList.toggle("active")
    navmenu.classList.toggle("active")
})

document.querySelectorAll(".links").forEach(element => {
    element.addEventListener("click", function(){
        navmenu.classList.remove("active")
    })
});

let currentindex = 0 
const images= document.querySelectorAll(".carouselimage")
const totalimages = images.length

function shownextimage(){
    images[currentindex].classList.remove("active")
    currentindex = (currentindex + 1) % totalimages
    images[currentindex].classList.add("active")
}
const shownext = document.querySelector(".scrollright")
const showprev = document.querySelector(".scrollleft")

function showprevimage(){
    images[currentindex].classList.remove("active")
    currentindex = (currentindex - 1 + totalimages) % totalimages
    images[currentindex].classList.add("active")
}

shownext.addEventListener("click", shownextimage)
showprev.addEventListener("click", showprevimage)



setInterval(shownextimage, 2000)
})
