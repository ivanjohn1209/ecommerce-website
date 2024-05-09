const productList = [
    { img: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2023/09/apple-iphone-15-pro-square-tag.jpg", name: "Iphone 15", price: 35000, id: 1 },
    { img: "https://th.bing.com/th/id/OIP.RMgSZevhD7HOhlr8MP_9KwHaHd?rs=1&pid=ImgDetMain", name: "Iphone 14", price: 1000, id: 2 },
    { img: "https://helios-i.mashable.com/imagery/articles/04aKeZmrA0gDnBqOS0AUJH8/images-70.fill.size_800x1120.v1631650216.jpg", name: "Iphone 13", price: 9000, id: 3 },
    { img: "https://www.mytrendyphone.eu/images/iPhone-12-64GB-Black-0194252029619-20102020-02-p.jpg", name: "Iphone 12", price: 8000, id: 4 },
]

for (let i = 0; i < productList.length; i++) {
    const element = productList[i];
    let div = document.createElement('div');
    div.className = "group relative";
    div.innerHTML = `                    <div class="ab">
<div class="ab of tn adg adt"><img
        src="${element.img}"
        alt="${element.name}"
        class="ph tn aqd aqe"></div>
<div class="ab lh">
    <h3 class="avz awd axu">${element.name}</h3>
    <p class="ku avz axq">White and black</p>
</div>
<div class="aa ao dn lx of yy zd adg adt aqs">
    <div aria-hidden="true" class="aa ao cc nv amm amt bbc"></div>
    <p class="ab avy awf bag">$${element.price}</p>
</div>
</div>
<div class="lk"><button style="width:100%;" id='add-cart-item-${element.id}' class="ab lx yz ze adu aez agy aih arl aru avz awd axu bic">Add to
    bag<span class="t">, Zip Tote Basket</span></button></div>`
    document.getElementById('product-container-list').appendChild(div);

    document.getElementById(`add-cart-item-${element.id}`).onclick = () => {
        let cartItems = localStorage.getItem('cart-items');
        let list = cartItems ? JSON.parse(cartItems) : [];
        list.push(element);
        localStorage.setItem('cart-items', JSON.stringify(list));
        var eventName = 'cartCustomEvent';
        var eventData = { type: 'add-item' };
        var customEvent = new CustomEvent(eventName, { detail: eventData });
        window.dispatchEvent(customEvent);
    };
}