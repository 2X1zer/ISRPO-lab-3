const vscode = require('vscode');
const {exec} = require('child_process');

function activate(context) {
  console.log('Stop Unpleasant Voice стоп, мне неприятно!');

  vscode.languages.onDidChangeDiagnostics((event) => {
    for (const uri of event.uris) {
      const diagnostics = vscode.languages.getDiagnostics(uri);
      const hasError =
          diagnostics.some(d => d.severity === vscode.DiagnosticSeverity.Error);

      if (hasError) {
        vscode.window.showWarningMessage('стоп, мне неприятно!');
        exec(`say "стоп, мне неприятно!"`);
        break;
      }
    }
  });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};