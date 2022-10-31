const elementId = window.location.search.replace("?id=", "");
fetch(`/data/photographers.json/${elementId}`)
  .then((res) => res.json())
  .then((data) => {
    const displayElement = data;
    displayElement.forEach((elmt) => {
      document.querySelector(".avatar-img").textContent = elmt.portrait;
    });
  });
