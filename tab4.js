const profileImg = document.getElementById("profileImg");
const banner = document.getElementById("banner");
const closeBanner = document.getElementById("closeBanner");

profileImg.addEventListener("click", () => {
  banner.classList.remove("hidden");
});

closeBanner.addEventListener("click", () => {
  banner.classList.add("hidden");
});