const { resolve } = require('path');
const { app, Menu, Tray, BrowserWindow, ipcMain} = require('electron');
const fs = require('fs');

app.dock.hide();

let window = undefined
let tray = null
let flag = false;

app.on('ready', () => {
  tray = new Tray( resolve(__dirname, 'assets/images', 'iconTemplate.png'));

    createWindow();

    tray.on('click', () => {
        toggleWindow();
    });
})

const toggleWindow = () => {

  if (flag) {
    window.hide();
  } else {
    window.show();
    window.focus();
  }

  flag = !flag;
}


const getWindowPosition = () => {

    const windowBounds = window.getBounds()
    const trayBounds = tray.getBounds()

    // Center window horizontally below the tray icon
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

    // Position window 4 pixels vertically below the tray icon
    const y = Math.round(trayBounds.y + trayBounds.height + 3)

    return {x: x, y: y}
}

const createWindow = () => {

    window = new BrowserWindow({
      width: 400,
      height: 220,
      show: false,
      frame: false,
      fullscreenable: false,
      resizable: false,
      //transparent: true,
      webPreferences: {
        nodeIntegration: true
      }
    });

    window.loadFile('index.html');
  
    const position = getWindowPosition();
  
    window.setPosition(position.x, position.y, false);
   
    window.on('blur', () => {
      if (!window.webContents.isDevToolsOpened()) {
        window.hide()
      }
    })
}

// ipcMain.on('show-window', () => {
//   showWindow()
// })