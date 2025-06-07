document.addEventListener("DOMContentLoaded", () => {
  
  const saudacaoElement = document.querySelector(".saudacao h1");
  let userName = localStorage.getItem("userName");

  if (!userName) {
    userName = "Pedro";
    localStorage.setItem("userName", userName);
  }

  saudacaoElement.textContent = `Meu Perfil - ${userName}`;

  window.alterarSenha = function() {
    const novaSenha = document.getElementById("novaSenha").value;
    if (novaSenha) {
      alert("Senha alterada com sucesso! (Simulação)");
      document.getElementById("novaSenha").value = "";
    } else {
      alert("Por favor, insira uma senha.");
    }
  };

  window.alterarNome = function() {
    const novoNome = document.getElementById("novoNome").value.trim();
    if (novoNome && novoNome.length >= 2) {
      localStorage.setItem("userName", novoNome);
      saudacaoElement.textContent = `Meu Perfil - ${novoNome}`;
      document.getElementById("novoNome").value = "";
      alert("Nome alterado com sucesso!");
    } else {
      alert("Por favor, insira um nome válido (mínimo 2 caracteres).");
    }
  };

  window.alterarEmail = function() {
    const novoEmail = document.getElementById("novoEmail").value;
    if (novoEmail) {
      alert("E-mail alterado com sucesso! (Simulação)");
      document.getElementById("novoEmail").value = "";
    } else {
      alert("Por favor, insira um e-mail.");
    }
  };

  
  window.calcularPerfil = function() {
    const pergunta1 = parseInt(document.getElementById("pergunta1").value);
    const pergunta2 = parseInt(document.getElementById("pergunta2").value);
    const pergunta3 = parseInt(document.getElementById("pergunta3").value);
    const total = pergunta1 + pergunta2 + pergunta3;

    let perfil;
    if (total <= 4) perfil = "Conservador";
    else if (total <= 7) perfil = "Moderado";
    else perfil = "Arrojado";

    const resultadoElement = document.getElementById("resultadoPerfil");
    resultadoElement.textContent = `Seu perfil de investidor é: ${perfil}`;
  };

  window.desconectar = function() {
    localStorage.removeItem("userName");
    window.location.href = "login.html";
  };
});