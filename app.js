import { createRoot } from 'react-dom/client';

let myApp = document.getElementById("myApp");

myApp.innerHTML = "Hello World";

myApp.innerHTML = myApp.innerHTML + '<div id="reactApp"></div>';

const root = createRoot(document.getElementById("reactApp"));
root.render("<h1>Hellow world From React</h1>");