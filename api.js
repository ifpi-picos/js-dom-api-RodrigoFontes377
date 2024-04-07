document.getElementById("buscar-btn").addEventListener("click", async () => {
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
    const repositorios = data.map((repo) => `<p>${repo.full_name}</p>`);
    resultadoDiv.innerHTML = repositorios.join("");
  }
});
