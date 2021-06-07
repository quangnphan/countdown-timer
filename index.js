const items = document.querySelectorAll('.timer span');
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
//check year month then always add 9 days from today
const futureDate = new Date(tempYear, tempMonth, tempDay + 9, 0, 0, 0);

const futureTime = futureDate.getTime();
function getRemaindingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    //1s = 1000s
    //1m = 60s
    //1hr = 60mi
    //1d = 24hrs
    //values in ms
    const oneDay = 24 * 60 * 60 *1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    //calculte all values
    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //set values array
    const values = [days,hours,minutes,seconds];
    //add 0 before each item
    function format(item){
        if(item<10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t<0){
        clearInterval(countdown);
    }
}
//countdown
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();