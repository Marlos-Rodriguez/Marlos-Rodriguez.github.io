document.getElementById("html").addEventListener("click", tecFilter);
let portafolio = document.getElementById("card");

let tecFilters = {
  all: true,
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  react: "React",
  mongodb: "MongoDB",
  bootstrap: "Bootstrap",
};

function tecFilter() {
  tecFilters.all = false;
  tecFilters.html = true;
}

function PrinftData() {
  $.getJSON("./JSON/Projects.json", function (data) {
    data.map((card) => {
      if (tecFilters.all) {
        portafolio.innerHTML += `<div class="tarjt-portafolio zoom">
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
    });
  });
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

PrinftData();
