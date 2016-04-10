function renderTime() {
    var currentTime = new Date();
    var diem = "AM";
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();

    if (h == 0)
        { //if time is 0, its 12
            h = 12;
        }
    else if (h > 12)
        { //if time is greater than 12 take 12 away
            h = h - 12; // if h= 13, h=1
            diem = "PM";
        }
    if (h < 10)
        { //if hour is single digit, add a 0 in front
            h = "0" + h;
        }
    if (m < 10)
        { //if minute is single digit, add a 0 in front
            m = "0" + m;
        }


    document.getElementById('clock').innerHTML = h + ":" + m + " " + diem; // find clock element and concatenate time

   var t = setTimeout(renderTime, 1000); //keeps the clock moving
}
