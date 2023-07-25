let h = window.innerHeight;

alert("Use keyboard to scroll for smooth effect rigtnow. I'm working on smooth scrolling through mouse too :)")
var book7 = document.getElementById('book7');
var book6 = document.getElementById('book6');
var book5 = document.getElementById('book5');
var book4 = document.getElementById('book4');
var book3 = document.getElementById('book3');
var book2 = document.getElementById('book2');
var book1 = document.getElementById('book1');


var changeBg = document.getElementsByClassName("main");
changeBg[0].style.backgroundColor = "#ff608c";
window.onscroll = function (event) {
    var scroll = window.scrollY;
    if (scroll < h - (h / 3)) {
        changeBg[0].style.backgroundColor = "#ff608c";
        book7.classList.add("bold");
        book6.classList.remove("bold");
    } else if (scroll >= h - (h / 3) && scroll < 2 * h - (h / 3)) {
        changeBg[0].style.background = " white";
        book7.classList.remove("bold");
        book6.classList.add("bold");
        book5.classList.remove("bold");
    } else if (scroll >= 2 * h - (h / 3) && scroll < 3 * h - (h / 3)) {
        changeBg[0].style.backgroundColor = '#00c1b5';
        book6.classList.remove("bold");
        book5.classList.add("bold");
        book4.classList.remove("bold");
    } else if (scroll >= 3 * h - (h / 3) && scroll < 4 * h - (h / 3)) {
        changeBg[0].style.backgroundColor = '#ff651a';
        book5.classList.remove("bold");
        book4.classList.add("bold");
        book3.classList.remove("bold");
    } else if (scroll >= 4 * h - (h / 3) && scroll < 5 * h - (h / 3)) {
        changeBg[0].style.backgroundColor = '#ffbe00';
        book4.classList.remove("bold");
        book3.classList.add("bold");
        book2.classList.remove("bold");
    } else if (scroll >= 5 * h - (h / 3) && scroll < 6 * h - (h / 3)) {
        changeBg[0].style.backgroundColor = '#1d3fbb';
        book3.classList.remove("bold");
        book2.classList.add("bold");
        book1.classList.remove("bold");
    } else {
        changeBg[0].style.backgroundColor = '#e30512';
        book2.classList.remove("bold");
        book1.classList.add("bold");

    }
}

window.addEventListener("wheel", (event) => {
    console.log(event);
})
var wheelDistance = function (evt) {
    // wheelDelta indicates how
    // Far the wheel is turned
    var w = evt.wheelDelta;

    // Returning normalized value
    return w / 120;
}

// Adding event listener for some element
somEl.addEventListener("mousewheel", wheelDistance);