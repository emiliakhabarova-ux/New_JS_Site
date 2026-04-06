var products = [
    {
        id: 1,
        name: "Кросівки 1",
        category: "Adidas",
        price: 4000,
        emoji: "✨",
        desc: "Опис товару 1"
    },
     {
        id: 2,
        name: "Кросівки 1",
        category: "Adidas",
        price: 4000,
        emoji: "✨",
        desc: "Опис товару 2" 
    },
     {
        id: 3,
        name: "Кросівки 1",
        category: "Adidas",
        price: 4000,
        emoji: "✨",
        desc: "Опис товару 3"
    },
     {
        id: 4,
        name: "Кросівки 1",
        category: "Adidas",
        price: 4000,
        emoji: "✨",
        desc: "Опис товару 4"
    },
];

function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
    }
 
    return null;
}
 