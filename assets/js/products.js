const productList = [
    { img: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111940_SP705-iphone_6-mul.png", gb: "32gb",name: "iPhone 6", price: 3499, id: 1 },
    { img: "https://www.dhresource.com/0x0/f2/albu/g10/M00/67/C9/rBVaWV3Nj3yAN5fZAAMDlEAEkvw853.jpg/apple-iphone-6s-plus-5-5-quot-2gb-ram-16.jpg", gb: "64gb",name: "iPhone 6s+", price: 7499, id: 2 },
    { img: "https://content.etilize.com/650/1038273096.jpg", gb: "128gb",name: "iPhone 7", price: 6999, id: 3 },
    { img: "https://phone.mesramobile.com/wp-content/uploads/2016/09/iphone-7-6.jpg", gb: "128gb",name: "iPhone 7+", price: 8999, id: 4 },
    { img: "https://i5.walmartimages.com/asr/ec0530ba-664c-423b-adda-f43ec2514866.35613b4027506793856afeb582a529ea.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", gb: "64gb",name: "iPhone 8", price: 7999, id: 5 },
    { img: "https://i.ebayimg.com/images/g/W1QAAOSw2SllOvQ~/s-l1600.jpg", gb: "256gb",name: "iPhone 8+", price: 12499, id: 6 },
    { img: "https://th.bing.com/th/id/OIP.BX7FnzSGKfgfH0E0YWzFggHaE8?rs=1&pid=ImgDetMain", gb: "64gb",name: "iPhone x", price: 11799, id: 7 },
    { img: "https://img.bidorbuy.co.za/image/upload/f_auto,q_auto:eco/user_images/269/3781269/191127145458_iPhone%20X%20Black%20Image%20.jpg", gb: "256gb",name: "iPhone x", price: 12999, id: 8 },
    { img: "https://static4.businessinsider.com/image/5b995ece1982d837008b5d18-1142/iphonexrblue-back09122018.jpg", gb: "128gb",name: "iPhone xr", price: 14499, id: 9 },
    { img: "https://i0.wp.com/touchit.sk/wp-content/uploads/2018/09/iphone-xr-oficialne-1-nowat.jpg?ssl=1", gb: "256gb",name: "iPhone xr", price: 15999, id: 10},
    { img: "https://th.bing.com/th/id/OIP.wbsllV4d1AJEOobQCtDcBAHaHa?rs=1&pid=ImgDetMain", gb: "256gb",name: "iPhone xs max", price: 16999, id: 11},
    { img: "https://www.dhresource.com/0x0s/f2-albu-g8-M01-95-45-rBVaV17YqjqAZIPxAAB1zByv3aI496.jpg/original-unlocked-apple-iphone-11-single.jpg", gb: "128gb",name: "iPhone 11", price: 18799, id: 12},
    { img: "https://www.mobilemaya.org/wp-content/uploads/2022/08/Apple-iPhone-11-White.jpg", gb: "256gb",name: "iPhone 11", price: 24999, id: 13},
    { img: "https://www.dhresource.com/0x0s/f2-albu-g8-M01-95-45-rBVaV17YqjqAZIPxAAB1zByv3aI496.jpg/original-unlocked-apple-iphone-11-single.jpg", gb: "256gb",name: "iPhone 11 Pro", price: 37499, id: 14},
    { img: "https://compasia.com.ph/cdn/shop/products/iphone-11-pro-max-129297.jpg?v=1685599786", gb: "256gb",name: "iPhone 11 Pro Max", price: 25999, id: 15},
    { img: "https://beyondthebox.ph/cdn/shop/products/IPHONE121_COLOR-PURPLE_CAPACITY-ALL_700x700.png?v=1631584588", gb: "128gb",name: "iPhone 12", price: 22499, id: 16},
    { img: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/173551_2020.jpg", gb: "256gb",name: "iPhone 12", price: 24499, id: 17},
    { img: "https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg", gb: "128gb",name: "iPhone 12 Pro", price: 28499, id: 18},
    { img: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro/iphone-12-pro-gold.jpg", gb: "256gb",name: "iPhone 12 Pro", price: 30499, id: 19},
    { img: "https://www.hubside.store/media/catalog/product/i/p/iphone-12-pro-max-argent-1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", gb: "128gb",name: "iPhone 12 Pro Max", price: 32999, id: 20},
    { img: "https://s3.pricemestatic.com/Large/Images/RetailerProductImages/StRetailer746/rp_36121386_0_0048035477_multi_l.jpg", gb: "256gb",name: "iPhone 12 Pro Max", price: 34999, id: 21},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_13_ProductRED_PDP_Image_Position-1A__en-US_c42b5eff-e159-441b-9e27-4f41090a4801.jpg?v=1692028802", gb: "128gb",name: "iPhone 13", price: 28999, id: 22},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_13_Pink_PDP_Image_Position-1A__en-US_c4bf1b41-2d2a-4655-891d-0ca8cc940950_1445x.jpg?v=1692028796", gb: "256gb",name: "iPhone 13", price: 31999, id: 23},
    { img: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-pro-max/iphone-13-pro-max-gold.jpg", gb: "256gb",name: "iPhone 13 Pro", price: 37499, id: 24},
    { img: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-pro/iphone-13-pro-silver.jpg", gb: "128gb",name: "iPhone 13 Pro Max", price: 41999, id: 25},
    { img: "https://s3.amazonaws.com/iwm-ebay/images/products/iPhone+13+Pro+Max/iPhone+13+Pro+Max+Grey.jpg", gb: "256gb",name: "iPhone 13 Pro Max", price: 43999, id: 26},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__en-US_82df8721-1d88-40d2-8d9c-37820092a2a0.jpg?v=1705404256", gb: "128gb",name: "iPhone 14 Pro Max", price: 50999, id: 27},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Max_Gold_PDP_Image_Position-1a__en-US_47cb0bb0-2490-4486-8f57-5caae2ecf5b1.jpg?v=1705404341", gb: "256gb",name: "iPhone 14 Pro Max", price: 53999, id: 28},
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
    <p class="ku avz axq">${element.gb}</p>
</div>
<div class="aa ao dn lx of yy zd adg adt aqs">
    <div aria-hidden="true" class="aa ao cc nv amm amt bbc"></div>
    <p class="ab avy awf bag">&#8369;${element.price}</p>
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