// Menú principal
let opcion = parseInt(prompt("Seleccione una opción: \n1. Ingresar salario \n2. Ingresar gastos \n3. Calcular presupuesto \n4.Salir")) 

   while(opcion !== 4) {
    switch (opcion) {
      case 1:
        pedirIngresos ()
        break;
      case 2:
        sumarGastos()
        break;
      case 3:
        calcularPresupuesto()
        break;
      case 4:
        break;
    }
    opcion = parseInt(prompt("Seleccione una opción: \n1. Ingresar salario \n2. Ingresar gastos \n3. Calcular presupuesto \n4.Salir"))
}
 alert("Gracias por usar el simulador.")

// Ingresar salario
//function pedirIngresos() {
  //let salarioMensual = parseInt(prompt("Ingrese su salario mensual:"));
  //if (salarioMensual !== 0) {
    //alert("Salario registrado correctamente.");
  //} else if (salarioMensual === 0) {
    //alert ("Ingrese un número válido.");
  //}
  //console.log("Salario mensual:", pedirIngresos())
//} 



// Ingresar gastos 
function sumarGastos() {
      let alquiler = parseInt(prompt("Ingrese su gasto en Alquiler:"));
      let comida = parseInt(prompt("Ingrese su gasto en Comida:"));
      let servicios = parseInt(prompt("Ingrese su gasto en Servicios:"));
      let resultado = alquiler + comida + servicios;

      alert("El total de sus gastos es: " + resultado);
      return resultado;
}
console.log("Gastos mensuales:", sumarGastos())

// Calcular presupuesto
 //  let totalGastos = 0
  // let presupuesto = 0

//function calcularPresupuesto() {
  //let totalGastos = sumarGastos();
  //let salarioMensual = pedirIngresos ();
  //let saldo = salarioMensual - totalGastos;

//if (saldo > 0) {
  //alert("¡Bien hecho! Te queda un saldo a favor este mes.");
//} else if (saldo === 0) {
  //alert("¡Has gastado exactamente lo que ingresaste! Cuidado con futuros gastos.");
//} else {
  //alert("¡Atención! Tienes un déficit este mes.");
//}

//return saldo

//}
