 window.addEventListener('scroll', () => {
   let { scrollY } = window;

  document.getElementById("landing-page").style.top = 0.5 * scrollY + 'px';
});

 document.getElementById("year").innerHTML = new Date().getFullYear();

 // NAVBAR ANIMATION
   window.onscroll = function () {
     scrollFunction();
   };
   
   document.getElementById("nav").setAttribute("style", "transition: all ease-in-out 0.5s;");
   
   var nav = document.getElementById("nav");
   
   function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.getElementById("nav").setAttribute("style", "box-shadow:#8c8c8c54 0.1rem 0.5rem 0.7rem 0.3rem;");
     } else {
       document.getElementById("nav").setAttribute("style", "box-shadow: none;background: !important;");
     }
   }

 function toggleDarkMode() {
   document.getElementById("nav").classList.toggle("navbar-dark");
   document.getElementById("nav").classList.toggle("bg-dark");
   document.body.classList.toggle("bg-dark");
   document.getElementById("product").classList.toggle("bg-dark");
   var product_card = document.getElementsByClassName("card");
   for(var i = 0; i < product_card.length; i++) 
     product_card[i].classList.toggle("bg-dark");
   var product_card_text = document.getElementsByClassName("card-body");
   for(var i = 0; i < product_card_text.length; i++) 
     product_card_text[i].classList.toggle("text-light"); 
   document.getElementById("landing-page").classList.toggle("text-light");
   document.getElementById("landing-page").classList.toggle("landing-page-dark");
   document.getElementById("modal-content").classList.toggle("text-light");
   document.getElementById("modal-content").classList.toggle("bg-dark");
   document.getElementById("btn-close").classList.toggle("bg-light");
   document.getElementById("products").classList.toggle("text-light");
   document.querySelector("footer").classList.toggle("bg-dark");
   document.getElementById("aboutUs").classList.toggle("bg-dark");
   document.getElementById("aboutUs").classList.toggle("text-light");
 }  
 
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
         <img src="${product.image}" class="card-img-top" alt="${product.title}">
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