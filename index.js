const formCompra = document.querySelector('#formCompra');
const inputNombre = document.querySelector('#inputNombre');
const inputPrecio = document.querySelector('#inputPrecio');
const divListaDeVehiculos = document.querySelector('#listaDeVehiculos');
const seccionCompraRealizada = document.querySelector('#seccionCompraRealizada');

// Obtener datos de autos desde el almacenamiento local
const autos = JSON.parse(localStorage.getItem('autos')) || [];
// Mostrar la sección de compra realizada en la página web
mostrarCompraRealizada();
// clase llamada Vehiculo
class Vehiculo {
  constructor({ nombre, precio }) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
// Manejar el envío del formulario
formCompra.onsubmit = e => {
  // Evitar que se recargue la página por defecto
  e.preventDefault(); 
// Obtener el nombre y el precio ingresados en el formulario
  const nombre = inputNombre.value;
  const precio = inputPrecio.value;

  const auto = new Vehiculo({ nombre, precio });
// guardar el auto en la lista 
  guardarAuto(auto);
}

function guardarAuto(auto) {
  autos.push(auto);// Agregar el automóvil a la lista
  localStorage.setItem('autos', JSON.stringify(autos));
  mostrarCompraRealizada();
}
// mostrar la compra realizada 
function mostrarCompraRealizada() {
  if (autos.length > 0) {
// compra realizada
    seccionCompraRealizada.style.display = 'block';
    let listaVehiculoHtml = '<ul>';
    // construir la lista HTML
    for (const auto of autos) {
      listaVehiculoHtml += `<li>${auto.nombre}</a></li>`;
    }
    // Mostrar la lista en el HTML
    divListaDeVehiculos.innerHTML = listaVehiculoHtml + '</ul>';
  }
}
