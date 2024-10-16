const foods = [
  {
    img: "https://img.freepik.com/premium-photo/indulgent-whispers-symphony-gourmet-ice-cream-sundaes_131796-392.jpg",
    name: 'Gourmet Ice Cream',
    type: 'snacks',
    averagePrices: '$25',
    vendor: 'Sweet Treats Co.',
    location: 'Charming High Street'
  },
  {
    img: "https://img.freepik.com/premium-photo/front-view-burger-with-french-fries_762785-43466.jpg",
    name: 'Truffle Burger',
    type: 'fast food',
    averagePrices: '$18',
    vendor: 'Burger Haven',
    location: 'Downtown District'
  },
  {
    img: "https://www.feelgoodbrandscorp.com/GalleryHandler.ashx?ImageId=15115",
    name: 'Cinnamon Rolls',
    type: 'desserts',
    averagePrices: '15',
    vendor: 'Cinnabon',
    location: 'Uptown Waterfront'
  },
  {
    img: "https://www.allrecipes.com/thmb/vG-of0Xa0W0eodSXPWV1KXD009U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg",
    name: 'Spicy Street Tacos',
    type: 'snacks',
    averagePrices: '$10',
    vendor: 'Taco Stand',
    location: 'Vibrant Market Street'
  },
  {
    img: "https://www.allrecipes.com/thmb/ALYcbI-A_YYn5jiboWYPE2rt310=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-46982-pesto-pasta-with-chicken-DDMFS-4x3-5e043df9d5174cf4ac53612ee0f5b56e.jpg",
    name: 'Homemade Pesto Pasta',
    type: 'dinner',
    averagePrices: '$22',
    vendor: 'Italian Bistro',
    location: 'Little Italy Square'
  },
  {
    img: "https://cdn11.bigcommerce.com/s-eoqdgo/images/stencil/1280x1280/products/3081/7428/donuts1__33638.1521589783.jpg?c=2",
    name: 'Artisan Donuts',
    type: 'desserts',
    averagePrices: '$5',
    vendor: 'Doughnut Delight',
    location: 'Main Square'
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0570/1831/9042/files/P1222495_copy_1024x1024.jpg?v=1629400671",
    name: 'Wood-Fired Margherita Pizza',
    type: 'fast food',
    averagePrices: '$15',
    vendor: 'Pizza Palace',
    location: 'Central Park Food Court'
  },
  {
    img: "https://i.shgcdn.com/5afb96e7-d69e-4257-9045-4483012b55a9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    name: 'Superfood Salad',
    type: 'healthy',
    averagePrices: '$12',
    vendor: 'Green Bowl',
    location: 'Health District'
  },
  {
    img: "https://www.halfmillion.co.uk/wp-content/uploads/2019/08/Half-Million-Banner-Mobile-updated.jpg",
    name: 'Spanish Latte',
    type: 'beverages',
    averagePrices: '$5',
    vendor: 'Brewed Awakenings',
    location: 'Café Corner'
  },
  {
    img: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/884eb864-8e54-415a-9c54-5cd7166a8087-69b0f3cf-c3c1-4fc2-bfc9-727713e50774-retina-large.JPG",
    name: 'Chocolate Chip Cookies',
    type: 'desserts',
    averagePrices: '$3',
    vendor: 'Cookie Craze',
    location: 'Sweet Street'
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKA3my6HmBjHeoLqTdcrb8mTz0Ky4bKtKBNw&s",
    name: 'Crispy Garlic Fries',
    type: 'sides',
    averagePrices: '$7',
    vendor: 'Fry Shack',
    location: 'Food Court'
  },
  {
    img: "https://roiseglobal.co.ke/wp-content/uploads/2023/01/tropical-smoothie-5-1200.jpg",
    name: 'Tropical Smoothie',
    type: 'beverages',
    averagePrices: '$6',
    vendor: 'Smoothie Station',
    location: 'Beachfront Promenade'
  },
  {
    img: "https://www.foodandwine.com/thmb/_ICSrWpOxRdBK2gos50iGsrguJo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-butter-basted-rib-eye-steaks-hero-03-a2687a0b278b46399b89794fc272ef56.jpg",
    name: 'Grilled Ribeye Steak',
    type: 'dinner',
    averagePrices: '$45',
    vendor: 'Steakhouse Grill',
    location: 'Culinary Row'
  },
  {
    img: "https://tornranch.com/assets/img/hotel-chocolates-03.jpg",
    name: 'Luxury Dark Chocolates',
    type: 'desserts',
    averagePrices: '$20',
    vendor: 'Choco Bliss',
    location: 'Luxury Lane'
  },
  {
    img: "https://www.onceuponachef.com/images/2013/04/nigellas-party-popcorn-1200x795.jpg",
    name: 'Gourmet Popcorn',
    type: 'snacks',
    averagePrices: '$8',
    vendor: 'Popcorn Paradise',
    location: 'Festival Grounds'
  },
  {
    img: "https://i0.wp.com/chasety.com/wp-content/uploads/2023/08/realchasecurtis_blueberry_lavender_lemonade_sitting_on_a_cookie_ce5f8270-99df-4aa7-9ede-ab191de61e06.png?fit=735%2C1311&ssl=1",
    name: 'Lavender Lemonade',
    type: 'beverages',
    averagePrices: '$4',
    vendor: 'Lemonade Stand',
    location: 'Botanical Garden'
  }
];

export default foods;