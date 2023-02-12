    // const API_URL = "http://jsonblob.com/api/1074246173820469248";
    const API_URL = "http://jsonblob.com/api/1074251048969060352";


    let itemCountsSection = document.getElementById("item-counts");
    let itemCounts = itemCountsSection.textContent;


    const listOfItems = document.getElementById("item-contents");
    const listOfItemsInCart = document.getElementById("added-items");
    // const totalPrice = document.querySelector('#total-price');
    const totalPriceSection = document.getElementById('total-price');


    fetch(API_URL)
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
                    <img class="item-img" src="${item.image}" alt="${item.name}">
                    <h6 class="item-name">${item.name}</h6>
                    <p class="item-price">$${item.price}</p>
                    <button class="add-btn" onclick="addToCart(${item.id}, ${item.price})">Add to Cart</button>
                </div>
                `;

                


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



            switch (itemId) {
                case 1:
                    listOfItemsInCart.innerHTML +=`
                        <li class="added-item">
                            <img src="https://images.pexels.com/photos/4809141/pexels-photo-4809141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="item image">
                            <div>
                                <h4>Chocolate Fruit Cake</h4>
                                <p>$${itemPrice}</p>
                                <div class="btn-container">
                                    <button class="minus-btn" data-id=${itemId}>-</button>
                                    <span class="countOfItem">${itemQuantity}</span>
                                    <button class="plus-btn" data-id=${itemId}>+</button>
                                </div>
                            </div>
                        </li>
                    `;
                    sumOfPrice += itemPrice;
                    totalPriceSection.innerHTML = `
                        <p>$${sumOfPrice}</p>
                    `;
                    break;
                case 2:
                    listOfItemsInCart.innerHTML +=`
                        <li class="added-item">
                            <img src="https://images.pexels.com/photos/4858510/pexels-photo-4858510.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item image">
                            <div>
                                <h4>Cream Puff</h4>
                                <p>$${itemPrice}</p>
                                <div class="btn-container">
                                    <button class="minus-btn" data-id=${itemId}>-</button>
                                    <span class="countOfItem">${itemQuantity}</span>
                                    <button class="plus-btn" data-id=${itemId}>+</button>
                                </div>
                            </div>
                        </li>
                    `;
                    sumOfPrice += itemPrice;
                    totalPriceSection.innerHTML = `
                        <p>$${sumOfPrice}</p>
                    `;
                    break;
                case 3:
                    listOfItemsInCart.innerHTML +=`
                        <li class="added-item">
                            <img src="https://images.pexels.com/photos/6487798/pexels-photo-6487798.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item image">
                            <div>
                                <h4>Chocolate Box</h4>
                                <p>$${itemPrice}</p>
                                <div class="btn-container">
                                    <button class="minus-btn" data-id=${itemId}>-</button>
                                    <span class="countOfItem">${itemQuantity}</span>
                                    <button class="plus-btn" data-id=${itemId}>+</button>
                                </div>
                            </div>
                        </li>
                    `;
                    sumOfPrice += itemPrice;
                    totalPriceSection.innerHTML = `
                        <p>$${sumOfPrice}</p>
                    `;
                    break;
                case 4:
                    listOfItemsInCart.innerHTML +=`
                        <li class="added-item">
                            <img src="https://images.pexels.com/photos/9810298/pexels-photo-9810298.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item image">
                            <div>
                                <h4>Chocolate & Nuts Pound Cake</h4>
                                <p>$${itemPrice}</p>
                                <div class="btn-container">
                                    <button class="minus-btn" data-id=${itemId}>-</button>
                                    <span class="countOfItem">${itemQuantity}</span>
                                    <button class="plus-btn" data-id=${itemId}>+</button>
                                </div>
                            </div>
                        </li>
                    `;
                    sumOfPrice += itemPrice;
                    totalPriceSection.innerHTML = `
                        <p>$${sumOfPrice}</p>
                    `;
                    break;
                case 5:
                    listOfItemsInCart.innerHTML +=`
                        <li class="added-item">
                            <img src="https://images.pexels.com/photos/9984796/pexels-photo-9984796.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item image">
                            <div>
                                <h4>Mariposa Green Cake</h4>
                                <p>$${itemPrice}</p>
                                <div class="btn-container">
                                    <button class="minus-btn" data-id=${itemId}>-</button>
                                    <span class="countOfItem">${itemQuantity}</span>
                                    <button class="plus-btn" data-id=${itemId}>+</button>
                                </div>
                            </div>
                        </li>
                    `;
                    sumOfPrice += itemPrice;
                    totalPriceSection.innerHTML = `
                        <p>$${sumOfPrice}</p>
                    `;
                    break;
                case 6:
                    listOfItemsInCart.innerHTML +=`
                        <li class="added-item">
                            <img src="https://images.pexels.com/photos/8963942/pexels-photo-8963942.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item image">
                            <div>
                                <h4>Pistachio Macaron</h4>
                                <p>$${itemPrice}</p>
                                <div class="btn-container">
                                    <button class="minus-btn" data-id=${itemId}>-</button>
                                    <span class="countOfItem">${itemQuantity}</span>
                                    <button class="plus-btn" data-id=${itemId}>+</button>
                                </div>
                            </div>
                        </li>
                    `;
                    sumOfPrice += itemPrice;
                    totalPriceSection.innerHTML = `
                        <p>$${sumOfPrice}</p>
                    `;
                    break;
                default:
                    break;
            }

        }

        let clearAllButton = document.getElementById('clear-all-btn');
        clearAllButton.addEventListener('click', () => {
            listOfItemsInCart.innerHTML = '';
            totalPriceSection.innerHTML = '';
            itemCounts = 0;
            itemCountsSection.innerHTML = `${itemCounts}`;
        })


