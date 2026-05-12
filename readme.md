# 🕒 Horário de Brasília - Relógio em Tempo Real

Projeto web simples, porém funcional, desenvolvido para exibir a hora atual com atualização em tempo real, incluindo o recurso de ajuste manual em minutos (adiantar ou atrasar). 

🌐 **Acesse online:** [https://andersonrmgomes.github.io/horario_de_brasilia/](https://andersonrmgomes.github.io/horario_de_brasilia/)

![Status](https://img.shields.io/badge/Status-Concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📖 Visão Geral

Este projeto apresenta:

- Relógio digital no formato `HH:MM:SS`.
- Data atual por extenso em português do Brasil.
- Ajuste manual de minutos através de um modal.
- Atalho de teclado para acesso rápido ao ajuste.
- Seção informativa no rodapé com opções de doação e links úteis.

## 📂 Estrutura do Projeto

```text
Relogio/
├── css/
│   └── style.css
├── img/
│   └── bandeira-brasil.png
├── js/
│   └── script.js
├── index.html
└── readme.md
```

## ✨ Funcionalidades

- **Atualização Contínua**: O relógio é atualizado a cada 1 segundo.
- **Informação de Data**: A data atual é exibida tanto no topo quanto no rodapé da página.
- **Ajuste Configurável**: Permite ajustar o relógio entre -1440 e 1440 minutos (até 24 horas para trás ou para frente).
- **Validação de Entrada**: O sistema previne a inserção de valores inválidos (menores que -1440 ou maiores que 1440).
- **Atalhos e Acessibilidade**:
  - Pressione a tecla <kbd>H</kbd> para abrir a janela de ajuste.
  - Pressione <kbd>Enter</kbd> dentro do campo para aplicar as alterações instantaneamente.
- **Botão Reset**: Uma maneira fácil de reverter o relógio para a hora exata atual.

## 🚀 Como Executar

1. Faça o download ou clone o projeto para o seu computador.
2. Abra a pasta do projeto no VS Code (ou em seu editor preferido).
3. Abra o arquivo `index.html` em qualquer navegador web moderno.
4. O relógio será iniciado automaticamente.

## ⚙️ Como Usar o Ajuste de Minutos

1. Com a página aberta, pressione <kbd>H</kbd> no teclado.
2. No modal que se abrirá, digite os minutos de ajuste (de -1440 a 1440).
3. Use valor positivo para **adiantar** e valor negativo para **atrasar** o relógio.
4. Clique em **Aplicar** ou pressione <kbd>Enter</kbd>.
5. Para desfazer, pressione <kbd>H</kbd> novamente e clique no botão **Resetar**.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da página.
- **CSS3**: Estilização visual.
- **JavaScript (Vanilla)**: Lógica principal de funcionamento do relógio e manipulação do DOM.

## 📌 Observações Importantes

- A hora de base exibida na página utiliza o relógio interno do seu próprio dispositivo (computador, celular, etc).
- O ajuste de minutos afeta apenas a visualização local no momento da navegação.
- O rodapé contém links de referência e exemplos de integração (como chave PIX para doação).

## 🔮 Melhorias Futuras

- [ ] Salvar a configuração do ajuste no `localStorage` do navegador.
- [ ] Inserir um ícone ou botão visível na interface principal para abrir o modal de ajustes para usuários de dispositivos móveis.
- [ ] Adicionar testes de comportamento do relógio.
- [ ] Adicionar suporte para temas (Dark/Light mode).

---

Feito com dedicação para replicar o portal da hora oficial do Brasil.
