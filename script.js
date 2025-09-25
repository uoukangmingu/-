// 클릭 시 자동 스크롤
document.getElementById("main").addEventListener("click", () => {
  document.getElementById("video-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-arrow").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("video-section").scrollIntoView({ behavior: "smooth" });
});
