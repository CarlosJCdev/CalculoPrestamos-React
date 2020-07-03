import React from 'react';

const Resultado = ({ total, cantidad, plazo }) => (
    <div className="u-full-width resultado">
        <p>La cantidad solicitada es: ${cantidad}</p>
        <p>A pagar en: ${plazo} meses</p>
      {/* EL toFixed nos ayuda a definir la canitdad de centavos o decimales al resultado */}
        <p>Su pago mensual es de: ${(total / plazo).toFixed(2)}</p>
        <p>Total a pagar: ${(total).toFixed(2)}</p>
    </div>
);


export default Resultado;