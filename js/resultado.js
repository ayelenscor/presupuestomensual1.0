let presupuesto = localStorage.getItem('presupuesto')
presupuesto = JSON.parse(presupuesto)

const gastos = ["alquiler", "comida", "servicios"]
const mostrarResultadoDiv = document.getElementById("mostrarResultado")

gastos.map(nombre => {
    const detalleGastos = document.createElement("div")
    detalleGastos.innerHTML= `${nombre}: $${presupuesto.gastos[nombre]}`
    mostrarResultadoDiv.appendChild(detalleGastos)
  });

function sumarGastos(gastos) {
  let total = 0
  Object.values(gastos).forEach(valor => {
    total += Number(valor)
  })
  return total
}

let salario = localStorage.getItem('salario')
salario = JSON.parse(salario)

  const totalGastos = sumarGastos(presupuesto.gastos)
  const saldoAFavor = salario - totalGastos

const saldoAFavorDiv = document.createElement("div")
saldoAFavorDiv.innerHTML = `Saldo a favor: $${saldoAFavor}`
mostrarResultadoDiv.appendChild(saldoAFavorDiv)
