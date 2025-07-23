const datosGuardados = JSON.parse(localStorage.getItem("Presupuesto"));

document.addEventListener("DOMContentLoaded", () => {
  let detalleGastos = document.getElementById("detalleGastos");

  detalleGastos.innerHTML = `
    <h3>📝 Detalle de gastos</h3>
    <div id="mensajePresupuesto" style="margin-top:10px; font-weight:bold;"></div>
    <ul>
      <li>Salario mensual: $${datosGuardados.salario}</li>
      <li>Gasto en alquiler: $${datosGuardados.alquiler}</li>
      <li>Gasto en comida: $${datosGuardados.comida}</li>
      <li>Gasto en servicios: $${datosGuardados.servicios}</li>
    </ul>
  `;

  const salario = datosGuardados.salario;
  const alquiler = datosGuardados.alquiler;
  const comida = datosGuardados.comida;
  const servicios = datosGuardados.servicios;

  const presupuestoReal = salario - (alquiler + comida + servicios);
  let mensaje = "";

try {
    if (presupuestoReal >= 0) {
      mensaje = "¡Bien! Te manejaste bien este mes.";
    } else {
      throw new Error("¡Tené cuidado, te excediste, pero puede pasar!");
    }
  } catch (err) {
    mensaje = err.message
  } finally {
    let mensajeDiv = document.getElementById("mensajePresupuesto");
    mensajeDiv.textContent = mensaje;
  }
});


let mostrarResultado = document.getElementById("mostrarResultado");
mostrarResultado.textContent = `💰 Tu presupuesto es: $${datosGuardados.presupuesto}`;

let salario = datosGuardados.salario;
let alquiler = datosGuardados.alquiler;
let comida = datosGuardados.comida;
let servicios = datosGuardados.servicios;

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
