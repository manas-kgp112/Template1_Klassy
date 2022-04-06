let submenu = document.getElementById("submenu_nav");
let features_link = document.getElementById("features_nav");
features_link.onmouseover = function () {
    show_submenu()
}
features_link.onmouseout = function () {
    hide_submenu()
}
function hide_submenu() {
    submenu.style.display = "none";
}
function show_submenu() {
    submenu.style.display = "block";
}



// creating slideshow for home page
// let images_collection = document.getElementsByClassName("home-image");
var images = [];
var i = 0;
images[0] = document.getElementById("image_right_content_home1");
images[1] = document.getElementById("image_right_content_home2");
images[2] = document.getElementById("image_right_content_home3");

let left_image_shift = document.getElementById("left_arrow");
let right_image_shift = document.getElementById("right_arrow");

right_image_shift.onclick = function () {
    func_right_shift_img()
}
function func_right_shift_img() {
    if (i < images.length -1) {
        i++;
        images[i].style.display = "flex";
        images[i-1].style.display = "none";
    } else {
        i = 0;
        images[i].style.display = "flex";
        images[images.length-1].style.display = "none";
    }
}


left_image_shift.onclick = function () {
    func_left_shift_img()
}
function func_left_shift_img() {
    if (i > 0) {
        i--;
        images[i].style.display = "flex";
        images[i+1].style.display = "none";
    } else {
       i = images.length - 1; 
       images[i].style.display = "flex";
       images[images.length -1 - i].style.display = "none";
    }
}

// console.log(images.length);



























































// dumb animations
let submenu_link1 = document.getElementById("lola1");
let submenu_li1 = document.getElementById("submenu_link1");
let submenu_link2 = document.getElementById("lola2");
let submenu_li2 = document.getElementById("submenu_link2");
let submenu_link3 = document.getElementById("lola3");
let submenu_li3 = document.getElementById("submenu_link3");
let submenu_link4 = document.getElementById("lola4");
let submenu_li4 = document.getElementById("submenu_link4");

submenu_li1.onmouseover = function () {
    change_color1()
}
submenu_li1.onmouseout = function () {
    revert_color1()
}


submenu_li2.onmouseover = function () {
    change_color2()
}
submenu_li2.onmouseout = function () {
    revert_color2()
}


submenu_li3.onmouseover = function () {
    change_color3()
}
submenu_li3.onmouseout = function () {
    revert_color3()
}


submenu_li4.onmouseover = function () {
    change_color4()
}
submenu_li4.onmouseout = function () {
    revert_color4()
}

function change_color1() {
    submenu_link1.style.color = "#fb5849";
}
function revert_color1() {
    submenu_link1.style.color = "black";
}


function change_color2() {
    submenu_link2.style.color = "#fb5849";
}
function revert_color2() {
    submenu_link2.style.color = "black";
}


function change_color3() {
    submenu_link3.style.color = "#fb5849";
}
function revert_color3() {
    submenu_link3.style.color = "black";
}


function change_color4() {
    submenu_link4.style.color = "#fb5849";
}
function revert_color4() {
    submenu_link4.style.color = "black";
}
