const $containLetter = document.getElementById("contain-list");
let presionadas = 0;
// functions
let $total = document.querySelector(".display .total");
let $presionadas = document.querySelector(".display .presionadas");
let $faltantes = document.querySelector(".display .faltantes");

window.addEventListener("DOMContentLoaded", () => {
  getValuesKeys();
  $total.textContent = $containLetter.childElementCount;
  $faltantes.textContent =
    $containLetter.childElementCount - parseInt($presionadas.textContent);
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  console.log(key);

  let encontrado = document.getElementById(e.key.toLowerCase());

  if (encontrado !== null) {
    encontrado.classList.replace("incomplete", "success");
    // Aumentar la varibale de encontrados
  } else {
    console.log(`No encontre a: ${e.key}`);
  }

  $presionadas.textContent = document.getElementsByClassName("success").length;
  $faltantes.textContent =
    $containLetter.childElementCount - parseInt($presionadas.textContent);
});

// FUntions
function getValuesKeys() {
  // rango Unicode Para Generar los valores::::
  // [32 65]  [90-126]

  let unicodeMin = 32;
  let unicodeMax = 126;

  for (unicodeMin; unicodeMin <= unicodeMax; unicodeMin++) {
    if (unicodeMin < 65 || unicodeMin > 90) {
      letter = String.fromCharCode(unicodeMin);
      $containLetter.appendChild(makeLetter(letter.toLowerCase()));
    }
  }

  const specials = [
    "escape",
    "alt",
    "control",
    "capslock",
    "shift",
    "meta",
    "contextmenu",
    "enter",
    "backspace",
  ];
  specials.forEach((key) => {
    $containLetter.appendChild(makeLetter(key.toLowerCase()));
  });

  // Agregar teclas especiales XD
}

function makeLetter(value) {
  let hijo = document.createElement("div");

  hijo.classList.add(`contain-letter`);
  hijo.classList.add(`incomplete`);
  hijo.textContent = value != " " ? value : "Space";
  hijo.id = value;
  return hijo;
}
