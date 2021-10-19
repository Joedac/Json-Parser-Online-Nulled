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
        },
        {
            quote: "Parse tes morts sur le vieux port",
            author: "Gul"
        },
        {
            quote: "J'ai une de ces envies de parser",
            author: "Guy"
        },
        {
            quote: "C'est à se parser le cul par terre",
            author: "Guy"
        },
        {
            quote: "Parse ta culotte, c'est moi qui pilote",
            author: "Guy"
        },
        {
            quote: "Je parse donc je suis",
            author: "Guy Descartes"
        },
        {
            quote: "Parse-toi, pauv' con !",
            author: "Sarkoguy"
        },
        {
            quote: "Achetez le dernier livre d’Eric Guymmour : “Le parser n'a pas dit son dernier mot”",
            author: "Guy"
        },
        {
            quote: "Le parser, c'est moi !",
            author: "Jean-Guy Mélenchon"
        },
        {
            quote: "Faut pas parser mémé dans les orties",
            author: "Anonyme"
        },
        {
            quote: "Je vais démouler un json",
            author: "Anonyme"
        },
        {
            quote: "Ca parse comme dans du beurre",
            author: "Rocco Siffreguy"
        },
        {
            quote: "Et quand il pète il parse son slip",
            author: "Patrick Guybastien"
        },
        {
            quote: "Va bien parser ton cul ",
            author: "Guynabelle"
        },
        {
            quote: "Il s’agirait de parser",
            author: "Guychel"
        },
        {
            quote: "Enfant de parseur",
            author: "Guyrome"
        },
        {
            quote: "J’ai envie de parser des gens",
            author: "Jerome Caguylais"
        },
        {
            quote: "Parsez comme vous etes",
            author: "Ronald McGuynald"
        },
        {
            quote: "Je parsais juste par là et je l'ai suivie",
            author: "Guy Georges"
        }
    ]
    let container = document.querySelector('#quotes');
    let quote = pickRandomValue(quotes);
    container.innerHTML = '<q>' + quote.quote + '</q>' + ' - ' + quote.author;
}

quotes();
