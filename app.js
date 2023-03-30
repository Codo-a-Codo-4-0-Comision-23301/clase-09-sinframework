const e = React.createElement;
function Button() {
    return e(
      'button',
      {  },
      'Boton'
    );
}

let myApp = document.getElementById("myApp");
myApp.innerHTML = "Hello World";
myApp.innerHTML = myApp.innerHTML + '<div id="reactApp"></div>';

let myReactApp = document.getElementById("reactApp");
const root = ReactDOM.createRoot(myReactApp);
//root.render(e(Button));