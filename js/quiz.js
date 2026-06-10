// canal Will Dev - quiz com js
const questions = [
    {
        question: "Qual item é mais urgente doar nos primeiros dias pós-desastre?",
        answears: [
            { Option: "Água potável mineral e alimentos prontos não perecíveis.", correct: true },
            { Option: "Roupas de festa e calçados com salto alto.", correct: false },
            { Option: "Móveis grandes de madeira e eletrodomésticos pesados.", correct: false },
        ],
    },
    {
        question: "Como devem estar as roupas e calçados enviados para doação?",
        answears: [
            { Option: "Limpos, em bom estado e com tamanhos organizados.", correct: true },
            { Option: "Rasgados ou sujos, pois serão lavados no local", correct: false },
            { Option: "Misturados em sacos pretos sem nenhuma identificação.", correct: false },
        ],
    },
    {
        question: "Qual a vantagem de doar dinheiro via canais oficiais Pix?",
        answears: [
            { Option: "Garante que o doador ganhe prêmios em dinheiro de volta.", correct: false },
            { Option: "Permite comprar recursos direto na região, movimentando o comércio local.", correct: true },
            { Option: "Obriga a central a enviar brindes físicos para sua casa.", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },
    {
        question: "Quanto é 1 + 2",
        answears: [
            { Option: "3", correct: true },
            { Option: "2", correct: false },
            { Option: "4", correct: false },
        ],
    },

];

let currentIndex = 0;
let questionsCorrect = 0;
let respostaEscolhida = null;

const questionEl = document.querySelector(".questions");
const answersEl = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const progressFill = document.getElementById("progressFill");
const btnProxima = document.getElementById("btnProxima");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

btnProxima.addEventListener("click", () => {

    if (respostaEscolhida === null) {
        alert("Selecione uma alternativa antes de continuar!"); 
        return;
    }
    
    nextQuestion();
});

btnRestart.addEventListener("click", () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    currentIndex = 0;
    questionsCorrect = 0;
    respostaEscolhida = null;
    loadQuestion();
});

function nextQuestion() {
    if (respostaEscolhida === "true") {
        questionsCorrect++;
    }

    respostaEscolhida = null;

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `Pergunta ${currentIndex + 1} de ${questions.length}`;

    const progresso = (currentIndex / questions.length) * 100;
    progressFill.style.width = progresso + "%";

    const item = questions[currentIndex];
    answersEl.innerHTML = "";
    questionEl.innerHTML = item.question;

    item.answears.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.Option;
        button.setAttribute("data-correct", answer.correct);

        button.addEventListener("click", (e) => {
            document.querySelectorAll(".answers button").forEach(b => {
                b.classList.remove("correta", "errada");
            });

            respostaEscolhida = e.target.getAttribute("data-correct");

            if (respostaEscolhida === "true") {
                button.classList.add("correta");
            } else {
                button.classList.add("errada");
                document.querySelectorAll(".answers button").forEach(b => {
                    if (b.getAttribute("data-correct") === "true") {
                        b.classList.add("correta");
                    }
                });
            }
        });

        answersEl.appendChild(button);
    });
}

loadQuestion();

const temasValidos = {
    'padrao': 'padrao',
    'dark': 'dark',
    'oasis': 'oasis'
};

function alternarMenuTema() {
    const menu = document.getElementById('menu-opcoes-tema');
    if (menu) {
        menu.classList.toggle('aberto'); 
    }
}

function mudarTema(nomeDoTema) {
    const temaEscolhido = temasValidos[nomeDoTema] || 'padrao';
    document.documentElement.setAttribute('data-theme', temaEscolhido);
    localStorage.setItem('temaSalvo', nomeDoTema);
    
    const menu = document.getElementById('menu-opcoes-tema');
    if (menu) {
        menu.classList.remove('aberto');
    }
}

const temaGuardado = localStorage.getItem('temaSalvo');
if (temaGuardado) {
    const temaVerificado = temasValidos[temaGuardado] || 'padrao';
    document.documentElement.setAttribute('data-theme', temaVerificado);
}