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
  if (!data) return;

  syncSaved();

  saved.unshift({
    id: Date.now(),
    module: moduleName,
    data: data
  });

  if (saved.length > 50) saved.pop();

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

  if (saved.length === 0) {
    list.innerHTML = `<li>No saved calculations yet.</li>`;
    return;
  }

  saved.forEach(item => {
    const li = document.createElement("li");

    const name =
      item.data?.name ||
      item.data?.title ||
      "Unnamed";

    const result =
      item.data?.result ??
      item.data?.gwa ??
      "";

    li.innerHTML = `
      <b>${item.module || "Unknown Module"}</b><br>
      ${name} → ${result}
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

  /* GWA CALCULATOR */
  if (module === "GWA Calculator") {

    localStorage.setItem("restoreGWA", JSON.stringify(item));
    window.location.href = "pick.html";
    return;
  }

  /* GRADUATION CALCULATOR */
  if (module === "Graduation Calculator") {

    localStorage.setItem("restoreGrad", JSON.stringify(item));
    window.location.href = "gradute.html";
    return;
  }

  /* FALLBACK (OLD DATA SUPPORT) */
  if (item.data?.gwa && item.data?.units) {
    localStorage.setItem("restoreGWA", JSON.stringify(item));
    window.location.href = "pick.html";
    return;
  }

  if (item.data?.semesters) {
    localStorage.setItem("restoreGrad", JSON.stringify(item));
    window.location.href = "gradute.html";
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
