const listContainer = document.getElementById("list-tarefa");

function addTarefa() {
  const inputNome = document.getElementById("input-nome");
  const inputDescricao = document.getElementById("input-descricao");
  const inputData = document.getElementById("input-data");
  const inputHora = document.getElementById("input-hora");

  const nome = inputNome.value;
  const descricao = inputDescricao.value;
  const data = inputData.value;
  const hora = inputHora.value;

  if (
    nome.trim() === "" ||
    descricao.trim() === "" ||
    data.trim() === "" ||
    hora.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const novaTarefa = document.createElement("li");
  novaTarefa.innerHTML = `<strong>${nome}</strong>: ${descricao} - ${data} - ${hora}`;

  const icon = document.createElement("img");
  icon.src = "img/trash-bin.png";
  icon.alt = "Remover";
  icon.style.float = "right";
  icon.style.cursor = "pointer";
  icon.addEventListener("click", () => {
    novaTarefa.remove();
    saveData();
  });

  novaTarefa.appendChild(icon);
  listContainer.appendChild(novaTarefa);

  inputNome.value = "";
  inputDescricao.value = "";
  inputData.value = "";
  inputHora.value = "";

  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
