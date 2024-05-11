const featuredProducts = [
    { img: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-pro/iphone-13-pro-silver.jpg", gb: "128gb",name: "iPhone 13 Pro Max", price: 41999, id: 25},
    { img: "https://s3.amazonaws.com/iwm-ebay/images/products/iPhone+13+Pro+Max/iPhone+13+Pro+Max+Grey.jpg", gb: "256gb",name: "iPhone 13 Pro Max", price: 43999, id: 26},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__en-US_82df8721-1d88-40d2-8d9c-37820092a2a0.jpg?v=1705404256", gb: "128gb",name: "iPhone 14 Pro Max", price: 50999, id: 27},
    { img: "https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Max_Gold_PDP_Image_Position-1a__en-US_47cb0bb0-2490-4486-8f57-5caae2ecf5b1.jpg?v=1705404341", gb: "256gb",name: "iPhone 14 Pro Max", price: 53999, id: 28},

]

const reviews = [
{
    name: "Francine Shaine",
    img: "https://scontent.fmnl4-8.fna.fbcdn.net/v/t1.18169-9/29511445_1964799883836793_333855869471477291_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECwEf457-BsopwcgAHngWFZLwAGOpTJSJkvAAY6lMlIlJvGiwWW3VYlXnb0mOWSoiC8ycgB2O9oYTSQ95pT1bG&_nc_ohc=DPYrTwaXmpIQ7kNvgHHDqf2&_nc_ht=scontent.fmnl4-8.fna&oh=00_AYA6viQpWuVAUFYH0br9DKZmGZtVPg9g5ZvsJjyeomJlTw&oe=66656C3E",
    message: "iPhone 12: Sleek design, powerful performance. Camera quality impresses, but battery life could be better. Overall, a solid choice. 4/5 stars.",
    userName:"shaineromerows"
},
{
    name: "Hiro Aguilo",
    img: "https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-6/384477523_317201850921151_4541215700667770029_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl94WEdgPlWnkjiOBKtNfdBCrPrir4020EKs-uKvjTbdV-arbCflbuy6YOK7GRDwm0mLAb-7l44_VpcURm3_51&_nc_ohc=xCx1xs_9gZUQ7kNvgFxykaJ&_nc_ht=scontent.fmnl4-8.fna&oh=00_AYDD8y6k-AVXuP7sEjSdkUQXYGWFGtT2U4pl1TJnuF0NlQ&oe=6643C3AB",
    message: "iPhone 13: Upgraded features shine, notably camera improvements and longer battery life. Fast, reliable performance. Worth the investment. 4.5/5 stars.",
    userName:"luluws"
},
{
    name: "Daniel Navi",
    img: "https://2.bp.blogspot.com/-6V-cw8jS5gk/WYDRMMarFuI/AAAAAAAAR0A/V209YPA9PPgwe_SbwhyVnUj2Gb0HklntACLcBGAs/s1600/daniel%2Bpadilla%2Bhot%2Bgwapong%2Bpinoy%2B2017%2Bblack%2Bsuit%2Ber22.jpg",
    message: "iPhone 14: Cutting-edge innovation evident in design and performance. Camera advancements excel, though pricing may deter some. Still, a top-tier device. 4.7/5 stars.",
    userName:"navidaniel"
},
{
    name: "Hazel Lemorenas",
    img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/435055905_1290016402386091_156386214426149491_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGTL2FeKdUdsyUe_qdnyb_KXv1GUkgQddVe_UZSSBB11bZIlnHhL_kfH518qvdIARr8OCATmAMlfQUMXMfDAz7g&_nc_ohc=57Twp-ShsuwQ7kNvgEJH5PU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHi72bWwEJJQpsZkkM6smSeeusblr2ge1zxm6FK9Xs1Zw&oe=66656819",
    message: "iPhone 10: Aging model but still holds up. Performance lags behind newer models, but it's a reliable option for casual users. 3.5/5 stars.",
    userName:"hezeru"
},
{
    name: "Gianally Yeban",
    img: "https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.30808-1/439873045_2300418600151580_7311520184835153045_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH_vBtz1fgcu50hzr8bcdg6624NriCTtoXrbg2uIJO2hUYpkYbVpHT8UuBT06KtUQBEK8YMirycjkfQ-ZFDow59&_nc_ohc=SYfS-fXJ9dAQ7kNvgE6StY5&_nc_ht=scontent.fmnl4-8.fna&oh=00_AYAVxw8Gb84VDZApxl2HbyCHYrWaBAy79JXPzgD6ZX_ZVw&oe=6643C748",
    message: "iPhone 12: Stylish design meets exceptional performance. Camera quality astounds, but battery longevity leaves something to be desired. A solid choice overall. 4/5 stars.",
    userName:"yebanese"
},
{
    name: "Shainna Soria",
    img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-1/431969090_954223432804117_7458317117711033563_n.jpg?stp=c2.0.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCcXL8p8FTwNV-WafYdjnBeL16x5ToNVp4vXrHlOg1WseWABjGxLi0pVRI64p9X-0JgsB6dlIXVl_TOmjDDFuZ&_nc_ohc=eiCXDhD01sQQ7kNvgG60zEI&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYBD5tcu6SN52IEreY4LYhbnlWraRS-46DU3Yp3Wbt8-Nw&oe=6644D4B0",
    message: "iPhone 13: Remarkable upgrades in camera and battery life. Smooth performance with a sleek design. Pricey but worth it for the enhancements. 4.6/5 stars.",
    userName:"lorelei"
},
{
    name: "Jonnah Mae Turiao",
    img: "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
    message: "iPhone 14: Revolutionary advancements redefine smartphone standards. Superb camera features and unparalleled performance. Pricey but unmatched in quality. 4.8/5 stars.",
    userName:"jonani"
},
{
    name: "Japeth Anunciado",
    img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/279721580_168370188955023_542504197916888479_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEE9sTDb6wfsd4_QeOqkZpv7iQ57SepPvTuJDntJ6k-9OqG_lxd0_TgMORNUzdo1Z_M6ZGE_p59QBi9uVsOI44x&_nc_ohc=6HS6r_4rVIsQ7kNvgEWehZj&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYAYTdcmZELDi8Ig-RpexViDmcQYNz2C42QDb4VLh6hEwQ&oe=6644D72B",
    message: "iPhone 10: Shows its age but still functional. Camera and performance fall short compared to newer models. Suitable for basic needs. 3/5 stars.",
    userName:"japeth69"
},
{
    name: "Steve Jobs",
    img: "https://th.bing.com/th/id/R.fc3701b8fc8a897dfa5d8b1c44d5fd0e?rik=ixuZ9wKp0EZAXQ&riu=http%3a%2f%2fmedia4.s-nbcnews.com%2fi%2fnewscms%2f2014_49%2f788106%2f141201-steve-jobs-testimony-1251p_1b671095a74be7623688b1fde5474831.jpg&ehk=yYEfpUVToRYqFJ5MJ5lIIzaesZOevPmmyQzM3ELisNw%3d&risl=&pid=ImgRaw&r=0",
    message: "iPhone 12: Impressive blend of style and substance. Camera captures stunning photos, though battery life could be improved. Overall, a dependable choice. 4.2/5 stars.",
    userName:"steve"
},
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

for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i];
    let div = document.createElement('div');
    div.className = "avf bxm bzg cey";
    div.innerHTML = `
    <figure class="adq aio aqv avz awo">
    <blockquote class="axu">
        <p>"${element.message}"</p>
    </blockquote>
    <figcaption class="lk lx yz aag"><img class="nh rj ads aio"
            src="${element.img}"
            alt="${element.name}">
        <div>
            <div class="awf axu">${element.name}</div>
            <div class="axr">@${element.userName}</div>
        </div>
    </figcaption>
</figure>`
    document.getElementById('review-container').appendChild(div)


}