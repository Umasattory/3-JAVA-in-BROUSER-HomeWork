const quantity_Btn = Array.from(document.querySelectorAll('.product__quantity-control'))
const addBascet_Btn = Array.from(document.querySelectorAll('.product__add'));
//------------------------------------------------------------------------------------------//
const cart_Block = document.querySelector('.cart'); // Блок корзины
const cart_list = Array.from(cart_Block.querySelectorAll(".cart__product")); // Массив корзины
const cart_clear = cart_Block.querySelector('#clearCarts') // Отчистка карзины
//------------------------------------------------------------------------------------------//

quantity_Btn.forEach((item) => {
   item.addEventListener('click', () => {
      if (item.classList.contains('product__quantity-control_inc')) {
         const prodQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
         prodQuantity.innerText++;
      } else {
         const prodQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
         if (prodQuantity.innerText > 1) {
            prodQuantity.innerText--;
         } else {
            prodQuantity.innerText = 0;
         }
      }
   })
})

cart_clear.addEventListener('click', () => {
   const updateProdValue = Array.from(document.querySelectorAll('.product__quantity-value'));
   updateProdValue.forEach(element => {
      element.innerText = 1;
   })
   const defoultCart = document.createElement('div')
   defoultCart.classList = 'cart__product';
   defoultCart.dataset.id = '0';
   defoultCart.insertAdjacentHTML("afterbegin", '<img class="cart__product-image" src="image.png"><div class="cart__product-count">0</div');

   const clear_carts = cart_Block.querySelector('.cart__products');
   while (clear_carts.firstChild) {
      clear_carts.removeChild(clear_carts.lastChild);
   }

   cart_Block.querySelector('.cart__products').appendChild(defoultCart);
   localStorage.clear()
})

addBascet_Btn.forEach((item) => {
   item.addEventListener('click', () => {
      bascetWork(item);
   })
})

function bascetWork(element) {
   const prod_id = element.closest('.product').dataset.id; // id Продукта
   const prod_img = element.closest('.product').querySelector('.product__image').src; // Картинка продукта
   const prod_Quantity_val = element.closest('.product').querySelector('.product__quantity-value').innerText; // количество продукта
   const findNeed = cart_Block.querySelector(`.cart__product[data-id="${prod_id}"]`); // Поиск элемента в корзине

   const moveAnimate = () => {
      const step = 25
      const moveStart = element.closest(`.product[data-id="${prod_id}"]`).querySelector('.product__image');
      const moveFinish = cart_Block.querySelector('.cart__product-image');
      let differMoveX = (moveFinish.getBoundingClientRect().x - moveStart.getBoundingClientRect().x) / step;
      let differMoveY = (moveStart.getBoundingClientRect().y - moveFinish.getBoundingClientRect().y) / step;
      const clonImg = moveStart.cloneNode(true);
      moveStart.after(clonImg);
      clonImg.style.position = "fixed";

      setInterval(() => {
         if (clonImg.getBoundingClientRect().x < moveFinish.getBoundingClientRect().x) {
            clonImg.style.left = clonImg.getBoundingClientRect().x + differMoveX + 'px';
            clonImg.style.top = clonImg.getBoundingClientRect().y - differMoveY + 'px';
         } else {
            clonImg.remove()
            clearInterval()
         }
      }, 10);
   };
         
   if (cart_Block.querySelector('.cart__product').dataset.id == 0) {
      cart_Block.querySelector('.cart__product').dataset.id = prod_id;
      cart_Block.querySelector('.cart__product-image').src = prod_img;
      cart_Block.querySelector('.cart__product-count').innerText = prod_Quantity_val;
      moveAnimate();
      localStorage.setItem(prod_id, prod_Quantity_val);
   } else {
      if (findNeed) {
         findNeed.querySelector('.cart__product-count').innerText = prod_Quantity_val;
         localStorage.setItem(prod_id, prod_Quantity_val)
         
      } else {
         const newBlock = cart_Block.querySelector('.cart__product').cloneNode(true);
         newBlock.dataset.id = prod_id;
         newBlock.querySelector('img').src = prod_img;
         newBlock.querySelector('.cart__product-count').innerText = prod_Quantity_val;
         const listProds = cart_Block.querySelector('.cart__products');
         moveAnimate()
         listProds.insertBefore(newBlock, null);
         localStorage.setItem(prod_id, prod_Quantity_val)
      }
   }
   
   if (prod_Quantity_val == 0) {  
      try {
         findNeed.remove();
         prod_Quantity_val == 1;
      } catch (err) {
         console.log("Нулевое значение. Элемент удален с карзины " + err.massege);
      }
   };
}

let locStorData = Object.entries(localStorage);
function cartBuilt(prodID, prodQunt) {
   const prod_image = document.querySelector('.products').querySelector(`[data-id="${prodID}"]`).querySelector('.product__image').src;
   if (cart_Block.querySelector('.cart__product').dataset.id == 0) {
      cart_Block.querySelector('.cart__product').dataset.id = prodID;
      cart_Block.querySelector('.cart__product-image').src = prod_image;
      cart_Block.querySelector('.cart__product-count').innerText = prodQunt;      
   } else {
      const newBlock = cart_Block.querySelector('.cart__product').cloneNode(true);
      newBlock.dataset.id = prodID;
      newBlock.querySelector('img').src = prod_image;
      newBlock.querySelector('.cart__product-count').innerText = prodQunt;
      const listProds = cart_Block.querySelector('.cart__products');
      listProds.insertBefore(newBlock, null);      
   }
}

for (let i = 0; i < localStorage.length; i++) {
   const prodID = JSON.parse(locStorData[i][0]), prodValue = JSON.parse(locStorData[i][1])
   cartBuilt(prodID, prodValue);
}   




/* Вывод товаров из localStorage
let products = Object.keys(localStorage);
for (let product of products) {
   addCart(document.querySelector(`.product[data-id="${product}"]`), localStorage.getItem(product));
}

const cartList = document.querySelector('.cart__products');

function addCart(element, quantity) {
   const prodId = element.closest('.product').dataset.id,
      prodImage = element.closest('.product').querySelector('.product__image'),
      cartProdQnt = cartList.querySelector(`.cart__product[data-id="${prodId}"] .cart__product-count`);

   // если передано количество товара (для localStorage)
   const prodQnt = quantity ? quantity : element.closest('.product').querySelector('.product__quantity-value').innerText;

   } else {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart__product';
      cartItem.dataset.id = prodId;

      cartItem.innerHTML = `<img class="cart__product-image" src="${prodImage.src}">
                            <div class="cart__product-count">${prodQnt}</div>`;

      cartList.appendChild(cartItem);
   }
}*/