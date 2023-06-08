const quantity_Btn = Array.from(document.querySelectorAll('.product__quantity-control'))
const addBascet_Btn = Array.from(document.querySelectorAll('.product__add'));
//-----------------------------------------------------------//
const cart_Block = document.querySelector('.cart'); // Блок корзины
//const cart_list = Array.from(cart_Block.querySelectorAll(".cart__product")); // Массив корзины
const cart_clear = cart_Block.querySelector('#clearCarts') // Отчистка карзины
//-----------------------------------------------------------//
console.log();
let controlArray = [];

quantity_Btn.forEach((item) => {
   item.addEventListener('click', () => {
      if (item.classList.contains('product__quantity-control_inc')) {
         const prodQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
         prodQuantity.innerText++;
      } else {
         const prodQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value')
         if (prodQuantity.innerText > 1) {
            prodQuantity.innerText--;
         } else {
            prodQuantity.innerText = 0;
         }
      }
   })
})

cart_clear.addEventListener('click', () => {
   const defoultCart = document.createElement('div')
   defoultCart.classList = 'cart__product';
   defoultCart.dataset.id = '0';
   defoultCart.insertAdjacentHTML("afterbegin", '<img class="cart__product-image" src="image.png"><div class="cart__product-count">0</div');

   const clear = cart_Block.querySelector('.cart__products');
   while (clear.firstChild) {
      clear.removeChild(clear.lastChild);
   }

   cart_Block.querySelector('.cart__products').appendChild(defoultCart);
})

addBascet_Btn.forEach((item) => {
   item.addEventListener('click', () => {
      bascetWork(item);
   })
});



function bascetWork(element) {
   const prod_id = element.closest('.product').dataset.id; // id Продукта
   const prod_img = element.closest('.product').querySelector('.product__image').src; // Картинка продукта
   const prod_Quantity_val = element.closest('.product').querySelector('.product__quantity-value').innerText; // количество продукта

   if (cart_Block.querySelector('.cart__product').dataset.id == 0) {
      cart_Block.querySelector('.cart__product').dataset.id = prod_id;
      cart_Block.querySelector('.cart__product-image').src = prod_img;
      cart_Block.querySelector('.cart__product-count').innerText = prod_Quantity_val;
   } else {
      const findNeed = cart_Block.querySelector('.cart__products').querySelector(`'[data-id="${prod_id}"]'`);
      if (findNeed) {
         findNeed.querySelector('.cart__product-count').innerText = prod_Quantity_val;
      } else {
         const newBlock = cart_Block.querySelector('.cart__product').cloneNode(true);
         newBlock.dataset.id = prod_id;
         newBlock.querySelector('img').src = prod_img;
         newBlock.querySelector('.cart__product-count').innerText = prod_Quantity_val;
         const listProds = cart_Block.querySelector('.cart__products');
         listProds.insertBefore(newBlock, null);
      }
   }
};

//cart_Block.querySelector('.cart__product-count').innerText = prod_Quantity_val;