
const share_con = document.querySelector(".share-container");
const share_button = document.querySelector('.share-button');
const foot = document.querySelector(".no-share-click");
const share_links = document.querySelector(".share-click");
const post_share = document.querySelector(".post-share-button");
const main = document.querySelector(".main");

let yesShare = false;

const x = window.matchMedia("(min-width: 55rem)");
const y = window.matchMedia("(max-width: 55rem)");

const update_screen = (event) => {

    if (x.matches && yesShare == true) {
        foot.style.display = "flex";
        share_links.style.display = "flex";
        //  main.style.backgroundColor = "black";
    }
    else if (x.matches && yesShare == false) {
        foot.style.display = "flex";
        share_links.style.display = "none";
        // main.style.backgroundColor = "black";
    }
    else if (y.matches && yesShare == true) {
        share_links.style.display = "flex";
        foot.style.display = "none";
    }
    else if (y.matches && yesShare == false) {
        foot.style.display = "flex";
        share_links.style.display = "none";
    }
};

const clickShare = (event) => {
    yesShare = true;
    update_screen();
};

x.addEventListener("change", update_screen);
y.addEventListener("change", update_screen);

update_screen();

share_button.addEventListener('click', clickShare);


