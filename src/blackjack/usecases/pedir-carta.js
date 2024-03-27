

/**
 * Esta función pide una carta
 * @param {Array<String>} deck es un arreglo de cartas de string
 * @returns {String} retorna la carta del deck
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}