//function declaration
function updateDayandTime(){
const daysofweek=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const currentDayindex= newday().getday()
const currentday=daysofweek[currentDayindex];
const currentUTCtime =newDate().getTime();

const dayElement=document.querySelector(["data-testid=currentDayofTheWeek"]);
const timeElement=document.querySelector(["data-testid=currentUTCTime"]);
  dayElement.textContent=currentDay;timeElement.textContent=currentUTCtime }
updateDayandTime();