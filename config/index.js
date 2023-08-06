const {BrowserWindow, app} = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,
        center: true,
        resizable: true,
        title: 'Copy Queue',
    })

    window.webContents.openDevTools()
    window.loadFile('./config/index.html')
}

app.whenReady().then(createWindow)