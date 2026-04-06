var products = [
     {
    id: 1,
    name: "Sneakers 1",
    category: "Nike",
    price: 4500,
    emoji: "🔥",
    desc: "Trendy sneakers with excellent cushioning and breathable materials for everyday comfort."
  },
  {
    id: 2,
    name: "Sneakers 2",
    category: "Adidas",
    price: 4400,
    emoji: "✨",
    desc: "Stylish and comfortable sneakers with a lightweight sole and modern design."
  },
  {
    id: 3,
    name: "Sneakers 3",
    category: "Puma",
    price: 4000,
    emoji: "⚡",
    desc: "Lightweight sneakers perfect for active days and casual outfits."
  },
  {
    id: 4,
    name: "Sneakers 4",
    category: "New Balance",
    price: 4300,
    emoji: "💫",
    desc: "Classic design with maximum comfort and support for long wear."
  },
  {
    id: 5,
    name: "Sneakers 5",
    category: "Reebok",
    price: 3900,
    emoji: "💥",
    desc: "Durable and practical sneakers for everyday use."
  },
 {
  id: 6,
  name: "Sneakers 6",
  category: "Jordan",
  price: 4600,
  emoji: "🚀",
  desc: "Premium sneakers with iconic design and great comfort for everyday wear."
},
  {
    id: 7,
    name: "Sneakers 7",
    category: "Asics",
    price: 4200,
    emoji: "🌟",
    desc: "Perfect for running with excellent stability and comfort."
  },
  {
  id: 8,
  name: "Sneakers 8",
  category: "Skechers",
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
 