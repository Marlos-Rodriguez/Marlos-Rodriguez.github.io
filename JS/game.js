$.ajaxSetup({
  async: false,
});

let portafolio = document.getElementById("card");

window.sr = ScrollReveal();
sr.reveal(".tarjt-portafolio");

let proyectos = null;

$.getJSON("./JSON/Projects.json", function (data) {
  proyectos = data;

  PrinftData("Unity");
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
