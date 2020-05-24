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
  data.map((card) => {
    GetCard(card);
  });
});

function PrinftData(tecFilter) {
  portafolio.innerHTML = "";
  proyectos.map((card) => {
    let tecsFilter = card.technologies.filter((tec) => tec == tecFilter);
    if (tecsFilter != "") {
      console.log(card.name);
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
          <img src=${card.img} alt="" />
        </div>
        <div class="text">
          <h1>
            ${card.name}
          </h1>
          <p>
            ${card.description}
          </p>
          <p>
            <span>${GetTecs(card.technologies)}</span>
          </p>
          <br />
          <a
            href=${card.url}
            target="_blank"
            class="boton-1"
          >
            Ver Proyecto
          </a>
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
