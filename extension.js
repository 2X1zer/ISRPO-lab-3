const vscode = require('vscode');
const {exec} = require('child_process');

function activate(context) {
  console.log('Stop Unpleasant Voice Р°РєС‚РёРІРёСЂРѕРІР°РЅ');

  vscode.languages.onDidChangeDiagnostics((event) => {
    for (const uri of event.uris) {
      const diagnostics = vscode.languages.getDiagnostics(uri);
      const hasError =
          diagnostics.some(d => d.severity === vscode.DiagnosticSeverity.Error);

      if (hasError) {
        vscode.window.showWarningMessage(
            'РЎС‚РѕРї, РјРЅРµ РЅРµРїСЂРёСЏС‚РЅРѕ!');
        exec(`say "РЎС‚РѕРї, РјРЅРµ РЅРµРїСЂРёСЏС‚РЅРѕ!"`);
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