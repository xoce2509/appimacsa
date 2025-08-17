const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const eventModal = document.getElementById("eventModal");
const closeModal = document.getElementById("closeModal");
const viewModal = document.getElementById("viewModal");
const closeViewModal = document.getElementById("closeViewModal");
const eventForm = document.getElementById("eventForm");
const eventDetails = document.getElementById("eventDetails");
const markDoneBtn = document.getElementById("markDone");
const timeBar = document.getElementById("timeBar");

let currentDate = new Date();
let events = JSON.parse(localStorage.getItem("events")) || [];
let selectedEventIndex = null;

function renderCalendar(date) {
  calendar.innerHTML = "";
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${date.toLocaleString("es", { month: "long" }).toUpperCase()} ${year}`;

  const totalCells = Math.ceil((firstDay + lastDate) / 7) * 7;

  for (let i = 0; i < totalCells; i++) {
    const dayCell = document.createElement("div");
    dayCell.className = "day";

    const dayNum = i - firstDay + 1;
    if (i >= firstDay && dayNum <= lastDate) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      dayCell.innerHTML = `<div class="date">${dayNum}</div>`;

      events
        .filter(ev => ev.date === dateStr)
        .forEach((ev, index) => {
          const eventDiv = document.createElement("div");
          const timeStatus = getTimeStatus(ev.horaInicio, ev.horaFin);
          eventDiv.className = `event ${timeStatus}`;
          eventDiv.textContent = `${ev.cliente} (${ev.equipo})`;
          eventDiv.onclick = (e) => {
            e.stopPropagation();
            showEventDetails(index);
          };
          dayCell.appendChild(eventDiv);
        });

      dayCell.addEventListener("click", () => openModal(dateStr));
    }

    calendar.appendChild(dayCell);
  }
}

function getTimeStatus(start, end) {
  const now = new Date();
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sh, sm);
  const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), eh, em);
  const total = endDate - startDate;
  const passed = now - startDate;

  if (now < startDate) return "verde";
  if (now >= startDate && now <= endDate) {
    const percent = passed / total;
    if (percent < 0.5) return "verde";
    if (percent < 0.8) return "amarillo";
    return "rojo";
  }
  return "rojo";
}

function updateProgressBar(start, end) {
  const now = new Date();
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);

  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sh, sm);
  const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), eh, em);

  const total = endDate - startDate;
  const passed = now - startDate;
  const percent = Math.min(100, Math.max(0, (passed / total) * 100));

  timeBar.style.width = percent + "%";
  timeBar.style.backgroundColor =
    percent < 50 ? "#27ae60" :
    percent < 80 ? "#f1c40f" :
    "#e74c3c";
}

function openModal(dateStr) {
  document.getElementById("eventDate").value = dateStr;
  eventModal.style.display = "block";
}

closeModal.onclick = () => eventModal.style.display = "none";
closeViewModal.onclick = () => viewModal.style.display = "none";

window.onclick = (e) => {
  if (e.target === eventModal) eventModal.style.display = "none";
  if (e.target === viewModal) viewModal.style.display = "none";
};

eventForm.onsubmit = (e) => {
  e.preventDefault();
  const cliente = document.getElementById("cliente").value;
  const equipo = document.getElementById("equipo").value;
  const asunto = document.getElementById("asunto").value;
  const horaInicio = document.getElementById("horaInicio").value;
  const horaFin = document.getElementById("horaFin").value;
  const date = document.getElementById("eventDate").value;

  events.push({ cliente, equipo, asunto, horaInicio, horaFin, date, done: false });
  localStorage.setItem("events", JSON.stringify(events));

  eventForm.reset();
  eventModal.style.display = "none";
  renderCalendar(currentDate);
};

function showEventDetails(index) {
  selectedEventIndex = index;
  const ev = events[index];
  eventDetails.innerHTML = `
    <p><strong>Cliente:</strong> ${ev.cliente}</p>
    <p><strong>Equipo:</strong> ${ev.equipo}</p>
    <p><strong>Asunto:</strong> ${ev.asunto}</p>
    <p><strong>Hora Inicio:</strong> ${ev.horaInicio}</p>
    <p><strong>Hora Fin:</strong> ${ev.horaFin}</p>
    <p><strong>Estado:</strong> ${ev.done ? "✔ Hecho" : "⏳ Pendiente"}</p>
  `;
  updateProgressBar(ev.horaInicio, ev.horaFin);
  viewModal.style.display = "block";
}

markDoneBtn.onclick = () => {
  if (selectedEventIndex !== null) {
    events[selectedEventIndex].done = true;
    localStorage.setItem("events", JSON.stringify(events));
    viewModal.style.display = "none";
    renderCalendar(currentDate);
  }
};

prevBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
};

nextBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
};

renderCalendar(currentDate);
