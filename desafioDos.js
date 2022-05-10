/*  Informacion sobre empresa de ventas de instrumentos: 
    Contendra objetos que incluyen, vendedores, compras, instrumentos.
    Finalmente se ejecutan las siguientes funciones empleadas debajo. 

                        Algoritmo Principal(mediante alert).
 
1- Pedir al usuario que ingrese instrumento y datos para obtener informacion.
2- Pedir precio y la marca que busca  
3- Recorrer las marcas ingresadas y obtener el precio 
4- Calcular valor dolares, si es mayor a 1000 u$D se aceptara de lo contrario rechazo.
*/

//#region Funciones Empleadas.

const pedirInformacionInstrumento = () =>
{
  const marca = prompt("Ingrese marca de instrumento");
  const tipo = prompt(" Ingrese tipo de instrumento ");
  const precio = Number(prompt("ingrese precio del instrumento"));

  alert(`Los datos del instrumento son :${tipo} ' de marca ' ${marca} ' y '  ${precio}}`);

  if(!isNaN(precio))
  {
      consultarPrecio(precio);
  }
  
}
const consultarPrecio = (cantidad) =>
{
for(let i =0; i<=cantidad; i++ )
{
    const tipoinstrumento = prompt("Que tipo de instrumento deseas?" + i)
    const precios = Number(prompt(" Cuanto dinero dispones para comprar ?  " + tipoinstrumento));
    verificarPrecioDolares(precios)
}
}
const verificarPrecioDolares =(precio) =>
{
    if(precio >= 1000)
    {
        alert("El instrumento es mayor a 1000 USD y puedes comprarlo" + precio)
    }
    else if(precio<=1000)
    {
        alert("El precio del instrumento es menor a 1000 dolares y no se vende ")
    }
 
}
 pedirInformacionInstrumento();


//#region Objetos y Metodos ...

class Instrumento{
    constructor(marca,tipo,precio)
    {
        this.marca = marca;
        this.tipo = tipo;
        this.precio = precio;
    }
    calcularValorDolares()
    {
        return this.precio / 45;
    }
    calcularDescuento()
    {
        return this.precio * 0.80;
    }
   
}
class Vendedores
{
    constructor(id,nombre,apellido,salario)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    datosVendedores(){
    return this.id + " " + this.nombre + " " + this.apellido + " " + this.salario;           

    }
    sueldoMayorVendedor()
    {
        if(this.salario >= 20000)
        {
            return this.nombre + " " + this.apellido + " " + this.salario;
        }
        else{
            console.log('No es el mayor')
        }
    }
}
class Compra
{
    constructor(instrumento,vendedor)
    {
        this.instrumento= instrumento;
        this.vendedor = vendedor;
    }
    
  
}

//        Ejecuciones de prueba y analizado por Consola. 
        
                    //Vendedores
const vendedor = new Vendedores('1','juan','perez',4000);
const vendedorDos = new Vendedores('2','German','Marr',500000)
const vendedorTres = new Vendedores('3','Lorena','Lomez',100000);
const vendedorCua  = new Vendedores('4','Guillerma','Asunca',5);

console.log(vendedorDos.datosVendedores())
console.log(vendedorTres.datosVendedores())
console.log(vendedorDos.sueldoMayorVendedor())
console.log(vendedorTres.sueldoMayorVendedor())

                        //Compras 

const instrumento = new Instrumento('guitarra','cuerdas',170000);
const instrumentoDos = new Instrumento('bateria','palillos',6000);
const instrumentoTres = new Instrumento('bajo','cuerdas',9000);

console.log(instrumento.calcularValorDolares());
console.log(instrumentoDos.calcularValorDolares());
console.log(instrumentoTres.calcularDescuento());


const compra = new Compra(instrumento,vendedor);
const compraDos =  new Compra(instrumentoDos,vendedorDos)
console.log(compra)
console.log(compraDos)


