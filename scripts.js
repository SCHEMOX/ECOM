
  //PRODUCT

  // Product data
  const products = [
    {
      title: "Nike Shoes",
      image: "./img/Shoes.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptate! Perferendis, officiis, unde vero cupiditate commodi distinctio minus necessitatibus quos velit nobis et dignissimos reiciendis. Assumenda illo ad pariatur libero."
    },
    {
      title: "Headset",
      image: "./img/Headset.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, labore quasi ut voluptatibus commodi esse sit nulla perferendis accusamus repudiandae distinctio inventore nostrum! Accusantium dolorem saepe inventore eum quae ea."
    },
    {
      title: "iPhone",
      image: "./img/iPhone.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, labore quasi ut voluptatibus commodi esse sit nulla perferendis accusamus repudiandae distinctio inventore nostrum! Accusantium dolorem saepe inventore eum quae ea."
    },
    {
      title: "Blazer",
      image: "./img/Blazer.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, labore quasi ut voluptatibus commodi esse sit nulla perferendis accusamus repudiandae distinctio inventore nostrum! Accusantium dolorem saepe inventore eum quae ea."
    },
    {
      title: "Autumn Outfit",
      image: "./img/Outfit.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, labore quasi ut voluptatibus commodi esse sit nulla perferendis accusamus repudiandae distinctio inventore nostrum! Accusantium dolorem saepe inventore eum quae ea."
    },
    {
      title: "Laptop",
      image: "./img/Laptop.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, labore quasi ut voluptatibus commodi esse sit nulla perferendis accusamus repudiandae distinctio inventore nostrum! Accusantium dolorem saepe inventore eum quae ea."
    },
  ];

  // Function to dynamically create product cards
  function createProductCards() {
    const firstRow = document.getElementById("firstRow");
    const secondRow = document.getElementById("secondRow");

    products.forEach((product, index) => {
      const col = document.createElement("div");
      col.className = "col-lg";
      col.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onclick="openProductModal(${index})">
              See More
            </button>
          </div>
        </div>
      `;

      // Distribute products evenly between the two rows
      index < 3 ? firstRow.appendChild(col) : secondRow.appendChild(col);
    });
  }

  // Function to open the product modal with dynamic content
  function openProductModal(index) {
    const product = products[index];
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("productImage").src = product.image;
    document.getElementById("productDescription").textContent = product.description;
  }

  // Call the function to create product cards when the page loads
  window.onload = createProductCards;