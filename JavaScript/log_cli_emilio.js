let email = document.getElementById("#email")
let password = document.getElementById("#password")





function validateForm() {
  let email = document.getElementById("#email").value;
  let password = document.getElementById("#password").value;

  // Validação do email
  if (!email || !isValidEmail(email)) {
    alert("Por favor, digite um email válido.");
    return;
  }

  // Validação da senha
  if (!password || password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  // Se todas as validações passarem, você pode enviar o formulário
  document.getElementById("form").submit();
}

function isValidEmail(email) {
  // Esta é uma validação simples de e-mail, você pode usar uma expressão regular mais complexa se necessário
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
