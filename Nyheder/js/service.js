const service = {};

// Det er de forskellige artiklers indhold
service.getProducts = {
    products : [
        {
            id : 0,
            title: 'Tilte of news',
            underline : 'Tag line',
            date: '12.12.12',        
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
            title: 'Tilte of news 2',
            underline : 'Beskrivelse',
            date: '13.11.22',
            headerImg : 'https://picsum.photos/300/170?2',
            imgAlt : 'Billde',
            Images : [
                'https://picsum.photos/768/400?random=10',
                'https://picsum.photos/768/400?random=11',
                'https://picsum.photos/768/400?random=12',
                'https://picsum.photos/768/400?random=13'
            ],
            text : 'Filler text about subject.'
        }
    ]
}
export default service;