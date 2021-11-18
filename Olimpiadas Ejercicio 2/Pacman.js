//Juan Carlos Laverde - A00371894
//Samuel Ortiz - A00372452
//Camila Lerma - A00368351



const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("Puntaje");

const width = 28;
let score = 0;
let squares = [];

const layout1 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    4,0,0,0,0,0,0,0,0,4,1,1,1,2,2,1,1,1,4,0,0,0,0,0,0,0,0,4,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const createBoard = (layout) => {
  for (let i = 0; i < layout.length; i++) {
  
    const square = document.createElement("div");
    grid.appendChild(square);
    squares.push(square);

    if (layout[i] === 1) {
      square.classList.add("wall");
    } else if (layout[i] === 0) {
      square.classList.add("pac-dot");
    } else if (layout[i] === 3) {
      square.classList.add("power-pellet");
    } else if (layout[i] === 2) {
      square.classList.add("ghost-layer");
    }
  }
};

createBoard(layout1);

//pocision del pacman al iniciar
let pacmanCurrentIndex = 490;
const pacmanRotation = document.querySelector(".mouth");
const mouth = document.createElement("div");
squares[pacmanCurrentIndex].classList.add("pacman");

//control para el pacman
const controls = (e) => {

  squares[pacmanCurrentIndex].classList.remove("pacman");
  squares[pacmanCurrentIndex].appendChild(mouth).classList.add("mouth");
  switch (e.key) {
    case "ArrowUp":
      if (
        !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
        pacmanCurrentIndex - width >= 0
      ) {
        document.querySelector(".mouth").style.transform = "rotate(-90deg)";
        pacmanCurrentIndex -= width;
      }

      break;
    case "ArrowDown":
      if (
        !squares[pacmanCurrentIndex + width].classList.contains(
          "ghost-layer"
        ) &&
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        pacmanCurrentIndex + width < width * width
      ) {
        document.querySelector(".mouth").style.transform = "rotate(90deg)";
        pacmanCurrentIndex += width;
      }
      break;
    case "ArrowLeft":
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
        pacmanCurrentIndex % width !== 0
      ) {
        document.querySelector(".mouth").style.transform = "rotate(180deg)";
        pacmanCurrentIndex -= 1;
      }

      if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex += 27;
      }
      break;
    case "ArrowRight":
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
        pacmanCurrentIndex % width < width - 1
      ) {
        document.querySelector(".mouth").style.transform = "rotate(0deg)";
        pacmanCurrentIndex += 1;
      }

      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex -= 27;
      }
      break;
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  squares[pacmanCurrentIndex].appendChild(mouth).classList.add("mouth");
  dotsEaten();
  powerDotEaten();
};

document.addEventListener("keyup", controls);

//points and dots eaten
let dotsLeft = 244;

let powerDots = 4;

const dotsEaten = () => {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
    dotsLeft--;
    score++;
    scoreDisplay.innerText = score;
  }
};

const powerDotEaten = () => {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    score += 10;
    powerDots--;
    ghosts.forEach((ghost) => (ghost.isScared = true));

    setTimeout(function () {
      ghosts.forEach((ghost) => (ghost.isScared = false));
    }, 10000);
  }
};

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost("wooo1", 349, 250),
  new Ghost("wooo2", 377, 400),
  new Ghost("wooo3", 350, 300),
  new Ghost("wooo4", 378, 500),
];


ghosts.forEach((ghost) => {
  squares[ghost.startIndex].classList.add(ghost.className);
  squares[ghost.startIndex].classList.add("ghost");
});

ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, +1, -width, +width];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function () {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      !squares[ghost.currentIndex + direction].classList.contains("wall")
    ) {
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    // si el fantasma esta asustado
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scared-ghost"
      );

      ghost.currentIndex = ghost.startIndex;

      score += 20;

      squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
    }
    nextLevelOrGameOver();
  }, ghost.speed);
}


const nextLevelOrGameOver = () => {
  if (
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost") &&
    squares[pacmanCurrentIndex].classList.contains("ghost")
  ) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", controls);
    alert("Perdiste :(");
  } else if (dotsLeft === 0 && powerDots === 0) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", controls);
    alert("Ganaste");
  }
};