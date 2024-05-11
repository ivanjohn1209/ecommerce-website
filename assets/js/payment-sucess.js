let completecartListItems = localStorage.getItem('complete-cart-items');
let completelistCartItems = completecartListItems ? JSON.parse(completecartListItems) : [];
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

// Call the function
const formattedItems = formatAndMergeItems(completelistCartItems);

var subtotal = 0;

for (let i = 0; i < formattedItems.length; i++) {
    const element = formattedItems[i];
    let li = document.createElement('li');
    li.className = "lx abl asd";
    li.innerHTML = `
   <img src="${element.img}"
                                    alt="${element.name}"
                                    class="nq rr uo adu aih aqd aqe">
                                <div class="un abo">
                                    <h3 class="axu"><a href="#">${element.name}</a></h3>
                                    <p>${element.gb}</p>
                                </div>
                                <p class="uo awd axu">&#8369;${element.price}</p>`
     subtotal +=element.price * element.quantity;
    document.getElementById('compelete-cart-list').appendChild(li);

}

let taxFee = (shippingFee + subtotal) * 0.02; 
document.getElementById('shipping-fee').innerHTML = `&#8369;${shippingFee}`
document.getElementById('sub-total').innerHTML = `&#8369;${subtotal}`
document.getElementById('tax-total').innerHTML = `&#8369;${parseFloat(taxFee)}`
document.getElementById('order-total').innerHTML = `&#8369;${shippingFee + subtotal + parseFloat(taxFee)}`