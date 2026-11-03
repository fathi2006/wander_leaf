
const destinations = [
    {
        name: "Bali",
        country: "Indonesia",
        image: "photo-1537996194471-e657df975ab4",
        photos: [
            "photo-1518548419970-58e3b4079ab2",
            "photo-1537996194471-e657df975ab4"
        ],
        description: "Discover tropical beaches, green rice terraces, peaceful temples, and beautiful sunsets in Bali.",
        highlights: ["Ubud rice terraces", "Uluwatu Temple", "Beautiful beaches"]
    },
    {
        name: "Swiss Alps",
        country: "Switzerland",
        image: "photo-1531366936337-7c912a4589a7",
        photos: [
            "photo-1531366936337-7c912a4589a7",
            "photo-1464822759023-fed622ff2c3b"
        ],
        description: "Experience snow-covered mountains, alpine villages, crystal-clear lakes, and scenic train journeys.",
        highlights: ["Mountain adventures", "Scenic train rides", "Alpine villages"]
    },
    {
        name: "Kyoto",
        country: "Japan",
        image: "photo-1493976040374-85c8e12f0c0e",
        photos: [
            "photo-1493976040374-85c8e12f0c0e",
            "photo-1528360983277-13d401cdc186"
        ],
        description: "Explore traditional Japanese streets, historic temples, bamboo forests, and peaceful gardens.",
        highlights: ["Arashiyama Bamboo Grove", "Historic temples", "Japanese gardens"]
    },
    {
        name: "Maldives",
        country: "Indian Ocean",
        image: "photo-1514282401047-d79a71a590e8",
        photos: [
            "photo-1514282401047-d79a71a590e8",
            "photo-1573843981267-be1999ff37cd"
        ],
        description: "Relax on white-sand beaches surrounded by turquoise water and colourful marine life.",
        highlights: ["Snorkelling", "Island resorts", "Sunset cruises"]
    },
    {
        name: "Manali",
        country: "India",
        image: "photo-1626621341517-bbf3d9990a23",
        photos: [
            "photo-1626621341517-bbf3d9990a23",
            "photo-1500530855697-b586d89ba3ee"
        ],
        description: "Escape to the Himalayas for mountain views, pine forests, river valleys, and outdoor adventures.",
        highlights: ["Solang Valley", "Mountain trails", "River adventures"]
    },
    {
        name: "Kerala",
        country: "India",
        image: "photo-1602216056096-3b40cc0c9944",
        photos: [
            "photo-1602216056096-3b40cc0c9944",
            "photo-1593693411515-c20261bcad6e"
        ],
        description: "Enjoy lush green landscapes, peaceful backwaters, tropical wildlife, and relaxing houseboat trips.",
        highlights: ["Alleppey backwaters", "Munnar tea gardens", "Houseboat cruises"]
    },
    {
        name: "Paris",
        country: "France",
        image: "photo-1502602898657-3e91760cbb34",
        photos: [
            "photo-1502602898657-3e91760cbb34",
            "photo-1499856871958-5b9627545d1a"
        ],
        description: "Discover charming streets, iconic architecture, art museums, and memorable French cuisine.",
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine river walks"]
    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        image: "photo-1512453979798-5ea266f8880c",
        photos: [
            "photo-1512453979798-5ea266f8880c",
            "photo-1518684079-3c830dcef090"
        ],
        description: "Experience modern skyscrapers, desert adventures, shopping destinations, and spectacular city views.",
        highlights: ["Burj Khalifa", "Desert safari", "Dubai Marina"]
    },
    {
        name: "Banff",
        country: "Canada",
        image: "photo-1503614472-8c93d56cd5b0",
        photos: [
            "photo-1503614472-8c93d56cd5b0",
            "photo-1511497584788-876760111969"
        ],
        description: "Explore turquoise mountain lakes, evergreen forests, scenic trails, and Canada's stunning wilderness.",
        highlights: ["Lake Louise", "Mountain hiking", "Wildlife viewing"]
    },
    {
        name: "Cape Town",
        country: "South Africa",
        image: "photo-1580060839134-75a5edca2e99",
        photos: [
            "photo-1580060839134-75a5edca2e99",
            "photo-1489749798305-4fea3ae63d43"
        ],
        description: "Discover dramatic coastal scenery, beautiful beaches, mountain viewpoints, and vibrant local culture.",
        highlights: ["Table Mountain", "Cape Point", "Coastal drives"]
    }
];

const destinationGrid = document.getElementById("destinationGrid");


function getImage(photoId, width = 800) {
    return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`;
}


function displayDestinations() {
    destinationGrid.innerHTML = destinations.map((place, index) => `
        <article class="destination-card" data-index="${index}">

            <div class="card-cover"
                style="background-image: url('${getImage(place.image)}')">

                <span class="card-number">0${index + 1}</span>

                <div class="card-title">
                    <h3>${place.name}</h3>
                    <p>📍 ${place.country}</p>
                </div>
            </div>

            <div class="card-body">
                <p class="card-description">
                    ${place.description}
                </p>

                <button class="explore-button"
                    aria-expanded="false">
                    Explore Destination +
                </button>
            </div>

            <div class="destination-details" hidden>
                <div class="detail-background"
                    style="background-image: url('${getImage(place.image, 1200)}')">

                    <div>
                        <p>DISCOVER THE BEAUTY OF</p>
                        <h4>${place.name}</h4>
                    </div>
                </div>

                <p class="detail-text">${place.description}</p>

                <h4>Things to explore</h4>

                <ul class="detail-highlights">
                    ${place.highlights.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <div class="photo-gallery">
                    ${place.photos.map(photo => `
                        <img src="${getImage(photo, 500)}"
                            alt="${place.name} travel scenery"
                            loading="lazy">
                    `).join("")}
                </div>
            </div>

        </article>
    `).join("");
}

// Expand or collapse a destination
destinationGrid.addEventListener("click", event => {
    const button = event.target.closest(".explore-button");

    if (!button) return;

    const currentCard = button.closest(".destination-card");
    const details = currentCard.querySelector(".destination-details");
    const isOpen = !details.hidden;

    document.querySelectorAll(".destination-card").forEach(card => {
        card.classList.remove("expanded");

        card.querySelector(".destination-details").hidden = true;
        card.querySelector(".explore-button").textContent =
            "Explore Destination +";

        card.querySelector(".explore-button").setAttribute(
            "aria-expanded", "false"
        );
    });

  
    if (!isOpen) {
        currentCard.classList.add("expanded");
        details.hidden = false;
        button.textContent = "Show Less −";
        button.setAttribute("aria-expanded", "true");

        // Bring the expanded card into view
        currentCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");


const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    if (
        PUBLIC_KEY === "j6Gzf1bBl0G-XRLQu" ||
        SERVICE_ID === "service_4fr81dp" ||
        TEMPLATE_ID === "template_50ys11e"
    ) {
        formStatus.textContent =
            "Please configure your EmailJS keys in script.js before sending.";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";

    try {
        await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            contactForm,
            { publicKey: PUBLIC_KEY }
        );

        formStatus.textContent =
            "Message sent successfully! Thank you for contacting us.";

        contactForm.reset();
    } catch (error) {
        console.error("EmailJS error:", error);

        formStatus.textContent =
            "Unable to send your message. Please check your EmailJS settings and try again.";
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message ↗";
    }
});


displayDestinations();
