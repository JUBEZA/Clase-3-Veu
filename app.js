// createApp
const {createApp} = Vue;

createApp({
  data() {


    return{
      titulo: "Buena Loco 🌖",
      a: 20,
      b: 20,
      numero: 100,
      mensaje: "la importancia de aprender Veu en Brazil",
      div: `
      <h3>Una página de Juan</h3>
      <p>que va a ser buena</p>
      `,
      url:"https://images.unsplash.com/photo-1550574364-981d838fa2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
      alt: "Brazil",

      parrafo: ""
    }
  },

    created() {
      this.calculoFuncion()
    },
    methods: {
      calculoFuncion() {
        // this.a = 20;
        // this.b = 20;

      },
      sumaMethod() {
        return this.numero +100
      },

      multiplicado(){
        this.numero *=10
      }

    },
    computed: {
      sumaComputed() {
        return this.numero + 200
      }

    }

}).mount("#app")

// import { Persona } from "./Persona.js";

// const saludar = () => {
//     console.log("Hola!")
// }

// saludar();

// const  per1 = new Persona("Juan", "Bezanilla", 30, "BraChile")
// console.log(per1)

// const nombre = "Juanito";
// const phrase = `hola ${nombre}`
// console.log(phrase)
