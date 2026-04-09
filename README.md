# Briefing de Design — Viver e Aprender

Formulário de briefing para escolas com envio automático para Google Sheets via Google Apps Script. Hospedado via GitHub Pages.

---

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `briefing-escolar`)
2. Faça upload dos arquivos `index.html` e `apps-script.gs`
3. Acesse **Settings > Pages**
4. Em **Source**, selecione `main` e pasta `/ (root)`
5. Clique em **Save**
6. Seu briefing estará disponível em:
   `https://SEU_USUARIO.github.io/briefing-escolar/`

---

## Como conectar ao Google Sheets

### Passo 1 — Criar a planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma planilha nova
3. Copie o **ID** da planilha na URL:
   ```
   docs.google.com/spreadsheets/d/ESTE_TRECHO_É_O_ID/edit
   ```

### Passo 2 — Configurar o Apps Script
1. Acesse [script.google.com](https://script.google.com)
2. Clique em **Novo projeto**
3. Cole o conteúdo do arquivo `apps-script.gs`
4. Substitua `COLE_AQUI_O_ID_DA_SUA_PLANILHA` pelo ID copiado no passo anterior
5. Salve o projeto (Ctrl+S)

### Passo 3 — Publicar o Apps Script
1. Clique em **Implantar > Nova implantação**
2. Tipo: **Aplicativo da web**
3. Executar como: **Eu**
4. Quem tem acesso: **Qualquer pessoa**
5. Clique em **Implantar**
6. Autorize o acesso quando solicitado
7. **Copie a URL gerada** — ela se parece com:
   ```
   https://script.google.com/macros/s/XXXXXX/exec
   ```

### Passo 4 — Conectar o formulário ao Apps Script
1. Abra o arquivo `index.html`
2. Encontre esta linha:
   ```javascript
   const APPS_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";
   ```
3. Substitua pelo URL copiado no passo anterior
4. Salve e faça commit no GitHub

---

## Estrutura dos arquivos

```
briefing-escolar/
├── index.html        ← Formulário de briefing (página principal)
├── apps-script.gs    ← Código do Google Apps Script
└── README.md         ← Este arquivo
```

---

## Como funciona

```
Escola preenche o formulário
         ↓
JavaScript coleta todos os campos
         ↓
Envia via fetch() para o Apps Script
         ↓
Apps Script salva uma linha na planilha
         ↓
Você recebe os dados organizados no Google Sheets
```

---

## Campos salvos na planilha

| Coluna | Campo |
|--------|-------|
| A | Data/Hora |
| B | Nome da Escola |
| C | Frase da Escola |
| D | Valores |
| E | Diferencial |
| F | Público-alvo |
| G | Objetivos do Instagram |
| H | Escola de Referência |
| I | Logotipo |
| J | Cores Selecionadas |
| K | Outras Cores |
| L | Estilo Visual |
| M | Tom — Formalidade |
| N | Tom — Linguagem |
| O | Tom — Afeto |
| P | Termo para Alunos |
| Q | Palavras a Evitar |
| R | Tipos de Conteúdo |
| S | Regularidade de Fotos |
| T | Temas a Evitar |
| U | Observações Gerais |
| V | Plano de Interesse |
| W | Obs. sobre Plano |
| X | Nome do Responsável |
| Y | E-mail |
| Z | WhatsApp |

---

Desenvolvido para uso profissional em prospecção de design para escolas.
