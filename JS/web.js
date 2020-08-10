import { projects } from "./Projects.js";

let portafolio = document.getElementById("card");
document.getElementById("HTML").addEventListener("click", tecFilter);
document.getElementById("CSS").addEventListener("click", tecFilter);
document.getElementById("JavaScript").addEventListener("click", tecFilter);
document.getElementById("React").addEventListener("click", tecFilter);
document.getElementById("MongoDB").addEventListener("click", tecFilter);
document.getElementById("Bootstrap").addEventListener("click", tecFilter);

function tecFilter() {
  PrinftData(this.id);
}

PrinftData("HTML");

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
  portafolio.innerHTML += `<div class="tarjt-portafolio">
            <div>
              <img src="${card.img}" loading="lazy" alt="" />
            </div>
            <div class="text">
              <h1>
                ${card.name}
              </h1>
              <p>
                ${card.description}
              </p>
              <span class="technologies">
                ${GetTecs(card.technologies)}
              </span>
              <br />
              <section class="button-containers">
                <a href="${card.url}" target="_blank" class="button">
                  Codigo
                </a>
                ${
                  card.homepage != ""
                    ? `<a
                  href="${card.homepage}"
                  target="_blank"
                  class="button"
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
