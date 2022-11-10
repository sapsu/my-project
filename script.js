function calculateBloodPressure(event) {
  event.preventDefault();
  let sys1 = document.querySelector("#sys1");
  let sys2 = document.querySelector("#sys2");
  let dias1 = document.querySelector("#dias1");
  let dias2 = document.querySelector("#dias2");

  console.log(sys1.value);
  console.log(sys2.value);
  console.log(dias1.value);
  console.log(dias2.value);
  let averagesys = Math.round((sys1.valueAsNumber + sys2.valueAsNumber) / 2);
  let averagedias = Math.round((dias1.valueAsNumber + dias2.valueAsNumber) / 2);

  let result = document.querySelector("#result");
  result.innerHTML = `Your average blood pressure is ${averagesys} / ${averagedias}.`;
}

let calculate = document.querySelector("#blood-pressure-form");

calculate.addEventListener("submit", calculateBloodPressure);
