import { projects } from "./Projects.js";

let portafolio = document.getElementById("card");
document.getElementById("HTML").addEventListener("click", tecFilter);
document.getElementById("CSS").addEventListener("click", tecFilter);
document.getElementById("JavaScript").addEventListener("click", tecFilter);
document.getElementById("React").addEventListener("click", tecFilter);
document.getElementById("MongoDB").addEventListener("click", tecFilter);
document.getElementById("Node JS").addEventListener("click", tecFilter);

function tecFilter() {
  PrinftData(this.id);
}

projects.map((card) => {
  GetCard(card);
});

function PrinftData(tecFilter) {
  portafolio.innerHTML = "";
  projects.map((card) => {
    let tecsFilter = card.technologies.filter((tec) => tec == tecFilter);
    if (tecsFilter != "") {
      GetCard(card);
    }
  });
}

function GetCard(card) {
  const { img, name, description, technologies, url, homepage, imgalt } = card;

  portafolio.innerHTML += `<div class="tarjt-portafolio">
            <div>
              <img src="${img}" loading="lazy" alt="${imgalt}" />
            </div>
            <div class="text">
              <h1>
                ${name}
              </h1>
              <p>
                ${description}
              </p>
              <span class="technologies">
                ${GetTecs(technologies)}
              </span>
              <br />
              <section class="button-containers">
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="button">
                  Codigo
                </a>
                ${
                  homepage != ""
                    ? `<a
                  href="${homepage}"
                  target="_blank"
                  class="button"
                  rel="noopener noreferrer"
                >
                  Abrir </a
                >`
                    : ""
                }
              </section>
            </div>
          </div>`;
}

function GetTecs(array) {
  let tecs = "";
  array.map((tec) => {
    if (tec == array[0]) {
      tecs += tec;
    } else {
      tecs += ", " + tec;
    }
  });
  return "<p>" + tecs + "</p>";
}
