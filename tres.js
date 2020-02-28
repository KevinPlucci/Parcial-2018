function mostrar()
{
var precio;
var descuento;
precio= document.getElementById("elPrecioFinal").value;    
    precio = prompt("Ingresar el precio.");
    descuento = prompt ("Ingresar descuento.");
        descuento = parseInt(precio)* parseInt(descuento)/100;
            document.getElementById("elPrecioFinal").value = descuento ;









}
