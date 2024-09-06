let productos = [
  {
    nombre: "Ordenador Gaming",
    marca: "Asus",
    precio: 1200,
  },

  {
    nombre: "Camara",
    marca: "Sony",
    precio: 1500,
  },

  {
    nombre: "Tablet",
    marca: "HP",
    precio: 1700,
  },

  {
    nombre: "Celular",
    marca: "Samsung",
    precio: 1900,
  },
];

function conseguirProductos() {
  return new Promise((resolve, reject) => {
    console.log("Cargando Productos...");

    setTimeout(() => {
      resolve(productos);
      reject(Error("Ha ocurrido un error!!!"));
    }, 1000);
  });
}

function productoComprado(producto) {
  return new Promise((resolve, reject) => {
    console.log("Haciendo Compra...");

    setTimeout(() => {
      resolve({
        nombre: producto,
        cliente: "Ivan Zamora",
      });
      reject(Error("Ha ocurrido un error!!!"));
    }, 1000);
  });
}

function procesandoProductos(venta) {
  console.log("Producto Comprado:", venta);

  productos = productos.filter((producto) =>  producto.nombre != venta.nombre);

  console.log("Productos Disponibles:", productos);
}

function realizarCompra(nombreProducto) {
  return productoComprado(nombreProducto)
    .then((venta) => {
      procesandoProductos(venta);
    });
}

conseguirProductos()
  .then((productos) => {
    console.log("Productos Disponibles:", productos);
    return realizarCompra('Ordenador Gaming');
  })
  .then(() => {
    return realizarCompra('Camara');
  })
  .catch((error) => console.log(error.message))
  .finally(() => {
    console.log("Compra Finalizada");
    console.log("Productos que quedan disponibles:", productos);
  });

