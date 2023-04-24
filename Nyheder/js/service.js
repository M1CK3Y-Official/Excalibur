
const service = {};

service.getProductsFromFile = async () => {

        return fetch("../nyheder/js/templates.js")
        .then((dataFromFile) => dataFromFile.json())
        .then((productsInJson) => {

            return productsInJson;

        })

}


service.getProducts = () => [
    {
        id : 0,
        title: 'Tilte of news',
        underline : 'Tag line',
        date: '12.12.12',        
        image : 'https://picsum.photos/300/300?1',
        additionalImages : [
            'https://picsum.photos/768/400?random=10',
            'https://picsum.photos/768/400?random=11',
            'https://picsum.photos/768/400?random=12',
            'https://picsum.photos/768/400?random=13'
        ],
        text : 'Filler text about subject.'
    },
    {
        id : 1,
        title: 'Tilte of news 2',
        underline : 'Beskrivelse',
        date: '13.11.22',
        image : 'https://picsum.photos/300/300?2',
        additionalImages : [
            'https://picsum.photos/768/400?random=10',
            'https://picsum.photos/768/400?random=11',
            'https://picsum.photos/768/400?random=12',
            'https://picsum.photos/768/400?random=13'
        ],
        text : 'Filler text about subject.'
    }
]

export default service;