
window.onload = function ClockChanger(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log(hours + ' | ' + minutes + ' | ' + seconds);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    var clockFace = hours + ' | ' + minutes + ' | ' + seconds;
    document.getElementById('clock').innerHTML = clockFace;
    setTimeout(function() {
      ClockChanger();
    }, 1000);
    document.body.style.background = '#20B2AA' ;
    var hexColor = '#' + hours + minutes + seconds;
    document.body.style.background = hexColor;
}

//ClockChanger();
