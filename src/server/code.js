global.run = () => {
    let html = HtmlService.createHtmlOutputFromFile('dialog')
        .setWidth(400)
        .setHeight(600);
    DocumentApp
        .getUi() // Or DocumentApp or FormApp.
        .showModalDialog(html, 'Sheet Editor');
}