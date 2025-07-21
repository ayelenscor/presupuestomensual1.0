let inputs = [
  {
    id: 1,
    nombre: "Salario",
  },
  {
    id: 2,
    nombre: "Alquiler",
  },
  {
    id: 3,
    nombre: "Comida",
  },
  {
    id: 4,
    nombre: "Servicios",
  }
]

let inputsGuardados = document.getElementById("contenidos")

inputs.forEach(input => {
  let container = document.createElement("div")
  container.className = "input"
  container.innerHTML = `<label>${input.nombre}:
                         <input type="text" id="${input.nombre}">
                         </label>`
  contenidos.appendChild(container)
});

document.getElementById("calcularLink").addEventListener("click", () => {
  let salario = document.getElementById("salario").value
  let alquiler = document.getElementById("alquiler").value
  let comida = document.getElementById("comida").value
  let servicios = document.getElementById("servicios").value

  let presupuesto = {
    salario: Number(salario),
    gastos: {
      alquiler: Number(alquiler),
      comida: Number(comida),
      servicios: Number(servicios)
    }
  }

  localStorage.setItem('presupuesto', JSON.stringify(presupuesto))
})



