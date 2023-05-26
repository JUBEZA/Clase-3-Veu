const {createApp} = Vue;

createApp({
  data() {
      return {
        title: "directivas condicionales y de atrivutos",
        show: true,
        log: true,
        mensaje: "Hola desde directiva condicional"


      }
  }
}).mount("#app")
