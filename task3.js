

const body = document.body;
document.title = "Projects";

body.style.margin = "0";
body.style.padding = "0";
body.style.fontFamily = "Poppins, sans-serif";
body.style.backgroundColor = "#e46ae0";
body.style.textAlign = "center";

const heading = document.createElement("h1");
heading.textContent = "projects";
heading.style.color = "#5b00e0";
heading.style.fontSize = "40px";
heading.style.margin = "30px 0";
heading.style.textTransform = "capitalize";
body.appendChild(heading);

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(6, 1fr)";
container.style.gap = "20px";
container.style.padding = "30px";
container.style.justifyContent = "center";
body.appendChild(container);

for (let i = 1; i <= 18; i++) {
  const card = document.createElement("div");
  card.style.backgroundColor = "#fff";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0 5px 10px rgba(0,0,0,0.2)";
  card.style.padding = "30px 10px";
  card.style.transition = "transform 0.3s ease";
  card.style.cursor = "pointer";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });

  const title = document.createElement("h2");
  title.textContent = `project ${i}`;
  title.style.color = "#6a0dad";
  title.style.fontSize = "22px";
  title.style.marginBottom = "10px";
  card.appendChild(title);

  const name = document.createElement("p");
  name.textContent = "youssef";
  name.style.color = "#7a00cc";
  name.style.fontSize = "18px";
  name.style.margin = "0";
  card.appendChild(name);

  container.appendChild(card);
}

const style = document.createElement("style");
style.textContent = `
@media (max-width: 900px) {
  div {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}
@media (max-width: 500px) {
  div {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
`;
document.head.appendChild(style);