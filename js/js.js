//-----------------INFORMACION-----------------//
//Este proyecto es una tienda de notebooks, en la cual se puede ver el catalogo de productos, agregarlos al carrito y quitarlos del carrito. 

//El flujo de la pagina es el siguiente: se renderiza el catalogo de productos, luego se renderiza el detalle del producto que se elige, luego se agrega el producto al carrito y se renderiza el carrito. En el carrito se puede quitar el producto y se renderiza el carrito nuevamente.

//El carrito se guarda en el localStorage para que no se borre al refrescar la pagina.
//El proyecto esta hecho con javascript puro, sin ningun framework.

//Se podria mejorar el proyecto agregando un formulario de contacto, un formulario de registro y un formulario de login. Tambien se podria agregar un formulario de pago con tarjeta de credito y un formulario de pago con transferencia bancaria. Tambien se podria agregar un formulario de envio de productos a domicilio.Tambien seria bueno que en el inicio de la pagina se muestren los productos mas vendidos y los productos en oferta. Tambien se podria agregar un buscador de productos. Tambien se podria agregar un formulario de comentarios y un formulario de calificacion de productos. Tambien se podria agregar un formulario de devolucion de productos. Tambien se podria agregar un formulario de seguimiento de envio de productos. Tambien se podria agregar un formulario de reclamos. Tambien se podria agregar un formulario de preguntas frecuentes. Tambien se podria agregar un formulario de politicas de privacidad. Tambien se podria agregar un formulario de politicas de devolucion.



function Productos(id, nombre, marca, precio, stock, img) {
  this.id = id;
  this.nombre = nombre;
  this.marca = marca;
  this.precio = precio;
  this.stock = stock;
  this.img = img;
  this.restarStock = function (cantidad) {
    this.stock = this.stock - cantidad;
  }
}

let producto1 = new Productos(1, "Notebook", "Lenovo", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto2 = new Productos(2, "Notebook", "HP", 100000, 7, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto3 = new Productos(3, "Notebook", "Dell", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto4 = new Productos(4, "Notebook", "Asus", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto5 = new Productos(5, "Notebook", "Apple", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto6 = new Productos(6, "Notebook", "Samsung", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto7 = new Productos(7, "Notebook", "Acer", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");
let producto8 = new Productos(8, "Notebook", "Bangho", 100000, 10, "https://http2.mlstatic.com/D_NQ_NP_2X_937947-MLA45104332654_032021-F.webp");


let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];


// //-----------------BOTONESHEADER-----------------//
//botonInicio
let botonInicio = document.getElementById("botonInicio");
botonInicio.className = "btn btn-primary";
botonInicio.innerHTML = "Inicio";
botonInicio.onclick = () => renderCataloogo(listaProductos);

//buscador de productos
let buscador = document.getElementById("buscador");
buscador.ariaPlaceholder = "Buscar producto";
buscador.onkeyup = (event) => {
  let listaProductosFiltrados = listaProductos.filter(propiedad => propiedad.nombre.toLowerCase().includes(event.target.value.toLowerCase()) || propiedad.marca.toLowerCase().includes(event.target.value.toLowerCase()) || propiedad.precio.toString().includes(event.target.value.toLowerCase()))

  renderCataloogo(listaProductosFiltrados)

  //Si no se encuentra ningun producto con el nombre ingresado, se muestra un mensaje de error
  if (productosFiltrados.length == 0) {
    divAlbumbCardsC.innerHTML = `<div class="alert alert-danger" role="alert">
    No se encontraron prooductos, intente nuevamente
  </div>`
  }
}



//-----------------CONTENEDOR-----------------//
let container = document.getElementById("container");
container.className = "container";



//-----------------CATALOGO-----------------//
let divAlbumbCardsA = document.createElement("div");
divAlbumbCardsA.className = "album py-5 bg-light";
container.append(divAlbumbCardsA)

let divAlbumCardsB = document.createElement("div");
divAlbumCardsB.className = "container text-center ";
divAlbumbCardsA.append(divAlbumCardsB)

let divAlbumbCardsC = document.createElement("div");
divAlbumbCardsC.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex justify-content-around";
divAlbumCardsB.append(divAlbumbCardsC)

function renderCataloogo(productos) {
  divAlbumbCardsC.innerHTML = "";
  divAlbumbCardsC.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex justify-content-around";

  for (prod of productos) {
    let card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `<div class="card shadow-sm" style="max-width: 18rem;"> 
        <img src="${prod.img}" class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></img>
        <div class="card-body">
         <h5 class="card-title">${prod.nombre}</h5>
         <p class="card-text">${prod.marca}</p>
         <p class="card-text">$${prod.precio}</p>
         <p class="card-text">${prod.stock} unidades</p>
         <button href="#" id="botonVerProductos" data-id="${prod.id}" class="btn btn-primary">Ver producto</button>
        </div>
      </div>`
    divAlbumbCardsC.append(card)
  }

  //Escucho en que boton se hace click y en base al id que tenga el boton, busco el producto en la lista de productos y lo renderizo en el detalle
  divAlbumbCardsC.onclick = (event) => {
    if (event.target.id === "botonVerProductos") {

      let productoSeleccionado = listaProductos.find(propiedad => propiedad.id == event.target.dataset.id)

      renderProductDetail(productoSeleccionado)
    }
  }
}
renderCataloogo(listaProductos);



//-----------RENDER DETALLE------------------//
function renderProductDetail(prod) {
  divAlbumbCardsC.innerHTML = "";
  divAlbumbCardsC.className = "row mt-3 " //problema de estirado de cards solucionado 'style="max-width: 18rem'
  divAlbumbCardsC.innerHTML = `<div class="col-sm-12 col-md-6 col-lg-6 ">
  <div class="card shadow-sm" style="max-width: 18rem;"> 
  <img src="${prod.img}" class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></img>
  <div class="card-body">
   <h5 class="card-title">${prod.nombre}</h5>
   <p class="card-text">${prod.marca}</p>
   <p class="card-text">$${prod.precio}</p>
   <p id=pStock class="card-text">${prod.stock} unidades</p>

   <div class="btn-group">
     <button id="botnCantidadElegida"type="button" class="btn btn-success">Cantidad:</button>
     <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
       <span class="visually-hidden">Toggle Dropdown</span>
     </button>
     <ul id="ulCantidad"class="dropdown-menu">
       ${renderCantidadDisponible(prod.stock)}
     </ul>
   </div>
   
   <button href="#" id="botonAgregarProductoAlCarrito"  class="btn btn-primary">Agregar al carrito</button>

  </div>
  </div>
  </div>`

  //selecciono la cantidad de productos que se pueden agregar al carrito
  function renderCantidadDisponible(stock) {
    let cantidadDisponible = ""
    for (let i = 1; i <= stock; i++) {
      cantidadDisponible += `<li><a class="dropdown-item" data-id="${i}" href="#">${i}</a></li>`
    }
    return cantidadDisponible
  }

  let botnCantidadElegida = document.getElementById("botnCantidadElegida")
  let liCantidad = document.querySelectorAll("#ulCantidad li a")
  let cantidadElegida = 0
  for (li of liCantidad) {
    li.onclick = (event) => {
      cantidadElegida = event.target.dataset.id
      botnCantidadElegida.textContent = `Cantidad: ${cantidadElegida}`;
      console.log(cantidadElegida)
    }
  }



  //---------------------------------------------------------------------------------//
  cargarCarritoDelStorage()//cargo el carrito del storage para que no se borre al refrescar 
  renderCarrito()//renderizo el carrito siempre tenga o no productos

  let botonAgregarProductoAlCarrito = document.getElementById("botonAgregarProductoAlCarrito")
  botonAgregarProductoAlCarrito.onclick = () => agregarProducto(prod.id, prod.nombre, prod.marca, prod.precio, cantidadElegida)
}



//-----------------AGREGAR/QUITAR PRODUCTO-----------------//
let carrito = [];
function agregarProducto(id, nombre, marca, precio, cantidadElegida) {
  if (cantidadElegida == 0) {
    alert("Elija una cantidad");
    return;
  }
  let productoElegido = [id, nombre, marca, precio, cantidadElegida];
  carrito.push(productoElegido);
  console.log(carrito);

  renderCarrito();
  guardarCarritoEnStorage()
}

function quitarProducto(id) {
  //el metodo findIndex devuelve el indice del elemento que cumpla con la condicion que se le pasa por parametro
  let indiceProductoAQuitar = carrito.findIndex(propiedad => propiedad.id == id)
  carrito.splice(indiceProductoAQuitar, 1)
  renderCarrito()
  guardarCarritoEnStorage()
}



//-----------------CARRITO-----------------//
let divCarrito = document.createElement("div");
divCarrito.className = "col-sm-12 col-md-6 col-lg-6";

//no hace falta que le pase el parametro carrito porque ya esta declarado arriba en forma global
function renderCarrito() {
  let cantidadTotalDeProductosEnCarrito = carrito.length
  divCarrito.innerHTML = `
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Tu carrito</span>
      <span class="badge bg-primary rounded-pill">${cantidadTotalDeProductosEnCarrito}</span>
    </h4>
    
    <ul id=ulCarrito class="list-group mb-3">
        ${renderProductosEnCarrito()}
      <li class="list-group-item d-flex justify-content-between">
        <span>Total (ARS)</span>
        <strong>${renderSumatoriaTotal()}</strong>
      </li>
    </ul>`
  divAlbumbCardsC.append(divCarrito)

  function renderProductosEnCarrito() {
    let productosEnCarrito = ""
    for (productoQueEsteDentro of carrito) {
      productosEnCarrito += `<li class="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 class="my-0">${productoQueEsteDentro[1]}</h6>
        <small class="text-body-secondary">${productoQueEsteDentro[2]} x ${productoQueEsteDentro[4]} Unidades</small>
      </div>
      <span class="text-body-secondary">$${(productoQueEsteDentro[3] * productoQueEsteDentro[4])}
      <button class="btn btn-danger btn-sm" data-id="${productoQueEsteDentro[0]}">Eliminar</button></span>
    </li>`
    }
    return productosEnCarrito
  }

  //Luego de que se generen los botones de eliminar, los guardo en un array y los Recorro  (getElementsByClassName devuelve un arreglo con todos los elementos que contengnan la clase que se pasa por parametro) y le asigno la funcion de quitar producto con el id del producto
  let botonQuitarProductoDelCarrito = document.getElementsByClassName("btn btn-danger btn-sm")
  for (boton of botonQuitarProductoDelCarrito) {
    boton.onclick = (event) => quitarProducto(event.target.dataset.id)
  }

  function renderSumatoriaTotal() {
    let sumatoriaTotal = 0
    for (productoQueEsteDentro of carrito) {
      sumatoriaTotal += productoQueEsteDentro[3] * productoQueEsteDentro[4]
    }
    return sumatoriaTotal
  }
}



//-----------------Guardar carrito en storage-----------------//

function guardarCarritoEnStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
function cargarCarritoDelStorage() {
  if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
}