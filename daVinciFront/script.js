let numeros = [];

async function getAllContacts() {
  const response = await axios.get("http://localhost:3333/contato");

  response.data.forEach(async (contato) => {
    const telefone = await getTelefone(contato.id);

    let elementoLista = document.createElement("li");
    elementoLista.innerHTML = `Nome: ${contato.nome} <br> Idade: ${contato.idade} <br> Numeros Cadastrados: ${telefone}`;
    elementoLista.className = "bg-gray-100 mt-2";
    document.getElementById("listaContatos").appendChild(elementoLista);
  });
}

async function getTelefone(id) {
  const response = await axios.get("http://localhost:3333/telefone/" + id);
  return response.data;
}

function includeContact() {
  if (numeros.length === 0) {
    alert("É necessário cadastrar pelo menos um número de telefone!");
    return;
  }

  axios
    .post("http://localhost:3333/contato", {
      nome: document.getElementById("nome").value,
      idade: document.getElementById("idade").value,
      numeros: numeros,
    })
    .then((response) => {
      window.location = "index.html";
    });
}

function add() {
  numeros.push(document.getElementById("numero").value);
  document.getElementById("numero").value = "";
  document.getElementById("numerosTela").innerHTML = numeros;
}

