const emailForm = document.getElementById("email-form");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailAddress = document.getElementById("email-address").value;

  console.log("Submitting form with email address:", emailAddress);
});