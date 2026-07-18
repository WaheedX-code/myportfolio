function renderAlertFeed() {
  const feed = document.getElementById("alertFeed");
  ALERTS.forEach((alert, index) => {
    const item = document.createElement("li");
    item.style.animationDelay = `${index * 0.35}s`;
    item.innerHTML = `
      <span class="alert-time">${alert.time}</span>
      <span class="alert-level level-${alert.level}">${alert.label}</span>
      <span class="alert-msg">${alert.msg}</span>
    `;
    feed.appendChild(item);
  });
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  SKILLS.forEach((group) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    const items = group.items.map((item) => `<li>${item}</li>`).join("");
    card.innerHTML = `<h3>${group.title}</h3><ul>${items}</ul>`;
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  EXPERIENCE.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "timeline-item";
    const points = entry.points.map((point) => `<li>${point}</li>`).join("");
    item.innerHTML = `
      <div class="timeline-head">
        <h3 class="timeline-role">${entry.role}</h3>
        <span class="timeline-org">${entry.org}</span>
        <span class="timeline-date">${entry.date}</span>
      </div>
      <ul>${points}</ul>
    `;
    timeline.appendChild(item);
  });
}

function renderProjects() {
  const list = document.getElementById("projectsList");
  PROJECTS.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const stack = project.stack.map((tech) => `<span class="stack-tag">${tech}</span>`).join("");
    const points = project.points.map((point) => `<li>${point}</li>`).join("");
    card.innerHTML = `
      <div class="project-head">
        <h3 class="project-name">${project.name}</h3>
      </div>
      <p class="project-tagline">${project.tagline}</p>
      <div class="project-stack">${stack}</div>
      <ul class="project-points">${points}</ul>
      <div class="project-why">
        <h4>Why ${project.name}?</h4>
        <p>${project.why}</p>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderCaseFiles() {
  const grid = document.getElementById("caseGrid");
  CASE_FILES.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "case-card";
    const tags = entry.tags.map((tag) => `<span class="case-tag">${tag}</span>`).join("");
    card.innerHTML = `
      <div class="case-top">
        <h3 class="case-title">${entry.title}</h3>
        <span class="case-year">${entry.year}</span>
      </div>
      <p>${entry.summary}</p>
      <div class="case-tags">${tags}</div>
    `;
    grid.appendChild(card);
  });
}

renderAlertFeed();
renderSkills();
renderTimeline();
renderProjects();
renderCaseFiles();
