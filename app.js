const board = document.querySelector("#board");
const SQUARE_NUMBERS = 1400;

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const hexCodes = "123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}
