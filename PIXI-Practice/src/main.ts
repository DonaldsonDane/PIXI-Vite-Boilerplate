import { Application } from 'pixi.js';
import './style.css'
const app = new Application();

await app.init({
   autoStart: false,
   resizeTo: window,
   sharedTicker: true,
   backgroundColor: '#2F422F'
});

document.body.appendChild(app.canvas);