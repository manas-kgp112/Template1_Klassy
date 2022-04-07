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

// creating slideshow for Menu page
// let menu_images = [];
let j = 0;
menu_images = document.getElementsByClassName("card_image_slideshow_menu");

let right_slider_menu = document.getElementById("right_arrow_menu");
let left_slider_menu = document.getElementById("left_arrow_menu");

right_slider_menu.onclick = function () {
    move_right_images_menu()
}

function move_right_images_menu() {
    if (j < 1) {
        j++;
    menu_images[j+4].style.display = "block";
    menu_images[j-1].style.display = "none";
    } else {
        j++;
        menu_images[j-2].style.display = "block";
        menu_images[j-1].style.display = "none";
    }
}




// transition effect on chef's social media handles
let card = document.getElementsByClassName("chef_gallery_card");
let card_social_media = document.getElementsByClassName("chef_social_media");
let card_color = document.getElementsByClassName("chef_gallery_card_image_color_overlay");
let card_text = document.getElementsByClassName("chef_gallery_card_text");
let card_head = document.getElementsByTagName("h4");

for (let i = 0; i < card.length; i++) {
    card[i].onmouseover = function () {
        card_color[i].style.backgroundColor = "black";
        card_color[i].style.opacity = "0.7";
        card[i].style.borderColor = "#fb5849"
        card_head[i+1].style.color = "#fb5849"
        card_social_media[i].style.display = "flex";
    } 
}

for (let i = 0; i < card.length; i++) {
    card[i].onmouseout = function () {
        card_color[i].style.backgroundColor = "";
        // card_color[i].style.opacity = "0.7";
        card[i].style.borderColor = "#afafaf";
        card_head[i+1].style.color = "black";
        card_social_media[i].style.display = "none";
    } 
}
























































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
