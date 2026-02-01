/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let y = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    console.log(today);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    document.querySelector("#date").innerHTML = `${month}/${day}/${y}`;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



