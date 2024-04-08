async function buscarRepositorios() {
  const username = document.getElementById("input-git").value.trim();
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (data.message === "Not Found") {
    resultadoDiv.innerHTML = "Usuário não encontrado";
  } else {
    const listaRepositorios = document.createElement("ul");
    listaRepositorios.classList.add("lista-repos-dinamica");
    data.forEach((repo) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.full_name;
      link.target = "_blank"; // Abre o link em uma nova aba
      listItem.appendChild(link);
      listaRepositorios.appendChild(listItem);
    });
    resultadoDiv.appendChild(listaRepositorios);
  }
}

document
  .getElementById("buscar-btn")
  .addEventListener("click", buscarRepositorios);
