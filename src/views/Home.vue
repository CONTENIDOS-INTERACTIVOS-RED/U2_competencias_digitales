<template lang="pug">
.curso-container.d-flex.flex-column.min-vh-100
  .container.d-flex.flex-column.justify-content-center.flex-grow-1.px-0.px-md-2.px-xl-4
    div.home-content.d-flex.flex-column-reverse.flex-lg-column.p-4.p-lg-0
      .bg-white
        .row.g-0
          //- Columna izquierda con imagen
          .d-none.d-xl-block.d-xl-flex.mb-4.mb-md-0.col-md-4.col-xl-6.imagen-section
            img.img-fluid.h-full(
              src="@/assets/portada/banner.png"
              alt="Estudiante virtual"
              style="max-width: 672px;"
            )
          .d-block.d-lg-none.mx-auto.mb-4.mb-lg-0.imagen-section
            img.img-fluid.h-full(
              src="@/assets/portada/banner-mobile.png"
              alt="Estudiante virtual"
              style="max-width: 672px;"
            )
          //- Columna derecha con información
          .col-xl-6.info-section
            .content-wrapper.px-lg-4.pt-lg-4.px-xl-4.ps-xl-5.py-xxl-5.text-start
              p.home-main-title.text-uppercase Unidad 1. Introducción al trabajo en modalidad virtual
              h1.home-title.mb-4.mb-lg-5.text-uppercase Competencias Digitales
              p.fs-18px.descripcion.mb-4 La unidad 1, “Competencias Digitales", en el contexto de aprendizaje virtual explora herramientas tecnológicas, gestión del tiempo y habilidades de autogestión. Los estudiantes desarrollan competencias para navegar eficazmente el e-learning, manejando plataformas como Moodle, Zoom y Google Docs, y aplicando estrategias de organización, como la técnica Pomodoro y listas de tareas. La unidad enfatiza flexibilidad, autonomía y manejo de desafíos en entornos digitales.
              
              p.fs-18px.descripcion.mb-4.mb-lg-5.pb-lg-4.text-bold ¡Adelante, cada herramienta y estrategia que dominen es un paso más hacia el éxito en el mundo digital!

              .button-container.mt-auto
                router-link.btn-iniciar.w-100.w-md-auto(:to="{ name: 'introduccion' }")
                  div.iniciar-btn-container.w-100.w-md-auto
                    span.iniciar-btn-text INICIAR
                    div.icon
                      i.fas.fa-chevron-right

      //- Footer
      footer.footer.bg-white
        .container.px-4.py-3
          .row.justify-content-start.align-items-center
            .col-lg-auto
              img.logo-footer(
                src="@/assets/portada/logo-footer.png"
                alt="Logo Tecnológica del Oriente"
              )
            .col-lg.px-0.d-none.d-lg-block
              p.footer-text.mb-0 Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.
              
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="sass">
.curso-container
  .container
    @media (min-width: 1400px)
      max-width: 1378px
  .home-title
    font-size: 26px !important
    font-weight: normal
    @media (min-width: 992px)
      font-size: 38px !important
  .home-main-title
    font-size: 18px
    font-weight: bold
    color: $color-sistema-d
  .home-content
    background-color: white
  .info-section
    position: relative
    min-height: 100%
    display: flex
    flex-direction: column
    @media (min-width: 1200px)
      border-bottom: 1px solid $color-sistema-f

  .content-wrapper
    display: flex
    flex-direction: column
    height: 100%

  .button-container
    margin-top: auto
    text-align: right

  .btn-iniciar
    display: flex
    align-items: center
    width: calc(100% - 48px)
    @media (min-width: 576px)
      margin-left: auto
      width: fit-content !important
    .iniciar-btn-container
      text-align: center
      display: flex
      .iniciar-btn-text
        background-color: #C252F0
        padding: 12px 42px 12px 32px
        width: 100%
    .icon
      background-color: $color-sistema-e
      padding: 0px 20px
      display: flex
      align-items: center
    /* Aquí tus estilos existentes para el botón */

  .home
    padding: 20px
    text-align: center

  h1
    color: #2c3e50

  .logo
    height: 40px
    width: auto
    margin-bottom: 1.5rem
    object-fit: contain
    align-self: flex-start /* Asegura alineación izquierda incluso en contenedor flex */

  .logo-footer
    width: 250px
    object-fit: contain

  .footer
    margin-top: auto /* Empuja el footer al fondo */
    width: 100%
    .footer-text
      font-size: 14px
      border-left: solid 1px #707070
      padding-left: 20px

  .footer p
    font-size: 14px


.iniciar-btn-container
  .iniciar-btn-text
    transition: all 0.25s ease-in-out
    background-color: #C252F0 !important
    color: #391847!important
  .icon
    transition: all 0.25s ease-in-out
    background-color: #6A2C83 !important
    color: $white !important
  &:hover
    .icon
      transform: scale(1.06)
.home-main-title
  color: #E5782C !important
</style>
