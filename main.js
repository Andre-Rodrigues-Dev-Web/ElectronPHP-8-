const PHPServer = require('php-server-manager');
const { app, Menu, BrowserWindow } = require('electron');

const phpRuntime = new PHPServer({
  port: 5555,
  directory: __dirname + "/source",
  directives: {
    display_errors: 1,
    expose_php: 1
  }
});

let mainWindow;

function createWindow() {
  let runtimePromise = phpRuntime.run();

  mainWindow = new BrowserWindow({ width: 1024, height: 600 });
  mainWindow.loadURL('http://localhost:5555/');

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    phpRuntime.close();
    mainWindow = null;
  });
}

function initializeWindow() {
  // Assuming Dimensions is an object with width and height properties
  const Dimensions = {
    width: config.get('Electron.Width'),
    height: config.get('Electron.Height'),
  };

  let MainWindow = new BrowserWindow(Dimensions);
}

app.on('ready', () => {
  if (process.platform === 'darwin') {
    var template = [{
      label: 'FromScratch',
      submenu: [{
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: function () { app.quit(); }
      }]
    }, {
      label: 'Edit',
      submenu: [{
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        selector: 'undo:'
      }, {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:'
      }, {
        type: 'separator'
      }, {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector: 'cut:'
      }, {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        selector: 'copy:'
      }, {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        selector: 'paste:'
      }, {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:'
      }]
    }];
    var osxMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(osxMenu);
  }
});

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    phpRuntime.close(); // Close the PHP server
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
