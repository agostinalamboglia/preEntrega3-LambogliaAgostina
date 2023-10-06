//array de productos
const productosArray = [
    {id:1, titulo:"pantalon", precio:12000, imagen: "./img/pantalon1.jpg"},
    {id:2, titulo:"remera", precio:6000, imagen: "./img/remera1.jpg"},
    {id:3, titulo:"buzo", precio:15000, imagen: "./img/buzo1.jpg"},
    {id:4, titulo:"zapatillas", precio:20000, imagen: "./img/zapatillas1.jpg"},
];

//aca pongo lo que llamo del dom
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonCategorias = document.querySelectorAll("#boton-categorias");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(){ 
        //llamo array
        productosArray.forEach(producto => {
        /* console.log(producto.titulo);  */
        const div = document.createElement("div"); //div contenedor de c/producto
        div.classList.add("producto"); // pongo class al div
        div.innerHTML= `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h2 class="producto-titulo">${producto.titulo}</h2>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">.   Agregar   .</button>
        </div>`; //al boton agregar le agrego ID del producto
        /* console.log(div); */
        /* console.log(contenedorProductos); */
        contenedorProductos.append(div);
    });
}

cargarProductos();
/* ___________________ */

botonesAgregar = document.querySelectorAll(".producto-agregar");
/* console.log(botonesAgregar); */
    
botonesAgregar.forEach(boton =>{
    boton.addEventListener("click", (e) => agregarAlCarrito(e));
});
    
const productosEnCarrito = [];

function agregarAlCarrito(e){ //agrego elementos al array de productos en carrito
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);
    console.log(productoAgregado);
} 


