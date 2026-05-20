let saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];

/* TOGGLE UI */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("savedToggle");
  const dropdown = document.getElementById("savedDropdown");

  if (toggle) {
    toggle.onclick = () => {
      dropdown.classList.toggle("hidden");
      renderSaved();
    };
  }
});

/* SAVE FUNCTION (GLOBAL) */
function saveCalculation(moduleName, data) {
  if (!data) return;

  saved.unshift({
    id: Date.now(),
    module: moduleName,
    data: data
  });

  if (saved.length > 10) saved.pop();

  localStorage.setItem("saved_calculations", JSON.stringify(saved));
  renderSaved();
}

/* RENDER LIST */
function renderSaved() {
  const list = document.getElementById("savedList");
  if (!list) return;

  list.innerHTML = "";

  saved.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${item.module}</b><br>
      ${item.data.name || "Calc"} → ${item.data.result || ""}
    `;

    li.onclick = () => loadSaved(item);

    list.appendChild(li);
  });
}

/* LOAD BACK */
function loadSaved(item) {
  alert("Load feature connects to module later");

  // We will connect this per module next step
}

/* GLOBAL HELPER */
function getSavedData() {
  return saved;
}