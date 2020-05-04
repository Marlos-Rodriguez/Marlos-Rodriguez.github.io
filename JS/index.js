const evernote = document.getElementById("Evernote-Clone-React");

CardIndex(evernote.id);

async function CardIndex(id) {
  const Api_url = "https://api.github.com/users/Marlos-Rodriguez/repos";
  const response = await fetch(Api_url);
  const data = await response.json();
  evernoteRepo = data.filter((repo) => repo.name == id);

  evernote.innerHTML = `<div class="col-lg-4 mb-3">
  <div class="card zoom shadow" style="width: 18rem;">
    <img
      loading="lazy"
      src="./Images/Evernote Logo.jpg"
      class="rounded-circle mx-auto mt-3"
      alt="Bootstap page image"
      height="140"
      width="140"
    />
    <div class="card-body">
      <h5 class="text-center card-title" id="evernote">
        ${evernoteRepo[0].name}
      </h5>
      <p class="text-center card-text">
        ${evernoteRepo[0].description}
      </p>
      <div class="d-flex justify-content-center">
        <a
          class="btn btn-primary mx-auto"
          href=${evernoteRepo[0].html_url}
          target="_blank"
          role="button"
          >GitHub »</a
        >
        <a
          class="btn btn-primary mx-auto"
          href=${evernoteRepo[0].homepage}
          target="_blank"
          role="button"
          >Open »</a
        >
      </div>
    </div>
  </div>
</div>`;
}
