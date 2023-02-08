window.addEventListener("load", () => {
    // const API_URL = "http://jsonblob.com/api/1072684897273135104";
    const API_URL = "http://jsonblob.com/api/1072766826269917184";

    fetch(API_URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data.length);
            data.forEach(item => {
                // console.log(item.name);
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


                let quantity = 0;
                function quantityCount() {
                    quantity++;
                }

                // let itemsInCart = [];
                // itemsInCart.push(
                //         "image": item.image,
                //         "name": item.name,
                //         "price": item.price,
                //         "quantity": quantity
                // )

                addToCartBtn.addEventListener("click", () => {
                    // quantityCount();
                    // console.log(quantity);
                    // let itemsInCart = [
                    //     {
                    //         "image": item.image,
                    //         "name": item.name,
                    //         "price": item.price,
                    //         "quantity": quantity
                    //     }
                    // ];
                    // let itemsInCart = [];
                    if (item.quantity === 0) {
                        itemsInCart.push(item);
                        quantityCount();
                    } else {
                        quantityCount();
                    }
                    // itemsInCart.push(item);
                    console.log(itemsInCart);
                    // console.log(quantity);
                })
            });
        })
        .catch(error => {
            console.log(error);
        })


})