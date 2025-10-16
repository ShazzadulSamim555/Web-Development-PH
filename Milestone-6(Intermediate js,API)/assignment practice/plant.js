let allPlants = [];
let cart = [];

// Load Categories
const loadAllCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

// Load All Plants
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => {
      allPlants = json.plants;
      displayAllPlants(allPlants);
    });
};

// Display Categories as Buttons
const displayCategories = (categories) => {
    manageSpinner(true);
  const btnContainer = document.getElementById("btn-container");
  btnContainer.innerHTML = "";
  categories.forEach((category) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    
      <button id="category-btn-${category.id}" 
        onclick="loadPlantBtn(${category.id})" 
        class="btn btn-category w-full plant-btn">
        ${category.category_name}
      </button>`;
    btnContainer.appendChild(btnDiv);
  });
};

// Load Plants by Category
const loadPlantBtn = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      removeActiveBtn();
      document.getElementById(`category-btn-${id}`).classList.add("active-btn");
      displayAllPlants(data.plants);
    });
};

// Remove Active Button Style
const removeActiveBtn = () => {
  document
    .querySelectorAll(".plant-btn")
    .forEach((btn) => btn.classList.remove("active-btn"));
};

const loadPlantDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  //console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  showPlantDetails(data.plants);
};

const manageSpinner=(status)=>{
    if(status){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('plant-container').classList.add('hidden');
    }else{
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('plant-container').classList.remove('hidden');
    }
}

// {
//     "id": 6,
//     "image": "https://i.ibb.co.com/MxPrt83c/Krishnachura-min.jpg",
//     "name": "Krishnachura",
//     "description": "A striking ornamental tree famous for its brilliant orange-red blossoms. Its wide canopy adds a festive charm to parks and roadsides.",
//     "category": "Flowering Tree",
//     "price": 450
// }
const showPlantDetails = (plant) => {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <h3 class="text-lg font-bold">${plant.name}</h3>
    <div class="h-48 mb-3 overflow-hidden rounded-lg">
        <img class="w-full h-full object-cover" src="${plant.image}" alt="${plant.name}">
    </div>
    <p class="font-bold">Category: <span>${plant.category}</span></p>
    <p class="py-4">${plant.description}</p>
  `;
  
  document.getElementById("plant_details").showModal();
};


// Display All Plants
const displayAllPlants = (plants) => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";
  plants.forEach((plant) => {
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `
      <div class="bg-gray-50 rounded-lg p-3 space-y-3 h-full">
        <div class="w-full h-48 mb-3">
          <img class="w-full h-full rounded-lg object-cover" src="${plant.image}" alt="${plant.name}">
        </div>
        <h1 onclick="loadPlantDetails(${plant.id})" class="text-2xl font-bold">${plant.name}</h1>
        <p class="text-sm">${plant.description}</p>
        <div class="flex justify-between items-center">
          <button class="text-green-600 bg-green-100 px-3 py-1 rounded-lg">${plant.category}</button>
          <p class="text-xl font-bold">$${plant.price}</p>
        </div>
        <button onclick="addToCart(${plant.id})" class="btn btn-cart w-full">Add to Cart</button>
      </div>`;
    cartContainer.appendChild(cartDiv);
  });
  manageSpinner(false);
};

// Add to Cart
const addToCart = (id) => {
  console.log(id);
  const plant = allPlants.find((p) => p.id === id);
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...plant, quantity: 1 });
  }

  renderCart();

  alert(`${plant.name} has been added to your cart!`);
};

// Render Cart
const renderCart = () => {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const itemDiv = document.createElement("div");
    itemDiv.className =
      "flex justify-between items-center p-3 bg-green-50 rounded-lg";
    itemDiv.innerHTML = `
      <div class="space-y-1">
        <h4 class="text-lg font-bold">${item.name}</h4>
        <p>$${item.price} x ${item.quantity}</p>
      </div>
      <div class="flex gap-2 items-center">
        <button onclick="decreaseQty(${item.id})" class="px-2 bg-red-200 rounded">-</button>
        <button onclick="increaseQty(${item.id})" class="px-2 bg-green-200 rounded">+</button>
        <p class="cursor-pointer text-red-500" onclick="removeFromCart(${item.id})">
          <i class="fa-solid fa-trash"></i>
        </p>
      </div>
    `;
    cartItems.appendChild(itemDiv);
  });

  document.getElementById("total-price").innerText = `$${total}`;
};

// Remove Item
const removeFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
};

// Increase Quantity
const increaseQty = (id) => {
  const item = cart.find((i) => i.id === id);
  item.quantity++;
  renderCart();
};

// Decrease Quantity
const decreaseQty = (id) => {
  const item = cart.find((i) => i.id === id);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeFromCart(id);
  }
  renderCart();
};

// Initialize
loadAllCategories();
loadAllPlants();
