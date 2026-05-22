let saved =
  JSON.parse(localStorage.getItem("saved_calculations")) || [];

/* =========================
   TOGGLE UI
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("savedToggle");
  const dropdown = document.getElementById("savedDropdown");

  if (toggle) {

    toggle.onclick = () => {

      dropdown.classList.toggle("hidden");

      renderSaved();

    };

  }

  renderSaved();

});

/* =========================
   SAVE FUNCTION
========================= */
function saveCalculation(moduleName, data) {

  if (!data) return;

  saved.unshift({

    id: Date.now(),

    module: moduleName,

    data: {

      name: data.name || "Unnamed",

      gwa: data.gwa || data.result || "N/A",

      totalUnits:
        data.totalUnits ||
        data.units ||
        0,

      pldl:
        data.pldl ||
        "",

      ...data

    }

  });

  if (saved.length > 10) saved.pop();

  localStorage.setItem(
    "saved_calculations",
    JSON.stringify(saved)
  );

  renderSaved();

}

/* =========================
   RENDER SAVED
========================= */
function renderSaved() {

  const list = document.getElementById("savedList");

  if (!list) return;

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

  saved.forEach((item, index) => {

    const data = item.data || {};

    const li = document.createElement("li");

    li.className = "saved-card";

    /* =========================
       BADGE
    ========================= */

    let badgeHTML = "";

    if (data.pldl) {

      let bg = "#dbeafe";
      let color = "#2563eb";

      if (
        data.pldl.toLowerCase()
        .includes("president")
      ) {

        bg = "#ede9fe";
        color = "#7c3aed";

      }

      badgeHTML = `

        <div class="saved-badge"
          style="
            background:${bg};
            color:${color};
          ">

          <i class='bx bxs-star'></i>

          ${data.pldl}

        </div>

      `;

    }

    /* =========================
       CARD HTML
    ========================= */

    li.innerHTML = `

      <div class="saved-header">

        <div class="saved-left">

          <div class="saved-module">
            ${item.module}
          </div>

          <div class="saved-name">
            ${data.name}
          </div>

        </div>

        <button class="delete-btn">

          <i class='bx bx-trash'></i>

        </button>

      </div>

      <!-- GWA -->

      <div class="saved-gwa-box">

        <div class="gwa-label">
          Current GWA
        </div>

        <div class="gwa-value">

          ${data.gwa}

        </div>

      </div>

      <!-- DETAILS -->

      <div class="saved-details">

        <div class="detail-card">

          <span>Total Units</span>

          <strong>
            ${data.totalUnits}
          </strong>

        </div>

        ${badgeHTML}

      </div>

      <!-- FOOTER -->

      <div class="saved-footer">

        <div class="saved-date">

          ${new Date(item.id)
            .toLocaleDateString()}

        </div>

        <div class="saved-edit">

          Tap to continue editing

        </div>

      </div>

    `;

    /* =========================
       DELETE
    ========================= */

    li.querySelector(".delete-btn")
      .onclick = (e) => {

      e.stopPropagation();

      saved.splice(index, 1);

      localStorage.setItem(
        "saved_calculations",
        JSON.stringify(saved)
      );

      renderSaved();

    };

    /* =========================
       LOAD
    ========================= */

    li.onclick = () => loadSaved(item);

    list.appendChild(li);

  });

}

/* =========================
   LOAD BACK
========================= */
function loadSaved(item) {

  const module = item.module;

  if (module === "GWA Calculator") {

    localStorage.setItem(
      "restoreGWA",
      JSON.stringify(item)
    );

    window.location.href = "pick.html";

  }

  else if (
    module === "Graduation Calculator"
  ) {

    localStorage.setItem(
      "restoreGrad",
      JSON.stringify(item)
    );

    window.location.href = "gradute.html";

  }

}

/* =========================
   HELPER
========================= */
function getSavedData() {

  return saved;

}
