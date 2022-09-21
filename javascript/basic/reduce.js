const dailySells = [
  {
    day: 1,
    value: 0,
  },
  {
    day: 2,
    value: 10,
  },
  {
    day: 3,
    value: 2,
  },
  {
    day: 4,
    value: 33780,
  },
  {
    day: 5,
    value: 1000,
  },
  {
    day: 6,
    value: 10000,
  },
];
const states = [
  {
    state: "SP",
    value: 67836.43,
  },
  {
    state: "RJ",
    value: 36678.66,
  },
  {
    state: "MG",
    value: 29229.88,
  },
  {
    state: "ES",
    value: 27165.48,
  },
  {
    state: "Others",
    value: 19849.53,
  },
];
let highestValue = 0;
let lowerValue = 0;
let annualAverage = 0;
let daysOfTheYear = [];

function print(text, value) {
  console.log(text, value);
}

function getHighestValue() {
  highestValue = dailySells.reduce(function (prev, current) {
    return prev.value > current.value ? prev : current;
  });
  print("highest value: ", highestValue);
}

function getLowerValue() {
  lowerValue = dailySells.reduce(function (prev, current) {
    return prev.value < current.value ? prev : current;
  });
  print("lower value: ", lowerValue);
}

function getAnnualAverage() {
  annualAverage =
    dailySells.reduce((sum, li) => sum + li.value, 0) / dailySells.length;
  print("Annual average: ", annualAverage);
}

function getTheDaysWithdailySellsGreaterThanAnnualAverage() {
  dailySells.reduce(function (prev, current) {
    if (current.value > annualAverage) {
      daysOfTheYear.push(current.day);
    }
  });
  print("days of the year: ", daysOfTheYear);
}
function getStatesSumValue() {
  statesSumValue = states.reduce((sum, li) => sum + li.value, 0);
  print("States average: ", statesSumValue);
}

function getStateValuePercent() {
  getStatesSumValue();
  states.reduce(
    (sum, current) =>
      (current["percent"] = parseFloat(
        ((current.value * 100) / statesSumValue).toFixed(2)
      )),
    0
  );
  print("States percent", states);
}

getHighestValue();
getLowerValue();
getAnnualAverage();
getTheDaysWithdailySellsGreaterThanAnnualAverage();
getStateValuePercent();
