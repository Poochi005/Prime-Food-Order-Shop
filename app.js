// showing navbar when click on mobile view
const mobile = document.querySelector('.menu-toogle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("active");
    mobileLink.classList.toggle("active");
});

// close menu when click
mobileLink.addEventListener("click", function() {
    const menubars = document.querySelector("is-active");
    if(window.innerWidth <= 768 && menubars) {
        mobile.classList.toggle("active");
        mobileLink.classList.toggle("active");
    }
})

// move the menu to right and left when click back and naxt
var step=100;
var stepFilter=160;
var scrolling = true;

$(".back").bind("click", function() {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
})

$(".next").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
})


// when click back and next on menu filters
$(".back-menus").bind("click", function() {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    })
});

$(".next-menus").bind("click",function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    })
})







