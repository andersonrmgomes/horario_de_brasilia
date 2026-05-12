(function() {
    'use strict';

    var doc = window.document;
    var docRoot = doc.documentElement;
    docRoot.className = 'js';

    var OFFSET_STORAGE_KEY = 'horarioBrasiliaOffsetMinutes';
    var offsetMs = 0;
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

    // Salva no localStorage o valor em minutos para persistir após recarregar a página
    function saveOffsetMinutes(minutos) {
        try {
            window.localStorage.setItem(OFFSET_STORAGE_KEY, String(minutos));
        } catch (e) {
            // Ignora falhas de armazenamento (navegação privada/restrições do navegador)
        }
    }

    // Recupera do localStorage o valor salvo, validando a faixa permitida
    function loadOffsetMinutes() {
        try {
            var rawValue = window.localStorage.getItem(OFFSET_STORAGE_KEY);
            if (rawValue === null || rawValue === '') {
                return 0;
            }

            var minutos = parseInt(rawValue, 10);
            if (isNaN(minutos) || minutos < -1440 || minutos > 1440) {
                return 0;
            }

            return minutos;
        } catch (e) {
            return 0;
        }
    }

    // Atualiza o relógio a cada segundo com ajuste em minutos
    function clock() {
        var now = new Date(Date.now() + offsetMs);
        var h = pad(now.getHours());
        var m = pad(now.getMinutes());
        var s = pad(now.getSeconds());
        $id('relogio').innerHTML = h + ':' + m + ':' + s;
        var dateStr = formatDate(now);
        $id('dia-topo').innerHTML = dateStr;
        $id('dia-rodape').innerHTML = dateStr;
        clockTimeout = setTimeout(clock, 1000);
    }

    // Oculta o modal de ajuste
    function hideDelayContainer() {
        $id('delayContainer').style.display = 'none';
    }

    // Exibe o modal de ajuste
    function showDelayContainer() {
        $id('delayContainer').style.display = 'block';
        $id('modalDelayMinutes').focus();
    }

    // Aplica o ajuste informado no modal (positivo adianta, negativo atrasa)
    function applyDelayFromModal() {
        var minutos = parseInt($id('modalDelayMinutes').value, 10) || 0;
        if (minutos < -1440 || minutos > 1440) {
            alert('Por favor, insira um valor entre -1440 e 1440 minutos');
            return;
        }
        offsetMs = minutos * 60 * 1000;
        saveOffsetMinutes(minutos);
        hideDelayContainer();
    }

    // Remove o ajuste e volta ao horário atual
    function resetDelayFromModal() {
        offsetMs = 0;
        saveOffsetMinutes(0);
        $id('modalDelayMinutes').value = '';
        hideDelayContainer();
    }

    // Inicialização
    window.addEventListener('load', function() {
        var btnHide = $id('hideDelayBtn');
        var btnApply = $id('modalApplyBtn');
        var btnReset = $id('modalResetBtn');
        var inputModal = $id('modalDelayMinutes');

        var savedMinutes = loadOffsetMinutes();
        offsetMs = savedMinutes * 60 * 1000;
        if (inputModal) {
            inputModal.value = savedMinutes === 0 ? '' : String(savedMinutes);
        }

        clock();

        if (btnHide) btnHide.addEventListener('click', hideDelayContainer);
        if (btnApply) btnApply.addEventListener('click', applyDelayFromModal);
        if (btnReset) btnReset.addEventListener('click', resetDelayFromModal);

        // Tecla H abre o modal de ajuste
        window.addEventListener('keydown', function(e) {
            if (e.key === 'h' || e.key === 'H') {
                showDelayContainer();
            }
        });

        // Enter no input aplica o ajuste
        if (inputModal) inputModal.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') applyDelayFromModal();
        });
    });
})();