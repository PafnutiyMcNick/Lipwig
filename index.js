// Use this code for Google Docs, Slides, Forms, or Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .createMenu('Dialog')
    .addItem('Open', 'openDialog')
    .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('example.html')
  SpreadsheetApp.getUi().showModalDialog(html, 'Dialog title');
}
