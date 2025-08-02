document.getElementById("pedidoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const sabor = document.getElementById("sabor").value;
  const tamanho = document.getElementById("tamanho").value;
  const observacao = document.getElementById("obs").value;
  const opcionais = Array.from(
    document.querySelectorAll(".opcionais input:checked")
  ).map((el) => el.value);

  const msg = `🍕 *Pedido de Pizza* 🍕
  
*Sabor:* ${sabor}
*Tamanho:* ${tamanho}
*Opcionais:* ${opcionais.join(", ") || "Nenhum"}
*Obs:* ${observacao || "Nenhuma"}

➡️ Pedido feito via site.`;

  const numero = "5584992035664"; // Substitua pelo número da pizzaria com DDD
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});
