const endDate = "18 May 2024 12:20 PM"

document.getElementById("end-Date").innerHTML = endDate;

const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end)
    // console.log(now)
    const diff = (end- now) / 1000;
if(diff < 0) return

    // console.log(diff);
    // console.log(Math.floor(diff / 3600 / 24)); days calculation
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // console.log(Math.floor(diff / 3600) % 24); hours calculation
    inputs[1].value = Math.floor(diff / 3600 ) % 24;
    // console.log(Math.floor(diff / 60) % 60); minutes calculation
    inputs[2].value = Math.floor(diff / 60 ) % 60;
    // console.log(Math.floor(diff % 60)); second count
    inputs[3].value = Math.floor(diff % 60);


} 

clock()

setInterval(
    () => {
        clock()
    },
    1000
)