/******************** PREPARAZIONE DOM ***********************/
const container = document.querySelector(".container");


/********************* PREPARAZIONE DATI *********************/
const apiUrl = "https://openrouter.ai/api/v1/chat/completions";


/*********************** PAGE INIT ED EVENTI *****************/
initApp();


/******************** FUNCTIONS ******************************/

function initApp() {
  const appLayout = document.createElement("div");
  appLayout.className = "app-layout";

  appLayout.appendChild(createInputCard());
  appLayout.appendChild(createOutputCard());
  container.appendChild(appLayout);
}

// Creazione card box email
function createInputCard() {
  const card = document.createElement("section");
  card.className = "card";

  card.innerHTML = `
      <div class="form-group">
        <label for="raw-text">Testo grezzo</label>
        <textarea id="raw-text" rows="6" placeholder="Es: ciao marco, riesci a mandarmi il report entro venerdì? grazie..."></textarea>
      </div>

      <div class="controls-grid">
        <div class="form-group">
          <label for="tone">Tono</label>
          <select id="tone">
            <option value="professionale">Professionale</option>
            <option value="formale">Formale</option>
            <option value="amichevole">Amichevole</option>
            <option value="diretto">Diretto</option>
          </select>
        </div>

        <div class="form-group">
          <label for="length">Lunghezza</label>
          <select id="length">
            <option value="breve">Breve</option>
            <option value="standard" selected>Standard</option>
            <option value="dettagliata">Dettagliata</option>
          </select>
        </div>

        <div class="form-group">
          <label for="emoji">Emoji</label>
          <select id="emoji">
            <option value="nessuna">Nessuna</option>
            <option value="moderate">Moderate</option>
          </select>
        </div>
      </div>

      <button id="generate-btn" class="btn-primary">Genera Email</button>
    `;

  return card;
}

// Creazione box assistente
function createOutputCard() {
  const card = document.createElement("section");
  card.className = "card output-card";

  card.innerHTML = `
      <div class="form-group">
        <label for="output-text">Risultato</label>
        <textarea id="output-text" rows="10" readonly placeholder="La tua email generata apparirà qui..."></textarea>
      </div>
      <div class="actions">
        <button id="copy-btn" class="btn-secondary">Copia Testo</button>
      </div>
    `;

  return card;
}

/*********************** PAGE INIT ED EVENTI *****************/

function initApp() {
  const appLayout = document.createElement("div");
  appLayout.className = "app-layout";

  appLayout.appendChild(createInputCard());
  appLayout.appendChild(createOutputCard());
  container.appendChild(appLayout);

  setupEventListeners();
}

// Collegamento eventi agli elementi
function setupEventListeners() {
  const generateBtn = document.getElementById("generate-btn");
  const copyBtn = document.getElementById("copy-btn");

  generateBtn.addEventListener("click", handleGenerateEmail);
  copyBtn.addEventListener("click", handleCopyText);
}

// Gestione click sul bottone
function handleGenerateEmail() {
  const rawTextInput = document.getElementById("raw-text");
  const outputText = document.getElementById("output-text");
  const toneSelect = document.getElementById("tone");
  const lengthSelect = document.getElementById("length");
  const emojiSelect = document.getElementById("emoji");
  const generateBtn = document.getElementById("generate-btn");

  const text = rawTextInput.value.trim();
  if (text === "") {
    alert("Inserisci del testo grezzo prima di generare l'email!");
    return;
  }

  const tone = toneSelect.value;
  const length = lengthSelect.value;
  const emoji = emojiSelect.value;
}