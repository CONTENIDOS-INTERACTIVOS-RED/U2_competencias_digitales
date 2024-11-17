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
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
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
        titulo: 'Introducción al aprendizaje en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características del aprendizaje en línea',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modalidades del aprendizaje en línea',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Interacción en entornos de aprendizaje en línea',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tecnologías para el aprendizaje en línea',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ventajas del aprendizaje en línea',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Desafíos del aprendizaje en línea',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Tendencias actuales y futuras en el aprendizaje en línea',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo: 'Introducción al aprendizaje en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plataformas de gestión del aprendizaje (LMS)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas de comunicación y colaboración',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas para la creación de contenido digital',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Herramientas de evaluación en línea',
            hash: 't_2_4',
          },
        ],
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
            titulo: 'Principios fundamentales de la gestión del tiempo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Planificación y organización de tareas en entornos virtuales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Equilibrio entre la vida personal y profesional/estudiantil en la modalidad virtual',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Estrategias para evitar la procrastinación',
            hash: 't_3_4',
          },
        ],
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
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Unidad 1__Competencias digitales.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bates, T. (2015). Teaching in a digital age: Guidelines for designing teaching and learning. BCcampus.',
    },
    {
      referencia:
        'Bautista Pérez, G., Forés Miravalles, A., & Borges Sáiz, F. (2016). Didáctica universitaria en entornos virtuales de enseñanza-aprendizaje. Narcea Ediciones.',
    },
    {
      referencia: 'Bustinduy, I. (2015). La gestión del tiempo. Editorial UOC.',
    },
    {
      referencia:
        'Cenich, G. (2006). Propuesta de aprendizaje basado en proyecto y trabajo colaborativo: experiencia de un curso en línea. Red Revista Electrónica de Investigación Educativa.',
    },
    {
      referencia:
        'García, L. (2019). Productividad y gestión del tiempo: Principios y técnicas efectivas.',
    },
    {
      referencia:
        'Moore, M. G., & Kearsley, G. (2012). Distance education: A systems view of online learning (3rd ed.). Wadsworth Cengage Learning.',
    },
    {
      referencia:
        "O'Driscoll, A., & Kaye, P. (2019). Los sistemas de gestión de aprendizaje: Modernización educativa y acceso eficiente al contenido. Editorial ABC.",
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos (OCDE). (2017). Manual para entornos de aprendizaje innovadores. Editorial UOC.',
    },
    {
      referencia:
        'Pedraza, M. A. (2009). Los entornos virtuales de enseñanza-aprendizaje: propuesta pedagógica. El Cid Editor | Apuntes.',
    },
    {
      referencia:
        'Quijada Monroy, V. del C. (2014). Aprendizaje virtual. Editorial Digital UNID.',
    },
    {
      referencia:
        'Ramos Ramos, P. (2014). Gestión del tiempo y planificación de tareas (2a ed.). Editorial ICB.',
    },
    {
      referencia:
        'Ruiz Ospino, E. A., & Sánchez Fontalvo, I. M. (2019). ¿Qué piensan los profesores universitarios de los estilos de aprendizaje?. Editorial Unimagdalena.',
    },
    {
      referencia:
        'Salmon, G. (2013). Moderación electrónica: la clave para la enseñanza y el aprendizaje en línea.',
    },
    {
      referencia:
        'Sangrà Morer, A., & Girona Campillo, C. (2013). Los materiales de aprendizaje en contextos educativos virtuales: pautas para el diseño tecnopedagógico. Editorial UOC.',
    },
    {
      referencia:
        'Torres Quiñones, A. (2015). La construcción de las estrategias de aprendizaje en la formación inicial del profesional de la educación desde los entornos virtuales de aprendizaje. Editorial Universitaria.',
    },
  ],
  glosario: [
    {
      termino: 'Asincrónico',
      significado:
        'Modalidad de aprendizaje en la que los estudiantes no requieren estar conectados al mismo tiempo, permitiendo mayor flexibilidad en sus horarios',
    },
    {
      termino: 'Brecha digital',
      significado:
        'Desigualdad en el acceso a recursos tecnológicos como internet o dispositivos adecuados, lo que limita la participación en el aprendizaje en línea',
    },
    {
      termino: 'e-learning',
      significado:
        'Modalidad educativa que utiliza tecnologías digitales e internet para impartir conocimientos, eliminando barreras geográficas y temporales, ofreciendo flexibilidad y accesibilidad a los estudiantes',
    },
    {
      termino: 'Flexibilidad',
      significado:
        'Capacidad del aprendizaje en línea para permitir a los estudiantes acceder a los contenidos en cualquier momento y desde cualquier lugar',
    },
    {
      termino: 'Gamificación',
      significado:
        'Uso de elementos de juego (puntos, recompensas) en el aprendizaje para motivar y enganchar a los estudiantes',
    },
    {
      termino: 'Gestión del tiempo',
      significado:
        'Capacidad para planificar y controlar cómo se dividen las horas de trabajo o estudio para aumentar la eficiencia y productividad',
    },
    {
      termino: 'Grabación de sesiones',
      significado:
        'Funcionalidad de las plataformas de videoconferencia que permite registrar reuniones o clases para su revisión posterior',
    },
    {
      termino: 'Google Drive',
      significado:
        'Plataforma de almacenamiento en la nube que permite compartir archivos y colaborar en tiempo real en documentos, hojas de cálculo y presentaciones',
    },
    {
      termino: 'Ley de Pareto (80/20)',
      significado:
        'Principio que afirma que el 80% de los resultados proviene del 20% del esfuerzo, sugiriendo centrarse en las actividades más importantes',
    },
    {
      termino: 'Matriz de Eisenhower',
      significado:
        'Herramienta para priorizar tareas según su urgencia e importancia, organizándolas en cuatro cuadrantes',
    },
    {
      termino: 'Picos de productividad',
      significado:
        'Momentos del día en los que una persona tiene mayor energía y enfoque, lo que permite realizar tareas más demandantes de manera más eficiente',
    },
    {
      termino: 'Plataforma LMS',
      significado:
        'Sistema de gestión del aprendizaje que centraliza la distribución de contenido, la interacción y la evaluación en línea (ej., Moodle, Blackboard)',
    },
    {
      termino: 'Procrastinación',
      significado:
        'Acción de posponer tareas importantes, lo que afecta negativamente la productividad en entornos virtuales',
    },
    {
      termino: 'Técnica del Pomodoro',
      significado:
        'Método de gestión del tiempo que divide el trabajo en intervalos de 25 minutos, seguidos de breves descansos, para mejorar la concentración',
    },
    {
      termino: 'Sincrónico',
      significado:
        'Modalidad de aprendizaje en la que estudiantes y profesores interactúan en tiempo real a través de herramientas como videoconferencias',
    },
    {
      termino: 'Slack',
      significado:
        'Plataforma de mensajería diseñada para equipos, que facilita la comunicación mediante la creación de canales temáticos y organizados',
    },
    {
      termino: 'Trello',
      significado:
        'Herramienta de gestión de proyectos basada en el método Kanban, que permite organizar y visualizar tareas mediante tableros',
    },
    {
      termino: 'Videoconferencia',
      significado:
        'Herramienta que permite la interacción en tiempo real entre personas mediante video y audio, simulando una reunión presencial en entornos virtuales',
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
