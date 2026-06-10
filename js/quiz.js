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
        question: "Que cuidado ter ao separar alimentos para a cesta de doação?",
        answears: [
            { Option: "Enviar pacotes já abertos e usados para evitar desperdício", correct: false },
            { Option: "Priorizar produtos congelados que estragam fora da geladeira.", correct: false },
            { Option: "Checar se a validade resiste por pelo menos três meses.", correct: true },
        ],
    },
    {
        question: "Como ajudar pessoas que perderam remédios de uso contínuo?",
        answears: [
            { Option: "Entregar medicamentos lacrados diretamente nos postos de triagem oficiais.", correct: true },
            { Option: "Enviar cartelas de remédios vencidas ou sem a caixa original.", correct: false },
            { Option: " Deixar frascos abertos em calçadas perto da área afetada.", correct: false },
        ],
    },
    {
        question: "Como garantir que seu Pix de doação vá para o lugar certo?",
        answears: [
            { Option: "Verificar a chave nos canais oficiais do governo ou Defesa Civil.", correct: true },
            { Option: "Transferir para contas enviadas por mensagens anônimas de WhatsApp.", correct: false },
            { Option: " Clicar em qualquer link patrocinado que aparecer nas redes sociais.", correct: false },
        ],
    },
    {
        question: "Qual o papel do voluntário nos centros de arrecadação do Oasis?",
        answears: [
            { Option: "Separar, classificar e embalar os suprimentos por categorias.", correct: true },
            { Option: "Decidir sozinho quem deve receber os kits sem seguir protocolos.", correct: false },
            { Option: "Guardar os melhores itens doados para uso próprio.", correct: false },
        ],
    },
    {
        question: "O que é indispensável em um kit de higiene para abrigos?",
        answears: [
            { Option: "Sabonete, escova, creme dental e absorventes higiênicos femininos.", correct: true },
            { Option: "Maquiagens importadas, perfumes caros e tinturas de cabelo.", correct: false },
            { Option: "Apenas toalhas de banho usadas sem nenhum produto de limpeza.", correct: false },
        ],
    },
    {
        question: "Como ajudar os animais de estimação resgatados nos abrigos?",
        answears: [
            { Option: "Doando ração lacrada para cães e gatos e guias de transporte.", correct: true },
            { Option: "Enviando restos de comida caseira azeda em sacolas plásticas.", correct: false },
            { Option: " Soltando os animais nas ruas para que busquem água sozinhos.", correct: false },
        ],
    },
    {
        question: "Quem não pode ir ao local pode ajudar de qual forma?",
        answears: [
            { Option: "Compartilhando informações oficiais de arrecadação ou oferecendo escuta remota.", correct: true },
            { Option: "Ligando para as linhas de emergência (193) apenas para conversar.", correct: false },
            { Option: "Reclamando na internet sem propor nenhuma ação prática.", correct: false },
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