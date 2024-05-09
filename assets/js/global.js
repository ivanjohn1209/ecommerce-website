
var eventName = 'cartCustomEvent';
let cartItems = localStorage.getItem('cart-items');
let listCart = cartItems ? JSON.parse(cartItems) : [];
document.getElementById('cart-count').innerText = listCart.length;
// Create a function to handle the event
function eventHandler(event) {
    console.log('Custom event triggered with data:', event.detail);
    let updatecartItems = localStorage.getItem('cart-items');
    let UpdatelistCart = updatecartItems ? JSON.parse(updatecartItems) : [];
    document.getElementById('cart-count').innerText = UpdatelistCart.length;
}

// Add event listener to the window
window.addEventListener(eventName, eventHandler);
