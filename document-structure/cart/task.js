const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec')); //-
const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc')); //+
const addBascetBtn = Array.from(document.querySelectorAll('.product__add'));
let controlArray = [];
//-----------------------------------------------------------//
const cartBlock = document.querySelector('.cart'); // Блок корзины
//-----------------------------------------------------------//

inc.forEach((item) => {
   item.addEventListener('click', () => {
      const prodQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
      prodQuantity.innerText++;
   })
})

dec.forEach((item) => {
   item.addEventListener('click', () => {
      const prodQuantity = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
      if (prodQuantity.innerText > 1) {
         prodQuantity.innerText--;
      } else {
         prodQuantity.innerText = 0;;
      }
   })
})

addBascetBtn.forEach((item) => {
   item.addEventListener('click', () => {
      addToBascet(item);
   })
});

//----------------------------------------------------------------------------//
function addToBascet(element) {
   const prod_id = element.closest('.product').dataset.id; // id Продукта
   const prod_img = element.closest('.product').querySelector('.product__image').src; // Картинка продукта
   const prod_Quantity_val = element.closest('.product').querySelector('.product__quantity-value').innerText; // количество продукта

   if (cartBlock.querySelector('.cart__product').dataset.id == 0) {
      controlArray.push(prod_id);
      cartBlock.querySelector('.cart__product').dataset.id = prod_id;
      cartBlock.querySelector('img').src = prod_img;
      cartBlock.querySelector('.cart__product-count').innerText = prod_Quantity_val;
   } else if (cartBlock.querySelector('.cart__product').dataset.id == prod_id) {
      cartBlock.querySelector('.cart__product-count').innerText = prod_Quantity_val;
   } else if (cartBlock.querySelector('.cart__product').dataset.id !== prod_id) {
//-------------------поиск на присутствие такой же id в корзине------------------------//
      if (controlArray.includes(prod_id)) {
         const prod_list = Array.from(cartBlock.querySelectorAll('.cart__product'));
         const findID_for_val = prod_list.filter((elem) => elem.dataset.id == prod_id);
         //findID_for-val.querySelector('.cart__product-count').innerText = prod_Quantity_val; //- ПРОБЛЕМА
         console.log(findID_for_val);
      } else {
//--------------------------создание клона нового товара--------------------------------//
         controlArray.push(prod_id);
         const newBlock = cartBlock.querySelector('.cart__product').cloneNode(true);
         newBlock.dataset.id = prod_id;
         newBlock.querySelector('img').src = prod_img;
         newBlock.querySelector('.cart__product-count').innerText = prod_Quantity_val;
//---------------------------вставка нового блока товара--------------------------------//
         const listProds = cartBlock.querySelector('.cart__products');
         listProds.insertBefore(newBlock, null);
      }
   }
};