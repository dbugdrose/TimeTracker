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


// fetch("./data.json") 
// .then(response => {
//     return response.json();
// })

// .then(data => {

// // ----------------------- Daily Time Frames ----------------------------------//

// //--------------work daily time frame---------------//
//     const workCurrentParent = document.getElementById('work-current-parent')
//     console.log(data[0].timeframes.daily.current)
//     const workCurrent = data[0].timeframes.daily.current;
//     const workCurrentSpan = document.createElement('span');
//     workCurrentSpan.innerHTML = `<span>${workCurrent}</span>hrs`;
//     workCurrentParent.appendChild(workCurrentSpan)

//     const workPreviousParent = document.getElementById('work-previous-parent')
//     console.log(data[0].timeframes.daily.previous)
//     const workPrevious = data[0].timeframes.daily.previous;
//     const workPreviousSpan = document.createElement('span');
//     workPreviousSpan.innerHTML = `<span>Last week - ${workPrevious}</span>hrs`;
//     workPreviousParent.appendChild(workPreviousSpan)

//     //--------------play daily time frame---------------//

//     const playCurrentParent = document.getElementById('play-current-parent')
//     console.log(data[1].timeframes.daily.current)
//     const playCurrent = data[1].timeframes.daily.current;
//     const playCurrentSpan = document.createElement('span');
//     playCurrentSpan.innerHTML = `<span>${playCurrent}</span>hrs`;
//     playCurrentParent.appendChild(playCurrentSpan)

//     const playPreviousParent = document.getElementById('play-previous-parent')
//     console.log(data[1].timeframes.daily.previous)
//     const playPrevious = data[1].timeframes.daily.previous;
//     const playPreviousSpan = document.createElement('span');
//     playPreviousSpan.innerHTML = `<span>Last week - ${playPrevious}</span>hrs`;
//     playPreviousParent.appendChild(playPreviousSpan)

// //--------------study daily time frame---------------//

//     const studyCurrentParent = document.getElementById('study-current-parent')
//     console.log(data[2].timeframes.daily.current)
//     const studyCurrent = data[2].timeframes.daily.current;
//     const studyCurrentSpan = document.createElement('span');
//     studyCurrentSpan.innerHTML = `<span>${studyCurrent}</span>hrs`;
//     studyCurrentParent.appendChild(studyCurrentSpan)

//     const studyPreviousParent = document.getElementById('study-previous-parent')
//     console.log(data[2].timeframes.daily.previous)
//     const studyPrevious = data[2].timeframes.daily.previous;
//     const studyPreviousSpan = document.createElement('span');
//     studyPreviousSpan.innerHTML = `<span>Last week - ${studyPrevious}</span>hrs`;
//     studyPreviousParent.appendChild(studyPreviousSpan)

//     //--------------exercise daily time frame---------------//

//     const exerciseCurrentParent = document.getElementById('exercise-current-parent')
//     console.log(data[3].timeframes.daily.current)
//     const exerciseCurrent = data[3].timeframes.daily.current;
//     const exerciseCurrentSpan = document.createElement('span');
//     exerciseCurrentSpan.innerHTML = `<span>${exerciseCurrent}</span>hrs`;
//     exerciseCurrentParent.appendChild(exerciseCurrentSpan)

//     const exercisePreviousParent = document.getElementById('exercise-previous-parent')
//     console.log(data[3].timeframes.daily.previous)
//     const exercisePrevious = data[3].timeframes.daily.previous;
//     const exercisePreviousSpan = document.createElement('span');
//     exercisePreviousSpan.innerHTML = `<span>Last week - ${exercisePrevious}</span>hrs`;
//     exercisePreviousParent.appendChild(exercisePreviousSpan)

//         //--------------social daily time frame---------------//

//     const socialCurrentParent = document.getElementById('social-current-parent')
//     console.log(data[4].timeframes.daily.current)
//     const socialCurrent = data[4].timeframes.daily.current;
//     const socialCurrentSpan = document.createElement('span');
//     socialCurrentSpan.innerHTML = `<span>${socialCurrent}</span>hrs`;
//     socialCurrentParent.appendChild(socialCurrentSpan)

//     const socialPreviousParent = document.getElementById('social-previous-parent')
//     console.log(data[4].timeframes.daily.previous)
//     const socialPrevious = data[4].timeframes.daily.previous;
//     const socialPreviousSpan = document.createElement('span');
//     socialPreviousSpan.innerHTML = `<span>Last week - ${socialPrevious}</span>hrs`;
//     socialPreviousParent.appendChild(socialPreviousSpan)

//             //--------------self care daily time frame---------------//

//     const selfCareCurrentParent = document.getElementById('selfCare-current-parent')
//     console.log(data[5].timeframes.daily.current)
//     const selfCareCurrent = data[5].timeframes.daily.current;
//     const selfCareCurrentSpan = document.createElement('span');
//     selfCareCurrentSpan.innerHTML = `<span>${selfCareCurrent}</span>hrs`;
//     selfCareCurrentParent.appendChild(selfCareCurrentSpan)

//     const selfCarePreviousParent = document.getElementById('selfCare-previous-parent')
//     console.log(data[5].timeframes.daily.previous)
//     const selfCarePrevious = data[5].timeframes.daily.previous;
//     const selfCarePreviousSpan = document.createElement('span');
//     selfCarePreviousSpan.innerHTML = `<span>Last week - ${selfCarePrevious}</span>hrs`;
//     selfCarePreviousParent.appendChild(selfCarePreviousSpan)
// }
// )

// weekly.addEventListener("click", () => {

// // ----------------------- Weekly Time Frames ----------------------------------//

// //--------------work weekly time frame---------------//
//     const workCurrentParent = document.getElementById('work-current-parent')
//     const workCurrent = data[0].timeframes.weekly.current;
//     const workCurrentSpan = document.createElement('span');
//     workCurrentSpan.innerHTML = `<span>${workCurrent}</span>hrs`;
//     workCurrentParent.appendChild(workCurrentSpan)

//     const workPreviousParent = document.getElementById('work-previous-parent')
//     const workPrevious = data[0].timeframes.weekly.previous;
//     const workPreviousSpan = document.createElement('span');
//     workPreviousSpan.innerHTML = `<span>Last week - ${workPrevious}</span>hrs`;
//     workPreviousParent.appendChild(workPreviousSpan)

//     //--------------play weekly  time frame---------------//

//     const playCurrentParent = document.getElementById('play-current-parent')
//     const playCurrent = data[1].timeframes.weekly.current;
//     const playCurrentSpan = document.createElement('span');
//     playCurrentSpan.innerHTML = `<span>${playCurrent}</span>hrs`;
//     playCurrentParent.appendChild(playCurrentSpan)

//     const playPreviousParent = document.getElementById('play-previous-parent')
//     const playPrevious = data[1].timeframes.weekly.previous;
//     const playPreviousSpan = document.createElement('span');
//     playPreviousSpan.innerHTML = `<span>Last week - ${playPrevious}</span>hrs`;
//     playPreviousParent.appendChild(playPreviousSpan)

// //--------------study weekly  time frame---------------//

//     const studyCurrentParent = document.getElementById('study-current-parent')
//     const studyCurrent = data[2].timeframes.weekly.current;
//     const studyCurrentSpan = document.createElement('span');
//     studyCurrentSpan.innerHTML = `<span>${studyCurrent}</span>hrs`;
//     studyCurrentParent.appendChild(studyCurrentSpan)

//     const studyPreviousParent = document.getElementById('study-previous-parent')
//     const studyPrevious = data[2].timeframes.weekly.previous;
//     const studyPreviousSpan = document.createElement('span');
//     studyPreviousSpan.innerHTML = `<span>Last week - ${studyPrevious}</span>hrs`;
//     studyPreviousParent.appendChild(studyPreviousSpan)

//     //--------------exercise weekly  time frame---------------//

//     const exerciseCurrentParent = document.getElementById('exercise-current-parent')
//     const exerciseCurrent = data[3].timeframes.weekly.current;
//     const exerciseCurrentSpan = document.createElement('span');
//     exerciseCurrentSpan.innerHTML = `<span>${exerciseCurrent}</span>hrs`;
//     exerciseCurrentParent.appendChild(exerciseCurrentSpan)

//     const exercisePreviousParent = document.getElementById('exercise-previous-parent')
//     const exercisePrevious = data[3].timeframes.weekly.previous;
//     const exercisePreviousSpan = document.createElement('span');
//     exercisePreviousSpan.innerHTML = `<span>Last week - ${exercisePrevious}</span>hrs`;
//     exercisePreviousParent.appendChild(exercisePreviousSpan)

//         //--------------social weekly  time frame---------------//

//     const socialCurrentParent = document.getElementById('social-current-parent')
//     const socialCurrent = data[4].timeframes.weekly.current;
//     const socialCurrentSpan = document.createElement('span');
//     socialCurrentSpan.innerHTML = `<span>${socialCurrent}</span>hrs`;
//     socialCurrentParent.appendChild(socialCurrentSpan)

//     const socialPreviousParent = document.getElementById('social-previous-parent')
//     const socialPrevious = data[4].timeframes.weekly.previous;
//     const socialPreviousSpan = document.createElement('span');
//     socialPreviousSpan.innerHTML = `<span>Last week - ${socialPrevious}</span>hrs`;
//     socialPreviousParent.appendChild(socialPreviousSpan)

//             //--------------self care weekly  time frame---------------//

//     const selfCareCurrentParent = document.getElementById('selfCare-current-parent')
//     const selfCareCurrent = data[5].timeframes.weekly.current;
//     const selfCareCurrentSpan = document.createElement('span');
//     selfCareCurrentSpan.innerHTML = `<span>${selfCareCurrent}</span>hrs`;
//     selfCareCurrentParent.appendChild(selfCareCurrentSpan)

//     const selfCarePreviousParent = document.getElementById('selfCare-previous-parent')
//     const selfCarePrevious = data[5].timeframes.weekly.previous;
//     const selfCarePreviousSpan = document.createElement('span');
//     selfCarePreviousSpan.innerHTML = `<span>Last week - ${selfCarePrevious}</span>hrs`;
//     selfCarePreviousParent.appendChild(selfCarePreviousSpan)
// }
// )

// monthly.addEventListener("click", () => {

// // ----------------------- Monthly Time Frames ----------------------------------//

// //--------------work monthly time frame---------------//
//     const workCurrentParent = document.getElementById('work-current-parent')
//     const workCurrent = data[0].timeframes.monthly.current;
//     const workCurrentSpan = document.createElement('span');
//     workCurrentSpan.innerHTML = `<span>${workCurrent}</span>hrs`;
//     workCurrentParent.appendChild(workCurrentSpan)

//     const workPreviousParent = document.getElementById('work-previous-parent')
//     const workPrevious = data[0].timeframes.monthly.previous;
//     const workPreviousSpan = document.createElement('span');
//     workPreviousSpan.innerHTML = `<span>Last week - ${workPrevious}</span>hrs`;
//     workPreviousParent.appendChild(workPreviousSpan)

//     //--------------play monthly time frame---------------//

//     const playCurrentParent = document.getElementById('play-current-parent')
//     const playCurrent = data[1].timeframes.monthly.current;
//     const playCurrentSpan = document.createElement('span');
//     playCurrentSpan.innerHTML = `<span>${playCurrent}</span>hrs`;
//     playCurrentParent.appendChild(playCurrentSpan)

//     const playPreviousParent = document.getElementById('play-previous-parent')
//     const playPrevious = data[1].timeframes.monthly.previous;
//     const playPreviousSpan = document.createElement('span');
//     playPreviousSpan.innerHTML = `<span>Last week - ${playPrevious}</span>hrs`;
//     playPreviousParent.appendChild(playPreviousSpan)

// //--------------study monthly time frame---------------//

//     const studyCurrentParent = document.getElementById('study-current-parent')
//     const studyCurrent = data[2].timeframes.monthly.current;
//     const studyCurrentSpan = document.createElement('span');
//     studyCurrentSpan.innerHTML = `<span>${studyCurrent}</span>hrs`;
//     studyCurrentParent.appendChild(studyCurrentSpan)

//     const studyPreviousParent = document.getElementById('study-previous-parent')
//     const studyPrevious = data[2].timeframes.monthly.previous;
//     const studyPreviousSpan = document.createElement('span');
//     studyPreviousSpan.innerHTML = `<span>Last week - ${studyPrevious}</span>hrs`;
//     studyPreviousParent.appendChild(studyPreviousSpan)

//     //--------------exercise monthly time frame---------------//

//     const exerciseCurrentParent = document.getElementById('exercise-current-parent')
//     const exerciseCurrent = data[3].timeframes.monthly.current;
//     const exerciseCurrentSpan = document.createElement('span');
//     exerciseCurrentSpan.innerHTML = `<span>${exerciseCurrent}</span>hrs`;
//     exerciseCurrentParent.appendChild(exerciseCurrentSpan)

//     const exercisePreviousParent = document.getElementById('exercise-previous-parent')
//     const exercisePrevious = data[3].timeframes.monthly.previous;
//     const exercisePreviousSpan = document.createElement('span');
//     exercisePreviousSpan.innerHTML = `<span>Last week - ${exercisePrevious}</span>hrs`;
//     exercisePreviousParent.appendChild(exercisePreviousSpan)

//         //--------------social monthly time frame---------------//

//     const socialCurrentParent = document.getElementById('social-current-parent')
//     const socialCurrent = data[4].timeframes.monthly.current;
//     const socialCurrentSpan = document.createElement('span');
//     socialCurrentSpan.innerHTML = `<span>${socialCurrent}</span>hrs`;
//     socialCurrentParent.appendChild(socialCurrentSpan)

//     const socialPreviousParent = document.getElementById('social-previous-parent')
//     const socialPrevious = data[4].timeframes.monthly.previous;
//     const socialPreviousSpan = document.createElement('span');
//     socialPreviousSpan.innerHTML = `<span>Last week - ${socialPrevious}</span>hrs`;
//     socialPreviousParent.appendChild(socialPreviousSpan)

//             //--------------self care monthly time frame---------------//

//     const selfCareCurrentParent = document.getElementById('selfCare-current-parent')
//     const selfCareCurrent = data[5].timeframes.monthly.current;
//     const selfCareCurrentSpan = document.createElement('span');
//     selfCareCurrentSpan.innerHTML = `<span>${selfCareCurrent}</span>hrs`;
//     selfCareCurrentParent.appendChild(selfCareCurrentSpan)

//     const selfCarePreviousParent = document.getElementById('selfCare-previous-parent')
//     console.log(data[5].timeframes.monthly.previous)
//     const selfCarePrevious = data[5].timeframes.monthly.previous;
//     const selfCarePreviousSpan = document.createElement('span');
//     selfCarePreviousSpan.innerHTML = `<span>Last week - ${selfCarePrevious}</span>hrs`;
//     selfCarePreviousParent.appendChild(selfCarePreviousSpan)
// }
// )

