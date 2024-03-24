const robotParts = [
  {
    name: "Microcontroller Board",
    category: "Electronic",
    price: 29.99,
    description: "Powerful microcontroller for controlling robot functions.",
    photo: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/1912/MIKROE-1104.jpg"
  },
  {
    name: "Motor Kit",
    category: "Mechanical",
    price: 39.95,
    description: "High-torque motors for robot movement and mobility.",
    photo: "https://m.media-amazon.com/images/I/713N2toLomL._SX522_.jpg"
  },
  {
    name: "Ultrasonic Sensor",
    category: "Electronic",
    price: 12.50,
    description: "Detects obstacles and measures distances using sound waves.",
    photo: "https://www.electronicscomp.com/image/cache/catalog/ultrasonic-sensor-hc-sr04-india-400x400.jpg"
  },
  {
    name: "Camera Module",
    category: "Electronic",
    price: 45.99,
    description: "Captures images and videos for robot vision.",
    photo: "https://static.wixstatic.com/media/794f72_f00e46c174ea45aaab463be1e0ff470b.png/v1/fill/w_602,h_472,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/794f72_f00e46c174ea45aaab463be1e0ff470b.png"
  },
  {
    name: "Robotics Starter Kit",
    category: "Robo-Kits",
    price: 89.99,
    description: "Beginner-friendly kit with essential components for building robots.",
    photo: "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/4507/KIT-HGDRONEK66.jpg"
  },
  {
    name: "Servo Motor",
    category: "Motors",
    price: 8.75,
    description: "Precise motor for controlling robot arm and joint movements.",
    photo: "https://m.media-amazon.com/images/I/61yfIwAxe0L.jpg"
  }
];

const menuItemsContainer = document.getElementById("menuItems");
const categoryButtons = document.querySelectorAll(".heading header button");

function displayItems(items) {
  const itemElements = items.map((item) => {
    return `
      <div class="item" style="background-image: url('${item.photo}')">
       <div class="background">
      <h1>${item.name}</h1>
        <p>${item.description}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
        <button class="button2">Add to Cart</button>
        </div> 
      </div>`;
  });

  menuItemsContainer.innerHTML = itemElements.join("");
}

function filterItems(category) {
  if (category === "All") {
    displayItems(robotParts);
  } else {
    const filteredItems = robotParts.filter((item) => item.category === category);
    displayItems(filteredItems);
  }
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.id;
    filterItems(category);
  });
});

displayItems(robotParts);