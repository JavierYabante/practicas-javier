// Nivel 3

/*
    Introducción
    ============
    Bieeeeen, has llegado lejos en tan poco tiempo!
    Pero todavía tenemos más cosas para vos. Antes de comenzar, abrí index.html, y
    reemplazá nuestro script de nivel2.js al que vamos a utilizar ahora, — nivel3.js.
    TIP: Si querés utilizar multiples archivos .js, simplemente
    agregá más etiquetas <script>.
*/

/*
    Hablemos un poco más de HTML, CSS y de como podemos interactuar con ellos
    en JavaScript.
    Hypertext Markup Language (HTML)
    --------------------------------
    Como te habrás dado cuenta, HTML está dividido en elementos que se ven algo así:
    <header></header>
    <p></p>
    <img />
    A estos elementos los llamamos "tags". Cada elemento de la página tiene un tag que abre y otro que
    cierra. (NOTA: Algunos tags, como <img />, no necesitan ser
    cerrados con otro tag.)
    La etiqueta que engloba a todas las demás en un archivo HTML es <html>.
    Dentro de la etiqueta <html> encontrarás un tag <head> y un tag <body>.
    En <head> metemos los metadatos, el título de la página y los links a los
    archivos CSS. La etiqueta <body> contiene nuestro contenido.
    Para una lista completa de las etiquetas HTML, podés mirar esta lista:
    http://htmldog.com/references/html/tags/
    En HTML, los tags pueden contener atributos:
    <div class="opciones"></div>
    Esta etiqueta div contiene un atributo llamado "class", el cual tiene como valor: "opciones".
    Cascading Style Sheets (CSS)
    ----------------------------
    CSS describe como se ven los elementos HTML.
    Los archivos CSS consisten en "bloques de declaración". Cada bloque de
    declaración está compuesto de un "selector" y de un conjunto de reglas de estilo
    visuales. Una declaración se ve así:
    
    [selector] {
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
    }
    Los selectores especifican sobre que elementos son aplicados los
    estilos visuales.
    Los selectores más básicos se refieren a los elementos mediante su nombre de etiqueta,
    se ven algo así:
    body {
      background-color: white;
    }
    Los selectores pueden también referirse a los elementos mediante su atributo
    de "clase", como esto:
    .settings {
      margin: 0;
    }
    o por su ID, así:
    #logo {
      text-align: center;
    }
    La lista de las propiedades de CSS es muy grande, podés leer más acá:
    https://www.w3.org/TR/CSS21/propidx.html
    No te preocupés, no hace falta recordar todo esto ahora mismo!
*/


/* 
    Uff, muchas cosas nuevas! Volvamos a JavaScript y veamos como podemos
    interactuar con HTML.
*/


/*
    Elementos de Acceso
    ==================
    Document Object Model (DOM)
    ---------------------------
    El DOM es la representación en JavaScript del elemento HTML que está siendo
    utilizado. EL DOM está disponible bajo una variable global especial llamada
    "document". Podemos obtener nodos específicos (elementos de página) con el
    metodo DOM: '.querySelector'.
    Obtengamos nuestro link de Twitter desde la página.
    Ejemplo:
    const nuestroTwitter = document.querySelector('.twitter');
    // Podemos guardar elementos de la página en variables, al igual que como cualquier otro valor!
    // De todas formas, fijate que un elemento de página es un objeto,
    // el cual es un "tipo de referencia", así como los arrays (mirá el nivel 2).
    // Eso quiere decir que se pueden cambiar los atributos y propiedades del elemento,
    // pero no la variable en sí misma. Vas a ver esto en acción ahora mismo.
*/

// TAREA: Ahora te toca a vos! — Obtené la etiqueta h1 de la página y guardala en una variable
//       variable llamada nuestroTitulo.
//       Utilizá console.log para ver lo que obtuviste!

const nuestroTitulo= document.querySelector('h1')
console.log(nuestroTitulo)

/*
    Obteniendo elementos similares.
    ========================
    También podemos obtener todos los elementos con la misma etiqueta. En nuestro
    pie de página tenemos una lista desordenada (<ul>), con tres elementos de lista (<li>) adentro.
    Obtengamoslos todos con un array de los elementos de la página. Cuando querramos obtener multiples elementos,
    podemos utilizar el método '.querySelectorAll', el cual nos dará una lista con las coincidencias.
    Ejemplo:
    // Esto obtendrá todos los <li> de la página.
    const mediaLinks = document.querySelectorAll('li');
*/

// TAREA: Obtené todos los elementos <li> de la página en una variable llamada mediaLinks.

const mediaLinks= document.querySelectorAll('li')
console.log(mediaLinks)


// TAREA: Ahora utilizá console.log para ver la cantidad de 
// elementos li que hay con mediaLinks.length

console.log(mediaLinks.length)

// TAREA: ¿Te acordás de los bucles del nivel 2? Usando lo que sabés de ellos, realizá iteraciones
//      sobre cada item de mediaLinks y mostralos en pantalla con console.log


for (let i=0; i<mediaLinks.length; i++){
    console.log('el elemento se llama: ',mediaLinks[i])
}


/*
    Propiedades de los elementos
    ==================
    
    Ok, hasta acá todo bien. Peeeroo, ¿que pasa si queremos obtener SOLO el texto
    de nuestra etiqueta 'h1'?
    Los elementos de página tienen una propiedad para esto: '.textContent'.
    Ejemplo:
    nuestroTwitter.textContent;
    // Obtendremos el texto: 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'.
*/

// TAREA: Obtené el contenido de nuestro elemento 'h1'
// y utilizá console.log para mostrarlo.


const SoloTextoTitulo= nuestroTitulo.textContent;
console.log(SoloTextoTitulo);



/*
    Editar el contenido de la página
    ====================
    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad que 
    vimos recién, '.textContent'.
    Ejemplo:
    nuestroTwitter.textContent = '@ButenkoMe';
    console.log(nuestroTwitter.textContent);
    // Adiviná que es lo que vamos a ver en la página y en la consola!
*/

// TAREA: Hagamos un nuevo título! Cambiá el contenido de nuestro 'h1' y ponele lo que quieras.


nuestroTitulo.textContent = 'javi and alexis <3';

console.log(nuestroTitulo.textContent);


/*
    Editando atributos
    ==================
    
    También podemos cambiar y establecer atributos en nuestros elementos.
    Ejemplo:
    const nuestroTwitter = document.querySelector('.twitter');
    ourTwitter.id = "sorpresa";
*/

// TAREA: Actualizá el valor del atributo 'src' de nuestra etiqueta 'img' a "img/kittens.jpeg".


const imagen = document.querySelector('img');
imagen.src = "img/kittens.jpeg";
console.log(imagen);


/*
    Editando estilos
    ==============
    Cambiemos algunos estilos. Los elementos de página tienen una propiedad '.style'.
    Podemos asignarle estilos a esta propiedad utilizando los mismos nombres que en
    los archivos CSS.
    (Si una propiedad tiene '-' en su nombre, como — font-size —, entonces
    el guión será eliminado y las siguiente palabra comenzara con una letra mayúscula, y pasará
    a ser fontSize).
    Ejemplo:
    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.style.backgroundColor = 'white';
*/

// Tarea: Obtené cualquier elemento de la página y cambiale algunos estilos.

nuestroTitulo.style.backgroundColor = 'gold';

/*
   Creando nuevos nodos (Elementos)
    =============================
    El objeto "document" también nos da maneras de crear nodos desde cero.
    document.createElement('div'); // crea un nuevo elemento llamado 'div'.
    document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
    existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.
    Ejemplo:
    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode('Yeeee!');
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
*/

// Tarea: Todavía seguís teniendo a los gatitos en tu pantalla? A mí me gusta el logo y los gatitos.
//       Creá una nueva imagen con nuestro logo como fuente, y ponela
//       en nuestra cabecera.
//
// P.S. También les podés dar estilos al nuevo nodo que creaste.

const nodoPagina = document.querySelector('header');
const nuevaImagen = document.createElement('img');
nuevaImagen.src = 'data:image/jpeg;base64,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'
nodoPagina.appendChild(nuevaImagen);


const textoParrafo = document.createTextNode('Yeeee!');
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo);


let texto2= document.querySelector('h2')
texto2.textContent= 'baila en minifalda, que risa que me da'


////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 3 de JavaScript Básico!          //
// Levántate, estira las piernas y celebra tu logro.                      //
// ¡Creo que esto amerita un festejo!                                     //
////////////////////////////////////////////////////////////////////////////