//array de productos
const productos = [
    {id:1, nombre:"pantalon", precio:12000, imagen: "img"},
    {id:2, nombre:"remera", precio:6000, imagen: "img"},
    {id:3, nombre:"buzo", precio:15000, imagen: "img"},
    {id:4, nombre:"zapatillas", precio:20000, imagen: "img"},
];

function porcentaje(monto) {
    let resultado = monto * 0.9
    return resultado
}

 //declaro clase carrito
class carrito{
    constructor(){
        //array
        this.productos=[]; 
        this.cantMaxProd= 5;
        this.totalAPagarMax= 14000;}

        //metodos
        agregarProducto(producto, cantidad){
            const item = {prenda:producto, cuantos:cantidad};
            console.log(item);
            this.productos.push(item);
        }

        totalProductos(){
            let total = 0;
            for (const item of this.productos){
                total += item.cuantos;
            }
            return total;
        }

        totalAPagar(){
            let total = 0;
            for (const item of this.productos){
                total += item.prenda.precio * item.cuantos;
            }
            return total;
        }
        
        aplicarDescuento() {
            let total=this.totalAPagar();

            if ((this.totalProductos() > this.cantMaxProd) || (this.totalAPagar() > this.totalAPagarMax)){ //comparo
                total = porcentaje(total)//aplico descuento
            }

            return total;
        }
    }


    const carritoA = new carrito();
 
let salida = "";

for (const producto of productos) {
    salida += producto.id + "-" + producto.nombre + "$" + producto.precio + "\n";
 }

let productoSeleccionado;

while(productoSeleccionado != 0){
    productoSeleccionado = parseInt(prompt("Selecciona los artículos que deseas! *Si tu compra supera los 5 items o si suma $14000+, tenes %10 de descuento.         -presiona 0 para salir\n\n" + salida));
    
    if (productoSeleccionado == 0){
        break;
    }

    let producto = productos[productoSeleccionado - 1]; //obtener el prod seleccionado
    let cantidad = parseInt(prompt("Selecciona la cantidad que deseas"))
    carritoA.agregarProducto(producto, cantidad); //agrego el prod seleccionado al carro
 }

salida = "Total de productos: " + carritoA.totalProductos() + "\n";
salida += "Total de la compra: $" + carritoA.totalAPagar() + "\n";
salida += "Importe a abonar con descuento: $" + carritoA.aplicarDescuento();
alert(salida);