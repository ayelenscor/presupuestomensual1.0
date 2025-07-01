let campos = ["salario", "alquiler", "comida", "servicios"]
let contenidos = document.getElementById("contenidos")

campos.forEach(nombre => {
  let container = document.createElement("div")
  container.className = "input"
  container.innerHTML = `<label>${nombre}:
                         <input type="text" id="${nombre}">
                         </label>`
  contenidos.appendChild(container)
});

document.getElementById("calcularLink").addEventListener("click", () => {
  let salario = document.getElementById("salario").value
  let alquiler = document.getElementById("alquiler").value
  let comida = document.getElementById("comida").value
  let servicios = document.getElementById("servicios").value

  let presupuesto = {
    salario: salario,
    gastos: {
      alquiler: alquiler,
      comida: comida,
      servicios: servicios
    }
  }

  localStorage.setItem("presupuesto", JSON.stringify(presupuesto))
})



