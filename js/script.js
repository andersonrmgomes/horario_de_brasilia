(function() {
    'use strict';

    var doc = window.document;
    var docRoot = doc.documentElement;
    docRoot.className = 'js';

    var delayMs = 0;
    var clockTimeout = null;

    // Cache de elementos por ID
    var cache = {};
    function $id(id) {
        return id in cache ? cache[id] : (cache[id] = doc.getElementById(id) || false);
    }

    // Formata número com zero à esquerda
    function pad(n) {
        return n <= 9 ? '0' + n : n;
    }

    // Formata a data por extenso em português
    function formatDate(date) {
        var dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return dias[date.getDay()] + ', ' + date.getDate() + ' de ' + meses[date.getMonth()] + ' de ' + date.getFullYear();
    }

    // Atualiza o relógio a cada segundo
    function clock() {
        var now = new Date(Date.now() - delayMs);
        var h = pad(now.getHours());
        var m = pad(now.getMinutes());
        var s = pad(now.getSeconds());
        $id('relogio').innerHTML = h + ':' + m + ':' + s;
        var dateStr = formatDate(now);
        $id('dia-topo').innerHTML = dateStr;
        $id('dia-rodape').innerHTML = dateStr;
        clockTimeout = setTimeout(clock, 1000);
    }

    // Oculta o modal de atraso
    function hideDelayContainer() {
        $id('delayContainer').style.display = 'none';
    }

    // Exibe o modal de atraso
    function showDelayContainer() {
        $id('delayContainer').style.display = 'block';
        $id('modalDelayMinutes').focus();
    }

    // Aplica o atraso informado no modal
    function applyDelayFromModal() {
        var minutos = parseInt($id('modalDelayMinutes').value) || 0;
        if (minutos < 0 || minutos > 1440) {
            alert('Por favor, insira um valor entre 0 e 1440 minutos');
            return;
        }
        delayMs = minutos * 60 * 1000;
        hideDelayContainer();
    }

    // Remove o atraso e volta ao horário atual
    function resetDelayFromModal() {
        delayMs = 0;
        $id('modalDelayMinutes').value = '';
        hideDelayContainer();
    }

    // Inicialização
    window.addEventListener('load', function() {
        clock();

        var btnHide = $id('hideDelayBtn');
        var btnApply = $id('modalApplyBtn');
        var btnReset = $id('modalResetBtn');
        var inputModal = $id('modalDelayMinutes');

        if (btnHide) btnHide.addEventListener('click', hideDelayContainer);
        if (btnApply) btnApply.addEventListener('click', applyDelayFromModal);
        if (btnReset) btnReset.addEventListener('click', resetDelayFromModal);

        // Tecla H abre o modal de ajuste
        window.addEventListener('keydown', function(e) {
            if (e.key === 'h' || e.key === 'H') {
                showDelayContainer();
            }
        });

        // Enter no input aplica o atraso
        if (inputModal) inputModal.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') applyDelayFromModal();
        });
    });
})();