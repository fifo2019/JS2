class Products {
    constructor(container='.products') {
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.init()
    }
    init(){
        this._fetchGoods();
        this._render();
        this.priceAllProducts();
    }
    _fetchGoods(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Keyboard', price: 70},
            {id: 3, title: 'Mouse', price: 46},
            {id: 4, title: 'Gamepad', price: 68},
            {id: 5, title: 'Chair', price: 168},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
    priceAllProducts(){
        let totalSum = 0;
        for (let item of this.data) {
            totalSum += item.price;
        }
        console.log(totalSum);
    }
}


class ProductItem {
    constructor(product, img="https://placehold.it/200x150") {
        this.price = product.price;
        this.title = product.title;
        this.id = product.id;
        this.img = img
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

const products = new Products();


class Basket {
    constructor(){
        // this.arrayProducts = []; - будут хранится выбранные товары
        // this.quantity = 0; - количество товаров в корзине
        // this.totalSum = 0; - общая сумма товаров находящихся в корзине
    }
    // putProductsInBasket(){} - добавляем товар в корзину
    // calculQuantityInBasket(){} - общее количество товаров в корзине
    // calculSumInBasket(){} - общая сумма товаров в корзине
    // redirectProductsInBasket(){} - редактировать товар в корзине(количество)
    // deleteProductsOfBasket(){} - удаление товара
}


