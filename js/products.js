var products = [
     {
    id: 1,
    name: "Nike",
    category: "Sneakers 1",
    price: 4500,
    emoji: "🔥",
    desc: "Trendy sneakers with excellent cushioning and breathable materials for everyday comfort."
  },
  {
    id: 2,
    name: "Adidas 2",
    category: "Sneakers 2",
    price: 4400,
    emoji: "✨",
    desc: "Stylish and comfortable sneakers with a lightweight sole and modern design."
  },
  {
    id: 3,
    name: "Puma",
    category: "Sneakers 3",
    price: 4000,
    emoji: "⚡",
    desc: "Lightweight sneakers perfect for active days and casual outfits."
  },
  {
    id: 4,
    name: "New Balance",
    category: "Sneakers 4",
    price: 4300,
    emoji: "💫",
    desc: "Classic design with maximum comfort and support for long wear."
  },
  {
    id: 5,
    name: "Reebok",
    category: "Sneakers 5",
    price: 3900,
    emoji: "💥",
    desc: "Durable and practical sneakers for everyday use."
  },
 {
  id: 6,
  name: "Jordan",
  category: "Sneakers 6",
  price: 4600,
  emoji: "🚀",
  desc: "Premium sneakers with iconic design and great comfort for everyday wear."
},
  {
    id: 7,
    name: "Asics",
    category: "Sneakers 7",
    price: 4200,
    emoji: "🌟",
    desc: "Perfect for running with excellent stability and comfort."
  },
  {
  id: 8,
  name: "Skechers",
  category: "Sneakers 8",
  price: 4600,
  emoji: "🚀",
  desc: "Comfortable everyday sneakers with soft cushioning and a lightweight feel."
},
];
function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
    }
 
    return null;
}
 