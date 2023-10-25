// @ts-nocheck
/* ************************************************
  DATA: 19.10.2023 - CRIADOR: RAFAEL DA SILVA MOURA
  *************************************************
  CRIAÇÃO DO MENU,
  CRIAÇÃO DE PASTAS,
  CRIAÇÃO DE FORMULÁRIO,
  CRIAÇÃO DA PLANILHA COM AS RESPOSTAS
  GERAR PDFs E INSERIR NA PASTA ADEQUADA
  *****************************************
  CRIAÇÃO DE MÉTODO CONSTRUTOR
  *****************************************
*/
var form = FormApp;
var drive = DriveApp;
var gemail = GmailApp;
var calendario = CalendarApp;
var spreadsheet = SpreadsheetApp;
var ui = spreadsheet.getUi;



/* ****************************************
  CRIAÇÃO DE MÉTODO CONSTRUTOR - 19.10.2023

classe Pastas
*/
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
    this.congregationCounter = this.sheet.getRange('H1').getValue()//numero de congregações
    this.pageBreakCounter = this.sheet.getRange('H2').getValue()//numero de quebra de paginas (seções)
    this.magazineAdultoCounter = this.sheet.getRange('H3').getValue()//numero de revistas adulto
    this.magazineJovensCounter = this.sheet.getRange('H4').getValue()//numero de revistas jovens
    this.magazineAdolescentesCounter = this.sheet.getRange('H5').getValue()//numero de revistas adolescetes (todas as faixas)
    this.magazineInfantilCounter = this.sheet.getRange('H6').getValue()//numero de revistas infantis
    this.magazineVisualCounter = this.sheet.getRange('H7').getValue()//numero de visuais
    this.magazineNovosConvertidosCounter = this.sheet.getRange('H8').getValue()//numero de revistas novos convertidos
    this.magazineSecretariaCounter = this.sheet.getRange('H9').getValue()//numero de revistas diversos (secretaria)
  }
}

/* **********************
  CRIAÇÃO DE FUNÇÕES

  Criação das pastas
  ***********************
  */
  function newFolders(){
    var root = new folders()
    var folderx = {
      mann: drive.getFoldersByName(root.nameFolderMan),
      formm: drive.getFoldersByName(root.nameFolderform),
      reportss: drive.getFoldersByName(root.nameFolderReports)
    }
    var creation = drive.createFolder;
    var idMan = "";
    
      folderx.mann.hasNext()==false ? idMan = creation(root.nameFolderMan).setDescription(root.descriptionFolderMan).getId() : idMan = drive.getFoldersByName(root.nameFolderMan).next().getId();
           
      let nameFolderMan = drive.getFolderById(idMan).getName();

      drive.getFoldersByName(nameFolderMan).next().getFolders().hasNext()==false ? drive.getFolderById(idMan).createFolder(root.nameFolderGeneralControl).setDescription(root.descriptionFolderGeneralControl)&
      drive.getFolderById(idMan).createFolder(root.nameFolderReports).setDescription(root.descriptionFolderReports)&
      drive.getFolderById(idMan).createFolder(root.nameFolderform).setDescription(root.descriptionFolderform) : false

      let h = drive.getFoldersByName(nameFolderMan).next();
      let hh = h.getFolders()
      
      while(hh.hasNext()){
        
        let nome = hh.next().getName() 
        let nomess = root.nameFolderReports
        console.log(nome)
        nome == nomess ? h.getFoldersByName(nomess).next().createFolder(root.folderYear).setDescription(root.descriptionFolderYear).createFolder(root.quarterFolderName) : console.log("errou")


        //h.next().getName() == root.nameFolderReports ? console.log("esse "+h.next().getName()) : console.log("errou")

      }
      
     
      
      
      //console.log(hh)
      //hh.hasNext()==false ?  
      
      
        

        

      
      /*folderx.mann.next().getFolders().hasNext()==false ? drive.getFolderById(idMan).createFolder(root.nameFolderGeneralControl).setDescription(root.descriptionFolderGeneralControl)&
      drive.getFolderById(idMan).createFolder(root.nameFolderReports).setDescription(root.descriptionFolderReports)&
      drive.getFolderById(idMan).createFolder(root.nameFolderform).setDescription(root.descriptionFolderform) : idMan = drive.getFoldersByName(root.nameFolderMan).next().getId();
      
      
      var b = drive.getFolderById(idMan).getFolders()
      console.log(b.hasNext())
      //console.log(b.next().getFolderById(root.nameFolderReports))

      while(b.hasNext()){
        var c = b.next()
        console.log(c.getName())
        console.log(c.getId())
      }
        */   
      
      
      
      

    //console.log(folderx.mann==true ? "Existe!" : "Precisa criar")
  }
  


function test(){
  var b = new forms()
  
  console.log(b.magazineNovosConvertidosCounter)

}
  