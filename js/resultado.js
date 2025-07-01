let presupuesto = localStorage.getItem('presupuesto')
presupuesto = JSON.parse(presupuesto)

const gastos = ["alquiler", "comida", "servicios"]
const mostrarResultadoDiv = document.getElementById("mostrarResultado")

gastos.map(nombre => {
    const detalleGastos = document.createElement("div")
    detalleGastos.innerHTML= `${nombre}: $${presupuesto.gastos[nombre]}`
    mostrarResultadoDiv.appendChild(detalleGastos)
  });



