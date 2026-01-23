const trains = [
  { name: "Vande Bharat", route: "Madurai → Chennai", class: "CC", status: "CONFIRMED" },
  { name: "Pandian Express", route: "Madurai → Chennai", class: "3A", status: "CONFIRMED" },
  { name: "Nellai Express", route: "Madurai → Chennai", class: "SL", status: "CONFIRMED" }
];

const list = document.getElementById("train-list");
const filter = document.getElementById("classFilter");

function render() {
  list.innerHTML = "";
  const cls = filter.value;

  trains
    .filter(t => cls === "ALL" || t.class === cls)
    .forEach(t => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${t.name}</h3>
        <p>${t.route}</p>
        <p>Class: ${t.class}</p>
        <p class="status">${t.status}</p>
      `;
      list.appendChild(div);
    });
}

filter.addEventListener("change", render);
render();