function calculateBloodPressure(event) {
  event.preventDefault();
  let sys1 = document.querySelector("#sys1");
  let sys2 = document.querySelector("#sys2");
  let sys3 = document.querySelector("#sys3");
  let sys4 = document.querySelector("#sys4");
  let sys5 = document.querySelector("#sys5");
  let dias1 = document.querySelector("#dias1");
  let dias2 = document.querySelector("#dias2");
  let dias3 = document.querySelector("#dias3");
  let dias4 = document.querySelector("#dias4");
  let dias5 = document.querySelector("#dias5");

  let averagesys = Math.round(
    (sys1.valueAsNumber +
      sys2.valueAsNumber +
      sys3.valueAsNumber +
      sys4.valueAsNumber +
      sys5.valueAsNumber) /
      5
  );
  let averagedias = Math.round(
    (dias1.valueAsNumber +
      dias2.valueAsNumber +
      dias3.valueAsNumber +
      dias4.valueAsNumber +
      dias5.valueAsNumber) /
      5
  );

  let result = document.querySelector("#result");
  result.innerHTML = `Your average blood pressure is ${averagesys} / ${averagedias} mmHg.`;

  let insight = document.querySelector("#insight");

  if (averagesys < 130 && averagedias < 80) {
    insight.innerHTML = `Your blood pressure is normal. Keep up the good lifestyle choices.`;
  } else if (averagesys < 150 && averagedias < 90) {
    insight.innerHTML = `Your blood pressure is somewhat elevated. You should consider your lifestyle choices to get it under control. For example, too high salt intake, stress, and alcohol consumption and poor sleep quality can raise your blood pressure. Exercising regularly is good for your crdiovascular health.`;
  } else if (averagesys < 160 && averagedias < 100) {
    insight.innerHTML = `Your blood pressure is significantly elevated. You should consult with a doctor within the next month.`;
  } else {
    insight.innerHTML = `Your blood pressure is dangerously elevated. You should consult with a doctor immediately.`;
  }
}

let calculate = document.querySelector("#blood-pressure-form");

calculate.addEventListener("submit", calculateBloodPressure);
