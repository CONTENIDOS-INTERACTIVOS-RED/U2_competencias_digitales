<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(titulo="unidad 1. Introducción al trabajo en modalidad virtual" subTitulo="INTRODUCCIÓN")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5.pb-3
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
        div.d-flex.align-items-start.bg-ppal-amarillo.px-3.py-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad1/img-1.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px(data-aos="fade-up") En la era digital, el aprendizaje en línea se ha convertido en una modalidad educativa fundamental, transformando la forma en que adquirimos conocimientos y participamos en actividades académicas y profesionales. Sin embargo, esta modalidad presenta tanto oportunidades como desafíos. Para alcanzar el éxito en entornos virtuales, es esencial conocer sus características, dominar las herramientas de participación y gestionar adecuadamente el tiempo y las responsabilidades.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img.h-100(src='@/assets/curso/unidad1/img-2.png', alt='Texto que describa la imagen')  

    .row.mb-5
      TabsC.color-primario
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Características del aprendizaje en línea")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
              figure
                img(src='@/assets/curso/unidad1/img-6.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
              h4 Características del aprendizaje en línea
              p.fs-18px(data-aos="fade-up") El aprendizaje en línea se caracteriza por la flexibilidad y la autonomía, permitiendo a los estudiantes acceder a los contenidos desde cualquier lugar y a su propio ritmo. No obstante, esta flexibilidad también exige un alto grado de autodisciplina y organización personal, ya que la ausencia de una supervisión directa puede llevar a la procrastinación. Para aprovechar al máximo esta modalidad, es necesario desarrollar habilidades de autogestión y responsabilidad.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Microsoft Teams")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Microsoft Teams
              p.fs-18px En esta unidad, se profundizará en el uso de herramientas fundamentales para la participación en entornos virtuales. Las plataformas de videoconferencia, los sistemas de gestión del aprendizaje (LMS) y las aplicaciones colaborativas son esenciales para la interacción y el trabajo en equipo a distancia. El dominio de estas herramientas facilita una comunicación efectiva, la entrega de tareas y la colaboración en proyectos, aspectos clave para el aprendizaje en línea.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Gestión del tiempo y organización personal")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Gestión del tiempo y organización personal
              p.fs-18px La gestión del tiempo y la organización personal son vitales para el éxito en entornos virtuales. La capacidad de planificar tareas y establecer metas permite a los estudiantes mantener un equilibrio entre el estudio y otras responsabilidades. Evitar la procrastinación y cumplir con los plazos establecidos contribuye a un desempeño académico óptimo en un entorno que ofrece una supervisión mínima.
              
    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-ppal-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad1/img-9.svg', alt='Texto que describa la imagen')
          p.fs-18px.pe-xl-3.mb-0(data-aos="fade-left") Al completar esta unidad, los estudiantes estarán mejor preparados para enfrentar los retos de la educación virtual, utilizando de manera óptima las herramientas tecnológicas y adoptando estrategias que mejoren la gestión del tiempo y el esfuerzo. ¡Bienvenidos a este camino hacia la autonomía y el éxito en la modalidad virtual!

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass">
.tabs-content
  background-color: #F5F7FB
</style>
