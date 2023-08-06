const {BrowserWindow, app} = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 600,
        height: 800,
        center: true,
        resizable: true,
        title: 'Copy Queue',
    })
    window.loadFile('index.html')
}

app.whenReady().then(createWindow)