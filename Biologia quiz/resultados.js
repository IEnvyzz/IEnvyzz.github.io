
const respostasCorretas = {
    "question1": "Os organismos vivos e seus processos vitais",
    "question2": "Teoria da Evolução Química",
    "question3": "Mutualismo",
    "question4": "Mitocôndria",
    "question5": "Transporte ativo",
    "question6": "DNA"
};

function atualizarResultados() {
    for (let i = 1; i <= 6; i++) {
        const resposta = localStorage.getItem(`question${i}`);
        const resultItem = document.getElementById(`result-question${i}`);
        const resultText = document.getElementById(`result-text-question${i}`);

        if (resposta === respostasCorretas[`question${i}`]) {
            resultText.textContent = "Você acertou!";
            resultItem.classList.add("correct");
        } else {
            resultText.textContent = "Você errou.";
            resultItem.classList.add("incorrect");
        }
    }
}


window.onload = function() {
    atualizarResultados();
};
