const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Keyboard', price: 70},
    {id: 3, title: 'Mouse', price: 46},
    {id: 4, title: 'Gamepad', price: 68},
    {id: 5, title: 'Chair', price: 168},
    {id: 6, title: 'Lamp'},
];

const renderProduct = (title, price=0) => `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector(`.products`).innerHTML = productList.join(' ');
    //Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
};

renderPage(products);

