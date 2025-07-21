const datosGuardados = localStorage.getItem("Presupuesto");
const datos = JSON.parse(datosGuardados);

const gastosArray = [
  { nombre: "Alquiler", valor: datos.alquiler },
  { nombre: "Comida", valor: datos.comida },
  { nombre: "Servicios", valor: datos.servicios }
];

const gastosStrings = gastosArray.map(gasto => 
  `${gasto.nombre}: $${gasto.valor}`);


localStorage.setItem('gastosStrings', JSON.stringify(gastosStrings));


let detalleGastos = document.getElementById("detalleGastos");
detalleGastos.innerHTML =
     `<h3>📝 Detalle de gastos</h3>
      <ul>
        <li>Salario mensual: $${datos.salario}</li>
        <li>Gasto en alquiler: $${datos.alquiler}</li>
        <li>Gasto en comida: $${datos.comida}</li>
        <li>Gasto en servicios: $${datos.servicios}</li>
      </ul>`;

let mostrarResultado = document.getElementById("mostrarResultado");
mostrarResultado.textContent = `💰 Tu presupuesto es: $${datos.presupuesto}`;

