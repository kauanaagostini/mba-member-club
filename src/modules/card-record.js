const totalCutsString = document.querySelector(".card-records header p");
const cardRecords = document.querySelector(".card-records ul")

export function createRecordsCard({ totalCuts, appointmentHistory }) {
  totalCutsString.innerHTML = "";
  totalCutsString.textContent = `${totalCuts} ${totalCuts == 1 ? " corte" : " cortes"}`;
  cardRecords.innerHTML = "";

  appointmentHistory.forEach((appointment) => {
    const item = document.createElement("li");
    const info = document.createElement("div");
    const data = document.createElement("strong");
    const time = document.createElement("span");
    const checkIcon = createCheckIcon();
    
    info.classList.add("list-info", "flex-column");
    data.textContent = appointment.date;
    time.textContent = appointment.time;
    
    info.append(data, time)
    item.append(info, checkIcon);
    cardRecords.appendChild(item);
  });
}

function createCheckIcon() {
  const checkIcon = document.createElement("div");
  checkIcon.classList.add("list-img");
  const img = document.createElement("img");
  img.setAttribute("src", "./src/assets/icons/check.svg");
  checkIcon.append(img);
  return checkIcon;
};