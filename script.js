// Inventory POS client-side logic

// Reference to Firestore database imported from firebaseConfig.js
// `db` is available in the global scope after firebaseConfig.js is loaded

const inventoryList = document.getElementById('inventory-list');
const addItemForm = document.getElementById('add-item-form');

// Clear the current list of items
function clearList() {
  inventoryList.innerHTML = '';
}

// Render a single item document as a row in the list
function renderItem(doc) {
  const item = doc.data();
  const div = document.createElement('div');
  div.classList.add('item');
  div.setAttribute('data-id', doc.id);

  // Create spans for name, quantity and price
  const nameSpan = document.createElement('span');
  nameSpan.textContent = item.name;
  const qtySpan = document.createElement('span');
  qtySpan.textContent = item.quantity;
  const priceSpan = document.createElement('span');
  priceSpan.textContent = item.price;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = div.getAttribute('data-id');
    db.collection('items').doc(id).delete().catch((err) => {
      console.error('Error deleting item:', err);
    });
  });

  div.appendChild(nameSpan);
  div.appendChild(qtySpan);
  div.appendChild(priceSpan);
  div.appendChild(deleteBtn);
  inventoryList.appendChild(div);
}

// Real-time listener to update the UI when data changes
db.collection('items').orderBy('name').onSnapshot((snapshot) => {
  clearList();
  snapshot.forEach((doc) => {
    renderItem(doc);
  });
});

// Handle form submission to add a new item
addItemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = addItemForm['name'].value.trim();
  const quantity = parseInt(addItemForm['quantity'].value, 10);
  const price = parseFloat(addItemForm['price'].value);
  if (!name) return;

  db.collection('items')
    .add({ name, quantity, price })
    .then(() => {
      addItemForm.reset();
    })
    .catch((err) => {
      console.error('Error adding item:', err);
    });
});