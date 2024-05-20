const d = document;

export function moveBall(ball) {
  let $ball = d.querySelector(ball);

  // Inicializa la posición
  $ball.style.left = "0";
  $ball.style.top = "0";

  // Agrega un listener para mover la pelota con las teclas de flecha
  d.addEventListener("keydown", (e) => {
    let left = parseInt($ball.style.left, 10);
    let top = parseInt($ball.style.top, 10);

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        $ball.style.left = `${left - 15}px`;
        break;
      case "ArrowUp":
        e.preventDefault();
        $ball.style.top = `${top - 15}px`;
        break;
      case "ArrowRight":
        e.preventDefault();
        $ball.style.left = `${left + 15}px`;
        break;
      case "ArrowDown":
        $ball.style.top = `${top + 15}px`;
        e.preventDefault();
        break;
      default:
        break;
    }
  });
}
