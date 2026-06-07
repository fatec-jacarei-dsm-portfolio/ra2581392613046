const fontSize = 32;
const spacingX = fontSize * 1.4;
const spacingY = fontSize * 1.2;
const glowRadius = 250;

const canvas = document.querySelector(".binary-background");
const footer = document.querySelector(".footer");
const lord = document.querySelector(".lord-fixed-container");
let mouse = { x: -1000, y: -1000 };
let staticGrid = [];

function generateStaticGrid(width, height) {
  const columns = Math.ceil(width / spacingX);
  const rows = Math.ceil(height / spacingY);
  staticGrid = [];

  for (let row = 0; row < rows; row += 1) {
    staticGrid[row] = [];

    for (let column = 0; column < columns; column += 1) {
      staticGrid[row][column] = Math.floor(Math.random() * 2).toString();
    }
  }
}

function resizeCanvas() {
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generateStaticGrid(canvas.width, canvas.height);
  drawBinaryBackground();
}

function drawBinaryBackground() {
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = `bold ${fontSize}px Consolas, Monaco, monospace`;

  const columns = Math.ceil(canvas.width / spacingX);
  const rows = Math.ceil(canvas.height / spacingY);

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const text = staticGrid[row]?.[column] ?? "0";
      const x = Math.floor(column * spacingX);
      const y = Math.floor(row * spacingY);
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < glowRadius) {
        const opacity = 1 - distance / glowRadius;
        context.fillStyle = `rgba(0, 255, 65, ${0.1 + opacity * 0.1})`;
        context.shadowBlur = 15 * opacity;
        context.shadowColor = "#00ff41";
      } else {
        context.fillStyle = "rgba(8, 22, 12, 0.93)";
        context.shadowBlur = 0;
      }

      context.fillText(text, x, y);
    }
  }
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", (event) => {
  mouse = { x: event.clientX, y: event.clientY };
  window.requestAnimationFrame(drawBinaryBackground);
});

if (footer && lord) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      lord.classList.toggle("show", entry.isIntersecting);
    },
    { threshold: 0.2 },
  );

  observer.observe(footer);
}

resizeCanvas();
