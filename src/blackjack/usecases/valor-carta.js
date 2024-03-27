

/**
 * Esta función le da un valor a la carta
 * @param {String} carta
 * @returns {Number} retorna el valor de la carta numérica
 */

// Esta función le da valores numéricos a las cartas
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}