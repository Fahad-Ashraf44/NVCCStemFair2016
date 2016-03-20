function renderTime(){
var currentTime = new Date();
var diem = "Am";
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();

if(h==0){
    h=12;
}
else if(h>12){
    h = h-12;
    diem = "PM";
}
if(h<10){
    h = "0"+h;
}
if(m<10){
    m = "0"+m;
}
if(h<10){
    s = "0"+s;
}

document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + diem;
  var t = setTimeout(renderTime, 1000);
}
