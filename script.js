document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.96)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});
