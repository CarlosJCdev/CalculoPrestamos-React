import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';



function App() {

  //Deifnimos el useState, el cual nos retorna dos valores, una variable que contendra el valor, y una funcion que guardara el estado
  //Despues debemos definir al useState un valor inicial, en este caso como son numeros colocamos 0, asi cada vez que usemos la funcion
  // el valor cambiara, EL VALOR DEL STATE SERA EL QUE TENDRA LA CANTIDAD
  //Este useSate, es de formulario, pero como los componentes van de padre a hijo debemos definirlo aqui.....
  const [cantidad, guardarCantidad] = useState(0);
  //Definimos otro userState, para el select
  //Definimos el valor del state como String vacio, por que el primer elemento del select es un elemento vacio
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  //State para la carga del snnipet
  const [cargando, guardarCargando] = useState(false);

  //Definimos una carga condicional, para mostrar el resultado de la consulta y quitar el mensaje que esta por default
  let componente;

  if (cargando) {
    componente = <Spinner />
  }
  else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }

  return (
    /*Dentro del Return, siempre debe de haber un elemento que contega en este caso
    a un o los componentes, de lo contrario arroja un error */
    <Fragment>
      <Header
        titulo="Cotizador de prestamos"
      />
      <header className="App-header">

        <div className="container">
          <Formulario
            //Deifnimos los valores que retorna nuestro useState----
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            //La estructura de esto es prop= nombreVariable, uso nombres iguales para no enredarme
            guardarPlazo={guardarPlazo}
            guardarTotal={guardarTotal}
            guardarCargando={guardarCargando}
          />
          <div className="mensajes">
            {/* Es la variable en donde guardamos el estado de la carga condicional para mostrar el elemento por defult o el resultado*/}
            {componente}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default App;
//EN REACT, LA INFORMACION VA DEL COMPONENTE PRINCIPAL QUE ES ESTE, HACIA LOS HIJOS, y una de varias opciones es con PROPS

