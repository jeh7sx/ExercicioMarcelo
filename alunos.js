const form = document.getElementById("formAluno");
const lista = document.getElementById("listaAlunos");

let alunos = [];
let id = 1;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;

    const aluno = {
        id: id++,
        nome,
        idade,
        curso
    };

    alunos.push(aluno);
    atualizarLista();
    form.reset();
});

function atualizarLista() {
    lista.innerHTML = "";

    alunos.forEach(aluno => {
        const li = document.createElement("li");
        li.textContent = `ID: ${aluno.id} | Nome: ${aluno.nome} | Idade: ${aluno.idade} | Curso: ${aluno.curso}`;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = function() {
            removerAluno(aluno.id);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAluno(id) {
    alunos = alunos.filter(aluno => aluno.id !== id);
    atualizarLista();
}