window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.padding = "20px 10px 0 10px";
        document.getElementById("navbar").style.backgroundColor = "rgba(31, 39, 51, 0.9)";
        document.getElementById("navbar").style.transition = "padding 1s";
        document.getElementById("navbar").style.opacity = "0.9";
    } else {
        document.getElementById("navbar").style.padding = "40px 10px 10px 10px";
        document.getElementById("navbar").style.backgroundColor = "";
        document.getElementById("navbar").style.opacity = "1";
    }
}