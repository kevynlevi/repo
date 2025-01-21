// Função simples para alertar ao clicar no e-mail
document.querySelectorAll(".email").forEach((emailLink) => {
    emailLink.addEventListener("click", () => {
      alert("Abrindo o cliente de e-mail...");
    });
  });
  