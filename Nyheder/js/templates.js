// Preview template
export const newsTemplate = (newsItem) => `<article>
    <h3>${newsItem.title}</h3>
    <p>${newsItem.date}</p>
    <img src="${newsItem.headerImg}" alt="${newsItem.imgAlt}">
    <div><a href="Nyhed.html?id=${newsItem.id}">Læs mere</a></div>
</article>`

// Fuld artikle
export const newsArtikle = (newsItem) => `<article>
        <h1>${newsItem.title}</h1>
        <h3>${newsItem.underline}</h3>
        <p class="date">${newsItem.date}</p>
        <img src="${newsItem.headerImg}" alt="${newsItem.imgAlt}" class="headerImg">
        <p>${newsItem.text}</p>
        <p>${newsItem.text}</p>
    </article>`