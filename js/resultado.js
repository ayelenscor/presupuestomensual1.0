const datosGuardados = JSON.parse(localStorage.getItem("Presupuesto"));

let detalleGastos = document.getElementById("detalleGastos");
detalleGastos.innerHTML =
  `<h3>📝 Detalle de gastos</h3>
   <ul>
     <li>Salario mensual: $${datosGuardados.salario}</li>
     <li>Gasto en alquiler: $${datosGuardados.alquiler}</li>
     <li>Gasto en comida: $${datosGuardados.comida}</li>
     <li>Gasto en servicios: $${datosGuardados.servicios}</li>
   </ul>`;

let mostrarResultado = document.getElementById("mostrarResultado");
mostrarResultado.textContent = `💰 Tu presupuesto es: $${datosGuardados.presupuesto}`;

let volverBtn = document.getElementById("VolverBtn");
volverBtn.addEventListener("click", () => {
  if (!datosGuardados) return;

  let salario = datosGuardados.salario;
  let alquiler = datosGuardados.alquiler;
  let comida = datosGuardados.comida;
  let servicios = datosGuardados.servicios;

  const gastos = [alquiler, comida, servicios];
  const totalGastos = gastos.reduce((acc, gasto) => acc + gasto, 0);
  const nuevoPresupuesto = salario - totalGastos;

  localStorage.setItem("PresupuestoActual", JSON.stringify(nuevoPresupuesto));

});

