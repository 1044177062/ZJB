import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow



const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

  function createWindow () {
    let size = require('electron').screen.getPrimaryDisplay().workAreaSize
    let width = parseInt(size.width)
    console.log(width)
    
      let height = parseInt(1080*size.width/1920+30)
      mainWindow = new BrowserWindow({
        width: width/2,
        height: height/2,
        fullscreenable: false,
        fullscreen: true,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {webSecurity: false}
      })
    mainWindow.loadURL(winURL)
  }
  app.on('ready', function () {
    createWindow();
  })


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


