
function mostrarimg(){
document.getElementById('cont2').innerHTML='<img src="images/firefox.png">';
}

function grupo() {
    var demo = document.getElementById("grupo");
    demo.style.color = "green";
}

function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hola Mundo";
}   

function addText() {
    var para = document.getElementsByName("demoPara");
    para[0].innerHTML="Texto cambiado!";
    para[1].innerHTML = "El grupo 03 "
      + "ha realizado esto con JavaScript";
}

function displayPhrase()
{
    document.getElementById("p1").innerHTML = "Este texto fue remplazado";
}

function formsfuncion() {
    var txt = document.getElementById(
      "idformulario1").id;

    document.getElementById(
      "forms1").innerHTML = txt;
}


//FUNCIONES DE LILI

function showColorList() {
  const colorListContainer = document.getElementById("colorListContainer");
  colorListContainer.style.display = "block";
}


function obtenerLongitud() {
  const ulLista = document.getElementById("lista");
  const longitud = ulLista.children.length;

  alert("Longitud de la lista de nodos: " + longitud);
}


//FIN DE FUNCIONES DE LILIL

//FUNCIONES DIEGO TORRES

function addNewElements() {
  // Creamos un nuevo elemento <ul>
  const newUl = document.createElement("ul");

  // Creamos tres elementos de lista <li>
  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");
  const listItem3 = document.createElement("li");

  // Creamos nodos de texto para los elementos de lista
  const listItemText1 = document.createTextNode("Articulo 1");
  const listItemText2 = document.createTextNode("Articulo 2");
  const listItemText3 = document.createTextNode("Articuol 3");

  // Añadimos los nodos de texto a los elementos de lista
  listItem1.appendChild(listItemText1);
  listItem2.appendChild(listItemText2);
  listItem3.appendChild(listItemText3);

  // Añadimos los elementos de lista al <ul>
  newUl.appendChild(listItem1);
  newUl.appendChild(listItem2);
  newUl.appendChild(listItem3);

  // Obtenemos la referencia al contenedor existente
  const container = document.getElementById("container20");

  // Añadimos el nuevo <ul> al contenedor existente
  container.appendChild(newUl);
}

function insertButton() {
  // Creamos un nuevo elemento <button>
  const newButton = document.createElement("button");
  const buttonText = document.createTextNode("New Button");
  newButton.appendChild(buttonText);

  // Obtenemos una referencia al contenedor padre
  const container = document.getElementById("container-2");

  // Obtenemos una referencia al primer botón existente
  const firstButton = container.querySelector("button");

  // Insertamos el nuevo botón antes del primer botón existente
  container.insertBefore(newButton, firstButton);
}


function deleteElement(element) {
  element.remove();
}

function regenerarEjmp() {
  var div = document.querySelector(".container-3");
  div.innerHTML = `<p>Elimine un elemento HTML haciendo clic en él.</p>
    <p onclick="deleteElement(this)">Primera frase del dia.</p>
                            <p onclick="deleteElement(this)">Segunda frase del día..</p>
  `;
}

function remover_lista() {
  const parent = document.getElementById("list");
  const child = document.getElementById("l1");
  parent.removeChild(child);
}


function cambio_figura() {
  var container = document.getElementById("forma");

  var circularDiv = document.createElement("div");
  circularDiv.style.width = "200px";
  circularDiv.style.height = "200px";
  circularDiv.style.backgroundColor = "blue";
  circularDiv.style.borderRadius = "50%";

  var parent = container.parentNode;
  parent.replaceChild(circularDiv, container);
}

function ctImg() {
  const images = document.getElementsByTagName("img");
  const imageCount = images.length;
  
  document.getElementById("imagenes").textContent = "El número de imágenes es: " + imageCount;
}


function iluminacion() {
  const myCollection = document.getElementsByTagName("a");
  for (let i = 0; i < myCollection.length; i++) {
    const letters = myCollection[i].textContent.split("");
    let delay = 0;
    for (let j = 0; j < letters.length; j++) {
      setTimeout(() => {
        myCollection[i].innerHTML += "<span style='color:red; transition: color 0.5s'>" + letters[j] + "</span>";
      }, delay);
      delay += 100;
    }
    myCollection[i].textContent = "";
  }
}












//FIN DE FUNCIONES DIEOG TORRES

//FUNCIONES JEIMMY 

function animateBalls() {
  // Obtén una referencia al contenedor
  var container = document.querySelector(".padre");

  // Crea pelotas y añádelas al contenedor
  for (var i = 0; i < 10; i++) {
    var ball = document.createElement("div");
    ball.className = "ball";
    container.appendChild(ball);
  }

  // Obtiene todas las pelotas del contenedor
  var balls = document.getElementsByClassName("ball");

  for (var i = 0; i < balls.length; i++) {
    var ball = balls[i];

    // Establece una posición vertical aleatoria para cada pelota
    var randomY = Math.floor(Math.random() * (container.offsetHeight - ball.offsetHeight));
    ball.style.top = randomY + "px";

    // Crea una animación utilizando la API de animación HTML DOM
    ball.animate([
      { top: randomY + "px" },
      { top: container.offsetHeight + "px" }
    ], {
      duration: Math.floor(Math.random() * 2000) + 1000, // Duración aleatoria de la animación en milisegundos
      easing: 'ease-in-out', // Función de aceleración de la animación
      iterations: Infinity, // Número de veces que se repite la animación (Infinity para repetir infinitamente)
      delay: Math.floor(Math.random() * 2000) // Retardo aleatorio antes de iniciar la animación
    });
  }
}

//FUNCION 2 JEIMMY
function launchRocket() {
    const rocket = document.getElementById("rocket");
    rocket.classList.add("active");
}

//FUNCION 3 JEIMMY
function changeColor() {
  const sunrise = document.getElementById("sunrise");
  sunrise.classList.add("clicked");
  setTimeout(function() {
    sunrise.classList.remove("clicked");
  }, 2000);
}

//FUNCION 4 JEIMMY
function showMessage(message) {
  document.getElementById("message").innerHTML = message;
}

//FUNCION 5 JEIMMY 
function handleClick() {
  var button = document.getElementById("myButton2");
  var counter = document.getElementById("counter2");

  var currentValue = parseInt(counter.innerHTML);
  counter.innerHTML = currentValue + 1;

  counter.style.backgroundColor = "lightblue";
}

var counter = document.getElementById("counter2");
counter.addEventListener("mouseout", function() {
  counter.style.backgroundColor = "";
});


//FUNCION 6 JEIMMY 
function reloadPage() {
  var loader = document.getElementById("loader");

  if (loader.style.display === "none") {
    loader.style.display = "block";
    loader.innerHTML = "Saliendo...";
  } else {
    loader.style.display = "none";
  }

  location.reload();
}

//FUNCION 7 JEIMMY
    function changeBackground() {
  var colorSelect = document.getElementById("colorSelect");
  var selectedColor = colorSelect.value;
  document.body.style.backgroundColor = selectedColor;
}

//FUNCION 8 JEIMMY
function highlightBox(box) {
  box.style.backgroundColor = "yellow";
}

function unhighlightBox(box) {
  box.style.backgroundColor = "white";
}

//FUNCION 9 JEIMMY
 var isDragging = false;

  function startDrag(event) {
    isDragging = true;
  }

  function stopDrag(event) {
    isDragging = false;
  }

  function showMessage() {
    if (isDragging) {
      return; // Evita mostrar el mensaje si se arrastró el cuadro
    }
    
    var message = document.getElementById("message");
    message.innerHTML = "¡Has hecho clic en el cuadro!";
  }


function displayPhrase()
{
    document.getElementById("p1").innerHTML = "Este texto fue remplazado";
}

function formsfuncion() {
    var txt = document.getElementById(
      "idformulario1").id;

    document.getElementById(
      "forms1").innerHTML = txt;
}


intro.style.backgroundColor = '#00FFFF';
