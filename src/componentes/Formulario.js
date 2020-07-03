import React, { useState, Fragment } from 'react';
import { calcularTotal } from '../Helpers';

//Lo que hace que las app de react son los States, todo lo que sea interactivo con el user por ejemplo debe tener un useState
//El cual debe fluir siempre de un componente padre a un hijo, por ello lo hemos definido en App.js
//Ahora debemos leerlos en este componente, lo podemos hacer de dos maneras con props o distructuring, usaremos el ultimo
const Formulario = (props) => {
    //Cuando tenemos muchos elementos de referencia de componentes lo mejor es pasar como parametro a props, y luego 
    //crear una nueva variable e instanciar el props
    const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;

    //Definimos un state para un mensaje de error, el cual inicialmente es false, por que no hay erro hasta que el usuario, realize una opcion
    const [error, guardarError] = useState(false);

    //Cuando el usuario hace submit
    const calcularPrestamo = e => {
        e.preventDefault();
        //Validamos los campos del formulario.......................
        if (cantidad === 0 || plazo === '') {
            //De esta manera si no estan completos los campos del formulario, el valor del state cambia de false a true
            guardarError(true);
            return;
        }
        //Eliminamos el error, para que el usuario, pueda volver a intentar otra consulta
        guardarError(false);


        
        //Habilitamos el spinner
        guardarCargando(true);
        //Definimos un tiempo en el calculo de los valores 
        setTimeout(()=>{
                 //Realizamos el calculo de la cotizacion......................
        const total = calcularTotal(cantidad, plazo);
        //Una vez calculado, guardamos los resultados arrojados
        guardarTotal(total);

        //Desabilitamos el spinner
            guardarCargando(false);
        }, 2000);
   
        
    }

    return (
        <Fragment>
            {/* RECORDAR QUE CUANDO QUEREMOS AGREGAR MAS DE UN ELEMENTO AL RETURN, DEBEMOS CUBRIR TODO CON UN FRAGMENT, E IMPORTARLO
        Defino una funcion para calcular el prestamo en base a los datos que selecciono el usuario */}

            {/* creamos una condicion, en base al state del metodo guardarErro, si es true muestra el mensaje, si es false no muestra nada */}
            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            //Con este evento capturamos el cambio en el inut y lo mandamos a la funcion leerCantidad
                            //Usamos el parseInt, por que el valor que nos retorna el onChange es un string
                            //Podemos crear la funcion guardaCantidad aparte o como en este caso definirla en el propio evento
                            onChange={e => guardarCantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            //Realizamos la misma captura del evento y enviarmos el valor al metodo
                            onChange={e => guardarPlazo(parseInt(e.target.value))}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;
