// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }
  
  /* Validando Nome*/
  
  let nomeInput = document.getElementById("nome");
  let nomeLabel = document.querySelector('label[for="nome"]');
  let nomeHelper = document.getElementById("nome-helper");
  
  togglePopup(nomeInput, nomeLabel);
  
  // Validar valor do input
  nomeInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.length < 3) {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
      estilizarInputIncorreto(nomeInput, nomeHelper);
      inputsCorretos.nome = false;
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(nomeInput, nomeHelper);
      inputsCorretos.nome = true;
    }
  });
  
  // ---------- VALIDAÇÃO EMAIL ---------- //
  
  let emailInput = document.getElementById("email");
  let emailLabel = document.querySelector('label[for="email"]');
  let emailHelper = document.getElementById("email-helper");
  
  togglePopup(emailInput, emailLabel);
  
  // Validar valor do input
  emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.includes("@") && valor.includes(".com")) {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
      inputsCorretos.email = true;
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
      inputsCorretos.email = false;
    }
  });
  
  // // ---------- VALIDAÇÃO ENDEREÇO ---------- //
  
  let endInput = document.getElementById("endereco");
  let endLabel = document.querySelector('label[for="endereco"]');
  let endHelper = document.getElementById("endereco-helper");
  
  togglePopup(endInput, endLabel);
  
  // Validar valor do input
  endInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.length < 3) {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      endHelper.innerText = "Você deve digitar um endereço";
      estilizarInputIncorreto(endInput, endHelper);
      inputsCorretos.end = false;
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(endInput, endHelper);
      inputsCorretos.end = true;
    }
  });
  
  // ---------- VALIDAÇÃO NÚMERO ---------- //
  
  let numeroInput = document.getElementById("numero");
  let numeroLabel = document.querySelector('label[for="numero"]');
  let numeroHelper = document.getElementById("numero-helper");
  
  togglePopup(numeroInput, numeroLabel);
  
  // Validar valor do input
  numeroInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.length < 1) {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      numeroHelper.innerText = "Seu numero precisa ter 1 ou mais caracteres";
      estilizarInputIncorreto(numeroInput, numeroHelper);
      inputsCorretos.numero = false;
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(numeroInput, numeroHelper);
      inputsCorretos.numero = true;
    }
  });
  
  // ---------- VALIDAÇÃO BAIRRO ---------- //
  
  let bairroInput = document.getElementById("bairro");
  let bairroLabel = document.querySelector('label[for="bairro"]');
  let bairroHelper = document.getElementById("bairro-helper");
  
  togglePopup(bairroInput, bairroLabel);
  
  // Validar valor do input
  bairroInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.length < 3) {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      bairroHelper.innerText = "Digite um bairro válido";
      estilizarInputIncorreto(bairroInput, bairroHelper);
      inputsCorretos.bairro = false;
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(bairroInput, bairroHelper);
      inputsCorretos.bairro = true;
    }
  });
  
  // ---------- VALIDAÇÃO CIDADE ---------- //
  
  let cidadeInput = document.getElementById("cidade");
  let cidadeLabel = document.querySelector('label[for="cidade"]');
  let cidadeHelper = document.getElementById("cidade-helper");
  
  togglePopup(cidadeInput, cidadeLabel);
  
  // Validar valor do input
  cidadeInput.addEventListener("change", (e) => {
    let valor = e.target.value;
  
    if (valor.length < 3) {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      cidadeHelper.innerText = "Digite uma cidade válida";
      estilizarInputIncorreto(cidadeInput, cidadeHelper);
      inputsCorretos.cidade = false;
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(cidadeInput, cidadeHelper);
      inputsCorretos.cidade = true;
    }
  });
  
  /* VALIDAÇÃO DO BOTÃO ENVIAR*/
  
  let btnSubmit = document.querySelector('button[type="submit"]');
  let inputsCorretos = {
    nome: false,
    email: false,
    endereco: false,
    numero: false,
    bairro: false,
    cidade: false,
  };
  btnSubmit.addEventListener("click", (e) => {
    if (
      inputsCorretos.nome == false &&
      inputsCorretos.email == false &&
      inputsCorretos.endereco == false &&
      inputsCorretos.numero == false &&
      inputsCorretos.bairro == false &&
      inputsCorretos.cidade == false
    ) {
      e.preventDefault();
      alert("Os campos obrigatórios precisam ser preenchidos!");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
  