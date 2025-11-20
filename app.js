import data from "./data.json" with {type: "json"};


const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const workCurrent = document.getElementById("work-current");
 const workPrevious = document.getElementById("work-previous");
 const playCurrent = document.getElementById("play-current");
 const playPrevious = document.getElementById("play-previous");
 const studyCurrent = document.getElementById("study-current");
 const studyPrevious = document.getElementById("study-previous");
 const exerciseCurrent = document.getElementById("exercise-current");
 const exercisePrevious = document.getElementById("exercise-previous");
 const socialCurrent = document.getElementById("social-current");
 const socialPrevious = document.getElementById("social-previous");
 const selfCareCurrent = document.getElementById("self-care-current");
 const selfCarePrevious = document.getElementById("self-care-previous");
 const workCardMain = document.getElementById("work-card-main");
 const workEllipsis = document.getElementById("work-ellipsis");
 const playCardMain = document.getElementById("play-card-main");
 const playEllipsis = document.getElementById("play-ellipsis");
 const studyCardMain = document.getElementById("study-card-main");
 const studyEllipsis = document.getElementById("study-ellipsis");
 const exerciseCardMain = document.getElementById("exercise-card-main");
 const exerciseEllipsis = document.getElementById("exercise-ellipsis");
 const socialCardMain = document.getElementById("social-card-main");
 const socialEllipsis = document.getElementById("social-ellipsis");
 const selfCareCardMain = document.getElementById("self-care-card-main");
 const selfCareEllipsis = document.getElementById("self-care-ellipsis");

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

function resetColor(element, color) {
    element.style.backgroundColor = color;
}
// <-------------------work hover---------------------->
workEllipsis.addEventListener('mouseover', () => {
    resetColor(workCardMain, "#1C204B");
});

workEllipsis.addEventListener('mouseout', () => {
    resetColor(workCardMain, "#33397A");
});
workCardMain.addEventListener('mouseleave', () => {
 resetColor(workCardMain, "#1C204B")
});
workCardMain.addEventListener('mouseenter', () => {
 resetColor(workCardMain, "#33397A")
});

// <-------------------play hover---------------------->

playEllipsis.addEventListener('mouseover', () => {
    resetColor(playCardMain, "#1C204B");
});

playEllipsis.addEventListener('mouseout', () => {
    resetColor(playCardMain, "#33397A");
});
playCardMain.addEventListener('mouseleave', () => {
 resetColor(playCardMain, "#1C204B")
});
playCardMain.addEventListener('mouseenter', () => {
 resetColor(playCardMain, "#33397A")
});

// <-------------------study hover---------------------->


studyEllipsis.addEventListener('mouseover', () => {
    resetColor(studyCardMain, "#1C204B");
});

studyEllipsis.addEventListener('mouseout', () => {
    resetColor(studyCardMain, "#33397A");
});
studyCardMain.addEventListener('mouseleave', () => {
 resetColor(studyCardMain, "#1C204B")
});
studyCardMain.addEventListener('mouseenter', () => {
 resetColor(studyCardMain, "#33397A")
});

// <-------------------exercise hover---------------------->

exerciseEllipsis.addEventListener('mouseover', () => {
    resetColor(exerciseCardMain, "#1C204B");
});

exerciseEllipsis.addEventListener('mouseout', () => {
    resetColor(exerciseCardMain, "#33397A");
});
exerciseCardMain.addEventListener('mouseleave', () => {
 resetColor(exerciseCardMain, "#1C204B")
});
exerciseCardMain.addEventListener('mouseenter', () => {
 resetColor(exerciseCardMain, "#33397A")
});

// <-------------------social hover---------------------->

socialEllipsis.addEventListener('mouseover', () => {
    resetColor(socialCardMain, "#1C204B");
});

socialEllipsis.addEventListener('mouseout', () => {
    resetColor(socialCardMain, "#33397A");
});
socialCardMain.addEventListener('mouseleave', () => {
 resetColor(socialCardMain, "#1C204B")
});
socialCardMain.addEventListener('mouseenter', () => {
 resetColor(socialCardMain, "#33397A")
});

// <-------------------selfCare hover---------------------->

selfCareEllipsis.addEventListener('mouseover', () => {
    resetColor(selfCareCardMain, "#1C204B");
});

selfCareEllipsis.addEventListener('mouseout', () => {
    resetColor(selfCareCardMain, "#33397A");
});
selfCareCardMain.addEventListener('mouseleave', () => {
 resetColor(selfCareCardMain, "#1C204B")
});
selfCareCardMain.addEventListener('mouseenter', () => {
 resetColor(selfCareCardMain, "#33397A")
});