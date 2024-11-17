<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(:titulo="'UNIDAD 1. DERECHO CIVIL, GENERAL PERSONAS'" :subTitulo="'SÍNTESIS'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.fs-18px.mb-4.mb-md-5 La Unidad 1 introduce los fundamentos esenciales del Derecho Civil, una rama del derecho privado que regula las relaciones entre personas bajo un principio de igualdad. Se estudian los conceptos clave, las fuentes del Derecho Civil, y se distingue entre personas naturales y jurídicas, sentando una base sólida para entender su relevancia en la vida cotidiana, en ámbitos como el familiar, contractual y patrimonial. 
    p.fs-18px.mb-4 Este conocimiento permite al estudiante comprender los principios que rigen el Derecho Civil y aplicar estos conceptos en situaciones prácticas, consolidando una formación jurídica que facilitará su desarrollo profesional en el campo legal.
    figure
      img(src='@/assets/componentes/sintesis.svg', alt='Texto que describa la imagen')
    

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
