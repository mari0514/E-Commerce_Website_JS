window.addEventListener("load", () => {
    // const API_URL = "http://jsonblob.com/api/1072766826269917184";
    const API_URL = "http://jsonblob.com/api/1073046958612168704";

    fetch(API_URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data.length);
            data.forEach(item => {
                // console.log(item.name);
                // console.log(item.id);
                // console.log(`Price: $${item.price}`);

                const itemContents = document.getElementById("item-contents");

                let itemCard = document.createElement('div');
                itemCard.classList.add("item-card");
                itemContents.appendChild(itemCard);

                let itemImage = document.createElement('img');
                itemImage.classList.add("item-img");
                itemImage.src = item.image;
                itemImage.alt = "Item Image";

                let itemName = document.createElement('h6');
                itemName.classList.add("item-name");
                itemName.textContent = item.name;

                let itemPrice = document.createElement('p');
                itemPrice.classList.add("item-price");
                itemPrice.textContent = `$${item.price}`;

                let addToCartBtn = document.createElement('button');
                // let addToCartBtn = document.createElement('div');
                addToCartBtn.classList.add("add-btn");
                addToCartBtn.textContent= "Add to cart";
                // addToCartBtn.innerHTML = '<i class="fa-solid fa-cart-plus fa-xl"></i>&nbsp<i class="fa-solid fa-greater-than fa-xl"></i>';

                itemCard.appendChild(itemImage);
                itemCard.appendChild(itemName);
                itemCard.appendChild(itemPrice);
                itemCard.appendChild(addToCartBtn);




                addToCartBtn.addEventListener("click", (event) => {
                    // kokokara
                    let itemsInCart = [];

                    const addedItemsList = document.getElementById("added-items");

                    const cartSum = document.getElementById("price-sum");
                    const items = document.querySelectorAll(".item-card");

                    const countTheSum = function() {
                        let sumPrice = 0;
                        itemsInCart.forEach(item => {
                            sumPrice += item.price;
                        });
                        return sumPrice;
                    }

                    const updateShoppingCartHTML = function() {
                        if (itemsInCart.length > 0) {
                            let result = itemsInCart.map(item => {
                                return `
                                <li class="added-item">
                                <img src="${item.image}">
                                <div class="added-itetm-description">
                                    <h4>${item.name}</h4>
                                    <p>$${item.price} * ${item.count}</p>
                                    <div>
                                        <button class="minus-btn" data-id="${item.id}">-</button>
                                        <button class="plus-btn" data-id="${item.id}">+</button>
                                    </div>
                                </div>
                                </li>
                                `;
                            });
                            addedItemsList.innerHTML = result.join('');
                            // document.getElementById('cart').classList.remove('hidden');
                            cartSum.innerHTML = "$" + countTheSum();
                        } else {
                            // document.getElementById('cart').classList.add('hidden');
                            let emptyMessage = "<p>Your shopping cart is empty.</p>";
                            addedItemsList.innerHTML = emptyMessage.join('');
                            document.getElementById('item-counts').innerHTML = "0";
                            cartSum.innerHTML = "$0";
                        }
                    }

                    function updateItemsInCart(item) {
                        for (let i = 0; i < itemsInCart.length; i++) {
                            if (itemsInCart[i].id == item.id) {
                                itemsInCart[i].count += 1;
                                itemsInCart[i].price = itemsInCart[i].basePrice * itemsInCart[i].count;
                                return;
                            }
                        }
                        itemsInCart.push(item);
                    }
                    // kokomade


                    if (event. target.classList.contains('add-btn')) {
                        // const itemID = event.target.dataset.itemID;
                        // // const itemName = item.querySelector(".item-name").innerHTML;
                        // const itemName = document.getElementsByClassName("item-name");
                        // // const itemPrice = item.querySelector(".item-price").innerHTML;
                        // const itemPrice = document.querySelector(".item-price").innerHTML;
                        // // const itemImage = item.querySelector(".item-img").src;
                        // const itemImage = document.querySelector(".item-img").src;
            
                        let itemToCart = {
                            name: item.name,
                            image: item.image,
                            id: item.id,
                            count: 1,
                            price: +item.price,
                            basePrice: +item.price
                        };
            
                        updateItemsInCart(itemToCart);
                        updateShoppingCartHTML();
                    }


                    document.getElementById("item-counts").innerHTML = "1";


                    console.log(item.name);
                    console.log(itemsInCart);
                    console.log(countTheSum());
                });
                

                let shoppingCartButton = document.getElementById("shopping-cart");
                shoppingCartButton.addEventListener("click", () => {
                    document.getElementById("cart").style.display = "flex";
                });

                let closeButton = document.getElementById("close-btn");
                closeButton.addEventListener("click", () => {
                    document.getElementById("cart").style.display = "none";
                });
            });
        })
        .catch(error => {
            console.log(error);
        })


})