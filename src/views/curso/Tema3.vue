<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Competencias de autoformación y autogestión del aprendizaje'" :subTitulo="'3. Evaluación del aprendizaje personal: autoevaluación y retroalimentación'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.tema-3.pb-0
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-verde.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-57.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Evaluar el propio proceso de aprendizaje es crucial para asegurar que se avanza hacia las metas y corregir posibles errores en el camino. La autoevaluación y la retroalimentación ofrecen una oportunidad para reflexionar sobre los progresos, identificar áreas de mejora y fortalecer las capacidades (Herrera, 2015). A continuación, se presentan estrategias clave para una evaluación efectiva del aprendizaje personal.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')  
    
    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Importancia de la evaluación personal en el proceso de aprendizaje

    p.mb-4 Evaluar el aprendizaje no solo permite verificar el logro de objetivos, sino también hacer ajustes en el enfoque y metodología para mejorar el rendimiento.
    
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Desarrollo de habilidades metacognitivas")
            p La autoevaluación fomenta la metacognición, permitiendo reflexionar sobre las estrategias de aprendizaje, ajustando hábitos y mejorando el proceso de manera autónoma.
          .div(titulo="Identificación de logros y áreas de mejora")
            p Evaluar el progreso ayuda a reconocer logros y áreas de mejora, facilitando ajustes en las metas y evitando sorpresas en evaluaciones formales.
          .div(titulo="Aumento de la autonomía")
            p Al evaluar el propio aprendizaje, se desarrolla autonomía y autorregulación, esenciales en el ámbito académico y profesional.

    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Técnicas de autoevaluación
    p.mb-4

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Autoevaluaciones escritas
              p Consiste en reflexionar sobre el desempeño y documentarlo por escrito, permitiendo analizar en profundidad el proceso de aprendizaje y estructurar los pensamientos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Listas de verificación
              p Las checklists permiten un seguimiento detallado de objetivos y metas específicas, evaluando el progreso de forma clara (Covey, 2016).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Portafolio de aprendizaje
              p Un portafolio recopila trabajos y proyectos, mostrando el progreso a lo largo del tiempo y aumentando la motivación al observar los logros acumulativos (Gibbs, 2015).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Preguntas de reflexión
              p Formular preguntas como "¿Qué se ha aprendido esta semana?" o "¿Qué se puede hacer de manera diferente?" ayuda a pensar críticamente sobre el aprendizaje (Bautista, 2015).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')

    p.mb-4 Estas técnicas de autoevaluación promueven la reflexión y el análisis crítico, facilitando un aprendizaje más profundo y una mejora continua en el proceso autónomo de aprendizaje.

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 ¿Sabía que la retroalimentación es fundamental para mejorar el aprendizaje? 
          p.mb-5 Le invitamos a leer este documento <strong>Retroalimentación su importancia y cómo buscarla</strong>, y descubrir cómo el seguimiento continuo y el reconocimiento de logros pueden impulsar su motivación y apoyar su progreso académico. En el documento se exploran distintos tipos de retroalimentación, como la formativa, sumativa, correctiva y de pares, que ofrecen perspectivas valiosas sobre el desempeño. 
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Retroalimentación su importancia y cómo buscarla.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Retroalimentación su importancia y cómo buscarla
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul.mb-5
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://hotmart.com/es/blog/hacer-autoevaluacion") hotmart (2022). ¿Cómo hacer una autoevaluación? [Blog]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/HaqJzSySgXA") Filosofies (2022). Autoevaluación y coevaluación de una situación de aprendizaje [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Entornos Virtuales de Aprendizaje',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones describe una función básica de un LMS?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hacer pedidos en línea', esCorrecta: false },
            {
              id: 'b',
              texto: 'Publicar contenido y calificar tareas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir videos de entretenimiento',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Descargar música', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la mejor forma de organizar los archivos en un LMS para facilitar el acceso?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Subir todos los archivos sin orden específico',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear carpetas específicas por tema o semana',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear una sola carpeta general para todos los archivos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disponer carpetas sin nombre',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de estas es una ventaja de usar herramientas de videoconferencia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa el aislamiento del estudiante',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita la interacción y comunicación en tiempo real',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Compartir archivos', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mejora el proceso de enseñanza',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la etiqueta apropiada en una videoconferencia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hablar sin activar el micrófono',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Esperar el turno antes de hablar',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Participar sin previa autorización',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ingresar a la videoconferencia y de una vez hablar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué acción es adecuada si no deseas que lo interrumpan durante una clase en videoconferencia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorar a los compañeros', esCorrecta: false },
            {
              id: 'b',
              texto: 'Silenciar tu micrófono cuando no hablas',
              esCorrecta: true,
            },
            { id: 'c', texto: 'No ceder nunca la palabra', esCorrecta: false },
            {
              id: 'd',
              texto: 'Dejar activado el microfono',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
