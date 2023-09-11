function updateDayAndTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    const currentUTCTime = new Date().getTime();

    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayElement.textContent = currentDay;
    timeElement.textContent = currentUTCTime;
}

updateDayAndTime();
