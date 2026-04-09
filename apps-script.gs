// ============================================================
// GOOGLE APPS SCRIPT — Recebe o briefing e salva na planilha
// ============================================================
// INSTRUÇÕES:
// 1. Acesse: https://script.google.com
// 2. Clique em "Novo projeto"
// 3. Cole TODO este código substituindo o conteúdo existente
// 4. Substitua SHEET_ID pelo ID da sua planilha do Google Sheets
//    (o ID fica na URL: docs.google.com/spreadsheets/d/AQUI_FICA_O_ID/edit)
// 5. Clique em "Salvar" (Ctrl+S)
// 6. Clique em "Implantar" > "Nova implantação"
// 7. Tipo: "Aplicativo da web"
// 8. Executar como: "Eu"
// 9. Quem tem acesso: "Qualquer pessoa"
// 10. Clique em "Implantar" e copie a URL gerada
// 11. Cole a URL no arquivo index.html onde está escrito:
//     const APPS_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";
// ============================================================

const SHEET_ID = "COLE_AQUI_O_ID_DA_SUA_PLANILHA";
const SHEET_NAME = "Briefings"; // nome da aba na planilha

const COLUNAS = [
  "Data/Hora",
  "Nome da Escola",
  "Frase da Escola",
  "Valores",
  "Diferencial",
  "Público-alvo",
  "Objetivos do Instagram",
  "Escola de Referência",
  "Logotipo",
  "Cores Selecionadas",
  "Outras Cores",
  "Estilo Visual",
  "Tom — Formalidade (1=Formal, 5=Descontraído)",
  "Tom — Linguagem (1=Técnico, 5=Popular)",
  "Tom — Afeto (1=Institucional, 5=Afetivo)",
  "Termo para Alunos",
  "Palavras a Evitar",
  "Tipos de Conteúdo",
  "Regularidade de Fotos",
  "Temas a Evitar",
  "Observações Gerais",
  "Plano de Interesse",
  "Obs. sobre Plano/Pagamento",
  "Nome do Responsável",
  "E-mail",
  "WhatsApp",
];

function doPost(e) {
  try {
    const dados = JSON.parse(e.postData.contents);
    const planilha = SpreadsheetApp.openById(SHEET_ID);
    let aba = planilha.getSheetByName(SHEET_NAME);

    // Cria a aba se não existir e adiciona cabeçalho
    if (!aba) {
      aba = planilha.insertSheet(SHEET_NAME);
      aba.appendRow(COLUNAS);
      aba.getRange(1, 1, 1, COLUNAS.length)
        .setBackground("#085041")
        .setFontColor("#ffffff")
        .setFontWeight("bold");
      aba.setFrozenRows(1);
    }

    const linha = [
      dados.timestamp || new Date().toLocaleString('pt-BR'),
      dados.nome_escola || "",
      dados.frase_escola || "",
      dados.valores || "",
      dados.diferencial || "",
      dados.publico || "",
      dados.objetivos || "",
      dados.referencia_escola || "",
      dados.logotipo || "",
      dados.cores || "",
      dados.cores_livres || "",
      dados.estilo || "",
      dados.tom_formalidade || "",
      dados.tom_tecnico || "",
      dados.tom_afeto || "",
      dados.termo_alunos || "",
      dados.palavras_evitar || "",
      dados.tipos_conteudo || "",
      dados.regularidade_fotos || "",
      dados.temas_evitar || "",
      dados.observacoes || "",
      dados.plano || "",
      dados.obs_plano || "",
      dados.nome_responsavel || "",
      dados.email_responsavel || "",
      dados.whatsapp || "",
    ];

    aba.appendRow(linha);

    // Formata a nova linha
    const ultimaLinha = aba.getLastRow();
    if (ultimaLinha % 2 === 0) {
      aba.getRange(ultimaLinha, 1, 1, COLUNAS.length)
        .setBackground("#f0faf6");
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (erro) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "erro", mensagem: erro.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste — rode manualmente no editor para verificar a conexão
function testarConexao() {
  const planilha = SpreadsheetApp.openById(SHEET_ID);
  Logger.log("Conectado à planilha: " + planilha.getName());
}
