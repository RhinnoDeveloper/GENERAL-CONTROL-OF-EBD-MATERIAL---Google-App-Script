var form = FormApp;
var drive = DriveApp;
var gemail = GmailApp;
var calendario = CalendarApp;
var spreadsheet = SpreadsheetApp;

/* **************************************** 
  CRIAÇÃO DO MENU,
  CRIAÇÃO DE PASTAS,
  CRIAÇÃO DE FORMULÁRIO,
  CRIAÇÃO DA PLANILHA COM AS RESPOSTAS
  GERAR PDFs E INSERIR NA PASTA ADEQUADA
  *****************************************
  CRIAÇÃO DE MÉTODO CONSTRUTOR
  *****************************************
*/

// CRIAÇÃO DE MÉTODO CONSTRUTOR - 19.10.2023
//classe Pastas
class folders{
  constructor(){
    this.nameSheet = "database"
    this.spreadsheet = spreadsheet.getActiveSpreadsheet().getId();//armazenamento da ID
    this.sheet = spreadsheet.openById(this.spreadsheet).getSheetByName(this.nameSheet);//aba database
    this.nameFolderMan = this.sheet.getRange('D36').getValue();//nome da pasta principal
    this.descriptionFolderMan = this.sheet.getRange('D37').getValue();//descrição da pasta principal
    this.nameFolderform = this.sheet.getRange('D38').getValue()//nome da pasta do formulário
    this.descriptionFolderform = this.sheet.getRange('D39').getValue()//descrição da pasta do formulário
    this.nameFolderReports = this.sheet.getRange('D40').getValue()//nome da pasta de relatorios
    this.descriptionFolderReports = this.sheet.getRange('D41').getValue()//descrição da pasta relatorios
    this.nameFolderGeneralControl = this.sheet.getRange('D42').getValue();//nome da pasta controle geral
    this.descriptionFolderGeneralControl = this.sheet.getRange('D43').getValue();//descrição da pasta controle geral
    this.folderYear = this.sheet.getRange('D44').getValue()//nome da pasta ano em exercicio
    this.descriptionFolderYear = this.sheet.getRange('D45').getValue()//descrição da pasta ano em exercicio
    this.quarterFolderName = this.sheet.getRange('D46').getValue()//nome da pasta do trimestre em exercicio    
  }
}
//classe Formulário
class forms extends folders{
  constructor(){
    super()
    this.formFileTitle = this.sheet.getRange('D28').getValue()//titulo do arquivo formulario
    this.descriptionFormFileTitle = this.sheet.getRange('E28').getValue()//descrição do arquivo formulario
    this.formTitle = this.sheet.getRange('D30').getValue()//titulo interno do formulario
    this.descriptionForm = this.sheet.getRange('D32').getValue()//descrição interno do formulário
    this.confirmationMessage = this.sheet.getRange('E30').getValue()//confirmação de mensagem após o envio das respostas do formulario
    this.congregationCounter = this.sheet.getRange('H1').getValue()//numero de comgregações
    this.pageBreakCounter = this.sheet.getRange('H2').getValue()//numero de quebra de paginas (seções)

  }
}


function test(){
  var b = new forms()
  
  console.log(b.descriptionFormFileTitle)

}
  