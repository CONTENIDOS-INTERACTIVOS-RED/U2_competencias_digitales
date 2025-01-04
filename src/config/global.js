export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1.',
        titulo: 'Técnicas de autoformación y aprendizaje autónomo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas para establecer metas y objetivos de aprendizaje',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias de búsqueda y gestión de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Uso de herramientas tecnológicas para el autoaprendizaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas de lectura comprensiva y toma de notas',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo: 'Introducción al aprendizaje en línea',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3.',
        titulo:
          'Gestión del tiempo y organización personal en la modalidad virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Importancia de la evaluación personal en el proceso de aprendizaje',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de autoevaluación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alonso, F. (2017). Currículo desde la perspectiva del aprendizaje autónomo. Ediciones USTA.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/68997',
    },
    {
      referencia:
        'Gadow, F. (2010). Dilemas: la gestión del talento en tiempos de cambio. Ediciones Granica.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/66709',
    },
    {
      referencia:
        'Montes M. (2010). La autoevaluación del alumno como modalidad de evaluación de sus aprendizajes: percepción (...). En: Memorias del programa científico Universidad 2010. Editorial universitaria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/80788',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje autónomo',
      significado:
        'Capacidad de dirigir y gestionar el propio proceso de aprendizaje, estableciendo metas, recursos y evaluando el progreso de manera independiente.',
    },
    {
      termino: 'Autodisciplina',
      significado:
        'Habilidad de una persona para establecer y seguir rutinas y hábitos sin necesidad de supervisión externa.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'Proceso mediante el cual una persona analiza y evalúa su propio desempeño o aprendizaje para identificar áreas de mejora.',
    },
    {
      termino: 'Autoformación',
      significado:
        'Proceso en el que una persona adquiere conocimientos y habilidades por iniciativa propia, sin depender exclusivamente de la instrucción formal.',
    },
    {
      termino: 'Calendario',
      significado:
        'Herramienta para la organización del tiempo que permite distribuir actividades, fechas y plazos a lo largo de un período definido.',
    },
    {
      termino: 'Diagrama de Gantt',
      significado:
        'Herramienta visual para planificar y gestionar proyectos, mostrando las tareas en un cronograma y permitiendo organizar el tiempo de forma más eficaz.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Tipo de evaluación continua durante el proceso de aprendizaje, que permite ajustar el enfoque y mejorar el desempeño antes de una evaluación final.',
    },
    {
      termino: 'Gestión del conocimiento',
      significado:
        'Proceso de adquirir, organizar, compartir y aplicar el conocimiento de manera eficiente para mejorar el aprendizaje.',
    },
    {
      termino: 'Matriz de Eisenhower',
      significado:
        'Herramienta para priorizar tareas dividiéndolas según su urgencia e importancia, ayudando a mejorar la gestión del tiempo.',
    },
    {
      termino: 'Metacognición',
      significado:
        'Capacidad de pensar sobre los propios procesos de pensamiento y aprendizaje, facilitando la autogestión del conocimiento y el ajuste de estrategias de aprendizaje.',
    },
    {
      termino: 'Motivación intrínseca',
      significado:
        'Impulso interno que mueve a una persona a aprender o realizar una actividad por el interés y satisfacción personal que le genera.',
    },
    {
      termino: 'Objetivos SMART',
      significado:
        'Metodología para establecer objetivos que sean específicos, medibles, alcanzables, relevantes y con un tiempo definido para su consecución.',
    },
    {
      termino: 'Planificación',
      significado:
        'Organización y diseño previo de las acciones o tareas que deben realizarse en un período determinado, con el fin de alcanzar objetivos específicos.',
    },
    {
      termino: 'Principio de Pareto',
      significado:
        'Regla que sugiere que el 80% de los resultados provienen del 20% de los esfuerzos, aplicado a la gestión del tiempo para centrarse en las actividades más productivas.',
    },
    {
      termino: 'Prioridad',
      significado:
        'Proceso de identificar y ordenar las tareas o actividades según su importancia o urgencia para una gestión eficaz del tiempo.',
    },
    {
      termino: 'Procrastinación',
      significado:
        'Tendencia a postergar o retrasar tareas importantes en favor de otras actividades menos relevantes o placenteras.',
    },
    {
      termino: 'Reflexión',
      significado:
        'Proceso de análisis y pensamiento crítico sobre las acciones, aprendizajes o comportamientos para generar nuevas ideas o soluciones.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Información o respuestas que una persona recibe sobre su desempeño o proceso de aprendizaje, con el fin de mejorar o ajustar sus acciones futuras.',
    },
  ],
  complementario: [
    {
      tema: 'Plataformas LMS',
      referencia:
        'FutureED. [Youtube]. (2020, Agosto 5). ¿Qué es un LMS y qué ventajas tiene utilizar una plataforma LMS?. [Archivo de video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z7I6dEY8hGA',
    },
    {
      tema: 'Herramientas colaborativas',
      referencia:
        'Marketing4eCommerce. [Youtube]. (2023, Marzo 30). Herramientas colaborativas: qué son y por qué han revolucionado la forma de trabajar. [Archivo de video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ftAzRtcKaDU',
    },
    {
      tema: 'Gestión del tiempo',
      referencia:
        'Sumo Primero en Terreno. [Youtube]. (2020, Mayo 19). Gestión del Tiempo - Línea Liderazgo Escolar. [Archivo de video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=haHoaG_8NZo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
