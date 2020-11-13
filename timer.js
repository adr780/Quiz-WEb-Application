let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100*60))/1000);
let minute = Math.floor((time %(1000* 60))/1000*60);
let timex =0;

let mytime = setInterval(function() {
    seconds++;
    if(seconds < 59){
        seconds++;
    }else{
        minutes++;
        seconds = 0;
    }
    let formatted_sec =seconds < 10 `0${seconds}`, `0${seconds}`;
    let formatted_sec =minutes < 10 `0${minutes}`, `0${minutes}`;
    document.querySeelctor(".time").innerHTML = `${minutes} : ${seconds}`;

},1000)