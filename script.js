const listContainer = document.getElementById("list-tarefa");

function addTarefa() {
  const inputNome = document.getElementById("input-nome");
  const inputDescricao = document.getElementById("input-descricao");
  const inputDatetime = document.getElementById("datetime");

  const nome = inputNome.value;
  const descricao = inputDescricao.value;
  const datetime = inputDatetime.value;

  if (nome.trim() === "" || descricao.trim() === "" || datetime.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const novaTarefa = document.createElement("li");
  novaTarefa.innerHTML = `<strong>${nome}</strong>: ${descricao} - ${datetime}`;

  const span = document.createElement("span");
  span.textContent = "\u00d7";
  span.style.float = "right";
  span.style.cursor = "pointer";
  novaTarefa.appendChild(span);

  listContainer.appendChild(novaTarefa);

  inputNome.value = "";
  inputDescricao.value = "";
  inputDatetime.value = "";

  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
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
