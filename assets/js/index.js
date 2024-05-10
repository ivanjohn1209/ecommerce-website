const featuredProducts = [
    { img: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-pro/iphone-13-pro-silver.jpg", gb: "128gb",name: "iPhone 13 Pro Max", price: 41999, id: 25},
    { img: "https://s3.amazonaws.com/iwm-ebay/images/products/iPhone+13+Pro+Max/iPhone+13+Pro+Max+Grey.jpg", gb: "256gb",name: "iPhone 13 Pro Max", price: 43999, id: 26},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__en-US_82df8721-1d88-40d2-8d9c-37820092a2a0.jpg?v=1705404256", gb: "128gb",name: "iPhone 14 Pro Max", price: 50999, id: 27},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Max_Gold_PDP_Image_Position-1a__en-US_47cb0bb0-2490-4486-8f57-5caae2ecf5b1.jpg?v=1705404341", gb: "256gb",name: "iPhone 14 Pro Max", price: 53999, id: 28},

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
    <p class="ab avy awf bag">&#8369;${element.price}</p>
</div>
</div>
<div class="lk"><a href="#" class="ab lx yz ze adu aez agy aih arl aru avz awd axu bic">Add to
    bag<span class="t">, Zip Tote Basket</span></a></div>`
    document.getElementById('featured-container-list').appendChild(div)
}