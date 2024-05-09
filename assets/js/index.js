const featuredProducts = [
    { img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", name: "Basic Tee", price: 35, id: 1 },
    { img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", name: "Basic Tee", price: 35, id: 2 },
    { img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", name: "Basic Tee", price: 35, id: 3 },
    { img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg", name: "Basic Tee", price: 35, id: 4 },
]

for (let i = 0; i < featuredProducts.length; i++) {
    const element = featuredProducts[i];
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
<div class="lk"><a href="#" class="ab lx yz ze adu aez agy aih arl aru avz awd axu bic">Add to
    bag<span class="t">, Zip Tote Basket</span></a></div>`
    document.getElementById('featured-container-list').appendChild(div)
}