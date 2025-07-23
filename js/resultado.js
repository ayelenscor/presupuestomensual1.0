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

let salario = datosGuardados.salario;
let alquiler = datosGuardados.alquiler;
let comida = datosGuardados.comida;
let servicios = datosGuardados.servicios;

let respuesta = prompt("¿El presupuesto restante es mayor al salario? (si / no)");
let mensaje = "";
const presupuestoReal = salario - (alquiler + comida + servicios);

try {
  if (respuesta === "no" && presupuestoReal < salario) {
    mensaje = "¡Bien! Te manejaste bien este mes.";
  } else if (respuesta === "si" && presupuestoReal > salario) {
  } else {
    throw new Error("¡Tené cuidado, te excediste, pero puede pasar!");
  }
} catch (err) {
  mensaje = err
} finally {
  console.log("📊 Conclusión del presupuesto:", mensaje);
}


document.addEventListener("DOMContentLoaded", () => {

  const volverBtn = document.getElementById("VolverBtn");

  volverBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const gastos = [alquiler, comida, servicios];
    const totalGastos = gastos.reduce((acc, gasto) => acc + gasto);
    const nuevoPresupuesto = salario - totalGastos;

    localStorage.setItem("PresupuestoActual", JSON.stringify(nuevoPresupuesto));

    Swal.fire({
      title: '¿Deseas volver a calcular?',
      icon: 'question',
      confirmButtonText: 'Sí',
      confirmButtonColor: '#4CAF50',
      showCancelButton: true,
      cancelButtonText: 'No',
      cancelButtonColor: '#ff0000ff',
    }).then((result) => {
      if (result.isConfirmed) {
    window.location.href = "../index.html";
  } else {
    return;
  }
}); }); });
