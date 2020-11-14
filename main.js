
const menuShow = document.querySelector(".menu-show")
const close = document.querySelector("#close")

const menu = document.querySelector(".menu")
const header = document.getElementById("header")
const logoIMG = document.getElementById("logo-img")

let open = false
//  Keep It Simple, Stupid! KISS xD!!

menuShow.addEventListener("click", function () {
    if (open) {
        menu.style.display = "none"
        header.style.background = "white"
        close.src = "./access/images/icon-hamburger.svg"
        logoIMG.src = "./access/images/logo-bookmark.svg"
        open = false
    } else {
        close.src = "./access/images/icon-close.svg"
        header.style.background = "rgba(37, 43, 70,.9) "
        logoIMG.src = "./access/images/logo-bookmark-dark.svg"
        menu.style.display = "block"
        open = true
    }
})


