# Relogio - Horario de Brasilia

Projeto web simples para exibir a hora atual com atualizacao em tempo real, incluindo ajuste manual de atraso em minutos.

## Visao geral

Este projeto mostra:

- Relogio digital no formato HH:MM:SS
- Data atual por extenso em portugues
- Ajuste de atraso via modal
- Atalho de teclado para abrir ajuste
- Secao de doacao e links de referencia no rodape

## Estrutura do projeto

```
Relogio/
	index.html
	css/
		style.css
	js/
		script.js
	readme.md
```

## Funcionalidades

- Atualizacao do relogio a cada 1 segundo
- Exibicao da data no topo e no rodape
- Atraso configuravel entre 0 e 1440 minutos
- Validacao de entrada para impedir valores fora do intervalo
- Tecla H para abrir o modal de ajuste
- Tecla Enter no campo para aplicar rapidamente
- Botao de reset para voltar ao horario atual

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo index.html no navegador.
3. O relogio iniciara automaticamente.

## Como usar o ajuste de atraso

1. Pressione H para abrir o modal.
2. Digite o valor de atraso em minutos (0 a 1440).
3. Clique em Aplicar ou pressione Enter.
4. Para remover o atraso, clique em Resetar.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Observacoes

- O horario exibido depende do relogio local do dispositivo.
- O ajuste de atraso e visual e aplicado na exibicao do relogio.
- Alguns links do rodape apontam para paginas externas e caminho absoluto de recurso local.

## Melhorias futuras

- Salvar atraso em localStorage para manter configuracao entre recarregamentos
- Botao visivel para abrir ajuste (alem do atalho H)
- Normalizar encoding UTF-8 em todos os textos acentuados
- Adicionar testes basicos de comportamento do relogio
