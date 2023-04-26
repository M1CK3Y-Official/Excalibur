const service = {};

// Det er de forskellige artiklers indhold
service.getProducts = {
    products : [
        {
            id : 0,
            title: 'Tilte of Arrangement',
            date: '01.07.2023',
            lastCall : '15.05.2023',        
            headerImg : 'https://picsum.photos/300/170?1',
            imgAlt : 'Billde',
            Images : [
                'https://picsum.photos/768/400?random=10',
                'https://picsum.photos/768/400?random=11',
                'https://picsum.photos/768/400?random=12',
                'https://picsum.photos/768/400?random=13'
            ],
            text : 'Filler text about subject.'
        },
        {
            id : 1,
            title: 'Tilte',
            date: '12.12.2022',
            lastCall : '11.11.2022',
            headerImg : 'https://picsum.photos/300/170?2',
            imgAlt : 'Billde',
            Images : [
                'https://picsum.photos/768/400?random=10',
                'https://picsum.photos/768/400?random=11',
                'https://picsum.photos/768/400?random=12',
                'https://picsum.photos/768/400?random=13'
            ],
            text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error rerum consequatur molestiae? Minus, expedita!'
        }
    ]
}
export default service;