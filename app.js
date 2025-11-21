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
 const reportMain = document.getElementById("report-main");
 const cardHeadReport = document.getElementById("card-head-report");
 const dailyA = document.getElementById("daily-a");
const weeklyA = document.getElementById("weekly-a");
const monthlyA = document.getElementById("monthly-a");



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
dailyA.style.color = "#ffffff";
weeklyA.style.color = "hsl(236, 100%, 87%)";
monthlyA.style.color ="hsl(236, 100%, 87%)";

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
weeklyA.style.color = "#ffffff";
dailyA.style.color = "hsl(236, 100%, 87%)";
monthlyA.style.color ="hsl(236, 100%, 87%)";
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
monthlyA.style.color = "#ffffff";
weeklyA.style.color = "hsl(236, 100%, 87%)";
dailyA.style.color ="hsl(236, 100%, 87%)";
})

function resetColor(element, color) {
    element.style.backgroundColor = color;
}
// <-------------------work hover---------------------->
workEllipsis.addEventListener('mouseover', () => {
    resetColor(workCardMain, "hsl(235, 46%, 20%)");
});

workEllipsis.addEventListener('mouseout', () => {
    resetColor(workCardMain, "hsl(235, 45%, 61%)");
});
workCardMain.addEventListener('mouseleave', () => {
 resetColor(workCardMain, "hsl(235, 46%, 20%)")
});
workCardMain.addEventListener('mouseenter', () => {
 resetColor(workCardMain, "hsl(235, 45%, 61%)")
});

// <-------------------play hover---------------------->

playEllipsis.addEventListener('mouseover', () => {
    resetColor(playCardMain, "hsl(235, 46%, 20%)");
});

playEllipsis.addEventListener('mouseout', () => {
    resetColor(playCardMain, "hsl(235, 45%, 61%)");
});
playCardMain.addEventListener('mouseleave', () => {
 resetColor(playCardMain, "hsl(235, 46%, 20%)")
});
playCardMain.addEventListener('mouseenter', () => {
 resetColor(playCardMain, "hsl(235, 45%, 61%)")
});

// <-------------------study hover---------------------->


studyEllipsis.addEventListener('mouseover', () => {
    resetColor(studyCardMain, "hsl(235, 46%, 20%)");
});

studyEllipsis.addEventListener('mouseout', () => {
    resetColor(studyCardMain, "hsl(235, 45%, 61%)");
});
studyCardMain.addEventListener('mouseleave', () => {
 resetColor(studyCardMain, "hsl(235, 46%, 20%)")
});
studyCardMain.addEventListener('mouseenter', () => {
 resetColor(studyCardMain, "hsl(235, 45%, 61%)")
});

// <-------------------exercise hover---------------------->

exerciseEllipsis.addEventListener('mouseover', () => {
    resetColor(exerciseCardMain, "hsl(235, 46%, 20%)");
});

exerciseEllipsis.addEventListener('mouseout', () => {
    resetColor(exerciseCardMain, "hsl(235, 45%, 61%)");
});
exerciseCardMain.addEventListener('mouseleave', () => {
 resetColor(exerciseCardMain, "hsl(235, 46%, 20%)")
});
exerciseCardMain.addEventListener('mouseenter', () => {
 resetColor(exerciseCardMain, "hsl(235, 45%, 61%)")
});

// <-------------------social hover---------------------->

socialEllipsis.addEventListener('mouseover', () => {
    resetColor(socialCardMain, "hsl(235, 46%, 20%)");
});

socialEllipsis.addEventListener('mouseout', () => {
    resetColor(socialCardMain, "hsl(235, 45%, 61%)");
});
socialCardMain.addEventListener('mouseleave', () => {
 resetColor(socialCardMain, "hsl(235, 46%, 20%)")
});
socialCardMain.addEventListener('mouseenter', () => {
 resetColor(socialCardMain, "hsl(235, 45%, 61%)")
});

// <-------------------selfCare hover---------------------->

selfCareEllipsis.addEventListener('mouseover', () => {
    resetColor(selfCareCardMain, "hsl(235, 46%, 20%)");
});

selfCareEllipsis.addEventListener('mouseout', () => {
    resetColor(selfCareCardMain, "hsl(235, 45%, 61%)");
});
selfCareCardMain.addEventListener('mouseleave', () => {
 resetColor(selfCareCardMain, "hsl(235, 46%, 20%)")
});
selfCareCardMain.addEventListener('mouseenter', () => {
 resetColor(selfCareCardMain, "hsl(235, 45%, 61%)")
});

// <-------------------report hover---------------------->
cardHeadReport.addEventListener('mouseover', () => {
    resetColor(reportMain, "hsl(235, 46%, 20%)");
});

cardHeadReport.addEventListener('mouseout', () => {
    resetColor(reportMain, "hsl(235, 45%, 61%)");
});
reportMain.addEventListener('mouseleave', () => {
 resetColor(reportMain, "hsl(235, 46%, 20%)")
});
reportMain.addEventListener('mouseenter', () => {
 resetColor(reportMain, "hsl(235, 45%, 61%)")
});
