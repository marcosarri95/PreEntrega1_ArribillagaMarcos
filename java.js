
let fin = false;
let opcion;
let pago;
let malaEleccion = false;

do{ 
    console.clear();
    console.log("¿Que vuelo de los disponibles desea comprar?");
    console.log("1 - Buenos aires - New York. 12:40hs desde Ezeiza");
    console.log("2 - Santa Fe - New York. 12:30hs desde Sauce Viejo");
    console.log("3 - Entre Rios - New York. 11:30hs desde Parana");
    opcion = prompt("Ingrese 1, 2 o 3 en función de su preferencia");

    switch(opcion){
        case '1':
        MetodoPago(500000,'1');
        break;
        case '2':
        MetodoPago(700000,'2');
        break;
        case '3':
        MetodoPago(750000,'3');
        break;
        case "":
        fin = true;
        break;
        default:
        console.clear();
        console.log("Opción errónea, por favor, vuelva a intentar la elección");
        malaEleccion=true;
        break;
    }

    if(malaEleccion==false){
        do{
        opcion = prompt("¿Desea usted continuar comprando pasajes?, 'S' para comprar nuevamente, 'N' para no");
        if (opcion.toUpperCase() == 'S'){
            fin = false;
            console.clear();
        }
        else if (opcion.toUpperCase() == 'N'){
            fin = true;
            console.clear();
            console.log("Gracias por comprar, vuelva pronto!");   
        }
        else{
            console.log("Opcion incorrecta, elija S o N"); 
        }
        } while (opcion.toUpperCase()!='S' && opcion.toUpperCase()!='N');
    }
    else{
        fin = false;
        malaEleccion=false;
    }

}while (fin == false);


function MetodoPago (precio, opción){
    let pago = 0;
    let precioF;
    console.clear();
    switch(opcion){
    case '1':
        do{
        console.log("El valor del vuelo Buenos aires - New York es de $" + precio);
        console.log("Metodos de pago:");
        console.log("1 - Efectivo: $" + precio);
        console.log("2 - Débito: $" + precio);
        console.log("3 - Credito  de cualquier banco en 3 cuotas: $" + precio*1.2 + " - 20% interés");
        console.log("4 - Credito  de cualquier banco en 6 cuotas: $" + precio*1.3 + " - 30% interés");
        console.log("5 - Credito  de cualquier banco en 12 cuotas: $" + precio*1.6 + " - 60% interés");
        pago = prompt("Ingrese 1, 2, etc en función de su preferencia de pago");
        precioF = costo(pago, precio);
        }while (precioF==0);
        console.log("El valor final de su viaje será de $"+ precioF);
    break;
    case '2':
        do{ 
        console.log("El valor del vuelo Santa Fe - New York es de $" + precio);
        console.log("Metodos de pago:");
        console.log("1 - Efectivo: $" + precio);
        console.log("2 - Débito: $" + precio);
        console.log("3 - Credito  de cualquier banco en 3 cuotas: $" + precio*1.2 + " - 20% interés");
        console.log("4 - Credito  de cualquier banco en 6 cuotas: $" + precio*1.3 + " - 30% interés");
        console.log("5 - Credito  de cualquier banco en 12 cuotas: $" + precio*1.6 + " - 60% interés");
        pago = prompt("Ingrese 1, 2, etc en función de su preferencia de pago");
        precioF = costo(pago, precio);
        }while (precioF==0);
        console.log("El valor final de su viaje será de $"+ precioF);
    break;
    case '3':
        do{ 
        console.log("El valor del vuelo Parana- New York es de $" + precio);
        console.log("Metodos de pago:");
        console.log("1 - Efectivo: $" + precio);
        console.log("2 - Débito: $" + precio);
        console.log("3 - Credito  de cualquier banco en 3 cuotas: $" + precio*1.2 + " - 20% interés");
        console.log("4 - Credito  de cualquier banco en 6 cuotas: $" + precio*1.3 + " - 30% interés");
        console.log("5 - Credito  de cualquier banco en 12 cuotas: $" + precio*1.6 + " - 60% interés");
        pago = prompt("Ingrese 1, 2, etc en función de su preferencia de pago");
        precioF = costo(pago, precio);
        }while (precioF==0);
        console.log("El valor final de su viaje será de $"+ precioF);
        break;
    }}
    


function costo (a, b){
    switch(a){
    case '1':
    return b;
    break;
    case '2':
    return b;
    break;
    case '3':
    return b*1.2;
    break;      
    case '4':
    return b*1.3;
    break;
    case '5':
    return b*1.6;
    break;
    default:
    console.clear();
    console.log("Metodo de pago incorrecto, por favor ingreselo nuevamente");
    return 0;
    break;
}}