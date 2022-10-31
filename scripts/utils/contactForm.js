// display contact form
const displayModal = () => {
  const main = document.querySelector("#main");
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  main.style.display = "none";
};
const contactButton = document.querySelector(".contact_button");
contactButton.addEventListener("click", () => {
  displayModal();
});

// close contact form
const closeModal = () => {
  const main = document.querySelector("#main");

  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  main.style.display = "block";
};
const closeModalButton = document.querySelector(".closeModal-btn");
closeModalButton.addEventListener("click", () => {
  closeModal();
});
