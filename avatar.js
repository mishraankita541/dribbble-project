
const form = document.getElementById("profile-form");
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

defaultImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          avatarInput.value = null;
          avatarInput.files = [file];
          const preview = document.querySelector(".avatar-container .current-image");
          preview.src = img.src;
          chooseDefaultButton.style.display = "none";
          chooseImageButton.style.display = "block";
        };
      };
      reader.readAsDataURL(file);
    });
    fileInput.click();
  });
});

chooseDefaultButton.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        avatarInput.value = null;
        avatarInput.files = [file];
        const preview = document.querySelector(".avatar-container .current-image");
        preview.src = img.src;
        chooseDefaultButton.style.display = "none";
        chooseImageButton.style.display = "block";
      };
    };
    reader.readAsDataURL(file);
  });
  fileInput.click();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  console.log("Submitting form with data:", formData);});

chooseImageButton.addEventListener("click", () => {
  avatarInput.click();
});

if (avatarInput.files.length > 0) {
  const file = avatarInput.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      const preview = document.querySelector(".avatar-container .current-image");
      preview.src = img.src;
      chooseDefaultButton.style.display = "none";
      chooseImageButton.style.display = "block";
    };
  };
  reader.readAsDataURL(file);
} else {
  const preview = document.querySelector(".avatar-container .current-image");
  preview.src = "https://via.placeholder.com/100x100.png?text=No+image";
  chooseDefaultButton.style.display = "block";
  chooseImageButton.style.display = "none";
}
