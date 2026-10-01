```javascript
// ======================================
// ELEMENTOS
// ======================================

const subject = document.getElementById("subject");
const question = document.getElementById("question");

const askBtn = document.getElementById("askBtn");
const summaryBtn = document.getElementById("summaryBtn");

const answer = document.getElementById("answer");
const history = document.getElementById("history");

const clearBtn = document.getElementById("clearBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

const counter = document.getElementById("counter");


// ======================================
// CONTADOR DE CARACTERES
// ======================================

question.addEventListener("input", () => {

    counter.textContent =
        `${question.value.length} / 500`;

});


// ======================================
// RESPUESTAS DEL ASISTENTE
// ======================================

function generateAnswer(subject, question) {

    const q = question.toLowerCase();

    if (subject === "Biología") {

        if (q.includes("corazón")) {

            return `
                El corazón es un órgano muscular que se encarga
                de bombear la sangre por todo el cuerpo.
                De esta manera, lleva oxígeno y nutrientes a las
                células y ayuda a eliminar sustancias de desecho.
            `;
        }

        return `
            En Biología podemos estudiar los seres vivos,
            sus estructuras, funciones y relaciones con el ambiente.
            Tu pregunta es interesante y puede analizarse
            desde estos conceptos.
        `;
    }


    if (subject === "Matemática") {

        if (q.includes("ecuación")) {

            return `
                Una ecuación es una igualdad matemática que
                contiene una o más incógnitas.
                Para resolverla debemos encontrar el valor que
                hace verdadera la igualdad.
            `;
        }

        return `
            En Matemática podemos trabajar con números,
            operaciones, ecuaciones, geometría y diferentes
            problemas que requieren razonamiento lógico.
        `;
    }


    if (subject === "Historia") {

        return `
            La Historia estudia los acontecimientos del pasado
            y cómo estos influyeron en las sociedades.
            Para comprender un hecho histórico es importante
            analizar sus causas, consecuencias y contexto.
        `;
    }


    if (subject === "Lengua") {

        return `
            Lengua permite estudiar la comunicación, los textos,
            la literatura, la gramática y las diferentes formas
            en las que utilizamos el lenguaje.
        `;
    }


    if (subject === "Tecnología") {

        return `
            La Tecnología utiliza conocimientos y herramientas
            para resolver problemas y crear productos o sistemas
            que facilitan diferentes actividades humanas.
        `;
    }


    if (subject === "Geografía") {

        return `
            La Geografía estudia el espacio donde vivimos,
            incluyendo los paisajes, la población, el clima,
            los recursos naturales y la relación entre las
            sociedades y el ambiente.
        `;
    }


    return `
        Esta es una respuesta de demostración de StudyBot.
        En una versión conectada a una API de inteligencia
        artificial, esta pregunta sería enviada al modelo de IA
        para generar una respuesta personalizada.
    `;
}


// ======================================
// REALIZAR PREGUNTA
// ======================================

askBtn.addEventListener("click", () => {

    const selectedSubject = subject.value;
    const userQuestion = question.value.trim();


    // VALIDACIÓN

    if (selectedSubject === "") {

        alert("⚠️ Seleccioná una materia.");

        subject.focus();

        return;
    }


    if (userQuestion === "") {

        alert("⚠️ Escribí una pregunta antes de continuar.");

        question.focus();

        return;
    }


    // MOSTRAR CARGANDO

    answer.innerHTML = `
        <p>🤖 StudyBot está pensando...</p>
    `;


    askBtn.disabled = true;

    askBtn.textContent = "⏳ Procesando...";


    // SIMULAR RESPUESTA DE IA

    setTimeout(() => {

        const botAnswer =
            generateAnswer(
                selectedSubject,
                userQuestion
            );


        answer.innerHTML = `
            <p>${botAnswer}</p>
        `;


        addToHistory(
            selectedSubject,
            userQuestion,
            botAnswer
        );


        askBtn.disabled = false;

        askBtn.textContent = "🤖 Preguntar";

    }, 900);

});


// ======================================
// AGREGAR AL HISTORIAL
// ======================================

function addToHistory(subject, question, answer) {

    const emptyMessage =
        history.querySelector(".empty-history");

    if (emptyMessage) {
        emptyMessage.remove();
    }


    const item =
        document.createElement("div");

    item.className = "history-item";


    item.innerHTML = `
        <span class="history-subject">
            ${subject}
        </span>

        <div class="history-question">
            ❓ ${question}
        </div>

        <div class="history-answer">
            🤖 ${answer}
        </div>
    `;


    history.prepend(item);
}


// ======================================
// LIMPIAR HISTORIAL
// ======================================

clearBtn.addEventListener("click", () => {

    history.innerHTML = `
        <div class="empty-history">

            <span>📖</span>

            <p>
                Todavía no realizaste ninguna pregunta.
            </p>

        </div>
    `;

});


// ======================================
// GENERAR RESUMEN
// ======================================

summaryBtn.addEventListener("click", () => {

    const selectedSubject = subject.value;

    if (selectedSubject === "") {

        alert("⚠️ Seleccioná una materia.");

        return;
    }


    const summaries = {

        "Biología":
        "📚 Resumen de Biología: estudia los seres vivos, sus estructuras, funciones y relaciones con el ambiente.",

        "Matemática":
        "📚 Resumen de Matemática: trabaja con números, operaciones, ecuaciones, geometría y razonamiento lógico.",

        "Historia":
        "📚 Resumen de Historia: estudia acontecimientos del pasado, sus causas, consecuencias y contexto.",

        "Lengua":
        "📚 Resumen de Lengua: estudia la comunicación, la gramática, los textos y la literatura.",

        "Tecnología":
        "📚 Resumen de Tecnología: estudia herramientas, conocimientos y sistemas utilizados para resolver problemas.",

        "Geografía":
        "📚 Resumen de Geografía: estudia el espacio geográfico, el clima, la población y la relación entre sociedad y ambiente."

    };


    answer.innerHTML = `
        <p>${summaries[selectedSubject]}</p>
    `;

});


// ======================================
// MODO OSCURO
// ======================================

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

    } else {

        darkModeBtn.textContent = "🌙";

    }

});
```

