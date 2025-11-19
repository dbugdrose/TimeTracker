import data from "./data.json" with {type: "json"};


const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
let workCurrent = document.getElementById("work-current");
 let workPrevious = document.getElementById("work-previous");
 let playCurrent = document.getElementById("play-current");
 let playPrevious = document.getElementById("play-previous");
 let studyCurrent = document.getElementById("study-current");
 let studyPrevious = document.getElementById("study-previous");
 let exerciseCurrent = document.getElementById("exercise-current");
 let exercisePrevious = document.getElementById("exercise-previous");
 let socialCurrent = document.getElementById("social-current");
 let socialPrevious = document.getElementById("social-previous");
 let selfCareCurrent = document.getElementById("self-care-current");
 let selfCarePrevious = document.getElementById("self-care-previous");

// <----------------daily---------------------->
daily.addEventListener("click", () => {
workCurrent.innerText = (data[0].timeframes.daily.current + "hrs");
workPrevious.innerText = ("Yesterday - " + data[0].timeframes.daily.previous + "hrs");
playCurrent.innerText = (data[1].timeframes.daily.current + "hrs");
playPrevious.innerText = ("Yesterday - " + data[1].timeframes.daily.previous + "hrs");
studyCurrent.innerText = (data[2].timeframes.daily.current + "hrs");
studyPrevious.innerText = ("Yesterday - " + data[2].timeframes.daily.previous + "hrs");
exerciseCurrent.innerText = (data[3].timeframes.daily.current + "hrs");
exercisePrevious.innerText = ("Yesterday - " + data[3].timeframes.daily.previous + "hrs");
socialCurrent.innerText = (data[4].timeframes.daily.current + "hrs");
socialPrevious.innerText = ("Yesterday - " + data[4].timeframes.daily.previous + "hrs");
selfCareCurrent.innerText = (data[5].timeframes.daily.current + "hrs");
selfCarePrevious.innerText = ("Yesterday - " + data[5].timeframes.daily.previous + "hrs");
})

// <----------------weekly---------------------->
weekly.addEventListener("click", () => {
workCurrent.innerText = (data[0].timeframes.weekly.current + "hrs");
workPrevious.innerText = ("Last Week - " + data[0].timeframes.weekly.previous + "hrs");
playCurrent.innerText = (data[1].timeframes.weekly.current + "hrs");
playPrevious.innerText = ("Last Week - " + data[1].timeframes.weekly.previous + "hrs");
studyCurrent.innerText = (data[2].timeframes.weekly.current + "hrs");
studyPrevious.innerText = ("Last Week - " + data[2].timeframes.weekly.previous + "hrs");
exerciseCurrent.innerText = (data[3].timeframes.weekly.current + "hrs");
exercisePrevious.innerText = ("Last Week - " + data[3].timeframes.weekly.previous + "hrs");
socialCurrent.innerText = (data[4].timeframes.weekly.current + "hrs");
socialPrevious.innerText = ("Last Week - " + data[4].timeframes.weekly.previous + "hrs");
selfCareCurrent.innerText = (data[5].timeframes.weekly.current + "hrs");
selfCarePrevious.innerText = ("Last Week - " + data[5].timeframes.weekly.previous + "hrs");
})
// <----------------monthly---------------------->
monthly.addEventListener("click", () => {
workCurrent.innerText = (data[0].timeframes.monthly.current + "hrs");
workPrevious.innerText = ("Last Month - " + data[0].timeframes.monthly.previous + "hrs");
playCurrent.innerText = (data[1].timeframes.monthly.current + "hrs");
playPrevious.innerText = ("Last Month - " + data[1].timeframes.monthly.previous + "hrs");
studyCurrent.innerText = (data[2].timeframes.monthly.current + "hrs");
studyPrevious.innerText = ("Last Month - " + data[2].timeframes.monthly.previous + "hrs");
exerciseCurrent.innerText = (data[3].timeframes.monthly.current + "hrs");
exercisePrevious.innerText = ("Last Month - " + data[3].timeframes.monthly.previous + "hrs");
socialCurrent.innerText = (data[4].timeframes.monthly.current + "hrs");
socialPrevious.innerText = ("Last Month - " + data[4].timeframes.monthly.previous + "hrs");
selfCareCurrent.innerText = (data[5].timeframes.monthly.current + "hrs");
selfCarePrevious.innerText = ("Last Month - " + data[5].timeframes.monthly.previous + "hrs");
})