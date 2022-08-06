const catalog = [
    {
        _id: '1',
        title: 'Wood Framed Cork Boards',
        price: 19.99,
        category: 'Office Supplies',
        image: 'corkboard.webp',
    },
    {
        _id: '2',
        title: 'Home Sweet Home Doormat',
        price: 22.99,
        category: 'Home & Decor',
        image: 'doormat.webp'
    },
    {
        _id: '3',
        title: 'Aquarelle Matte Watercolors',
        price: 9.99,
        category: 'Paint',
        image: 'waterpaint.webp'
    },
    {
        _id: '4',
        title: 'Expo® Chisel Tip Dry Erase Marker Set',
        price: 7.99,
        category: 'Office Supplies',
        image: 'expo.webp'
    },
    {
        _id: '5',
        title: 'Matte Acrylic Craft Beads, 7.5mm By Bead Landing',
        price: 15.00,
        category: 'Beads and Jewelry',
        image: 'beads.webp'
    },
];


class DataService{
    
    getCatalog(){
        //call the server
        //get the list of products
        //the server info will eventually go here, for now we are pulling from an array
        return catalog;
    }


}

export default DataService;
