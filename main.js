(function () {
  const preTag = document.getElementById("donut");
  let A = 0.07,
    B = 0.03;
  const renderAsciiFrame = () => {
    const b = [],
      z = [],
      cA = Math.cos(A),
      sA = Math.sin(A),
      cB = Math.cos(B),
      sB = Math.sin(B);
    for (let k = 0; k < 44800; k++)
      (b[k] = k % 280 === 279 ? "\n" : " "), (z[k] = 0);
    for (let j = 0; j < 6.28; j += 0.07)
      for (let i = 0; i < 6.28; i += 0.02) {
        const D =
          1 / (Math.sin(i) * (Math.cos(j) + 2) * sA + Math.sin(j) * cA + 5);
        const t = Math.sin(i) * (Math.cos(j) + 2) * cA - Math.sin(j) * sA;
        const x = Math.floor(
          140 + 70 * D * (Math.cos(i) * (Math.cos(j) + 2) * cB - t * sB)
        );
        const y = Math.floor(
          80 + 40 * D * (Math.cos(i) * (Math.cos(j) + 2) * sB + t * cB)
        );
        const o = x + 280 * y;
        const N = Math.floor(
          8 *
            ((Math.sin(j) * sA - Math.sin(i) * Math.cos(j) * cA) * cB -
              Math.sin(i) * Math.cos(j) * sA -
              Math.sin(j) * cA -
              Math.cos(i) * Math.cos(j) * sB)
        );
        if (0 <= y && y < 160 && 0 <= x && x < 280 && D > z[o])
          (b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0]), (z[o] = D);
      }
    preTag.innerHTML = b.join("");
    (A += 0.07), (B += 0.03);
  };
  setInterval(renderAsciiFrame, 50);
  window.onload = window.onresize = renderAsciiFrame;
})();

document.getElementById("donut").addEventListener("click", function () {
  window.open("https://github.com/ecthelionvi", "_blank");
});

