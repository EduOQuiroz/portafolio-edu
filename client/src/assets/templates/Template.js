import toDo from "@images/ToDo-list.png";
import films from "@images/Edu-Films.png";
import STC from "@images/STC_app.png";
import store from "@images/appReact.png";
import photo from "@images/portphoto1.png";

const Template = async () => {
  const view = `
  <section class="principal">
  <div class="principal__content">

  <div class="figure1">
  <svg class="figure1__icon" viewBox="0 0 750 750">
  <defs>
<linearGradient id="gradientM" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%"   stop-color="#09288f"/>
  <stop offset="100%" stop-color="#5b73c2"/>
</linearGradient>
</defs>
  <path class="triangle__line"
  d="M55.728 570.367h640.628
  M703.435 556.21L383.121 1.407
  M368.964 1.408L48.648 556.21"
  stroke-width="4.12">
  </path>
  </svg>
</div>
<div class="figure2">
  <svg class="figure2__icon" viewBox="0 0 750 750">
  <defs>
<linearGradient id="gradientM2" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%"   stop-color="#ff0000"/>
  <stop offset="100%" stop-color="#ff9100"/>
</linearGradient>
</defs>
  <path class="triangle__line"
  d="M55.728 570.367h640.628
  M703.435 556.21L383.121 1.407
  M368.964 1.408L48.648 556.21"
  stroke-width="4.12">
  </path>
  </svg>
</div>
<div class="photo_principal">
  <img src=${photo} >
</div>
  <div class="principal__content__container">
    <p class="principal__content__container__text">
      I am
    </p>
    
    <ul class="principal__content__container__list">
      <li class="principal__content__container__list__item">Eduardo Ortiz Quiroz</li>
      <li class="principal__content__container__list__item">Fullstack Developer</li>
      <li class="principal__content__container__list__item">Database Manager</li>
      <li class="principal__content__container__list__item">GIS Specialist</li>
    </ul>
  </div>
  
</div> 
  
  <div class="principal__principalImage">
    <div class="triangle triangle1"></div>
    <div class="triangle triangle2"></div>
    <div class="triangle triangle3"></div>
    <div class="triangle triangle4"></div>
    <div class="triangle triangle5"></div>
    <div class="triangle triangle6"></div>
    <div class="triangle triangle7"></div>
  </div>
    

  
    </section>
    <section class="proyects">
    <article class="proyects__art1">
    <div class="figure1">
      <svg class="figure1__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#09288f"/>
      <stop offset="100%" stop-color="#5b73c2"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>
    <div class="figure2">
      <svg class="figure2__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ff0000"/>
      <stop offset="100%" stop-color="#ff9100"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>

    <div class="proyects__art1__container">
    <h1 class="proyects__art1__container__title">
    Estaciones del STC Metro ciudad de México
    </h1>
    <p class="proyects__art1__container__content">
    En este proyecto podras seleccionar una(o todas las) linea(s) del STC y escoger una estacion,
    con lo cual seras redireccionado a la ubicacion de la misma, esta redireccion generara un marcador
    con una tarjeta que incluye los datos que brinda <span>Datos abiertos de México.</span> 
    <br>En el controlador icono(controlador) <img src="https://banner2.cleanpng.com/20180409/ypw/kisspng-computer-icons-layers-svg-5acba46c468992.0812927915232953402889.jpg">
    podras cambiar el mapa base por otras alternativas.<br>
    <br> <span> Este proyecto se construyo con: </span> JavaScript, NodeJS, Express.js, Axios, PostgreSQL, Babel,
    CSS, HTML y Webpack.
    </p>
    <button class="proyects__art1__container__button" onclick="window.open('https://stcapp-production.up.railway.app/')"> 
    Ir al proyecto
    </button>
    </div>
    <div class="proyects__art1__image">
    <img src=${STC}>
    </div>
    </article>


    <article class="proyects__art2">
    <div class="figure1">
      <svg class="figure1__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#09288f"/>
      <stop offset="100%" stop-color="#5b73c2"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>
    <div class="figure2">
      <svg class="figure2__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ff0000"/>
      <stop offset="100%" stop-color="#ff9100"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>

    <div class="proyects__art2__container">
    <h1 class="proyects__art2__container__title">
    Web-movies con API de The Movie Database
    </h1>
    <p class="proyects__art2__container__content">
    En este proyecto podremos visualizar las peliculas en tendencia, por categoria o 
    realizar una busqueda en la base de datos de la API. Ademas podremos agregar nuestras
    peliculas favoritas que se guardaran en el LocalStorage del dispositivo.<br>
    <br><span>Este proyecto se construyo con: </span> JavaScript, NodeJS, Express.js, Axios,
    HTML Y CSS.
    </p>
    <button class="proyects__art2__container__button" onclick="window.open('https://edufilms-production.up.railway.app/')"> 
    Ir al proyecto
    </button>
    </div>
    <div class="proyects__art2__image">
    <img src=${films}>
    </div>
    </article>

    <article class="proyects__art3">
    <div class="figure1">
      <svg class="figure1__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#09288f"/>
      <stop offset="100%" stop-color="#5b73c2"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>
    <div class="figure2">
      <svg class="figure2__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ff0000"/>
      <stop offset="100%" stop-color="#ff9100"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>
    <div class="proyects__art3__container">
    <h1 class="proyects__art3__container__title">
    To-do list con imagen
    </h1>
    <p class="proyects__art3__container__content">
    Este proyecto te permite agregar tareas con un titulo y si asi lo puedes agregar tambien una imagen.<br>
    <br> <span> Este proyecto se construyo con: </span> React.js, NodeJS, Express.js, Axios, MongoDB,
    TailwindCSS, HTML, Webpack y Cloudinary(para las imagenes).
    </p>
    <button class="proyects__art3__container__button" onclick="window.open('https://to-dolist-production.up.railway.app/')"> 
    Ir al proyecto
    </button>
    </div>
    </div>
    <div class="proyects__art3__image">
    <img src=${toDo}>
    </div>
    </article>

    <article class="proyects__art4">
    <div class="figure1">
      <svg class="figure1__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#09288f"/>
      <stop offset="100%" stop-color="#5b73c2"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>
    <div class="figure2">
      <svg class="figure2__icon" viewBox="0 0 750 750">
      <defs>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ff0000"/>
      <stop offset="100%" stop-color="#ff9100"/>
    </linearGradient>
  </defs>
      <path class="triangle__line"
      d="M55.728 570.367h640.628
      M703.435 556.21L383.121 1.407
      M368.964 1.408L48.648 556.21"
      stroke-width="4.12">
      </path>
      </svg>
    </div>

    <div class="proyects__art4__container">
    <h1 class="proyects__art4__container__title">
    API para tienda online
    </h1>
    <p class="proyects__art4__container__content">
    Una API sencilla con rutas para GET/PATCH/DELETE/POST, integra metodos de autenficiacion con 
    JWT y Hash a las contraseñas, para la conexion a la base de datos utiliza Sequelize como ORM. <br>
    <br><span>Este proyecto se construyo con: </span>NodeJS, Express.js, PostgreSQL.
    </p>
    <button class="proyects__art4__container__button" onclick="window.open('https://express-app-production-e7a5.up.railway.app/')"> 
    Ir a la tienda
    </button>
    <button class="proyects__art4__container__button1" onclick="window.open('https://express-app-production-e7a5.up.railway.app/api/v1/products')"> 
    Ir a la API
    </button>
    </div>
    </div>
    <div class="proyects__art4__image">
    <img src=${store}>
    </div>
    </article>

    </section>

  `;
  return view;
};

export default Template;
