window.addEventListener("load", () => {
    // const API_URL = "http://jsonblob.com/api/1072662121845899264"; 
    const API_URL = "http://jsonblob.com/api/1072665233168023552"; 

    function displayItems() {
        fetch(API_URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // let itemArray = data;
                // console.log(itemArray);
                console.log(data.length);
                data.forEach(item => {
                    console.log(item.name);
                    console.log(`Price: $${item.price}`);

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

                    let addToCart = document.createElement('button');
                    addToCart.classList.add("add-to-cart");
                    addToCart.textContent = "Add";

                    itemCard.appendChild(itemImage);
                    itemCard.appendChild(itemName);
                    itemCard.appendChild(itemPrice);
                    itemCard.appendChild(addToCart);
                });
            })
            .catch(error => {
                console.log(error);
            })

    }

    let itemImage = document.getElementsByClassName("item-image");
    let itemName = document.getElementsByClassName("item-name");
    let itemPrice = document.getElementsByClassName("item-price");


    displayItems();


})