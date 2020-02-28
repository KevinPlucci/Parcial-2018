function mostrar()
{
var planetas=prompt("Escribe un planeta.");
   
    switch(planetas){
        
        case "mercurio" :
        case "venus" :
            alert("Aca hace calor.");
            break;
        
        case "tierra" :
            alert("Aca vivimos");
            break;
        
        case "marte" :
        case "jupiter" :
        case "saturno" :
        case "urano" :
        case "neptuno" :
            alert("Aca hace frio");
            break;
        
            default :
            alert("Este planeta no existe.")
    }













}
