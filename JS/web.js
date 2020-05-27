$.ajaxSetup({
  async: false,
});

let portafolio = document.getElementById("card");
document.getElementById("HTML").addEventListener("click", tecFilter);
document.getElementById("CSS").addEventListener("click", tecFilter);
document.getElementById("JavaScript").addEventListener("click", tecFilter);
document.getElementById("React").addEventListener("click", tecFilter);
document.getElementById("MongoDB").addEventListener("click", tecFilter);
document.getElementById("Bootstrap").addEventListener("click", tecFilter);

window.sr = ScrollReveal();
sr.reveal(".tarjt-portafolio");

function tecFilter() {
  PrinftData(this.id);
}

let proyectos = null;

$.getJSON("./JSON/Projects.json", function (data) {
  proyectos = data;
  console.log(data);
  PrinftData("HTML");
});

function PrinftData(tecFilter) {
  portafolio.innerHTML = "";
  proyectos.map((card) => {
    let tecsFilter = card.technologies.filter((tec) => tec == tecFilter);
    if (tecsFilter != "") {
      GetCard(card);
      sr.reveal(".tarjt-portafolio", {
        duration: 1000,
        origin: "bottom",
        distance: "200px",
        opacity: 0,
      });
    }
  });
}

function GetCard(card) {
  portafolio.innerHTML += `<div class="tarjt-portafolio">
              <div>
                <img src="${card.img}" alt="" />
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