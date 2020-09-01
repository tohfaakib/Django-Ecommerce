var upadteBtns = document.getElementsByClassName("update-cart");

for(i=0; i < upadteBtns.length; i++){
    upadteBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product;
        var action = this.dataset.action;
        console.log('product: ', productId, 'action: ', action);

        console.log("user: ", user);
        if(user === "AnonymousUser"){
            console.log("Not loggedin")
        } else {
            updateUserOrder(productId, action)
        }
    })
}


function updateUserOrder(productId, action) {
    console.log("logged in. sending data...")

    url = '/update_item/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
            'productId': productId,
            'action': action
        })
    })
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);
        location.reload();
    })
}