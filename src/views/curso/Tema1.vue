<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1. Introducción al trabajo en modalidad virtual'" :subTitulo="'1. Introducción al aprendizaje en línea'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .d-none.d-xl-block.col-4.px-0()
        img.h-100(src='@/assets/curso/unidad1/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-claro.p-4
        p.mb-0(data-aos="fade-up") El aprendizaje en línea ha revolucionado el acceso a la educación en el siglo XXI. Se define como el uso de tecnologías digitales e internet para impartir conocimientos y habilidades, permitiendo a los estudiantes superar barreras geográficas y temporales. Aunque este concepto no es nuevo, sus raíces se remontan a finales del siglo XIX con los cursos por correspondencia. Sin embargo, la verdadera transformación llegó con la informática y el internet en la segunda mitad del siglo XX. A partir de la década de 1990, con la creación de los primeros entornos virtuales de aprendizaje, el e-learning se consolidó y se diversificó. Como menciona Torres Quiñones (2015), "el aprendizaje a distancia ha evolucionado significativamente, desde los cursos por correspondencia del siglo XIX hasta la modalidad de e-learning consolidada en la década de 1990".

    .row.mb-5.justify-content-center.align-items-stretch
      h2.mb-5 Impacto del <em>e-learning</em> en la educación contemporánea
      p.mb-4.pb-2 En la actualidad, el e-learning es fundamental tanto en la educación formal como en la informal. Universidades, empresas y organizaciones no gubernamentales lo han adoptado para ofrecer programas académicos, capacitaciones y formaciones corporativas. Plataformas como <strong>Coursera, edX</strong> y <strong>Udemy</strong> han democratizado el conocimiento, proporcionando acceso a cursos de alta calidad para millones de personas en todo el mundo.

      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.justify-content-center.flex-column.p-4.h-100
          img.mx-auto(src='@/assets/curso/unidad1/img-10.png', style="width: 246px")
      
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.justify-content-center.flex-column.p-4.h-100
          img.mx-auto(src='@/assets/curso/unidad1/img-11.png', style="width: 209px")
      .col-10.col-md-8.col-lg-6.col-xl-4(data-aos="fade-left")
        .custom-image-card.d-flex.justify-content-center.flex-column.p-4.h-100
          img.mx-auto(src='@/assets/curso/unidad1/img-12.png', style="width: 187px")

    .row.mb-4.pb-2
      h2 Flexibilidad y personalización: las claves del éxito del <em>e-learning</em>

    .row.mb-5
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-amarillo.p-4
        p.mb-0(data-aos="fade-up") La relevancia del <em>e-learning</em> radica en su capacidad de adaptarse a las necesidades de los estudiantes modernos. Este modelo permite <strong>personalizar el aprendizaje</strong>, ofreciendo <strong>flexibilidad y accesibilidad</strong>, lo que lo hace ideal para aquellos que buscan equilibrar sus estudios con otras responsabilidades. Además, se ha demostrado que el aprendizaje en línea puede ser tan eficaz, e incluso superior, en ciertos contextos educativos, facilitando el acceso a la educación de calidad y ajustándose a las demandas de la sociedad actual.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad1/img-13.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Características del aprendizaje en línea

    p.mb-4 El <em>e-learning</em> se caracteriza por su adaptabilidad y la capacidad de integrar recursos multimedia y herramientas tecnológicas. A continuación, se describen las principales características de este modelo educativo:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width 
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Flexibilidad 
              p El aprendizaje en línea ofrece la ventaja de acceder a los contenidos en el momento y lugar preferido, ideal para quienes tienen compromisos laborales o personales que dificultan la asistencia a clases presenciales. Bates (2015) menciona que "la flexibilidad del aprendizaje en línea permite que los estudiantes organicen su tiempo de acuerdo con sus necesidades". Además, Moore y Kearsley (2012) indican que "<strong>el aprendizaje en línea elimina barreras físicas y geográficas</strong>".
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/unidad1/img-14.svg', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Personalización
              p Este aspecto del e-learning permite a los estudiantes avanzar a su propio ritmo, lo que mejora la asimilación de conocimientos y reduce la presión. Moore y Kearsley (2012) destacan este punto, mientras que Bates (2015) subraya que los recursos multimedia "facilitan la comprensión de conceptos complejos y promueven la participación activa".
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-15.svg', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Accesibilidad
              p El e-learning es inclusivo y accesible para personas de todo el mundo, incluyendo quienes residen en áreas rurales, tienen dificultades de movilidad o viven en países con limitaciones educativas. Esto permite acceder a una formación de calidad sin la necesidad de desplazamientos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-16.svg', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Diversidad de recursos 
              p La integración de recursos multimedia, como videos, simulaciones, cuestionarios interactivos y foros de discusión, enriquece el aprendizaje. Esta variedad de herramientas facilita la comprensión de conceptos complejos y fomenta la participación activa de los estudiantes.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-17.svg', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Autonomía del estudiante
              p El <em>e-learning</em> promueve la autoorganización y la responsabilidad de cada estudiante en su proceso educativo, desarrollando habilidades de autogestión y disciplina. Sin embargo, algunos pueden sentirse desorientados o abrumados sin la orientación constante de un docente.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-18.svg', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Modalidades del aprendizaje en línea

    p.mb-4 Existen diversas formas de estructurar el aprendizaje en línea, cada una con ventajas y desventajas particulares. A continuación, se describen las modalidades más comunes:

    .row.mb-5
      TabsC.color-primario
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Asincrónico")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
              figure
                img(src='@/assets/curso/unidad1/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
              h4 Asincrónico
              p En este formato, los estudiantes no necesitan estar conectados en tiempo real, lo que les permite acceder a los materiales de estudio, realizar tareas y participar en foros de discusión en el momento que les sea conveniente. Esto lo hace ideal para personas con horarios irregulares. Salmon (2013) destaca que "esta modalidad es ideal para personas con horarios irregulares, permitiéndoles estudiar a su propio ritmo".
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Sincrónico")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Sincrónico
              p Requiere la participación simultánea de estudiantes y profesores, generalmente a través de videoconferencias. Aunque es un formato más estructurado, facilita una interacción más directa y rápida entre los participantes. Salmon (2013) menciona que "el aprendizaje sincrónico facilita una comunicación inmediata y fluida, aunque con menos flexibilidad".
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Modelos híbridos")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-21.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Modelos híbridos
              p Combinan sesiones en línea con actividades presenciales, ofreciendo lo mejor de ambos enfoques. La flexibilidad del e-learning se complementa con la interacción cara a cara, siendo adecuado para estudios que requieren trabajo práctico o evaluaciones presenciales.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="MOOCS")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-22.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 MOOCS
              p Los Massive Open Online Courses (MOOCS) son cursos en línea abiertos a un gran número de participantes. Plataformas como Coursera y edX han popularizado esta modalidad, permitiendo que miles de personas accedan a cursos ofrecidos por universidades y expertos de renombre. Cenich (2006) afirma que "esta modalidad democratiza la educación a nivel global".

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Interacción en entornos de aprendizaje en línea
    
    p.mb-5 Uno de los principales desafíos del aprendizaje en línea es mantener una interacción significativa entre los participantes. A continuación, se describen las formas más relevantes de interacción en los entornos de e-learning:
    
    .row.mb-5.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Comunicación bidireccional")
            p Las plataformas de e-learning facilitan la comunicación entre estudiantes y docentes mediante foros de discusión, mensajería interna y correo electrónico. Esta interacción permite resolver dudas, aclarar conceptos y fomentar el debate académico. Bautista Pérez, Forés Miravalles y Borges Sáiz (2016) mencionan la importancia de "mecanismos para fomentar la interacción y la comunicación bidireccional".
          .div(titulo="Uso de foros, chats y videollamadas")
            p Los foros de discusión brindan a los estudiantes la oportunidad de reflexionar y compartir ideas a su propio ritmo, mientras que los chats y las videollamadas permiten interacciones más inmediatas. Esto contribuye a la creación de una comunidad de aprendizaje activa y conectada.
          .div(titulo="Colaboración virtual")
            p Herramientas como Google Docs, Trello y Slack permiten el trabajo colaborativo en proyectos y tareas, replicando el trabajo en equipo presencial y desarrollando habilidades de cooperación y liderazgo en un entorno digital. Bates (2015) señala que "estas herramientas fomentan el trabajo colaborativo en entornos digitales".
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad1/img-23.png', alt='Texto que describa la imagen')
    
    #t_1_4.titulo-segundo
      div.d-flex
        span.me-3 1.4  
        h2 Tecnologías para el aprendizaje en línea

    p.mb-5 El éxito del aprendizaje en línea depende en gran medida de las plataformas y herramientas tecnológicas disponibles. Entre las tecnologías más utilizadas, se destacan:

    .row.mb-5.mb-4
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad1/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Plataformas de gestión del aprendizaje (LMS)")
            p Los sistemas de gestión del aprendizaje, como <strong>Moodle, Blackboard y Canvas</strong>, proporcionan un entorno integral para la educación en línea. Permiten a los estudiantes acceder a los contenidos del curso, interactuar con sus compañeros y realizar evaluaciones de manera centralizada. Moore y Kearsley (2012) mencionan que "los LMS ofrecen un entorno centralizado para el acceso a materiales educativos, la interacción y la evaluación".
          .div(titulo="Herramientas de videoconferencia")
            p Aplicaciones como <strong>Zoom, Google Meet y Microsoft Teams</strong> han transformado la enseñanza sincrónica, facilitando clases en vivo, tutorías y seminarios web. Estas herramientas permiten la interacción en tiempo real, fundamental para el aprendizaje colaborativo y la comunicación directa entre docentes y estudiantes.
          .div(titulo="Herramientas interactivas")
            p La integración de aplicaciones como <strong>Kahoot, Quizizz y Mentimeter</strong> aporta dinamismo a las clases en línea, incentivando la participación de los estudiantes y facilitando la evaluación a través de cuestionarios y juegos educativos. Estas herramientas hacen el proceso de aprendizaje más interactivo y atractivo, promoviendo un mayor compromiso estudiantil.

    .row.bg-fondo-3.bg-full-width
      div.px-5.pb-md-3.py-4

        #t_1_5.titulo-segundo
          div.d-flex
            span.me-3 1.5  
            h2 Ventajas del aprendizaje en línea

        p.mb-4 El aprendizaje en línea ofrece múltiples ventajas que lo convierten en una opción atractiva para diversos tipos de estudiantes y contextos educativos:

        .row.mb-5
          TabsC.color-primario
            .tabs-content.border.px-4.p-md-5.py-3(titulo="Autonomía")
              .row
                .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-right")
                  figure
                    img(src='@/assets/curso/unidad1/img-25.png', alt='Texto que describa la imagen')
                .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="flip-left")
                  h4 Autonomía
                  p El e-learning promueve la autodisciplina, ya que los estudiantes son responsables de gestionar su tiempo y completar las tareas sin supervisión constante. Esto les permite desarrollar habilidades de organización y autogestión, fundamentales para su éxito académico.
            .tabs-content.border.px-4.p-md-5.py-3(titulo="Reducción de costos")
              .row
                .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
                  figure
                    img(src='@/assets/curso/unidad1/img-26.png', alt='Texto que describa la imagen')
                .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
                  h4 Reducción de costos
                  p Los cursos en línea suelen ser más accesibles económicamente que los presenciales, además de que los estudiantes ahorran en gastos de transporte y materiales. Pedraza (2009) destaca que "el e-learning permite que personas de todo el mundo accedan a la educación sin necesidad de desplazarse". Bates (2015) resalta que "los cursos en línea suelen ser más asequibles, y los estudiantes ahorran en transporte y materiales".
            .tabs-content.border.px-4.p-md-5.py-3(titulo="Acceso a nuevos contenidos")
              .row
                .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
                  figure
                    img(src='@/assets/curso/unidad1/img-27.png', alt='Texto que describa la imagen')
                .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
                  h4 Acceso a nuevos contenidos
                  p Las plataformas en línea facilitan la constante actualización de los materiales, garantizando que los estudiantes accedan a la información más reciente y relevante en sus áreas de estudio. Esto asegura que los aprendizajes se mantengan actualizados y alineados con las tendencias y avances del campo educativo.

    #t_1_6.titulo-segundo
      div.d-flex
        span.me-3 1.6  
        h2 Desafíos del aprendizaje en línea
    
    p.mb-4 A pesar de sus numerosas ventajas, el aprendizaje en línea presenta desafíos que deben abordarse para asegurar su eficacia:

    .row.bg-fondo-2.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-5.justify-content-center.align-items-stretch
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="zoom-in-right")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4.mb-xl-5(src='@/assets/curso/unidad1/img-28.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Gestión del tiempo
              p.px-1.text-small.mb-0.d-flex.text-center La flexibilidad del e-learning puede resultar un arma de doble filo. Los estudiantes que no administran bien su tiempo pueden enfrentar retrasos o incumplir fechas de entrega, lo que impacta negativamente en su rendimiento académico. La autodisciplina se convierte en un factor crucial para mantener el ritmo de estudio adecuado. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="zoom-in-up")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4.mb-xl-5(src='@/assets/curso/unidad1/img-29.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Falta de interacción física
              p.px-1.text-small.mb-0.d-flex.text-center La ausencia de contacto presencial puede generar una sensación de aislamiento en algunos estudiantes. Aunque las herramientas tecnológicas facilitan la comunicación, la interacción cara a cara sigue siendo valiosa para muchos aspectos de la educación, como la construcción de relaciones y el desarrollo de habilidades sociales.
          .col-10.col-md-8.col-lg-6.col-xl-4(data-aos="zoom-in-left")
            .custom-image-card.d-flex.justify-content-center.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4.mb-xl-5(src='@/assets/curso/unidad1/img-30.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Brecha digital
              p.px-1.text-small.mb-0.d-flex.text-center No todos los estudiantes cuentan con una conexión a internet de calidad o con dispositivos adecuados para participar en el aprendizaje en línea. Esta desigualdad tecnológica puede limitar el acceso equitativo a la educación, acentuando las diferencias socioeconómicas y limitando la inclusión de todos los estudiantes en el entorno virtual. 

        #t_1_7.titulo-segundo
          div.d-flex
            span.me-3 1.7  
            h2 Tendencias actuales y futuras en el aprendizaje en línea

    p.mb-4 El futuro del aprendizaje en línea se caracteriza por la incorporación de nuevas tecnologías y enfoques innovadores que buscan enriquecer la experiencia educativa (Quijada, 2014). Entre estas tendencias, destacan:
    
    .row.position-relative.py-4.bg-fondo-1.bg-full-width 
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Gamificación 
              p Este enfoque incorpora elementos de juegos, como la obtención de puntos, medallas y recompensas, para motivar a los estudiantes y hacer el aprendizaje más entretenido. Al introducir dinámicas lúdicas, se incrementa la participación y el compromiso, transformando el proceso educativo en una experiencia más atractiva.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad1/img-31.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Inteligencia artificial (IA)
              p La IA se está integrando en las plataformas de aprendizaje para personalizar la experiencia educativa. Los algoritmos analizan el progreso de los estudiantes y recomiendan contenidos adaptados a sus necesidades. Sangrà et al. (2019) señalan que "la IA personaliza el aprendizaje según las necesidades de cada estudiante".
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-32.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Microlearning y aprendizaje móvil
              p El microlearning ofrece contenidos en pequeñas dosis, permitiendo un aprendizaje rápido y eficiente. Se adapta bien al uso de dispositivos móviles, facilitando el acceso al conocimiento desde cualquier lugar y en cualquier momento, y ajustándose a la necesidad de flexibilidad en la educación actual.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-33.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
