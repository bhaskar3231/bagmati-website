const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const quoteForm = document.querySelector("#quoteForm");
const formStatus = document.querySelector("#formStatus");
const yearSpan = document.querySelector("#year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!quoteForm.checkValidity()) {
      formStatus.textContent = "Please fill all required fields before submitting.";
      return;
    }

    const submitButton = quoteForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    formStatus.textContent = "Sending your enquiry...";

    try {
      const response = await fetch(quoteForm.action, {
        method: "POST",
        body: new FormData(quoteForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "Thank you! Your enquiry has been sent to Bagmati. We will get back to you shortly.";
        quoteForm.reset();
      } else {
        formStatus.textContent = "Something went wrong sending your enquiry. Please email us directly at contact.bagmati@gmail.com or satyendra@bagmati.co.in.";
      }
    } catch (error) {
      formStatus.textContent = "Connecting securely to Bagmati...";
      quoteForm.submit();
    } finally {
      submitButton.disabled = false;
    }
  });
}
