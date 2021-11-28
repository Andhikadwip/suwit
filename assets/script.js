const imgComp = document.querySelector(".img-comp");
const player = document.querySelectorAll("ul li img");
const info = document.querySelector(".info");

function getPilihanComp() {
  let comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.68) return "gunting";
  return "kertas";
}

function getHasil(comp, player) {
  if (player == comp) return "Seri!";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "Kalah!";
  if (player == "gunting") return comp == "kertas" ? "MENANG!" : "Kalah!";
  if (player == "kertas") return comp == "batu" ? "MENANG!" : "Kalah!";
}

//CARA MANUAL

// batu.addEventListener("click", function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlay = batu.className;
//   const hasil = getHasil(pilihanComp, pilihanPlay);
//   imgComp.setAttribute("src", "assets/img/" + pilihanComp + ".png");
//   info.innerHTML = hasil;
// });

//CARA PENGULANGAN
function putar() {
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgComp.setAttribute("src", "assets/img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

player.forEach(function (img) {
  img.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlay = img.className;
    const hasil = getHasil(pilihanComp, pilihanPlay);
    putar();
    setTimeout(function () {
      imgComp.setAttribute("src", "assets/img/" + pilihanComp + ".png");
      info.innerHTML = hasil;
    }, 1200);
  });
});
