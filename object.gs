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

// CRIAÇÃO DE MÉTODO CONSTRUTOR
class dataBase{
  constructor(){
    this.nameSheet = "database"
    this.spreadsheet = spreadsheet.getActiveSpreadsheet().getId();//armazenamento da ID
    this.sheet = spreadsheet.openById(this.spreadsheet).getSheetByName(this.nameSheet);//aba database
    this.nameFolderMan = this.sheet.getRange('D36').getValue();//nome da pasta principal
    this.descriptionFolderMan = this.sheet.getRange('D37').getValue();//descrição da pasta principal
    this.nameFolderform = this.sheet.getRange('D38').getValue()//nome da pasta do formulário
    this.descriptionFolderform = this.sheet.getRange('D39').getValue()//descrição da pasta do formulário
    this.nameFolderReport = this.sheet.getRange('D40').getValue()//nome da pasta de relatorios
    this.descriptionFolderReport = this.sheet.getRange('D41').getValue()//descrição da pasta relatorios

    
  }
}

function test(){
  var b = new dataBase()
  
  console.log(b.descriptionFolderMan)

}
  