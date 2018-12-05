AOS.init();

var time = document.getElementById('time');

window.addEventListener('load', getTime);

function getTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    time.innerHTML = hour+":"+minutes+":"+seconds;

    var s = setTimeout(getTime, 500);
};

function checkTime(i){
    if(i < 10){
        i = '0' + i;
    }
    return i;
}