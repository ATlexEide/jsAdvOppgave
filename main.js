// Produkter i Alva's Marked
const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// Sorter produkter etter pris mindre enn oppgitt pris
function costLessThan(price) {
  return products.filter((product) => product.price < price);
}
// Returnerer en liste med produktnavn
function getProductNames(inventory) {
  return inventory.map((product) => product.name);
}
console.log(getProductNames(products));
