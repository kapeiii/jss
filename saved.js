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
    semesters: data.semesters ?? null
  });

  localStorage.setItem("saved_calculations", JSON.stringify(saved));

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

  const gwaOnly = saved.filter(item => item.module === "GWA Calculator");

  if (gwaOnly.length === 0) {
    list.innerHTML = "<li>No saved GWA calculations yet.</li>";
    return;
  }

  gwaOnly.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${item.module}</b><br>
      ${item.name} → ${item.result}
      <br>
      Units: ${item.totalUnits ?? "N/A"}
    `;

    li.onclick = () => loadSaved(item);

    list.appendChild(li);
  });
}

/* =========================
   LOAD SAVED → GRADUATION
========================= */
function loadSaved(item) {

  if (item.module === "GWA Calculator") {

    // store full object correctly
    localStorage.setItem("restoreGWA", JSON.stringify(item));

    window.location.href = "pick.html";
    return;
  }

  alert("Only GWA saved calculations are supported.");
}

/* =========================
   GET ALL SAVED
========================= */
function getSavedData() {
  syncSaved();
  return saved;
}

/* =========================
   CLEAR DATA (OPTIONAL)
========================= */
function clearCorruptedData() {
  localStorage.removeItem("saved_calculations");
  saved = [];
  renderSaved();
}
