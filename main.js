const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  var activePanel = e.target.closest(".accordion-panel");
  activePanel.querySelector(".accordion-trigger").focus();

  if (!activePanel) return;
  document.querySelectorAll(".accordion-image").forEach((idkf) => {
    idkf.style.filter = "brightness(1)";
  });
  document.querySelectorAll(".accordion-panel").forEach((element) => {
    var accordionParagraph = element.querySelector("p").style;
    accordionParagraph.transform = "translateY(2rem)";
    accordionParagraph.transition = "transform 250ms, opacity 250ms";
    accordionParagraph.opacity = "0";
    let cheems = element.closest(".accordion-panel").style;
    cheems.flexBasis = "";
    cheems.flexGrow = "";
  });
  let doge = activePanel.querySelector("p").style;
  doge.transform = "translateY(0rem)";
  doge.transition = "transform 500ms 250ms, opacity 500ms 500ms";
  doge.background = "transparent";
  doge.opacity = "1";
  activePanel.style.flexBasis = "clamp(15rem, 40vh, 20rem)";
  activePanel.style.flexGrow = "1";
  activePanel.querySelector(".accordion-image").style.filter =
    "brightness(0.5)";
});

window.ondragstart = function () {
  return false;
};


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var previousNumber = 0;
let randomizer = document.getElementById("classpicker");
randomizer.addEventListener("click", () => {
  if (document.getElementById("icosahedron").style.rotate != "0deg") {
    document.getElementById("icosahedron").style.rotate="0deg";
  } else {
    document.getElementById("icosahedron").style.rotate="180deg"
  };
  let rn = getRandomIntInclusive(0, 12);
  while(previousNumber == rn){
    rn = getRandomIntInclusive(0, 12);
  };
  previousNumber = rn;
  let n = 0;
  document.querySelectorAll(".accordion-trigger").forEach((panel) => {
    if(n == rn) {
      panel.click();
      panel.focus();
    };
    n+=1;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".first").forEach((itm) => {
    itm.click();
  });
});
