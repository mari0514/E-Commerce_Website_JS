    const API_URL = "http://jsonblob.com/api/1074288150784000000";


    let itemCountsSection = document.getElementById("item-counts");
    let itemCounts = itemCountsSection.textContent;


    const listOfItems = document.getElementById("item-contents");
    const listOfItemsInCart = document.getElementById("added-items");
    // const totalPrice = document.querySelector('#total-price');
    const totalPriceSection = document.getElementById('total-price');


    let itemsInCart = [];


    fetch(API_URL)
    // fetch('item.json')
        .then(res => {
            if (!res.ok) {
                return Promise.reject('some reason');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(typeof(data));


            data.forEach(item => {
                // console.log(item);
                // console.log(item.name);
                // console.log(item.id);

                // // creating item card(s)
                listOfItems.innerHTML += `
                <div class="item-card">
                    <img class="item-img" src="${item.image}" alt="${item.name}" crossorigin="anonymous">
                    <h6 class="item-name">${item.name}</h6>
                    <p class="item-price">$${item.price}</p>
                    <button class="add-btn" onclick="addToCart(${item.id}, ${item.price}">Add to Cart</button>
                </div>
                `;

                
                displayEmptyCart();


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

        let sumOfPrice = 0;

        let itemQuantity = 1;
  

        function addToCart(itemId, itemPrice){
            itemCounts++;
            itemCountsSection.innerHTML = `${itemCounts}`;


            console.log(itemId);
            console.log(itemPrice);

            
            function calculateTotalPrice(array) {
                // sumOfPrice += itemPrice;
                // totalPriceSection.innerHTML = `
                // <p>$${sumOfPrice}</p>
                // `;
                sumOfPrice = 0;
                for (let i = 0; i < array.length; i++) {
                    sumOfPrice += array[i].price * array[i].quantity;
                }
                totalPriceSection.innerHTML = `
                <p>$${sumOfPrice}</p>
                `;
            }
            
            listOfItemsInCart.innerHTML = '';



            switch (itemId) {
                case 1:
                    itemsInCart.push({
                        image: "https://images.pexels.com/photos/4809141/pexels-photo-4809141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        name: "Chocolate Fruit Cake",
                        price: itemPrice,
                        quantity: 1,
                        id: itemId
                    });
                    calculateTotalPrice(itemsInCart);
                    break;
                case 2:
                    itemsInCart.push({
                        image: "https://images.pexels.com/photos/4858510/pexels-photo-4858510.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        name: "Cream Puff",
                        price: itemPrice,
                        quantity: 1,
                        id: itemId
                    });
                    calculateTotalPrice(itemsInCart);
                    break;
                case 3:
                    itemsInCart.push({
                        image: "https://images.pexels.com/photos/6487798/pexels-photo-6487798.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        name: "Chocolate Box",
                        price: itemPrice,
                        quantity: 1,
                        id: itemId
                    });
                    calculateTotalPrice(itemsInCart);
                    break;
                case 4:
                    itemsInCart.push({
                        image: "https://images.pexels.com/photos/9810298/pexels-photo-9810298.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        name: "Chocolate & Nuts Pound Cake",
                        price: itemPrice,
                        quantity: 1,
                        id: itemId
                    });
                    calculateTotalPrice(itemsInCart);
                    break;
                case 5:
                    itemsInCart.push({
                        image: "https://images.pexels.com/photos/9984796/pexels-photo-9984796.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        name: "Mariposa Green Cake",
                        price: itemPrice,
                        quantity: 1,
                        id: itemId
                    });
                    calculateTotalPrice(itemsInCart);
                    break;
                case 6:
                    itemsInCart.push({
                        image: "https://images.pexels.com/photos/8963942/pexels-photo-8963942.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        name: "Pistachio Macaron",
                        price: itemPrice,
                        quantity: 1,
                        id: itemId
                    });
                    calculateTotalPrice(itemsInCart);
                    break;
                default:
                    break;
            }


            // for (let i = 0; i < itemsInCart.length; i++) {
            //     listOfItemsInCart.innerHTML += `
            //     <li class="added-item">
            //         <img src="${itemsInCart[i].image}" alt="item image">
            //         <div>
            //             <h4>${itemsInCart[i].name}</h4>
            //             <p>$${itemsInCart[i].price}</p>
            //             <div class="btn-container">
            //                 <button class="minus-btn" data-id=${itemsInCart[i].id} onclick="reduceQuantity(${itemsInCart[i].quantity
            //                 }, ${i})">-</button>
            //                 <span class="countOfItem">${itemsInCart[i].quantity}</span>
            //                 <button class="plus-btn" data-id=${itemsInCart[i].id} onclick="increaseQuantity()">+</button>
            //             </div>
            //         </div>
            //     </li>
            //     `;
            // }

            updateHTML(itemsInCart);
        }

        function updateHTML(array) {
            for (let i = 0; i < array.length; i++) {
                listOfItemsInCart.innerHTML += `
                <li class="added-item">
                    <img src="${array[i].image}" alt="item image" crossorigin="anonymous">
                    <div>
                        <h4>${array[i].name}</h4>
                        <p>$${array[i].price * array[i].quantity}</p>
                        <div class="btn-container">
                            <button class="minus-btn" data-id=${array[i].id} onclick="reduceQuantity(${array[i].quantity
                            }, ${i})">-</button>
                            <span class="countOfItem">${array[i].quantity}</span>
                            <button class="plus-btn" data-id=${array[i].id} onclick="increaseQuantity(${array[i].quantity
                            }, ${i})">+</button>
                        </div>
                    </div>
                </li>
                `;
            }
        };
        function clearHTML() {
            listOfItemsInCart.innerHTML = '';
        };


        
        function calculateTotalPrice2(array) {
            sumOfPrice = 0;
            for (let i = 0; i < array.length; i++) {
                sumOfPrice += array[i].price * array[i].quantity;
            }
            totalPriceSection.innerHTML = `
            <p>$${sumOfPrice}</p>
        `;
            console.log(itemsInCart);
        }

        function reduceQuantity(quantity, n) {
            clearHTML();
            quantity--;
            itemsInCart[n].quantity = quantity;
            if (quantity === 0) {
                itemsInCart.splice(n, 1);
            }
            calculateTotalPrice2(itemsInCart);
            totalPriceSection.innerHTML = `
                    <p>$${sumOfPrice}</p>
                `;
            updateHTML(itemsInCart);
        }
        
        function increaseQuantity(quantity, n) {
            clearHTML();
            quantity++;
            itemsInCart[n].quantity = quantity;
            console.log("INCREASING THE QUANTITY");
            calculateTotalPrice2(itemsInCart);
            // totalPriceSection.innerHTML = `
            //         <p>$${sumOfPrice}</p>
            //     `;
            updateHTML(itemsInCart);
        }

        let clearAllButton = document.getElementById('clear-all-btn');
        clearAllButton.addEventListener('click', () => {
            itemsInCart.length = 0;
            displayEmptyCart();
        })

        
        function displayEmptyCart () {
            if (itemsInCart.length <= 0) {
                listOfItemsInCart.innerHTML = 'Oops, your Cart is empty!';
                itemCounts = 0;
                itemCountsSection.innerHTML = `${itemCounts}`;
                sumOfPrice = 0;
                totalPriceSection.innerHTML = `$${sumOfPrice}`;
            }
        }
