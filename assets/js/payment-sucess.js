let completecartListItems = localStorage.getItem('complete-cart-items');
let completelistCartItems = completecartListItems ? JSON.parse(completecartListItems) : [];
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
                                    <p>Charcoal</p>
                                    <p>L</p>
                                </div>
                                <p class="uo awd axu">$36.00</p>`
    document.getElementById('compelete-cart-list').appendChild(li);

}