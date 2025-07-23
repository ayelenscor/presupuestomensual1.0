let inputsContainer = document.getElementById("inputs-container");
const URL = "https://jsonplaceholder.typicode.com/users"
const URLinputs= "./db/data.json"

function obtenerDatos () {
     fetch(URLinputs)
          .then(response => response.json())
          .then(data => agregarI(data))
}

obtenerDatos()

function agregarI(IArray) {
  IArray.forEach(input => {
    const container = document.createElement("div");
    container.innerHTML = `<h3>${input.nombre}:</h3>
                           <p><input type="number" 
                              class="input-gasto" 
                              id="${input.nombre}" 
                              placeholder="Ingrese ${input.nombre}" min="0"/></p>`;
    inputsContainer.appendChild(container);
  });
}

  let calcularBtn = document.getElementById("CalcularBtn");
  calcularBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let salario = Number(document.getElementById("Salario").value);
    let alquiler = Number(document.getElementById("Alquiler").value);
    let comida = Number(document.getElementById("Comida").value);
    let servicios = Number(document.getElementById("Servicios").value);

 if (isNaN(salario) || isNaN(alquiler) || isNaN(comida) || isNaN(servicios)
             || salario <= 0 || alquiler < 0 || comida < 0 || servicios < 0
            || !salario || !alquiler || !comida || !servicios)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '⚠️ Ingrese un valor válido en todos los campos',
        confirmButtonColor: '#4CAF50'
      });
    } else {
      let presupuesto = salario - (alquiler + comida + servicios);
      const datos = { salario, alquiler, comida, servicios, presupuesto };
      localStorage.setItem('Presupuesto', JSON.stringify(datos));
        window.location.href = "./pages/resultado.html";}
      });
