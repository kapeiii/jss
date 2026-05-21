let saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];

/* =========================
   SAFE STORAGE ACCESS
========================= */
function syncSaved() {
  saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];
}

/* =========================
   TOGGLE UI
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("savedToggle");
  const dropdown = document.getElementById("savedDropdown");

  if (toggle && dropdown) {
    toggle.onclick = () => {
      dropdown.classList.toggle("hidden");
      renderSaved();
    };
  }
});

/* =========================
   SAVE FUNCTION (FIXED + SMART)
========================= */
function saveCalculation(moduleName, data) {

  const saved = JSON.parse(localStorage.getItem("saved_calculations")) || [];

  const isGraduation = Array.isArray(data.semesters);

  saved.unshift({
    id: Date.now(),
    module: moduleName,
    type: isGraduation ? "graduation" : "gwa",
    name: data.name || "Unnamed",
    result: data.result || null,
    semesters: data.semesters || null
  });

  localStorage.setItem("saved_calculations", JSON.stringify(saved));

  renderSaved();
}

/* =========================
   RENDER SAVED LIST (SAFE)
========================= */
function renderSaved() {
  syncSaved();

  const list = document.getElementById("savedList");
  if (!list) return;

  list.innerHTML = "";

  const gwaOnly = saved.filter(item =>
    item.module === "GWA Calculator"
  );

  if (gwaOnly.length === 0) {
    list.innerHTML = `<li>No saved GWA calculations yet.</li>`;
    return;
  }

  gwaOnly.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${item.module}</b><br>
      ${item.data?.name || "Unnamed"} → ${item.data?.result || ""}
    `;

    li.onclick = () => loadSaved(item);

    list.appendChild(li);
  });
}

/* =========================
   LOAD SAVED (FIXED ROUTING)
========================= */
function loadSaved(item) {

  const module = item.module;

  if (module === "GWA Calculator") {
    localStorage.setItem("restoreGWA", JSON.stringify(item));
    window.location.href = "pick.html";
    return;
  }

  alert("Only GWA saved calculations are supported.");
}

  /* FALLBACK (OLD DATA SUPPORT) */
  if (item.data?.gwa && item.data?.units) {
    localStorage.setItem("restoreGWA", JSON.stringify(item));
    window.location.href = "pick.html";
    return;
  }

  alert("Unknown saved format.");
}

/* =========================
   GET ALL SAVED
========================= */
function getSavedData() {
  syncSaved();
  return saved;
}

/* =========================
   CLEAN UP (OPTIONAL HELPER)
   - run once if needed
========================= */
function clearCorruptedData() {
  localStorage.removeItem("saved_calculations");
  saved = [];
  renderSaved();
}
