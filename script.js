// 珠宝产品数据（你可以根据实际情况修改）
const products = [
    { id: 1, name: "钻石项链", price: "¥12,800", image: "https://via.placeholder.com/400x400/E8D5C4/333?text=钻石项链" },
    { id: 2, name: "翡翠手镯", price: "¥28,600", image: "https://via.placeholder.com/400x400/C4E8D5/333?text=翡翠手镯" },
    { id: 3, name: "珍珠耳环", price: "¥5,200", image: "https://via.placeholder.com/400x400/D5C4E8/333?text=珍珠耳环" },
    { id: 4, name: "黄金戒指", price: "¥8,900", image: "https://via.placeholder.com/400x400/E8E5C4/333?text=黄金戒指" },
    { id: 5, name: "红宝石吊坠", price: "¥15,600", image: "https://via.placeholder.com/400x400/E8C4C4/333?text=红宝石吊坠" },
    { id: 6, name: "蓝宝石胸针", price: "¥22,300", image: "https://via.placeholder.com/400x400/C4D5E8/333?text=蓝宝石胸针" },
    { id: 7, name: "祖母绿手链", price: "¥35,800", image: "https://via.placeholder.com/400x400/C4E8D5/333?text=祖母绿手链" },
    { id: 8, name: "白金项链", price: "¥18,500", image: "https://via.placeholder.com/400x400/E8E8E8/333?text=白金项链" },
    { id: 9, name: "碧玺戒指", price: "¥9,800", image: "https://via.placeholder.com/400x400/E8C4D5/333?text=碧玺戒指" },
    { id: 10, name: "玉石挂件", price: "¥6,500", image: "https://via.placeholder.com/400x400/D5E8C4/333?text=玉石挂件" },
    { id: 11, name: "钻石耳钉", price: "¥11,200", image: "https://via.placeholder.com/400x400/E8D5C4/333?text=钻石耳钉" },
    { id: 12, name: "翡翠吊坠", price: "¥19,900", image: "https://via.placeholder.com/400x400/C4E8D5/333?text=翡翠吊坠" },
    { id: 13, name: "珍珠项链", price: "¥7,600", image: "https://via.placeholder.com/400x400/D5C4E8/333?text=珍珠项链" },
    { id: 14, name: "黄金手镯", price: "¥16,800", image: "https://via.placeholder.com/400x400/E8E5C4/333?text=黄金手镯" },
    { id: 15, name: "红宝石戒指", price: "¥25,600", image: "https://via.placeholder.com/400x400/E8C4C4/333?text=红宝石戒指" },
    { id: 16, name: "蓝宝石项链", price: "¥32,800", image: "https://via.placeholder.com/400x400/C4D5E8/333?text=蓝宝石项链" },
    { id: 17, name: "祖母绿耳环", price: "¥28,900", image: "https://via.placeholder.com/400x400/C4E8D5/333?text=祖母绿耳环" },
    { id: 18, name: "白金戒指", price: "¥13,500", image: "https://via.placeholder.com/400x400/E8E8E8/333?text=白金戒指" },
    { id: 19, name: "碧玺手链", price: "¥14,800", image: "https://via.placeholder.com/400x400/E8C4D5/333?text=碧玺手链" },
    { id: 20, name: "玉石手镯", price: "¥21,600", image: "https://via.placeholder.com/400x400/D5E8C4/333?text=玉石手镯" }
];

// 渲染产品列表
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 咨询按钮点击事件
function openConsult() {
    alert('感谢您的咨询！\n\n请通过以下方式联系我们：\n电话：138-0000-0000\n邮箱：contact@jewelry.com\n\n我们将竭诚为您服务！');
}

// 页面加载完成后渲染产品
document.addEventListener('DOMContentLoaded', renderProducts);
