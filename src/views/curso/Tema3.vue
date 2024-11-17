<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1. Introducción al trabajo en modalidad virtual'" :subTitulo="'3. Diferenciación entre personas naturales y jurídicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.tema-3
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center(data-aos="fade-right")
        div.d-flex.align-items-start.bg-azul-1.px-3.py-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad1/img-66.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px.mb-0(data-aos="fade-up") La gestión del tiempo es un desafío fundamental en la modalidad virtual, donde el estudiante tiene la libertad de organizar sus actividades. Este tema aborda diversas estrategias y herramientas para optimizar el uso del tiempo y gestionar las responsabilidades en un entorno sin supervisión constante.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad1/img-67.png', alt='Texto que describa la imagen')  
      p.text-bold.mt-3 Importancia de la gestión del tiempo en la modalidad virtual

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
        img.-mt-18px(src='@/assets/curso/unidad1/img-68.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Retos del aprendizaje y trabajo virtual")
            p En entornos virtuales, la ausencia de una estructura externa puede llevar a la procrastinación, desorganización y agotamiento. A diferencia de la modalidad presencial, el estudio y trabajo en línea requieren de una autodisciplina fuerte para gestionar el tiempo y las tareas.
          .div(titulo="Ventajas de una buena gestión del tiempo")
            p Una organización adecuada del tiempo no solo mejora el rendimiento académico o profesional, sino que también ayuda a reducir el estrés y aumentar la motivación. Planificar de forma efectiva las actividades permite equilibrar las responsabilidades laborales y académicas con la vida personal (Ramos, 2014).
          .div(titulo="Consecuencias de una mala gestión del tiempo")
            p La falta de un manejo adecuado del tiempo en entornos virtuales puede resultar en baja productividad, retrasos, pérdida de oportunidades y aumento del estrés. La acumulación de trabajo pendiente afecta negativamente la calidad del aprendizaje y el desempeño, generando desmotivación.
    
    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Principios fundamentales de la gestión del tiempo
    
    p.mb-4 Para gestionar el tiempo de manera efectiva, es necesario aplicar ciertos principios clave, como el establecimiento de prioridades, la técnica Pomodoro y la Ley de Pareto (García, 2019).
    
    .row.mb-5
      TabsC.color-primario.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Establecimiento de prioridades")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad1/img-69.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
              h4 Establecimiento de prioridades
              p La clave para una buena gestión del tiempo es saber priorizar. Identificar las tareas más importantes y urgentes ayuda a optimizar el tiempo y los recursos. La Matriz de Eisenhower es una herramienta útil para clasificar las tareas en cuatro categorías según su urgencia e importancia.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Técnica del Pomodoro")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-70.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Técnica del Pomodoro
              p Esta técnica divide el tiempo de trabajo en intervalos de 25 minutos, conocidos como "pomodoros", seguidos de breves descansos. Fomenta la concentración y ayuda a prevenir la fatiga mental, incrementando la productividad durante sesiones de estudio o trabajo.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Ley de Pareto (80/20)")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-71.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Ley de Pareto (80/20)
              p Este principio indica que el 80% de los resultados proviene del 20% del esfuerzo. Identificar y centrarse en las actividades que generan los mayores beneficios es esencial para aumentar la eficiencia y evitar perder tiempo en tareas de menor relevancia.
      p Estas estrategias permiten a los estudiantes y profesionales en entornos virtuales mejorar la gestión de su tiempo, adaptándose a la flexibilidad de la modalidad y asegurando un desempeño equilibrado y productivo.
    
    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Planificación y organización de tareas en entornos virtuales
    
    p.mb-4.pb-2 La planificación es el cimiento fundamental para una buena gestión del tiempo. En un entorno virtual, esta planificación debe ser aún más estructurada para evitar la dispersión y mantener el enfoque. Herramientas como <strong>Todoist y Microsoft To Do</strong> permiten organizar listas de tareas con plazos de entrega, facilitando el seguimiento de los compromisos y objetivos (Bustinduy, 2015).

    .row.position-relative.py-4.bg-fondo-1.bg-full-width.mb-5.pb-2
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
              p.text-bold Creación de horarios flexibles 
              p Establecer un horario que considere tanto las responsabilidades académicas o laborales como las necesidades personales es esencial. Se recomienda crear bloques de tiempo para actividades como estudio, reuniones y descanso, siendo flexibles para adaptarse a imprevistos pero consistentes para formar hábitos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad1/img-72.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Uso de listas de tareas (To-Do Lists)
              p Las listas de tareas son una herramienta eficaz para gestionar el tiempo. Dividir las actividades en acciones concretas las hace más manejables y menos intimidantes. Aplicaciones como Todoist y Microsoft To Do permiten crear listas con recordatorios y plazos, facilitando la organización y evitando olvidar tareas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-73.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Establecimiento de metas claras y alcanzables
              p Definir metas SMART (específicas, medibles, alcanzables, relevantes y con tiempo limitado) proporciona una dirección clara para el progreso. Este enfoque facilita la descomposición de tareas complejas en pasos más pequeños y manejables, ayudando a mantener el enfoque y a alcanzar los objetivos de forma organizada.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-74.png', alt='Texto que describa la imagen')
      
    .row.mb-4.pb-2
      p Estas estrategias de planificación permiten una mejor gestión del tiempo en entornos virtuales, favoreciendo el equilibrio entre las diferentes responsabilidades y el cumplimiento de metas personales y profesionales.

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.flex-column
          h2.mb-4.pb-2 Herramientas tecnológicas para la gestión del tiempo
          p.mb-1.me-auto ¿Sabía que las herramientas tecnológicas pueden mejorar su gestión del tiempo? 
          p.mb-4 Google Calendar y Microsoft Outlook facilitan la programación de eventos y reuniones, mientras que Trello y Toggl ayudan a organizar tareas y hacer un seguimiento del tiempo. Para evitar distracciones, RescueTime y StayFocusd son ideales, y Focus@Will ofrece música para mantener la concentración. 
          p ¡Los invitamos a explorar estas opciones y descubrir cómo pueden optimizar su productividad en el documento Herramientas tecnológicas para la gestión del tiempo!
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" style="width: 340px" :href="obtenerLink('/downloads/Anexo_Herramientas_tecnológicas_para_la_gestión_del_tiempo.pdf')" target="_blank")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad1/img-65.svg', alt='Texto que describa la imagen')
            p.text-bold.fs-14px.my-auto.p-2 Anexo. Herramientas tecnológicas para la gestión del tiempo 

        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad1/img-75.png', alt='Texto que describa la imagen')

    p.mb-5 Estas herramientas digitales facilitan la organización, el seguimiento de las actividades y la eliminación de distracciones, contribuyendo a una gestión del tiempo más eficiente y productiva en entornos virtuales.

    #t_3_3.titulo-segundo
      div.d-flex
        span.me-3 3.3  
        h2 Equilibrio entre la vida personal y profesional/estudiantil en la modalidad virtual

    p.mb-5 Mantener un equilibrio saludable entre la vida personal y las responsabilidades académicas o laborales es esencial para prevenir el agotamiento en entornos virtuales. A continuación, se detallan algunas estrategias clave para lograr este equilibrio:

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="zoom-in")
        img.-mt-18px(src='@/assets/curso/unidad1/img-76.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Separación entre espacios de trabajo y ocio")
            p Una de las principales dificultades al trabajar o estudiar desde casa es la mezcla de espacios personales y laborales. Asignar un lugar específico para actividades académicas o profesionales ayuda a marcar una distinción clara entre el "tiempo de trabajo" y el "tiempo personal", facilitando la concentración y el bienestar.
          .div(titulo="Establecimiento de límites claros")
            p Definir horarios de inicio y fin para actividades laborales o de estudio es esencial para evitar la sobrecarga. "Desconectarse" de las herramientas de trabajo al final de la jornada permite que el tiempo de descanso sea efectivo, favoreciendo un mejor equilibrio entre las diferentes áreas de la vida.
          .div(titulo="Autocuidado y descanso")
            p El autocuidado es crucial para mantener un buen rendimiento en entornos virtuales. Incorporar descansos regulares, realizar ejercicio y participar en actividades recreativas son prácticas clave para recargar energías. La regla 20-20-20 ayuda a reducir la fatiga visual por el uso prolongado de pantallas.

    .row.mb-5
      p Estas estrategias contribuyen a un manejo más saludable de la vida académica y laboral en entornos virtuales, promoviendo el bienestar integral y la prevención del agotamiento.

    #t_3_4.titulo-segundo
      div.d-flex
        span.me-3 3.4  
        h2 Estrategias para evitar la procrastinación

    p.mb-4 La procrastinación es uno de los principales obstáculos para la productividad en entornos virtuales. A continuación, se presentan algunas estrategias para combatirla de manera correcta: 

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
        div.d-flex.align-items-start.bg-ppal-morado-oscuro.px-3.py-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad1/img-77.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px.mb-0(data-aos="fade-up") La procrastinación es uno de los principales obstáculos para la productividad en entornos virtuales, consiste en posponer o retrasar tareas, actividades o decisiones importantes, sustituyéndolas por otras que suelen ser menos importantes, por otras de menor relevancia o incluso de entretenimiento.  Esta tendencia no solo afecta la eficiencia y el cumplimiento de metas, sino que también genera sentimientos de ansiedad y frustración por acumulación de trabajo porque las actividades que se inician no son finalizadas, impactando negativamente en el bienestar y el rendimiento de las personas.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img.h-100(src='@/assets/curso/unidad1/img-78.png', alt='Texto que describa la imagen')  

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/bg-icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Estrategias para combatir la procrastinación
              p.text-small ¿Cómo reducir los niveles de procrastinación en el desarrollo de las actividades diarias? ¿Cómo implementar rutinas y estrategias para evitar distracciones y con ello mejorar nuestra productividad a largo plazo? Lo invitamos a leer el PDF Estrategias para combatir la procrastinación, en donde encontrará algunas herramientas que buscan superar el hábito de posponer tareas 
            .col-sm-auto(data-aos="zoom-in")
              a.download-btn.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/Anexo_Estrategias_para_combatir_la_procrastinación.pdf')" target="_blank")
                span.text-small Descargar
                i.fas.fa-arrow-right

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
