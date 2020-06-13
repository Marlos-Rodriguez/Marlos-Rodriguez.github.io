const projects = [
  {
    name: "Aplicacion MERN de Proyectos",
    url: "https://github.com/Marlos-Rodriguez/MERN-Task-Cliente",
    description:
      "Aplicación Web de Administración de Proyectos y Tareas con Login y Signup de usuarios. Creado con el Stack MERN, React para el Frontend, Express y Node JS para el Backend y MongoDB para la base de Datos.",
    homepage: "https://silly-hoover-e3bf9c.netlify.app",
    img: "./Images/MERN-Task.webp",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node JS",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "Mi Pagina Web",
    url: "https://github.com/Marlos-Rodriguez/Marlos-Rodriguez.github.io",
    description:
      "Es la pagina en la que estan ahora, construida por mi mismo con JavaScript, CSS y Bootstrap 4, una pagina principal como presentacion y otras dos como paginas para mis trabajos como desarrollador Web y de Videojeugos.",
    homepage: "https://marlos-rodriguez.github.io",
    img: "./Images/web-page.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    name: "Gestor de Productos",
    url: "https://github.com/Marlos-Rodriguez/Crud-Redux",
    description:
      "Aplicacion de Administracion de Productos con nombre y precio. Creado con React usando Redux y React Hooks. Contando con la posibilidad de agregar un nuevo producto, Editarlo y Eliminarlo",
    homepage: "https://marlos-rodriguez.github.io/Crud-Redux/#/",
    img: "./Images/CrudRedux.webp",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    name: "Aplicacion de Peliculas con React",
    url: "https://github.com/Marlos-Rodriguez/Movie-API-React",
    description:
      "Aplicacion de Busqueda de Peliculas creada con HTML, CSS y React, busca la peliculas por titulo mostrando titulo completo, portada y una ventana flotante con la descripcion al hacer click",
    homepage: "https://marlos-rodriguez.github.io/Movie-API-React/",
    img: "./Images/Movie-API.webp",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Buscador de imagenes de Pixabay",
    url: "https://github.com/Marlos-Rodriguez/Search-Pixabay-React",
    description: "Buscador de Imagenes con el API de Pixabay hecha con React",
    homepage: "https://marlos-rodriguez.github.io/Search-Pixabay-React/",
    img: "./Images/pixabay.webp",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Pagina Profesional",
    url: "https://github.com/Marlos-Rodriguez/Dev-Ed-Profession-Page",
    description: "Responsive Professional Web page made with HTML, CSS, JS. ",
    homepage: "https://marlos-rodriguez.github.io/Dev-Ed-Profession-Page/",
    img: "./Images/professional.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Clon de Evernote con React",
    url: "https://github.com/Marlos-Rodriguez/Evernote-Clone-React",
    description:
      "Aplicacion de notas y tareas al estilo de Evernote hecha con React JS y Firebase. Se puede agregar, eliminar y modificar notas alojadas en una base de datos de Firebase",
    homepage: "https://marlos-rodriguez.github.io/Evernote-Clone-React/",
    img: "./Images/Evernote-clone.webp",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Plataformas 2D",
    url: "https://github.com/Marlos-Rodriguez/2D-Platform",
    description:
      "Videojuego 2D de Plataformas hecho con Unity3D. Un personaje principal con movimiento y salto, vida y monedas a recolectar. 2 enemigos clasicos que se mueven de lado a lado y una pequeña interfaz con contador de vida y Gemas.",
    homepage: "",
    img: "./Images/Fox-Platform.webp",
    technologies: ["C#", "Unity"],
  },
  {
    name: "Administrador de pacientes con React",
    url: "https://github.com/Marlos-Rodriguez/Appointments-React",
    description:
      "App de citas para el Veterinario con React Js del Curso de Juan Pablo De la torre Valdez en Udemy",
    homepage: "https://marlos-rodriguez.github.io/Appointments-React/",
    img: "./Images/Appointments.webp",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Pagina de Producto con Bootstrap",
    url: "https://github.com/Marlos-Rodriguez/Bootstrap-Curso",
    description:
      "Pagina web hecha con Bootstrap 4 y ScrollReveal JS para un producto electronico, en este ejemplo sobre un telefono.",
    homepage: "https://marlos-rodriguez.github.io/Bootstrap-Curso/",
    img: "./Images/bootstrap-Page.webp",
    technologies: ["HTML", "Bootstrap"],
  },
];

function PrinftData(tecFilter) {
  portafolio.innerHTML = "";
  projects.map((card) => {
    let tecsFilter = card.technologies.filter((tec) => tec == tecFilter);
    if (tecsFilter != "") {
      GetCard(card);
    }
  });
}

export { projects };
