import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let timetag = vscode.commands.registerTextEditorCommand('timetag.timetag', function (editor, edit, args) {
		const now = new Date()
		const options = { month: "2-digit", day: "2-digit", weekday: "short" };
		// tsc is showing an unreasonable TS2345 error regarding 'options'
		// but the code works fine as per documentation
		const formatter = new Intl.DateTimeFormat('en-US', options).formatToParts(now)
		const month = formatter[2].value;
		const day = formatter[4].value;
		const weekday = formatter[0].value;
        let text = `## ${month}${day} ${weekday} ################################\n`;
        edit.replace(editor.selection, text);
	});

	context.subscriptions.push(timetag);
}

export function deactivate() {}
