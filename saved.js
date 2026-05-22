/* =========================
   SAFE GLOBAL STATE
========================= */

function getSaved() {
  return JSON.parse(localStorage.getItem("saved_calculations")) || [];
}

/* =========================
   INIT UI
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

  renderSaved();
});

console.log("FINAL TOTAL UNITS:", totalUnits); // 👈 ADD THIS HERE
/* =========================
   SAVE FUNCTION
========================= */
function saveCalculation(moduleName, data) {
  if (!data) return;

  let saved = getSaved();

  saved.unshift({
    id: Date.now(),
    module: moduleName,
    data: {
      name: data.name || "Unnamed",
      gwa: data.gwa || data.result || "N/A",
      totalUnits: data.totalUnits ?? data.units ?? 0,
      pldl: data.pldl || "",
      ...data
    }
  });

  if (saved.length > 10) saved.pop();

  localStorage.setItem("saved_calculations", JSON.stringify(saved));

  renderSaved();
}

/* =========================
   RENDER SAVED LIST
========================= */
function renderSaved() {

  const list = document.getElementById("savedList");
  if (!list) return;

  const saved = getSaved();

  list.innerHTML = "";

  if (saved.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <i class='bx bx-folder-open'></i>
        <p>No saved calculations yet.</p>
      </div>
    `;
    return;
  }

  saved.forEach((item) => {

    const data = item.data || {};

    const li = document.createElement("li");
    li.className = "saved-card";

    li.innerHTML = `
      <div class="saved-header">
        <div class="saved-left">
          <div class="saved-module">${item.module}</div>
          <div class="saved-name">${data.name}</div>
        </div>

        <button class="delete-btn">
          <i class='bx bx-trash'></i>
        </button>
      </div>

      <div class="saved-gwa-box">
        <div class="gwa-label">Current GWA</div>
        <div class="gwa-value">${data.gwa}</div>
      </div>

      <div class="saved-details">
        <div class="detail-card">
          <span>Total Units</span>
          <strong>${data.totalUnits}</strong>
        </div>
      </div>

      <div class="saved-footer">
        <div class="saved-date">
          ${new Date(item.id).toLocaleDateString()}
        </div>
        <div class="saved-edit">
          Tap to continue editing
        </div>
      </div>
    `;

    /* =========================
       DELETE FIX (SAFE)
    ========================= */
    li.querySelector(".delete-btn").onclick = (e) => {
      e.stopPropagation();

      let saved = getSaved().filter(x => x.id !== item.id);

      localStorage.setItem("saved_calculations", JSON.stringify(saved));

      renderSaved();
    };

    /* =========================
       LOAD ITEM
    ========================= */
    li.onclick = () => loadSaved(item);

    list.appendChild(li);
  });
}

/* =========================
   LOAD SAVED ITEM
========================= */
function loadSaved(item) {

  if (item.module === "GWA Calculator") {

    localStorage.setItem("restoreGWA", JSON.stringify(item));
    window.location.href = "pick.html";

  } else if (item.module === "Graduation Calculator") {

    localStorage.setItem("restoreGrad", JSON.stringify(item));

    // FIXED TYPO
    window.location.href = "graduate.html";
  }
}

/* =========================
   HELPER
========================= */
function getSavedData() {
  return getSaved();
}
