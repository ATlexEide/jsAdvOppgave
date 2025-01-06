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

// Case 1:

// Sorter produkter etter pris mindre enn oppgitt pris
function costLessThan(price) {
  return products.filter((product) => product.price < price);
}
// Returnerer en liste med produktnavn
function getProductNames(inventory) {
  return inventory.map((product) => product.name);
}
// console.log(getProductNames(products));

// Returnerer en liste over prudukter i gitt kategori
function getProductsInCategory(category, inventory = products) {
  return inventory
    .filter((product) => product.category === category)
    .map((product) => product.name);
}
// console.log(getProductsInCategory("electronics"));

// Sjekker om det finnes prudukter som koster mer en gitt verdi, om ja, legg det til i luksushjørnet
const luxuryCorner = [];
function addToLuxuryCorner(luxuryPrice, inventory = products) {
  const checkValue = (product) => product.price > luxuryPrice;
  if (inventory.some(checkValue)) {
    luxuryCorner.push(
      inventory.filter((product) => product.price > luxuryPrice)
    );
  }
}
// addToLuxuryCorner(1000);
// console.table(luxuryCorner[0]);

// Finn total verdi av inventar
function getInventoryValue(inventory) {
  return inventory.reduce((acc, product) => acc + product.price, 0);
}
console.log(getInventoryValue(products));
