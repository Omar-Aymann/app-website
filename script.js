let textHeader = document.getElementById("texts");    
//let count = 0;
let speed = 50;
let slideIndex = 1;
let i = 0;
let txt = "Hire the Best Designers now";


/**
 * we want to print a letter from the whole string every one second
 * 
 * break the proplem:
 * 1- split the text in to letters
 * 2- 
 */
//console.log(time);
//console.log(i);


/*
(function printLetters() {
    
    if(i < txt.length) {
        textHeader.innerHTML += txt[i];
        i++;
        setTimeout(printLetters, speed);
    }
    
})();*/
cus(1)
function printLetters() {
    let txtletters = txt.slice(0, ++i);

    if(txtletters.length < txt.length)  {
    textHeader.innerHTML = txtletters;
    setTimeout(printLetters, speed);

    }
textHeader.innerHTML = txtletters;
}
printLetters();
textHeader.innerHTML += "<span></span>";


$(".burgur").click(() => {
    $(".nav-links").toggleClass("slide")
    $(".bar1").toggleClass("rot")
    $(".bar3").toggleClass("nrot")
    $(".bar2").toggleClass("nonblockd")
})




function plusSlide(n) {
    
    cus(slideIndex += n);

};

function cus(n) {
const customers = document.getElementsByClassName("cus");

    if (customers.length < n) {slideIndex = 1}

    if (n < 1) {slideIndex = customers.length}

    for (i = 0; i < customers.length; i++)
    {
        customers[i].style.display = "none";
        
    }
    customers[slideIndex-1].style.display = "flex";
};







function runit() {
    plusSlide(1)
    };
    setInterval(runit, 3000);