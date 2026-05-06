// Variáveis globais
var doc = window.document;
var docRoot = doc.documentElement;
docRoot.className = "js";
var delayMinutes = 0;
var datajs = new Date();
var clockTimeout = null;
var realTimeOffset = 0; // Armazena o offset de atraso

// Função para encontrar elementos por ID
function $id(a) {
    return typeof $id.cache[a] === 'undefined' ? ($id.cache[a] = doc.getElementById(a) || false) : $id.cache[a];
}
$id.cache = {};

// Função para formatar números com zero à esquerda
function formatNumber(num) {
    return num <= 9 ? "0" + num : num;
}

// Função para iniciar o relógio
function clockstart(b, c, d, a) {
    datajs.setHours(b, c, d);
    if (null !== clockTimeout) clearTimeout(clockTimeout);
    clock();
    $id("dia-topo").innerHTML = a;
    $id("dia-rodape").innerHTML = a;
}

// Função para atualizar o relógio
function clock(e, f, g) {
    datajs.setSeconds(datajs.getSeconds() + 1);
    var c = formatNumber(datajs.getHours());
    var d = formatNumber(datajs.getMinutes());
    var b = formatNumber(datajs.getSeconds());
    $id("relogio").innerHTML = c + ":" + d + ":" + b;
    clockTimeout = setTimeout("clock()", 1000);
}

// Função para ocultar o container de atraso
function hideDelayContainer() {
    $id("delayContainer").style.display = "none";
}

// Função para mostrar o container de atraso
function showDelayContainer() {
    $id("delayContainer").style.display = "block";
    $id("modalDelayMinutes").focus();
}

// Função para aplicar atraso via modal
function applyDelayFromModal() {
    var minutos = parseInt(document.getElementById("modalDelayMinutes").value) || 0;
    if (minutos < 0 || minutos > 1440) {
        alert("Por favor, insira um valor entre 0 e 1440 minutos");
        return;
    }
    
    delayMinutes = minutos;
    realTimeOffset = minutos * 60; // Converter minutos para segundos
    
    // Criar nova data com atraso
    var novaData = new Date();
    novaData.setMinutes(novaData.getMinutes() - minutos); // Subtrair para atrasar
    
    if (null !== clockTimeout) clearTimeout(clockTimeout);
    datajs = novaData;
    clock();
    hideDelayContainer();
}

// Função para resetar o atraso
function resetDelayFromModal() {
    delayMinutes = 0;
    realTimeOffset = 0;
    document.getElementById("modalDelayMinutes").value = "";
    if (null !== clockTimeout) clearTimeout(clockTimeout);
    datajs = new Date();
    clock();
    hideDelayContainer();
}

// Inicialização
window.addEventListener("load", function() {
    // Seta hora inicial
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
    
    var diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][agora.getDay()];
    var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    var dataBrasil = diaSemana + ", " + agora.getDate() + " de " + meses[agora.getMonth()] + " de " + agora.getFullYear();
    
    clockstart(horas, minutos, segundos, dataBrasil);
    
    // Event listeners do container
    var btnHide = document.getElementById("hideDelayBtn");
    var btnModalApply = document.getElementById("modalApplyBtn");
    var btnModalReset = document.getElementById("modalResetBtn");
    var inputModal = document.getElementById("modalDelayMinutes");
    
    if (btnHide) btnHide.addEventListener("click", hideDelayContainer);
    if (btnModalApply) btnModalApply.addEventListener("click", applyDelayFromModal);
    if (btnModalReset) btnModalReset.addEventListener("click", resetDelayFromModal);

    // Tecla H abre o modal de ajuste
    window.addEventListener("keydown", function(e) {
        if (e.key === "h" || e.key === "H") {
            showDelayContainer();
        }
    });
    
    // Enter no input
    if (inputModal) inputModal.addEventListener("keypress", function(e) {
        if (e.key === "Enter") applyDelayFromModal();
    });
});