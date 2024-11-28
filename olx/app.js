// Dummy data for items
const itemsData = {
    "mobile-phones": [
        { name: "iPhone 14", price: "$1200", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=iPhone+14" },
        { name: "Samsung Galaxy S22", price: "$1000", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Galaxy+S22" },
        { name: "OnePlus 11", price: "$800", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=OnePlus+11" },
        { name: "Google Pixel 7", price: "$900", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=Pixel+7" }
    ],
    cars: [
        { name: "Toyota Corolla", price: "$15000", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=Toyota+Corolla" },
        { name: "Honda Civic", price: "$18000", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=Honda+Civic" },
        { name: "Suzuki Mehran", price: "$7000", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Suzuki+Mehran" },
        { name: "Kia Sportage", price: "$25000", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Kia+Sportage" }
    ],
    motorcycles: [
        { name: "Yamaha R1", price: "$12000", time: "1 hour ago", image: "https://via.placeholder.com/300x200?text=Yamaha+R1" },
        { name: "Honda CG125", price: "$800", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=Honda+CG125" },
        { name: "Yamaha R1", price: "$12000", time: "1 hour ago", image: "https://via.placeholder.com/300x200?text=Yamaha+R1" },
        { name: "Honda CG125", price: "$800", time: "2 days ago", image: "https://via.placeholder.com/300x200?text=Honda+CG125" }
    ],
    houses: [
        { name: "3 Bed Apartment", price: "$120,000", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=3+Bed+Apartment" },
        { name: "Villa in Karachi", price: "$300,000", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Villa+in+Karachi" },
        { name: "3 Bed Apartment", price: "$120,000", time: "5 hours ago", image: "https://via.placeholder.com/300x200?text=3+Bed+Apartment" },
        { name: "Villa in Karachi", price: "$300,000", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Villa+in+Karachi" }
    ],
    "video-audios": [
        { name: "Sony Headphones", price: "$250", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Sony+Headphones" },
        { name: "Bluetooth Speaker", price: "$150", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Bluetooth+Speaker" },
        { name: "Sony Headphones", price: "$250", time: "3 hours ago", image: "https://via.placeholder.com/300x200?text=Sony+Headphones" },
        { name: "Bluetooth Speaker", price: "$150", time: "1 day ago", image: "https://via.placeholder.com/300x200?text=Bluetooth+Speaker" },
    ],
    tablets: [
        { name: "iPad Pro", price: "$1000", time: "2 hours ago", image: "https://via.placeholder.com/300x200?text=iPad+Pro" },
        { name: "Samsung Galaxy Tab", price: "$700", time: "3 days ago", image: "https://via.placeholder.com/300x200?text=Galaxy+Tab" },
        { name: "iPad Pro", price: "$1000", time: "2 hours ago", image: "https://via.placeholder.com/300x200?text=iPad+Pro" },
        { name: "Samsung Galaxy Tab", price: "$700", time: "3 days ago", image: "https://via.placeholder.com/300x200?text=Galaxy+Tab" },
    ],
    "land-plots": [
        { name: "5 Marla Plot", price: "$15,000", time: "4 days ago", image: "https://via.placeholder.com/300x200?text=5+Marla+Plot" },
        { name: "10 Marla Plot", price: "$25,000", time: "6 hours ago", image: "https://via.placeholder.com/300x200?text=10+Marla+Plot" },
        { name: "5 Marla Plot", price: "$15,000", time: "4 days ago", image: "https://via.placeholder.com/300x200?text=5+Marla+Plot" },
        { name: "10 Marla Plot", price: "$25,000", time: "6 hours ago", image: "https://via.placeholder.com/300x200?text=10+Marla+Plot" },
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
