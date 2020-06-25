const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*360/12) + (min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;


function runTheClock() {
    
    //(360/12)/3600sec
    hrPositon = hrPosition+(30/360);
    //one sixteeth of the dgree of the second hand:(1/60)*6
    minPosition = minPosition+(6/60);
    //add no of degrees to display one additional second(6degrees)
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//1000 milisecond in a second - runTheClock() every second
var interval = setInterval(runTheClock, 1000); 