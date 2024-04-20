// const form = document.getElementById("profile-form");
const locationInput = document.getElementById("location");
const defaultImages = document.querySelectorAll(".default-images li a");
const plusIconImg = document.getElementById('plus-icon-img');
const input = document.getElementById('avatar');

input.addEventListener('change', () => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = (e) => {
      plusIconImg.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
});

defaultImages.forEach((image) => {
  image.addEventListener('click', () => {
    const input = document.getElementById('avatar');
    input.value = image.dataset.image;
  });
});

// defaultImages.forEach((image) => {
//   image.addEventListener("click", (event) => {
//     event.preventDefault();
//     avatarInput.value = event.target.dataset.image;
//   });
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const avatar = avatarInput.value;
  const location = locationInput.value;

  console.log("Avatar:", avatar);
  console.log("Location:", location);
});