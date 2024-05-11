let cartListItems = localStorage.getItem('cart-items');
let listCartItems = cartListItems ? JSON.parse(cartListItems) : [];
var shippingFee = 100;
function formatAndMergeItems(arr) {
    // Create an object to store items by their id
    const itemsById = {};

    // Iterate over the array
    arr.forEach(item => {
        // Check if the item id already exists in the object
        if (itemsById[item.id]) {
            // If yes, update the quantity
            itemsById[item.id].quantity++;
        } else {
            // If no, add the item to the object
            itemsById[item.id] = { ...item, quantity: 1 };
        }
    });

    // Convert the object back to an array
    const formattedArray = Object.values(itemsById);

    return formattedArray;
}

function renderUI() {
    // Call the function
const formattedItems = formatAndMergeItems(listCartItems);

var subtotal = 0;
for (let i = 0; i < formattedItems.length; i++) {
    const element = formattedItems[i];
    let li = document.createElement('li');
    li.className = "lx asd cfd";
    li.innerHTML = `
    <div class="up"><img
            src="${element.img}"
            alt="Front of men's Basic Tee in sienna." class="nq rr adu aqd aqe byc byy"></div>
    <div class="jx lx um yr zf bwi">
        <div class="ab aui bxr caq cbw cgm">
            <div>
                <div class="lx zf">
                    <h3 class="avz"><a href="#" class="awd axs bkz">${element.name}</a></h3>
                </div>
                <div class="ku lx avz">
                    <p class="axq">${element.gb}</p>
                </div>
                <p class="ku avz awd axu">$${element.price}</p>
            </div>
            <div class="lh bws cgv"><label for="quantity-0" class="t">Quantity, Basic
                    Tee</label><select id="quantity-${element.id}" name="quantity-0"
                    class="ub adu aez afv arp avj avx awd awn axs bbm bmk bmy bnc bnp cia">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                <div class="aa de dn"><button id='remove-btn-item-cart-${element.id}' type="button" class="fs ly aqp axo bkw"><span
                            class="t">Remove</span><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                            class="nz sb">
                            <path
                                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z">
                            </path>
                        </svg></button></div>
            </div>
        </div>
        <p class="lh lx abg avz axs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true" class="nz sb up axw">
                <path fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"></path>
            </svg><span>In stock</span></p>
    </div>
`
    subtotal +=(element.price * element.quantity);
    document.getElementById('cart-list').appendChild(li);

    document.getElementById(`remove-btn-item-cart-${element.id}`).onclick = () => {
        let cartItems = localStorage.getItem('cart-items');
        let list = cartItems ? JSON.parse(cartItems) : [];
        let newList = list.filter(e => e.id !== element.id);
        localStorage.setItem('cart-items', JSON.stringify(newList));
        var eventName = 'cartCustomEvent';
        var eventData = { type: 'add-item' };
        var customEvent = new CustomEvent(eventName, { detail: eventData });
        listCartItems = newList;
        document.getElementById('cart-list').innerHTML = '';
        window.dispatchEvent(customEvent);
        renderUI();
    };
}
    let taxFee = subtotal === 0 ? 0: (shippingFee + subtotal) * 0.02; 
    document.getElementById('shipping-fee').innerHTML = `&#8369; ${subtotal === 0 ? 0: shippingFee}`
    document.getElementById('sub-total').innerHTML = `&#8369; ${subtotal}`
    document.getElementById('tax-total').innerHTML = `&#8369; ${parseFloat(taxFee)}`
    document.getElementById('order-total').innerHTML = `&#8369; ${subtotal === 0 ? 0: (shippingFee + subtotal + parseFloat(taxFee))}`
}

renderUI();


document.getElementById('checkout-btn-success').onclick = () => {
    if (cartListItems) {
        localStorage.setItem('complete-cart-items', cartListItems);
        localStorage.removeItem('cart-items');
        window.location.href = 'payment-success.html';
    }
}

