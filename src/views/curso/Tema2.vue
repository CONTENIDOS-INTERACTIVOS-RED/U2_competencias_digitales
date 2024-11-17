<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1. Introducción al trabajo en modalidad virtual'" :subTitulo="'2. Introducción al aprendizaje en línea'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
          p.mb-4.pb-3 Las herramientas de videoconferencia son esenciales en entornos virtuales, ya que permiten la interacción cara a cara entre los participantes, emulando un entorno presencial. Estas herramientas ofrecen diversas funcionalidades que buscan garantizar una experiencia de uso sencilla y eficaz:
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.me-3(src='@/assets/curso/unidad1/img-34.svg', style="width: 68px")
              div
                p.text-bold.mb-2 Videollamadas grupales 
                p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Facilitan la realización de reuniones o clases virtuales con múltiples participantes, promoviendo una interacción directa y dinámica entre ellos.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-left")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.me-3(src='@/assets/curso/unidad1/img-35.svg', style="width: 68px")  
              div
                p.text-bold.mb-2 Grabación de sesiones
                p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Permiten registrar las reuniones para revisarlas posteriormente, lo cual es especialmente útil para estudiantes o empleados que no pueden asistir en tiempo real.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-right")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.me-3(src='@/assets/curso/unidad1/img-36.svg', style="width: 68px")
              div
                p.text-bold.mb-2 Compartición de pantalla
                p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Es una función clave para realizar presentaciones, explicar contenidos o compartir recursos de manera visual con los participantes.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-left")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.me-3(src='@/assets/curso/unidad1/img-37.svg', style="width: 68px")
              div
                p.text-bold.mb-2 Chat en vivo
                p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center  Proporciona un espacio paralelo a la videollamada donde los participantes pueden escribir preguntas o comentarios, favoreciendo la interacción y la participación.
    
        p.mb-5 Entre las plataformas de videoconferencia más utilizadas se encuentran:
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad1/img-38.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Zoom")
            p Conocida por su facilidad de uso y versatilidad, permite realizar reuniones con hasta 100 participantes en su versión gratuita.
          .div(titulo="Microsoft Teams")
            p Integrada en el ecosistema de Office 365, es ideal para el trabajo colaborativo, combinando la videoconferencia con herramientas de gestión de proyectos y documentos.
          .div(titulo="Google Meet")
            p Ofrece reuniones sin límite de tiempo para usuarios de G Suite, con una integración fluida con otras herramientas de Google.

    .row.mb-4
      p Para asegurar una experiencia óptima en videoconferencias, es crucial disponer de una conexión a internet estable, un dispositivo con cámara y micrófono, y cumplir con los requisitos técnicos de cada plataforma. <strong>Zoom, Microsoft Teams y Google Meet</strong> son ejemplos destacados de herramientas que "permiten la comunicación en tiempo real con diversas funcionalidades", adaptándose a diferentes necesidades y contextos educativos o laborales.
      
    .row.bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4

        #t_2_1.titulo-segundo
          div.d-flex
            span.me-3 2.1  
            h2 Plataformas de gestión del aprendizaje (LMS)
        
        p.mb-4 Un <em>Learning Management System</em> (LMS) es una plataforma que organiza y gestiona los contenidos educativos de manera centralizada, facilitando tanto el acceso a los materiales como la gestión de los estudiantes. Según O'Driscoll y Kaye (2019), "los LMS son esenciales para la modernización de la educación, brindando acceso a contenido educativo de manera eficiente y organizada".
        p.text-bold Las características de un LMS son: 

        .row.mb-5.justify-content-center.img-infografica.px-0.mx-0
          ImagenInfografica.color-acento-contenido.px-0
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/unidad1/img-39.png', alt='Texto que describa la imagen')

            .tarjeta.bg-white.p-4(x="27.5%" y="22%" numero="+")
              .h5.mb-3.fs-18px Gestión de cursos
              p Permite a los docentes cargar materiales, asignar tareas y crear evaluaciones desde un único lugar, centralizando el proceso educativo y facilitando la organización de los contenidos.
            .tarjeta.bg-white.p-4(x="69.5%" y="22%" numero="+")
              .h5.mb-3.fs-18px Evaluaciones en línea
              p Ofrecen la posibilidad de administrar exámenes, quizzes y ejercicios interactivos directamente desde la plataforma, simplificando el proceso de evaluación y permitiendo una retroalimentación más rápida y estructurada.
            .tarjeta.bg-white.p-4(x="27.5%" y="81%" numero="+")
              .h5.mb-3.fs-18px Seguimiento del progreso
              p Los LMS facilitan el monitoreo del avance de los estudiantes, proporcionando informes detallados sobre su desempeño y progreso, lo que ayuda a identificar áreas de mejora y ajustar el enfoque pedagógico.
            .tarjeta.bg-white.p-4(x="69.5%" y="81%" numero="+")
              .h5.mb-3.fs-18px Foros y mensajería interna
              p Estas herramientas mejoran la interacción entre estudiantes y docentes, promoviendo un entorno de aprendizaje colaborativo y enriquecedor, donde se pueden discutir dudas y compartir conocimientos de manera eficiente.

        .row.mb-5.justify-content-center.align-items-stretch.card_hover
          p.text-bold Los ejemplos de LMS: 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-40.png', style="width: 80px")
              p.text-bold.mb-4.text-center Moodle
              p.px-4.text-small.mb-0.d-flex.text-center Plataforma de código abierto muy popular en el ámbito educativo, valorada por su flexibilidad y capacidad de personalización.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-down")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-41.png', style="width: 80px")
              p.text-bold.mb-4.text-center Blackboard
              p.px-4.text-small.mb-0.d-flex.text-center Ofrece funcionalidades avanzadas para la gestión educativa, incluyendo análisis de datos y herramientas de accesibilidad.
          .col-10.col-md-8.col-lg-6.col-xl-4(data-aos="fade-left")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-42.png', style="width: 80px")
              p.text-bold.mb-4.text-center Canvas
              p.px-3.text-small.mb-0.d-flex.text-center Se destaca por su diseño moderno e intuitivo, brindando una experiencia de usuario fluida y permitiendo una fácil integración con otras herramientas educativas.
    .row.mb-3
      h2 Beneficios del uso de LMS
    .row.mb-5
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-morado-claro.p-4
        p.mb-0(data-aos="fade-up") El uso de un LMS facilita la organización del proceso de aprendizaje, centralizando el acceso a los materiales, promoviendo una comunicación constante entre estudiantes y docentes, y permitiendo un seguimiento detallado del progreso. Esto se traduce en una experiencia educativa más eficiente y adaptada a las necesidades del aprendizaje moderno.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad1/img-43.png', alt='Texto que describa la imagen')
    
    .row.bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4
        
        #t_2_2.titulo-segundo
          div.d-flex
            span.me-3 2.2  
            h2 Herramientas de comunicación y colaboración

        p La comunicación constante y efectiva es esencial en cualquier entorno virtual. Para facilitar la interacción y el trabajo colaborativo, existen diversas herramientas diseñadas específicamente para este propósito:
        p.text-bold.mb-4.pb-2 Las aplicaciones de mensajería instantánea son:
        .row.mb-5
          .col-10.col-md-6.col-lg-4.mb-4.mb-md-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px.bg-ppal-claro
              img.mb-4(src='@/assets/curso/unidad1/img-44.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center Slack
                p.text-small.px-4.text-center.pb-2 Plataforma de mensajería orientada a equipos, que permite crear canales organizados por temas y proyectos, facilitando una comunicación estructurada y eficiente.
          .col-10.col-md-6.col-lg-4.mb-4.mb-md-0.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px.bg-ppal-claro
              img.mb-4(src='@/assets/curso/unidad1/img-45.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center Microsoft Teams
                p.text-small.px-4.text-center.pb-2 Además de ser una herramienta de videoconferencia, ofrece mensajería y colaboración en tiempo real, lo que la hace adecuada para la gestión de proyectos y la comunicación constante (López, 2020).
          .col-10.col-md-6.col-lg-4.mb-4.mb-md-0.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px.bg-ppal-claro
              img.mb-4(src='@/assets/curso/unidad1/img-46.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center WhatsApp y Telegram 
                p.text-small.px-4.text-center.pb-2 Aunque son más informales, se utilizan para la comunicación rápida en grupos de trabajo o estudio, siendo útiles para intercambios ágiles y coordinar actividades (Martínez, 2021).
    .row
      h2 Herramientas de gestión de proyectos
      p Las herramientas de gestión de proyectos ayudan a organizar el trabajo en equipo, asignar tareas y mantener un control de los plazos:

  
        .row.mb-4
          TabsC.color-primario
            .tabs-content.border.px-4.p-md-5.py-3(titulo="Trello")
              .row
                .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/unidad1/img-47.png', alt='Texto que describa la imagen')
                .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
                  h4 Trello
                  p Basada en el método Kanban, esta herramienta permite visualizar tareas a través de tableros, siendo ideal para la gestión de proyectos colaborativos.
            .tabs-content.border.px-4.p-md-5.py-3(titulo="Asana")
              .row
                .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
                  figure
                    img(src='@/assets/curso/unidad1/img-48.png', alt='Texto que describa la imagen')
                .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
                  h4 Asana
                  p Facilita la asignación de tareas, la definición de metas y el seguimiento del progreso del equipo, lo que optimiza la organización de las actividades (Pedraza, 2009).
            .tabs-content.border.px-4.p-md-5.py-3(titulo="Notion")
              .row
                .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
                  figure
                    img(src='@/assets/curso/unidad1/img-49.png', alt='Texto que describa la imagen')
                .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
                  h4 Notion
                  p Una herramienta integral que combina notas, tareas, bases de datos y calendarios en un único espacio colaborativo, lo que la hace muy versátil (Bautista et al., 2016).
    .row.bg-fondo-4.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-4
          h2 Aplicaciones de almacenamiento en la nube
          p El almacenamiento en la nube facilita la colaboración en tiempo real, permitiendo compartir archivos sin necesidad de enviarlos por correo.
          p.mb-0.text-bold A continuación se describen algunas de las herramientas de almacenamiento en la nube más utilizadas en la actualidad:
        .row.mb-5.justify-content-center.align-items-stretch
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="zoom-in-right")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-50.png', style="width: 80px")
              p.text-bold.mb-4.text-center Google Drive
              p.px-2.text-small.mb-0.d-flex.text-center Proporciona almacenamiento gratuito y herramientas como Google Docs, Sheets y Slides, que facilitan la creación y edición de documentos en línea.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="zoom-in-up")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-51.png', style="width: 80px")
              p.text-bold.mb-4.text-center Dropbox
              p.px-2.text-small.mb-0.d-flex.text-center Reconocido por su simplicidad para compartir y sincronizar archivos en diferentes dispositivos, lo que facilita la colaboración.
          .col-10.col-md-8.col-lg-6.col-xl-4(data-aos="zoom-in-left")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-52.png', style="width: 80px")
              p.text-bold.mb-4.text-center OneDrive
              p.px-2.text-small.mb-0.d-flex.text-center Integrado con Microsoft Office, permite trabajar de manera colaborativa en documentos y facilita la sincronización de archivos en la nube.
    .row.mb-5
      p Estas herramientas son fundamentales para mantener una comunicación efectiva y organizar el trabajo en entornos virtuales, permitiendo una colaboración fluida y eficiente.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3
        h2 Herramientas para la creación de contenido digital
    
    p La creación de contenido digital es fundamental para estudiantes, docentes y profesionales que necesitan transmitir ideas y conocimientos de manera clara y visual. A continuación, se destacan algunas de las herramientas más útiles en este ámbito.
    p.text-bold.mb-4.pb-2 Las herramientas de edición de documentos son: 

    .row.mb-5.bg-ppal-azul-claro
      .d-none.d-md-flex.col-6.col-md-4.col-lg-3.p-3.p-md-4.p-lg-5.mx-auto.justify-content-center.border-right-gray(data-aos="fade-right")
        img.my-auto(:style="{'max-width': '115px  '}" src='@/assets/curso/unidad1/img-53.png', alt='Texto que describa la imagen')
      .col-12.col-md-8.col-lg-9.d-flex.flex-column.justify-content-center.py-4.py-lg-5.ps-4.ps-lg-5
        div.d-flex.mb-4(data-aos="zoom-in-up")
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad1/arrow-right.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Google Docs</strong>. Permite la creación y edición de documentos en tiempo real con varios colaboradores, con la ventaja de guardarse automáticamente en la nube, lo que facilita el acceso desde cualquier dispositivo. 
        div.d-flex.mb-4(data-aos="zoom-in-up")
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad1/arrow-right.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Microsoft Word en línea</strong>. Una alternativa a Google Docs que se integra directamente con Office 365 y OneDrive, proporcionando un entorno familiar para los usuarios de Microsoft. 
        div.d-flex(data-aos="zoom-in-up")
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad1/arrow-right.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Notion</strong>. Ofrece una amplia variedad de plantillas y herramientas para organizar ideas, escribir notas, gestionar proyectos y crear bases de datos colaborativas, adaptándose a diferentes necesidades de organización.
    
    p.text-bold Las herramientas para presentaciones y gráficos son: 
    .row.mb-5.bg-ppal-azul-claro
      .col-12.col-md-8.col-lg-9.d-flex.flex-column.justify-content-center.py-4.py-lg-5.ps-4.ps-lg-5
        div.d-flex.mb-4(data-aos="zoom-in-up")
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad1/arrow-right.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>PowerPoint</strong>. La herramienta más conocida para la creación de presentaciones profesionales, que en su versión en línea también permite la colaboración en tiempo real, ideal para proyectos de equipo. 
        div.d-flex.mb-4(data-aos="zoom-in-up")
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad1/arrow-right.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Google Slides</strong>. Alternativa gratuita a PowerPoint que permite la creación de presentaciones colaborativas directamente desde la nube, facilitando el trabajo en conjunto.
        div.d-flex(data-aos="zoom-in-up")
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad1/arrow-right.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Canva</strong>. Una herramienta intuitiva que facilita la creación de presentaciones y gráficos atractivos, sin necesidad de conocimientos avanzados de diseño, lo que la hace accesible para cualquier usuario.
      .d-none.d-md-flex.col-6.col-md-4.col-lg-3.p-3.p-md-4.p-lg-5.mx-auto.justify-content-center.border-left-gray(data-aos="zoom-in-left")
        img.my-auto(:style="{'max-width': '115px  '}" src='@/assets/curso/unidad1/img-54.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      p.text-bold Las herramientas para la creación de videos y edición multimedia son: 

    .row.mb-5
      .col-12.col-xl-7.px-0.d-flex.flex-column.h-100
       .row.mx-0(data-aos="fade-down")
        .col-4.px-0.border-bottom-app-1
          p.mb-0.text-bold.p-4.bg-ppal.h-100 Loom
        .col-8.d-flex.align-items-center.border-bottom-app-1.bg-oscuro.text-white 
          p.mb-0.p-4.py-xxl-4.mx-xxl-3 Ideal para grabar y compartir videos cortos, siendo una excelente opción para crear explicaciones o tutoriales de forma rápida y sencilla.
       .row.mx-0(data-aos="fade-right")
        .col-4.px-0.border-bottom-app-1 
          p.mb-0.text-bold.p-4.bg-ppal.h-100 OBS Studio  
        .col-8.d-flex.align-items-center.border-bottom-app-1.bg-oscuro.text-white  
          p.mb-0.p-4.py-xxl-4.mx-xxl-3 Software gratuito que permite grabar la pantalla y realizar transmisiones en vivo, siendo muy popular entre creadores de contenido y educadores que necesitan compartir sus pantallas en tiempo real.
       .row.mx-0(data-aos="fade-up")
        .col-4.px-0
          p.mb-0.text-bold.p-4.bg-ppal.h-100 Camtasia   
        .col-8.d-flex.align-items-center.bg-oscuro.text-white 
          p.mb-0.p-4.py-xxl-4.mx-xxl-3 Un editor de video potente y fácil de usar, diseñado específicamente para la creación de videos educativos y tutoriales, con funciones avanzadas que permiten editar y mejorar la calidad del contenido multimedia.
      .d-none.d-xl-block.col-5.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad1/img-55.png', alt='Texto que describa la imagen')
    
    .row.mb-0
      p Estas herramientas permiten a los usuarios crear contenidos visuales y educativos de forma colaborativa y eficiente, contribuyendo a una mejor comunicación de ideas en el entorno digital.

    .row.bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4

        #t_2_4.titulo-segundo
          div.d-flex
            span.me-3 2.4  
            h2 Herramientas de evaluación en línea

        .row.mb-4
          .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
            div.d-flex.align-items-start.bg-ppal-morado-oscuro.px-3.py-4.py-xxl-5.mb-auto
              img.me-3(style="width: 90px" src='@/assets/curso/unidad1/img-56.svg', alt='Texto que describa la imagen')
              p.pe-xl-3.fs-18px.mb-0(data-aos="fade-up") La evaluación es un aspecto crucial en el aprendizaje y el trabajo colaborativo en entornos virtuales. Existen diversas herramientas diseñadas para facilitar la creación y administración de exámenes, encuestas y evaluaciones formativas, lo que permite una mejor medición del progreso de los estudiantes y su comprensión de los contenidos. A continuación, se destacan algunas de estas herramientas:
          .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
            img.h-100(src='@/assets/curso/unidad1/img-57.png', alt='Texto que describa la imagen')  

          p.mt-4.mt-xl-0 Las herramientas de evaluación automática son: 
        .row.mb-5.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-58.png', style="width: 80px")
              p.text-bold.mb-4.text-center Google Forms 
              p.px-4.text-small.mb-0.d-flex.text-center Permite crear encuestas y cuestionarios con corrección automática, siendo una opción práctica para realizar evaluaciones rápidas y recopilar datos de manera eficiente.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-down")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-59.png', style="width: 80px")
              p.text-bold.mb-4.text-center Kahoot
              p.px-4.text-small.mb-0.d-flex.text-center Plataforma que convierte las evaluaciones en juegos interactivos, incentivando la participación de los estudiantes y haciendo el proceso de aprendizaje más entretenido y dinámico.
          .col-10.col-md-8.col-lg-6.col-xl-4(data-aos="fade-left")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad1/img-60.png', style="width: 80px")
              p.text-bold.mb-4.text-center Quizizz
              p.px-3.text-small.mb-0.d-flex.text-center Similar a Kahoot, ofrece quizzes interactivos que los estudiantes pueden realizar a su propio ritmo, proporcionando retroalimentación instantánea para mejorar la comprensión de los temas.
    .row.mb-5
      h2 Seguimiento del rendimiento
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-claro.p-4
        p.mb-0(data-aos="fade-up") Las plataformas de LMS, como <strong>Moodle y Blackboard</strong>, incluyen herramientas avanzadas para crear evaluaciones personalizadas. Además, permiten un análisis detallado del rendimiento de los estudiantes, ofreciendo informes sobre su progreso y ayudando a los docentes a identificar áreas de mejora.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad1/img-61.png', alt='Texto que describa la imagen')

    .row.mb-5
      h2 Evaluaciones colaborativas
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img.h-100(src='@/assets/curso/unidad1/img-62.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center.flex-column
        div.d-flex.align-items-start.bg-ppal-amarillo.px-3.py-4.mb-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad1/img-64.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px.mb-0(data-aos="fade-up") Herramientas como <strong>Google Docs y Microsoft Teams</strong> facilitan la creación de evaluaciones colaborativas, donde los estudiantes pueden trabajar en equipo para resolver problemas y completar tareas. Estas herramientas fomentan la cooperación y el desarrollo de habilidades de trabajo en grupo, esenciales en el aprendizaje en línea.
        p Estas herramientas permiten diversificar los métodos de evaluación en entornos virtuales, asegurando una experiencia de aprendizaje más completa y adaptada a las necesidades de los estudiantes.

    .row.bg-azul-1.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2 Aspectos éticos y de seguridad en el uso de herramientas virtuales
          p.mb-1 ¿Sabía que el uso de herramientas virtuales requiere atención a la ética y la seguridad? Proteger la privacidad, elegir plataformas seguras y usar contraseñas robustas es fundamental para evitar accesos no autorizados. Además, la ética digital, como respetar los derechos de autor y mantener la honestidad académica, garantiza un ambiente de aprendizaje respetuoso.
          p La seguridad en herramientas colaborativas también es clave, empleando medidas como cifrado de datos y autenticación de dos factores. ¡Los invitamos a profundizar en el documento Aspectos éticos y de seguridad en el uso de herramientas virtuales,  y descubrir cómo estas prácticas pueden mejorar su experiencia digital!
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" style="width: 340px" :href="obtenerLink('/downloads/Anexo_Aspectos_eticos_y_de_seguridad_en_el _uso_de _herramientas _virtuales.pdf')" target="_blank")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad1/img-65.svg', alt='Texto que describa la imagen')
            p.text-bold.fs-14px.my-auto.p-2 Anexo. Aspectos éticos y de seguridad en el uso de herramientas virtuales  

        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad1/img-63.png', alt='Texto que describa la imagen')



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
