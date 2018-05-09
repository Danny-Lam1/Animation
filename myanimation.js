var gao1 = document.getElementById("gaoone");
var gao2 = document.getElementById("gaotwo");
var xpos1 = 0;
var xpos2 = 1800;
var ypos1 = 300;
var ypos2 = 600;
var xstep1 = 3;
var xstep2 = -3;
var ystep1 = 0;
var ystep2 = 0;
var id = setInterval(movingyoung, 5);

function movingyoung() {
    if (xpos1 > 1800) {
        xstep1 = 0;
        ystep1 = 0.5;
    }
    if (xpos1 < 0) {
        xstep1 = 0;
        ystep1 = -0.5;
    }
    if (xpos2 > 1800) {
        xstep2 = 0;
        ystep2 = 0.5;
    }
    if (xpos2 < 0) {
        xstep2 = 0;
        ystep2 = -0.5;
    }
    if (ypos1 > 600) {
        ypos1 = 600;
        xstep1 = -3;
        ystep1 = 0;
    }
    if (ypos1 < 300) {
        ypos1 = 300;
        xstep1 = 3;
        ystep1 = 0;
    }
    if (ypos2 < 300) {
        ypos2 = 300;
        xstep2 = 3;
        ystep2 = 0;
    }
    if (ypos2 > 600) {
        ypos2 = 600;
        xstep2 = -3;
        ystep2 = 0;
    }
    if (xpos1 > (1800 / 2)) {
        gao1.style.width = "100px";
        gao1.style.height = "100px";
    } else if (xpos1 < (1850 / 2)) {
        gao1.style.width = "50px";
        gao1.style.height = "50px";
    }
    if (xpos2 < (1800 / 2)) {
        gao2.style.width = "100px";
        gao2.style.height = "100px";
    } else if (xpos2 > (1800 / 2)) {
        gao2.style.width = "50px";
        gao2.style.height = "50px";
    }

    xpos1 = xpos1 + xstep1;
    ypos1 = ypos1 + ystep1;
    xpos2 = xpos2 + xstep2;
    ypos2 = ypos2 + ystep2;

    gao1.style.left = xpos1 + "px";
    gao1.style.top = ypos1 + "px";
    gao2.style.top = ypos2 + "px";
    gao2.style.left = xpos2 + "px";


}
