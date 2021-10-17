/**
 * retourne un élément du tableau aléatoirement
 * @param array
 * @returns {*}
 */
function pickRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * affiche une citation aléatoirement ( que c'est drôle ! )
 */
function quotes() {
    let quotes = [
        {
            quote: "Parse moi tout là dedans, j'suis pas ta mère !",
            author: "Guy"
        },
        {
            quote: "C'est un gros gros json ça dis donc !",
            author: "Guy"
        },
        {
            quote: "Fucking Json of a bitch",
            author: "Guy"
        }
    ]
    let container = document.querySelector('#quotes');
    let quote = pickRandomValue(quotes);
    container.innerHTML = '<q>' + quote.quote + '</q>' + ' auteur : ' + quote.author;
}

quotes();
