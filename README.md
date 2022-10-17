# GIT,GITHUB Y APLICACIÓN WEB - VELAZQUEZ
## INDICE
### INTRODUCCIÓN
### HERRAMIENTAS UTILIZADAS 
### PARTES DEL TRABAJO
#### CÓDIGO IMPORTANTE
### CONCLUSIÓN FINAL


## INTRODUCCIÓN
En este trabajo, el profesor nos ha dado unas capturas, con las que 
teníamos que intentar lograr un acabado final lo más parecido al de las 
capturas. Además, teníamos que subirlo a git para que se quedara guardado
todo el rato. También hemos aprendido a usar alguno de los comandos de GIT
(git status, git add ., git commit...). A parte hemos tenido que empezar a 
emplear javaScript para poder hacer algunas funciones como poder cambiar de 
imagen o al pulsar la imagen que se haga más grande por ejemplo.

## HERRAMIENTAS UTILIZADAS
El editor que hemos utilizado ha sido PHP. Hemos usado tres lenguajes diferentes
(html, css y javaScript). También he usado google para poder sacar información
y maneras de conseguir el resultado final.
Hemos usado GitHub, para poder subir el código a la nube y que no se pierda nada
(también lo usaremos para copiar el enlace y adjuntarlo al trabajo).

## PARTES DEL TRABAJO
Para diferenciar las partes del trabajo me voy a basar en los commit que he
realizado y voy a marcarlo con el trabajo que he realizado cada día.

### VIERNES 14/10/2022
El viernes se nos dio el trabajo a realizar, por lo que lo primero que hice
fue pensar en como me iba a organizar y que era lo que tenía que hacer 
según lo que me pedía.
Después, empecé a organizar el entorno de trabajo (haciendo la carpeta, 
añadiendo los ficheros, conectando con git...)
Una vez preparado el entorno de trabajo, empecé con el HTML y el CSS.
Lo primero que hice fue coger la fuente de "montserrat" desde google fonts,
una vez la tuve, hice el encabezado, puse las imágenes a la izquierda
tal como se pedía (que la imagen estuviera en gris y cuando se pasara por 
encima se pusiera con el color original) y también hice la maquetación para 
después poder poner la imagen en grande y el texto en la derecha.
### SABADO 15/10/2022
El sábado hice un solo commit, ya que fue cuando empecé con el javaScript y no me 
funcionaba muy bien lo que estaba haciendo (poder seleccionar la miniatura y
que salga la foto grande y el texto), asi que solamente hice un commit para 
guardar el proceso de las imágenes y textos que había puesto. Aunque hice
más commit, pero los borré y retrocedí al anterior para volver a trabajar sobre
ello, ya que no me gustaba lo que estaba haciendo y no me acordaba que había 
movido, asi que la solución más fácil era retroceder al anterior commit.
### DOMINGO 16/10/2022
El domingo conseguí que funcionara el javaScript para poder hacer que al pulsar
la miniatura me sacara la imagen grande y el texto que le corresponde. Una vez
conseguido, lo apliqué en todas las miniaturas para que al pinchar en cada
una de ellas salga la imagen correspondiente con el texto correspondiente.
### LUNES 17/10/2022
El lunes por la noche, conseguí hacer con javaScript que al pinchar en la imagen 
grande, se me hiciera más grande y con el fondo negro. Una vez conseguido todo
lo que tenía que hacer con javaScript, empecé a colocar las imágenes y el texto
lo más parecido al de la plantilla que nos mandaron.
Una vez todo colocado, me di cuenta qué me faltaba que la página fuera responsive,
que ha sido una de las cosas que no he podido conseguir finalmente. 
En clase he intentado terminar de modificar la página para que me funcionara
el responsive, pero finalmente no he sido capaz de ello.

Cuando a mi parecer ya estaba la página bastante similar a la que nos mandaba,
empecé a escribir el readme.

#### CÓDIGO IMPORTANTE.
A mi parecer, el código más importante para la elaboración de esta página, ha sido
aprender a como se usa javaScript y que funciones tiene, aparte de tener un buen 
manejo de CSS para la maquetación de la página y para poder lograr los pequeños 
detalles que se nos pide para la página.

##### CSS
En el css lo más importante que me ha parecido fue la maquetación de la imagen grande
y del texto. Ya que por ejemplo las imágenes de la izquierda ya lo hemos hecho en 
trabajos anteriores y sabía hacerlo, pero me ha parecido más difícil poder cuadrar
la imagen grande y el texto.

    '''HTML
    <section class="tabs_content is-active">
    <article class="modal-container"><img src="DOCUMENTOS/practica01/practica01/breda.jpg" onclick="openFulImg(this.src)"></article>
    <article class="texto">
    <h1>LA RENDICIÓN DE BREDA</h1>
    <h3>1634-35</h3>
    <h2>380€</h2>
    <p>Replica del cuadro en colores originales y tamaño 150 x 80cm</p>
    <button>COMPRAR</button>
    </article>
    </section>
    '''


    '''CSS
    main{
    display: flex;
    width: 100%;
    }
    section{
    display: flex;
    width: 100%;
    margin-left: 250px;
    }

    article{
    width: 50%;
    }
    .texto{
    position: relative;
    top:20%
    }
    article img{
    width: 100%;
    height: 100%;
    }
    article h1{
    font-weight: 700;
    font-size: 3rem;
    }
    article h2{
    text-align: center;
    }
    article h3{
    text-align: center;
    font-weight: 200;
    }
    article p{
    text-align: center;
    font-weight: 200;
    font-size: 1.5em;
    margin-left: 5%;
    margin-right: 15%;
    }

    button{
    border: none;
    border-radius: 10px;
    padding: 20px;
    width: 200px;
    background: #97c1c0;
    font-weight: 700;
    margin: auto;
    display: block;
    }
    button:hover{
    background: #04c5c0;
    }
    '''
##### JAVASCRIPT
Hacer el javaScript fue lo que más difícil me ha parecido de todo el trabajo, 
ya que nunca había usado javaScript, y para poder utilizarlo he tenido que mirar
en varios foros, videos, informarme de como se usaba y para que serbia cada cosa...
Este es el javaScript que he realizado para que me funcione en la página:
Primero hice un javascript para poder pinchar una miniatura y que se abra la foto 
grande y su texto:

    '''JavaScript 
    let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

    tabs.forEach((tab, index) => {
    tab.addEventListener('click' , () => {
    contents.forEach((content) => {
    content.classList.remove('is-active');
    });
    tabs.forEach((tab) => {
    tab.classList.remove('is-active');
    });
    contents[index].classList.add('is-active');
    tabs[index].classList.add('is-active');
    });
    });
    '''
Después hice otro javascript para que al pinchar la imagen grande, se haga más 
grande y con el fondo en negro, y este fue el javascript que use:

    '''JavaScript
    const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg")

    function openFulImg(reference){
    fulImgBox.style.display = "flex"
    fulImg.src = reference
    }

    function closeImg(){
    fulImgBox.style.display = "none";
    }
    '''

## CONCLUSIÓN
Me ha parecido un trabajo en el que hemos tenido que ser autosuficientes para 
poder realizar las diferentes labores que se nos pedía(sobre todo el javascript,
que no sabía como se usaba). Me ha parecido un buen trabajo para recordar como
se utilizaba html y css, y además añadimos javaScript, que era lo que no sabía 
utilizar. Personalmente, he tenido bastantes complicaciones, ya que no me salían
bien las cosas a la primera y he tenido que buscar por diferentes sitios hasta 
que me ha salido. Además, he aprendido a retroceder en los commit, ya que había
veces que me interesaba volver al anterior, porque no me gustaba lo que estaba 
haciendo.
Me ha parecido bastante útil, aunque no haya podido hacer la página responsiva,
estoy bastante contento con el resultado y de aprender como usar un nuevo lenguaje.
