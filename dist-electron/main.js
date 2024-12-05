import { app, BrowserWindow } from 'electron';
import path from 'path';
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    // In development, load from Vite dev server
    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:5123');
    }
    else {
        win.loadFile(path.join(app.getAppPath(), 'dist-react/index.html'));
    }
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
