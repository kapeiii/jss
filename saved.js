let saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];

/* =========================
   SYNC STORAGE
========================= */
function syncSaved() {
  saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];
}

/* =========================
   SAVE FUNCTION
========================= */
function saveCalculation(moduleName, data) {

  const saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];

  const isGraduation = Array.isArray(data.semesters);

  saved.unshift({
    id: Date.now(),
    module: moduleName,
    type: isGraduation ? "graduation" : "gwa",
    name: data.name || "Unnamed",
    result: data.result ?? null,
    totalUnits: data.totalUnits ?? null,
    subjects: data.subjects ?? null,
    semesters: data.semesters ?? null
  });

  localStorage.setItem("saved_calculations", JSON.stringify(saved));

  console.log("Saved:", saved);

  renderSaved();
}

/* =========================
   RENDER SAVED LIST
========================= */
function renderSaved() {

  syncSaved();

  const list = document.getElementById("savedList");
  if (!list) return;

  list.innerHTML = "";

  if (saved.length === 0) {
    list.innerHTML = `
      <li>No saved calculations yet.</li>
    `;
    return;
  }

  saved.forEach(item => {

    const li = document.createElement("li");

    li.className = "saved-card";

    li.innerHTML = `
      <div class="saved-top">
        <div class="saved-module">${item.module}</div>
        <div class="saved-date">${new Date(item.id).toLocaleDateString()}</div>
      </div>

      <div class="saved-name">${item.name}</div>

      <div class="saved-result">
        🎓 Result: <strong>${item.result ?? "N/A"}</strong>
      </div>

      <div class="saved-footer">
        <div class="saved-edit">Tap to continue editing</div>
      </div>
    `;

    li.onclick = () => loadSaved(item);

    list.appendChild(li);
  });
}

/* =========================
   LOAD SAVED
========================= */
function loadSaved(item) {

  localStorage.setItem("restoreGWA", JSON.stringify(item));

  if (item.module === "GWA Calculator") {
    window.location.href = "pick.html";
  } else {
    window.location.href = "gradute.html";
  }
}

/* =========================
   AUTO INIT (IMPORTANT FIX)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSaved();
});
