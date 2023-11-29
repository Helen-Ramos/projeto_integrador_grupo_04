const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click' , toggleMenu);


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

// ---------- VALIDAÇÃO nome ---------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

// Validar valor do input
nomeInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper)
    inputsCorretos.nome = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nomeInput, nomeHelper);
    inputsCorretos.nome =true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})

/*Validação do Endereço*/

let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

togglePopup(enderecoInput, enderecoLabel)

// Validar valor do input
enderecoInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    enderecoHelper.innerText = "Seu endereco precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(enderecoInput, enderecoHelper)
    inputsCorretos.endereco = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(enderecoInput, enderecoHelper);
    inputsCorretos.endereco =true
  }
})

/*Validação do numero*/

let numeroInput = document.getElementById("numero");
let numeroLabel = document.querySelector('label[for="numero"]');
let numeroHelper = document.getElementById("numero-helper");

togglePopup(numeroInput, numeroLabel)

// Validar valor do input
numeroInput.addEventListener("change", (e) => {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    numeroHelper.innerText = "Digite um número ou (S/N)";
    estilizarInputIncorreto(numeroInput, numeroHelper)
    inputsCorretos.numero = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(numeroInput, numeroHelper);
    inputsCorretos.numero =true
  }
})



// ---------- VALIDAÇÃO bairro ---------- //
let bairroInput = document.getElementById("bairro");
let bairroLabel = document.querySelector('label[for="bairro"]');
let bairroHelper = document.getElementById("bairro-helper");

togglePopup(bairroInput, bairroLabel)
bairroInput.addEventListener("change", (e) =>{
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor estiver correto
    bairroHelper.innerText = "O campo bairro não pode estar vazio!"
    estilizarInputIncorreto(bairroInput, bairroHelper)
    inputsCorretos.bairro = false
    
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    estilizarInputCorreto(bairroInput, bairroHelper)
    inputsCorretos.bairro = true
  }
})

// ---------- VALIDAÇÃO cidade ---------- //

let cidadeInput = document.getElementById("cidade");
let cidadeLabel = document.querySelector('label[for="cidade"]');
let cidadeHelper = document.getElementById("cidade-helper");

togglePopup(cidadeInput, cidadeLabel)

// Validar valor do input
cidadeInput.addEventListener("change", (e) =>{
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    cidadeHelper.innerText = "Seu cidade precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(cidadeInput, cidadeHelper)
    inputsCorretos.cidade = false
    
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(cidadeInput, cidadeHelper);
    inputsCorretos.cidade =true

  }
})

// ---------- VALIDAÇÃO COMPORTAMENTO PADRÃO DO BOTÃO SUBMIT-------EIVITAR ENVIO DO FORMULÁRIO--- //

let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
  nome: false,
  email: false,
  endereco: false,
  numero: false,
  bairro: false,
  cidade: false
}
btnSubmit.addEventListener("click", (e) =>{
  if(inputsCorretos.nome == false || inputsCorretos.email == false || inputsCorretos.endereco == false || inputsCorretos.numero == false  || inputsCorretos.bairro == false || inputsCorretos.cidade == false){
    e.preventDefault()
    alert("Os campos obrigatórios precisam ser preenchidos!")
  }else{
    alert("Formulário enviado com sucesso!")
  }
})

