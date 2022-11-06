// display contact form
export default function contactForm () {
  const displayModal = () => {
    const main = document.querySelector("#main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    main.style.opacity = ".7";
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
    main.style.opacity = "1";
  };
  const closeModalButton = document.querySelector(".closeModal-btn");
  closeModalButton.addEventListener("click", () => {
    closeModal();
  });
}