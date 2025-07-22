const inputs = [
  { id: 1, nombre: "Salario" },
  { id: 2, nombre: "Alquiler" },
  { id: 3, nombre: "Comida" },
  { id: 4, nombre: "Servicios" }
];

let inputsContainer = document.getElementById("inputs-container");

function agregarI(IArray) {
  IArray.forEach(input => {
    const container = document.createElement("div");
    container.innerHTML = `
      <h3>${input.nombre}:</h3>
      <p><input type="number" class="input-gasto" id="${input.nombre}" placeholder="Ingrese ${input.nombre}" /></p>
    `;
    inputsContainer.appendChild(container);
  });
}

agregarI(inputs);


let calcularBtn = document.getElementById("CalcularBtn");
calcularBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let salario = Number(document.getElementById("Salario").value);
  let alquiler = Number(document.getElementById("Alquiler").value);
  let comida = Number(document.getElementById("Comida").value);
  let servicios = Number(document.getElementById("Servicios").value);

  if (
    isNaN(salario) || isNaN(alquiler) || isNaN(comida) || isNaN(servicios) ||
    salario <= 0 || alquiler < 0 || comida < 0 || servicios < 0
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: '⚠️ Ingrese un valor válido en todos los campos',
      confirmButtonColor: '#4CAF50'
    });
  }  else {

  let presupuesto = salario - (alquiler + comida + servicios);
  const datos = { salario, alquiler, comida, servicios, presupuesto };
  localStorage.setItem('Presupuesto', JSON.stringify(datos));

  Swal.fire({
    icon: 'success',
    title: 'Presupuesto calculado',
    confirmButtonColor: '#4CAF50',
  }).then(() => {
    window.location.href = "./pages/resultado.html";
  });
}})
