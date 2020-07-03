/*Es recomendable generar un archivo de este tipo, en donde agreguemos codigo reutilizable con el objetivo de no saturar de codigo los
componentes */
export function calcularTotal(cantidad, plazo) {


    /* Esta es la logica para calcular las cantidades
            //Si el usuario pide una cantidad alta, la cantidad de intereses es menor,
            //Pero si pide mas meses, la cantidad de intereses es mayor
    0-1000 = 25% Si se pide de 0 a 1000, el interes es del 25% hacia lo que pide
    1001-5000 = 20%
    5001-10000 = 15%
    mas de 10000 = 10%
    */
    let totalCantidad;
    if (cantidad <= 1000) {
        totalCantidad = cantidad * .25;
    } else if (cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * .20;
    } else if (cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .150;
    } else {
        totalCantidad = cantidad * .10;
    }

    /*Calcular el plazo, entre mas tarde en pagar, mas intereses va a pagar
    3=15%
    6=10%
    12=15%
    24=20%
    */
    let totalPlazo = 0;

    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .10;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .20;
            break;
        default:
            break;
    }
    return totalPlazo + totalCantidad + cantidad;
}
