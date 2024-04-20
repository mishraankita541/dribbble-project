const form = document.getElementById("dribbble-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const reason = formData.get("reason");

  console.log("Reason:", reason);
});