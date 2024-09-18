/*
    Task: B
    Use your variables (do not redefine them) from task A and calculate:
    * How many seconds are in 2.5 hours?
    * How many minutes are in 123 days?
    Remember to assign the answers to their own variables.
    Example:
    // How many deciliters are in 4.5 cups?
    const dlInCups = 2.36588;
    const amountOfDL = dlInCups * 4.5;
*/
console.log("Task: B");

const TIME = {
HOURS_IN_DAY: 24,
MINUTES_IN_HOUR: 60,
SECONDS_PER_MINUTE: 60,
};

let juiceToWaterRatio;
let daysUntilBirthday = 115;
let rainfallInMillimetres;



const secondsInHours = (TIME.SECONDS_PER_MINUTE * TIME.MINUTES_IN_HOUR * 2.5);
const minutesInDays = (TIME.MINUTES_IN_HOUR * TIME.HOURS_IN_DAY * 123);

console.log (secondsInHours);
console.log (minutesInDays);


