// Preview template
export const arrangementTemplate = (arrangementItem) => `<article>
        <h3>${arrangementItem.title}</h3>
        <p>Planlagt: ${arrangementItem.date}</p>
        <p>Sidste tildmelding: ${arrangementItem.lastCall}</p>
        <img src="${arrangementItem.headerImg}" alt="${arrangementItem.imgAlt}">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error rerum consequatur molestiae? Minus, expedita!</p>
        <div><a href="Arrangement.html?id=${arrangementItem.id}">Læs mere</a></div>
    </article>`

// Fuld artikle
export const arrangementArtikle = (arrangementItem) => `<article>
    <div>
        <h1>${arrangementItem.title}</h1>
        <p class="date">Planlagt: ${arrangementItem.date}</p>
        <p class="date">Sidste tildmelding: ${arrangementItem.lastCall}</p>
        <p>${arrangementItem.text}</p>
        <p>${arrangementItem.text}</p>
        <div class="join-button">
            <a href="../Login/">Login</a>
            <a href="#">Tilmeld Kampagne</a>
        </div>
    </div>
    <div><img src="${arrangementItem.headerImg}" alt="${arrangementItem.imgAlt}" class="headerImg"></div>
    </article>`