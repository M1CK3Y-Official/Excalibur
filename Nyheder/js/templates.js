// Preview template
export const newsTemplate = (newsItem) => `<article>
    <h3>${newsItem.title}</h3>
    <p>${newsItem.date}</p>
    <img src="${newsItem.headerImg}" alt="${newsItem.imgAlt}">
    <div><a href="Nyhed.html?id=${newsItem.id}">Læs mere</a></div>
</article>`

// Fuld artikle
export const newsArtikle = (newsItem) => `<article>
        <h3>${newsItem.title}</h3>
        <h4>${newsItem.underline}</h4>
        <p class="date">${newsItem.date}</p>
        <img src="${newsItem.headerImg}" alt="${newsItem.imgAlt}">
        <p>${newsItem.text}</p>
        <p>${newsItem.text}</p>
    </article>`