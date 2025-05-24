


// For home section start


  const images = ["Picture/BC-campus.jpg","Picture/Drug.jpg","Picture/JACS-cover.jpg","Picture/Chacha.jpg","Picture/Chacha2.jpg","Picture/Winnie.jpg"];
  let currentIndex = 0;

  const imageEl = document.getElementById("slider-image");
  const dotsContainer = document.getElementById("dots-container");

  function showImage(index) {
    currentIndex = index;
    imageEl.src = images[index];
    updateDots();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll("span");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // Create dots dynamically
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showImage(i));
    dotsContainer.appendChild(dot);
  });

  showImage(currentIndex);

  function showImage(index) {
  const image = document.getElementById("slider-image");

  // Add 'out' class to fade out
  image.classList.add("out");

  // Wait for the fade-out to finish, then change the image and fade in
  setTimeout(() => {
    image.src = images[index];
    currentIndex = index;

    updateDots();

    // Remove 'out' class to fade in
    image.classList.remove("out");
  }, 300); // timing must match fade-out speed
}