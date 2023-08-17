const container = document.querySelector(".sketch-container");
const resetBtn = document.querySelector(".reset");
const sizeBtn = document.querySelector(".size");
const pinkBtn = document.querySelector(".pink");
const rainbowBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".eraser");

function createGrid(num) {
  for (let r = 0; r < num; r++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.width = `calc(100% / ${num})`;
    container.appendChild(row);

    //creates a num of rows

    for (let c = 0; c < num; c++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.style.width = `calc(100% / ${num})`;
      row.appendChild(column);
    }
    //creates a num of squares inside the rows
  }
}

createGrid(16);

//This creates the initial 16 by 16 grid.

function newGrid(num) {
  container.innerHTML = "";

  num = prompt("Want a new grid? Choose a number!");

  if (num < 2 || num > 100) {
    alert("Choose a number from 2 to 100!");
  } else {
    createGrid(num);
  }
}

//This prompts the user to create a new grid

function random(number) {
  return Math.floor(Math.random() * number);
}

function colorChange() {
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return color;
}

function colorGlow() {
  const colorGlow = `0 0 10px rgba(${random(255)}, ${random(255)}, ${random(
    255
  )}, 0.7)`;
  return colorGlow;
}

//Random color generation

sizeBtn.addEventListener("click", newGrid);

resetBtn.addEventListener("click", () => {
  container.innerHTML = "";

  createGrid(16);
});

pinkBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#ff006e";
    e.target.style.boxShadow = "0 0 10px rgba(255, 0, 110, 0.7)";
  });
});

rainbowBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = colorChange();
    e.target.style.boxShadow = colorGlow();
  });
});

eraserBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.boxShadow = "";
  });
});
