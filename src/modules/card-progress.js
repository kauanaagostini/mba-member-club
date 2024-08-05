const clientProgressBar = document.querySelector(".progress-bar div");
const cutsRemainingStrong = document.querySelector(".progress-info strong");
const cutsRemainingSpan = document.querySelector(".progress-info span");
const cutsRemainingString = document.querySelector(".content-progress p");

export function createProgressBar({ loyaltyCard }){
  clientProgressBar.setAttribute("style", "width: " + 0 + "%");
  cutsRemainingStrong.innerHTML = "";
  cutsRemainingSpan.innerHTML = "";
  cutsRemainingString.innerHTML = "";
  widthProgressBar(loyaltyCard.cutsNeeded, loyaltyCard.totalCuts);
  cutsRemainingStrong.textContent = loyaltyCard.cutsRemaining;
  cutsRemainingSpan.textContent = `${loyaltyCard.cutsRemaining == 1 ? " corte restante" : " cortes restantes"}`;
  cutsRemainingString.textContent = `${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}`;
}

function widthProgressBar(cutsNeeded, totalCuts) {
  const width = totalCuts / (cutsNeeded / 100);
  clientProgressBar.setAttribute("style", "width: " + width + "%");
}