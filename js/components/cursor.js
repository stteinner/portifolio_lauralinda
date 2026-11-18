export function setupCursor() {
  const cursor = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor-dot");
  if (!cursor || !dot || !window.matchMedia("(pointer: fine)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener("mousemove", event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener("mouseover", event => {
    if (event.target.closest("a, button")) cursor.classList.add("hover");
  });
  document.addEventListener("mouseout", event => {
    if (event.target.closest("a, button")) cursor.classList.remove("hover");
  });
}
