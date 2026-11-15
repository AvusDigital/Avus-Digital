// Soluções Avus: os pilares marcados entram na mensagem pronta do WhatsApp.
(function () {
  var root = document.querySelector("[data-solucoes]");
  if (!root) return;
  var boxes = Array.prototype.slice.call(root.querySelectorAll('input[type="checkbox"][data-pillar]'));
  var cta = root.querySelector("[data-solucoes-cta]");
  var count = root.querySelector("[data-solucoes-count]");
  if (!cta) return;

  function update() {
    var picked = boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.getAttribute("data-pillar"); });
    var msg = picked.length
      ? "Olá, Avus! Quero conversar com um especialista. Tenho interesse em: " + picked.join("; ") + "."
      : "Olá, Avus! Quero conversar com um especialista sobre as soluções da Avus.";
    cta.href = "https://wa.me/" + cta.getAttribute("data-whatsapp") + "?text=" + encodeURIComponent(msg);
    if (count) {
      count.textContent = picked.length
        ? picked.length + (picked.length === 1 ? " pilar selecionado" : " pilares selecionados")
        : "Nenhum pilar selecionado";
    }
  }

  boxes.forEach(function (b) { b.addEventListener("change", update); });
  update();
})();
