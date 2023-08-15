
document.addEventListener('DOMContentLoaded', function () {
  // Obtenemos los datos del formulario de inicio de sesión
  const nombreCompleto = localStorage.getItem('nombreCompleto');
  const dni = localStorage.getItem('dni');
  const obraSocial = localStorage.getItem('obraSocial');

  // Buscamos el elemento en el que mostraremos los datos
  const datosUsuario = document.getElementById('datosUsuario');

  // Comprobamos si los datos existen en el almacenamiento local
  if (nombreCompleto && dni && obraSocial) {
    // Mostramos los datos en el elemento
    datosUsuario.innerHTML = `Bienvenido/a, ${nombreCompleto}. DNI: ${dni}. Obra Social: ${obraSocial}.`;
  }
});


















/*
// Objeto con info de usuario
const usuario = {};

// Función para obtener el descuento
function obtenerDescuento() {
  // Pedimos los datos y usamos SweetAlert2
  Swal.fire({
    title: 'Ingrese sus datos',
    html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
           <input type="number" id="edad" class="swal2-input" placeholder="Edad">
           <input type="number" id="dni" class="swal2-input" placeholder="DNI">`,
    focusConfirm: false,
    preConfirm: () => {
      usuario.nombre = document.getElementById('nombre').value;
      usuario.edad = parseInt(document.getElementById('edad').value);
      usuario.dni = parseInt(document.getElementById('dni').value);

      if (!usuario.nombre || !usuario.edad || !usuario.dni) {
        Swal.showValidationMessage('Por favor, complete todos los campos');
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      let descuentoEdad;
      // Definimos el desc. basado en la edad del usuario
      if (usuario.edad < 40) {
        descuentoEdad = 30;
      } else if (usuario.edad >= 40 && usuario.edad <= 50) {
        descuentoEdad = 15;
      } else {
        descuentoEdad = 5;
      }
      let descuentoCategoria = 0;
      let mensajeCategoria = "";

      // Mostramos categoría al usuario
      Swal.fire({
        title: 'Seleccione una categoría de medicamentos',
        icon: 'question',
        html:
          `<select id="categoria" class="swal2-input">
            <option value="1">Analgésicos y antiinflamatorios</option>
            <option value="2">Antiinfecciosos</option>
            <option value="3">Mucolíticos y antitusivos</option>
            <option value="4">Antialérgicos</option>
            <option value="5">Antipiréticos</option>
          </select>`,
        focusConfirm: false,
        preConfirm: () => {
          const categoriaSeleccionada = parseInt(document.getElementById('categoria').value);

          switch (categoriaSeleccionada) {
            case 1:
              descuentoCategoria = 10;
              mensajeCategoria = "Analgésicos y antiinflamatorios";
              break;
            case 2:
              descuentoCategoria = 40;
              mensajeCategoria = "Antiinfecciosos";
              break;
            case 3:
              descuentoCategoria = 20;
              mensajeCategoria = "Mucolíticos y antitusivos";
              break;
            case 4:
              descuentoCategoria = 25;
              mensajeCategoria = "Antialérgicos";
              break;
            case 5:
              descuentoCategoria = 15;
              mensajeCategoria = "Antipiréticos";
              break;
            default:
              Swal.fire('Categoría no válida', '', 'error');
              return;
          }

          const descuentoTotal = descuentoEdad + descuentoCategoria;

          // mostramos al ususario
          const mensaje = "Datos del usuario:\n" +
            "Nombre: " + usuario.nombre + "\n" +
            "Edad: " + usuario.edad + "\n" +
            "DNI: " + usuario.dni + "\n" +
            "Descuento por edad: " + descuentoEdad + "%\n" +
            "Categoría seleccionada: " + mensajeCategoria + "\n" +
            "Descuento por categoría: " + descuentoCategoria + "%\n" +
            "Descuento total: " + descuentoTotal + "%";

          Swal.fire(mensaje);
        }
      });
    }
  });
}

// Botón para obtener el descuento
const btnObtenerDescuento = document.getElementById('btnObtenerDescuento');
btnObtenerDescuento.addEventListener('click', obtenerDescuento);

// Array de objetos con los productos seleccionados
const productosSeleccionados = [
  {
    nombre: "omeprazol",
    contenido: "10 mg",
    presentacion: "cápsulas",
    laboratorio: "Farmalab",
    precio: 150
  },
  {
    nombre: "Paracetamol",
    contenido: "500 mg",
    presentacion: "tabletas",
    laboratorio: "Medifarma",
    precio: 180
  },
  {
    nombre: "Ibuprofeno",
    contenido: "400 mg",
    presentacion: "tabletas",
    laboratorio: "Ellea",
    precio: 200
  },
  {
    nombre: "Diclofenac",
    contenido: "50 mg",
    presentacion: "tabletas",
    laboratorio: "Lafar",
    precio: 250
  },
  {
    nombre: "Antibiotico",
    contenido: "500 mg",
    presentacion: "cápsulas",
    laboratorio: "Biolab",
    precio: 300
  }
];

// Función para ver los descuentos en productos seleccionados en un alert
function verDescuentos() {
  let mensajeProductos = "Descuentos en productos seleccionados:\n";

  productosSeleccionados.forEach((producto) => {
    // unimos la información de cada producto al mensaje
    mensajeProductos += "Producto: " + producto.nombre +
      " - Presentación: " + producto.presentacion +
      " de " + producto.contenido +
      " - Laboratorio: " + producto.laboratorio +
      " - Precio: $" + producto.precio + "\n\n";
  });

  Swal.fire(mensajeProductos);
}

// Botón para ver descuentos
const btnVerDescuentos = document.getElementById('btnVerDescuentos');
btnVerDescuentos.addEventListener('click', verDescuentos);

// Función para filtrar por menor precio
function filtrarPorMenorPrecio() {
  const productosFiltrados = productosSeleccionados.slice().sort((a, b) => a.precio - b.precio);

  let mensajeFiltrados = "Productos filtrados por menor precio:\n";

  productosFiltrados.forEach((producto) => {
    mensajeFiltrados += "Producto: " + producto.nombre +
      " - Presentación: " + producto.presentacion +
      " de " + producto.contenido +
      " - Laboratorio: " + producto.laboratorio +
      " - Precio: $" + producto.precio + "\n\n";
  });

  Swal.fire(mensajeFiltrados);
}

// evento click
const btnFiltrarMenorPrecio = document.getElementById('btnFiltrarMenorPrecio');
btnFiltrarMenorPrecio.addEventListener('click', filtrarPorMenorPrecio);

// Función para ordenar por nombre
function ordenarPorNombre() {
  const productosOrdenados = productosSeleccionados.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));

  let mensajeOrdenados = "Productos ordenados por nombre:\n";

  productosOrdenados.forEach((producto) => {
    mensajeOrdenados += "Producto: " + producto.nombre +
      " - Presentación: " + producto.presentacion +
      " de " + producto.contenido +
      " - Laboratorio: " + producto.laboratorio +
      " - Precio: $" + producto.precio + "\n";
  });

  Swal.fire(mensajeOrdenados);
}

// evento click
const btnOrdenarPorNombre = document.getElementById('btnOrdenarPorNombre');
btnOrdenarPorNombre.addEventListener('click', ordenarPorNombre);

// Función para guardar los productos seleccionados en el local storage
function guardarProductosEnAlmacenamientoLocal(productos) {
  const productosJSON = JSON.stringify(productos);
  localStorage.setItem('productos', productosJSON);
}

// Función para cargar los productos seleccionados desde el almacenamiento local
function cargarProductosDesdeAlmacenamientoLocal() {
  const productosJSON = localStorage.getItem('productos');
  if (productosJSON) {
    return JSON.parse(productosJSON);
  } else {
    return [];
  }
}

// Función para guardar los datos en el almacenamiento local
function guardarDatos() {
  // Obtenemos los productos seleccionados
  const productosSeleccionados = [
    {
      nombre: "omeprazol",
      contenido: "10 mg",
      presentacion: "cápsulas",
      laboratorio: "Farmalab",
      precio: 150
    },
    {
      nombre: "Paracetamol",
      contenido: "500 mg",
      presentacion: "tabletas",
      laboratorio: "Medifarma",
      precio: 180
    },
    {
      nombre: "Ibuprofeno",
      contenido: "400 mg",
      presentacion: "tabletas",
      laboratorio: "Ellea",
      precio: 200
    },
    {
      nombre: "Diclofenac",
      contenido: "50 mg",
      presentacion: "tabletas",
      laboratorio: "Lafar",
      precio: 250
    },
    {
      nombre: "Antibiotico",
      contenido: "500 mg",
      presentacion: "cápsulas",
      laboratorio: "Biolab",
      precio: 300
    }



  ];

  // Guardamos los productos seleccionados en el almacenamiento local
  guardarProductosEnAlmacenamientoLocal(productosSeleccionados);

  // si los guarda bien, confirma 
  Swal.fire('¡Datos guardados!', 'Los datos han sido guardados exitosamente.', 'success');
}

// Llamamos a la función  para guardar los datos cuandos e presiona el boton
const btnGuardarDatos = document.getElementById('btnGuardarDatos');
btnGuardarDatos.addEventListener('click', guardarDatos);

// Función para cargar los datos desde el local storage
function cargarDatos() {
  // Cargamos los productos seleccionados desde el local storage
  const productosSeleccionados = cargarProductosDesdeAlmacenamientoLocal();

  // Mostramos los productos seleccionados en una ventana de alerta
  let mensajeProductos = "Productos seleccionados:\n";
  productosSeleccionados.forEach((producto) => {
    mensajeProductos += "Producto: " + producto.nombre +
      " - Presentación: " + producto.presentacion +
      " de " + producto.contenido +
      " - Laboratorio: " + producto.laboratorio +
      " - Precio: $" + producto.precio + "\n";
  });

  Swal.fire('Productos seleccionados', mensajeProductos, 'info');
}

// Llamamos a la función para cargar los datos cuando se haga click en el boton
const btnCargarDatos = document.getElementById('btnCargarDatos');
btnCargarDatos.addEventListener('click', cargarDatos);
*/