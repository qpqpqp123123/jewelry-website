const lingzaoProducts = [
  {
    id: 1,
    name: "云纹玉佩",
    price: "¥8,800",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "竹韵手镯",
    price: "¥12,600",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "莲心吊坠",
    price: "¥6,200",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "梅影耳环",
    price: "¥5,900",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80"
  }
];

const longcangProducts = [
  {
    id: 5,
    name: "凤凰于飞",
    price: "¥28,800",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "龙腾四海",
    price: "¥32,600",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "如意吉祥",
    price: "¥19,200",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "花开富贵",
    price: "¥29,800",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
  }
];

function renderProducts(products, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-thumb">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-meta">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
          </div>
        </article>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(lingzaoProducts, "lingzaoGrid");
  renderProducts(longcangProducts, "longcangGrid");
});