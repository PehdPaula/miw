function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email && senha) {
    const userName = email.split("@")[0] || email;
    localStorage.setItem("userName", userName);
    alert("Login realizado com sucesso!");
    window.location.href = "principal.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}