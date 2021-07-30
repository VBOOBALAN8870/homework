
const hrs= document.querySelector('#hr')
const min= document.querySelector("#min")
const sec1= document.querySelector("#sec")

setInterval(()=>{
    let date  = new Date();

    let mm = date.getMinutes()*6;
    console.log(" mintue degree ",mm);
    let sec = date.getSeconds()*6;
    let hr =  date.getHours()*30;
    min.style.transform = `rotatez(${mm+90}deg)`
    sec1.style.transform = `rotatez(${sec+90}deg)`
    hrs.style.transform = `rotatez(${hr+90}deg)`

})

// sec.style.transform = 