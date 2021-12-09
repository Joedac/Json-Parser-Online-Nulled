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

    /*******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *
     * Bah alors mon cochon, tu veux voir toutes les citations d'un coup ?
     * Tu préfères pas plutot te laisser surprendre à chaque visite ? :)
     *
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     *******************************************************************************
     */

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
            quote: "Parse ta mère sur la Canebière",
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
            quote: "Achetez le dernier livre d’Eric Guymmour : “Le parseur n'a pas dit son dernier mot”",
            author: "Guy"
        },
        {
            quote: "Le parseur, c'est moi !",
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
            author: "Guyrome Pierre"
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
        },
        {
            quote: "Ca parse comme une lettre à la poste",
            author: "Anonyme"
        },
        {
            quote: "Parce que nous le parsons bien",
            author: "L'oréguy"
        },
        {
            quote: "CAR C'EST NOTRE PARSEEEEEEEUUUUUUUUUUURRR",
            author: "Emmanuel Guycron"
        },
        {
            quote: "Allo maman ? Clauguy à l'appareil ! Dis, je viens de me faire parser.",
            author: "Clauguy Focan"
        },
        {
            quote: "Eh monsieur Pierre ! Y'a un monsieur très malpoli qu'a téléphoné, il voulait parser Therèse !",
            author: "Zezette épouse Guy"
        },
        {
            quote: "On peut parser mille fois mille json, non, on peut parser une fois mille json, mais on ne peut pas parser mille fois mille json. Non...",
            author: "Guy"
        },
        {
            quote: "Il est mignon monsieur JSON, il est méchant monsieur Brochant !",
            author: "Guy Brochant"
        },
        {
            quote: "'Cause this is parser, parser night !",
            author: "Michael Json"
        },
        {
            quote: "Oh...you touch my tra la la... Mmm...my gros json",
            author: "Guyther"
        },
        {
            quote: "Tu peux me parser le sel stp ?",
            author: "Anonyme"
        },
        {
            quote: "Ben parsons !",
            author: "Eric Guymmour"
        }
    ]
    let container = document.querySelector('#quotes');
    let quote = pickRandomValue(quotes);
    container.innerHTML = '<span><q>' + quote.quote + '</q>' + ' - ' + quote.author + '</span>';
}

quotes();
