setInterval(() => {
    date = new Date();
    hour = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    // console.log(sec)
    hourRotation = 30*hour + min/2
    minRotation = 6*min
    secRotation = 6*sec
    
    let h = document.getElementById("hour")
    let m = document.getElementById("min")
    let s = document.getElementById("sec")
    h.style.transform = `rotate(${hourRotation}deg)`
    m.style.transform = `rotate(${minRotation}deg)`
    s.style.transform = `rotate(${secRotation}deg)`
}, 1000);