// Dummy data for items
const itemsData = {
    cars: [
        { name: "Toyota Corolla", price: "$15,000", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=Toyota+Corolla" },
        { name: "Honda Civic", price: "$18,000", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=Honda+Civic" }
    ],
    "mobile-phones": [
        { name: "iPhone 14", price: "$1,200", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=iPhone+14" },
        { name: "Samsung Galaxy S22", price: "$1,000", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Galaxy+S22" }
    ],
    property: [
        { name: "House in Karachi", price: "$250,000", time: "4 days ago", image: "https://via.placeholder.com/300x200?text=House+in+Karachi" },
        { name: "Flat in Lahore", price: "$120,000", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=Flat+in+Lahore" }
    ],
    bikes: [
        { name: "Honda CG125", price: "$1,500", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Honda+CG125" },
        { name: "Yamaha YBR", price: "$2,000", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Yamaha+YBR" }
    ],
    toys: [
        { name: "Lego Set", price: "$50", time: "2 hours ago", image: "https://via.placeholder.com/300x200?text=Lego+Set" },
        { name: "Remote Control Car", price: "$80", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=RC+Car" }
    ]
};

// Function to display items
function displayItems(category) {
    const cardContainer = document.getElementById("item-cards");
    cardContainer.innerHTML = ""; // Clear previous cards

    if (itemsData[category]) {
        itemsData[category].forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Listed: ${item.time}</p>
                </div>
                <div class="card-actions">
                    <button>Add to Cart</button>
                    <button>Wishlist</button>
                </div>
            `;

            cardContainer.appendChild(card);
        });
    }
}

// Event listener for category clicks
document.getElementById("category-list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const category = event.target.getAttribute("data-category");
        displayItems(category);
    }
});
