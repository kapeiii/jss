let saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];

/* SYNC */
function syncSaved() {
  saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];
}

/* SAVE */
function saveCalculation(moduleName, data) {
  syncSaved();

  const entry = {
    id: Date.now(),
    module: moduleName,
    name: data.name || "Unnamed",
    result: data.result ?? null,
    totalUnits: data.totalUnits ?? null,
    subjects: data.subjects ?? null
  };

  saved.unshift(entry);
  localStorage.setItem("saved_calculations", JSON.stringify(saved));

  renderSaved();
}

/* RENDER */
function renderSaved() {
  syncSaved();

  const list = document.getElementById("savedList");
  if (!list) return;

  list.innerHTML = "";

  if (saved.length === 0) {
    list.innerHTML = `<li>No saved calculations yet.</li>`;
    return;
  }

  saved.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${item.module}</b><br>
      ${item.name} → ${item.result}<br>
      Units: ${item.totalUnits ?? "N/A"}
    `;

    li.onclick = () => loadSaved(item);

    list.appendChild(li);
  });
}

/* LOAD */
function loadSaved(item) {
  localStorage.setItem("restoreGWA", JSON.stringify(item));
  window.location.href = "pick.html";
}

/* AUTO LOAD ON PAGE OPEN */
document.addEventListener("DOMContentLoaded", renderSaved);
