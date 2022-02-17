import hello from './hello.js';
import world from './world.js';
import style from '../css/style.css';

const h1 = document.querySelector("#hello-world");
h1.innerHTML = `${hello} ${world}`;