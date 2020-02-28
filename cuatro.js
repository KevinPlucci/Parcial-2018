function mostrar()
{
    var num1;
    var num2;
    var resultado1;
    var resultado2;

        num1= prompt("Ingresar el primer numero.");
        num2= prompt("Ingresar el segundo numero.");
            
            if (num1 > num2){
                resultado1= parseInt(num1)+ parseInt(num2);
                alert("Como el primero es mayor, se suma y da "+resultado1);
            }
            
            if (num1 < num2)
            {
                resultado2= parseInt(num1)- parseInt(num2);
                alert("Como el primero es menor, se resta y da "+resultado2);
            }
            
            if(resultado1 > 10){
                alert("la suma es "+resultado1+ " y supero el 10.");            
            }
            
            if(num1==num2) {
                alert("El primero numero ("+num1+") es igual al segundo numero ("+num2+")");
            }


        }
