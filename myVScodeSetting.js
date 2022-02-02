
{
    // editor
    "editor.fontSize": 22,
        "editor.fontFamily": "Fira Code", //Consolas, 'Courier New', monospace
            "editor.fontLigatures": true,
                "editor.wordWrap": "on",
                    "editor.minimap.enabled": true,
                        "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "comment",
                "settings": {
                    "fontStyle": "italic"
                }
            }
        ]
    },
    // cursor
    "editor.cursorSmoothCaretAnimation": true,
        "editor.cursorBlinking": "expand",
            // config related to code formatting
            "editor.defaultFormatter": "esbenp.prettier-vscode",
                "editor.formatOnSave": true,
                    "[javascript]": {
        "editor.formatOnSave": true, //was fasle
            "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[javascriptreact]": {
        "editor.formatOnSave": true, // was false
            "editor.defaultFormatter": null
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
            "source.fixAll.tslint": true,
                "source.organizeImports": true
    },
    "eslint.alwaysShowStatus": true,
        //terminal
        "terminal.integrated.fontSize": 16,
            "terminal.integrated.fontWeight": "normal",
                "terminal.integrated.fontFamily": "Consolas, 'Courier New', monospace",
                    "workbench.iconTheme": "vscode-icons",
                        // terminal customization
                        // "workbench.colorCustomizations": {
                        //   "terminal.background": "#1D2021",
                        //   "terminal.foreground": "#A89984",
                        //   "terminalCursor.background": "#A89984",
                        //   "terminalCursor.foreground": "#A89984",
                        //   "terminal.ansiBlack": "#1D2021",
                        //   "terminal.ansiBlue": "#0D6678",
                        //   "terminal.ansiBrightBlack": "#665C54",
                        //   "terminal.ansiBrightBlue": "#0D6678",
                        //   "terminal.ansiBrightCyan": "#8BA59B",
                        //   "terminal.ansiBrightGreen": "#95C085",
                        //   "terminal.ansiBrightMagenta": "#8F4673",
                        //   "terminal.ansiBrightRed": "#FB543F",
                        //   "terminal.ansiBrightWhite": "#FDF4C1",
                        //   "terminal.ansiBrightYellow": "#FAC03B",
                        //   "terminal.ansiCyan": "#8BA59B",
                        //   "terminal.ansiGreen": "#95C085",
                        //   "terminal.ansiMagenta": "#8F4673",
                        //   "terminal.ansiRed": "#FB543F",
                        //   "terminal.ansiWhite": "#A89984",
                        //   "terminal.ansiYellow": "#FAC03B"
                        // },
                        "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
        "bracketPairColorizer.depreciation-notice": false,
            "liveServer.settings.donotShowInfoMsg": true,
                "workbench.colorTheme": "One Dark Pro Darker",
                    "window.zoomLevel": 1
}


  // coder formating problem Alt + Shift + f