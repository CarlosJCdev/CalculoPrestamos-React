import React, { Fragment } from 'react';
//Un componente siempre es una funcion
//Con props, mandamos informacion desde el componente principal(App.js), En React, podemos combinar codigo HTML y JavaScrip con {} dentro del hmtl
//Cuando querramos agregar mas de un elemento en el return, debemos recordar
//usar un fragment que contenga a los demas elementos, se debe importar el fragment
//EN lugar de usar el props, podemos uzar destructurign, pasando como parametro el noombre de la variable
//De esta manera:   fuction Header({titulo}), y dentro del fragment: <h1>{titulo}</h1>
//Esta forma de crear componentes se llama FUCTION DECLARATION
/* function Header(props) {
       //
    console.log(props);
    return (
        <Fragment>
            <h1>{props.titulo}</h1>
            <p>{props.descipcion}</p>
        </Fragment>
    )
} */
//Esta es otra forma de crear componentes con FUCTION EXPRESS, tipeando su ssnipet, con sfc, nos crea todo el cuerpo
//En esta manera, estamo usando destructuring en lugar de los props
//El fragment tambien no es necesario, podemos dejarlo sin el 
const Header = ({ titulo }) => {
    return (
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    );
}
/* LA DIFERENCIA ENTRE LAS DOS MANERAS ES QUE EN EL PRIMERO OBLIGATORIAMENTE SE DEBE USAR EL RETURN, PERO EN EL 
SEGUNDO PODEMOS QUITARLO YA QUE LA FUNCION DA POR ECHO EL RETURN Y POR ELL NO ES NECESARIO Y POR ENDE
EL CODIGO SE VE MEJOR*/

export default Header;
//1# Creamos la funcionalidad del componente
//2# Mandarlo llamar desde el App.js, el cual es el elemento principal para toda la app

