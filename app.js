const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

fetch("./data.json") 
.then(response => {
    return response.json();
})

.then(data => {
    const workCurrent = document.getElementById('work-current-parent')
    console.log(data[0].timeframes.daily.current)
    for (let i = 0; i < data[0].timeframes.daily.current.length; i++){
        const workdata = data.title[i];
        const span = document.createElement('span');
    span.innerHTML = `
    <span>${work.current}</span>`;
    }
    workCurrent.appendChild(span)
})

daily.addEventListener("click", () => {


})