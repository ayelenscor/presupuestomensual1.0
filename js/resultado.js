let presupuesto = localStorage.getItem("presupuesto")
presupuesto = JSON.parse(presupuesto)

const gastos = ["alquiler", "comida", "servicios"]
const mostrarResultadoDiv = document.getElementById("mostrarResultado")

detalleGastos.map(nombre => {
    const gasto = document.createElement("div")
    gasto.innerHTML= `${nombre}: $${gasto}`
    gastos.appendChild(gasto)
  });



