let concatenar = true; 
const botones=document.querySelectorAll(".a")
let resultado= document.getElementById("result")

botones.forEach((boton) => {
   boton.addEventListener("click", (event) => {
    if (!concatenar) {
        resultado.value =""; 
        concatenar = true; 
      }
      let valor = event.target.value;
      resultado.value += valor;
      console.log(resultado.value)
   });
});

const botonigual=document.getElementById("operacion")
botonigual.addEventListener("click", () => {
 try {
        if((eval(resultado.value))=="Infinity"|| eval(resultado.value)== undefined){
            resultado.value = "ERROR";
            concatenar = false; 
        }else{
            resultado.value=eval(resultado.value)
            
        }
   
 } catch (error) {
   console.log(error)
  resultado.value= "ERROR"
    concatenar = false; 
  
 
 }
   });

const borrar=document.getElementById("borrar")
borrar.addEventListener("click", () => {
       resultado.value=""
   });





 
