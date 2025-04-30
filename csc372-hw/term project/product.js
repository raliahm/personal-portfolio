const products = [
    {
      "name" : "sky blue",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/3.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    }, 
    {
      "name" : "grey blue",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/4.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "sage green",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/5.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "lavendar",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/6.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "grey",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/7.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "top coat",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/8.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."

    },
    {
      "name" : "black",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/9.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "cream",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/10.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "baby pink",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/11.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "indigo blue",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/12.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "top and base coat",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/13.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "blood red",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/14.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "peach",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/15.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "baby clipper",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/babyclippers.jpeg",
      "description" : "This baby clippers are essential for taking care of your baby. It is designed for the softness of baby nails."
    },
    {
      "name" : "blue fire press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/bluefirepressons.jpeg",
      "description": "Perfect blue fire nail design. Its already made for you. Just press it on with the provided glue and your ready to go."
    },
    {
      "name" : "buffer",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/buffers.jpeg",
      "description" : "Nail buffer for the perfect nail beds."
    },
    {
      "name" : "cavier beads",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/caviorbeadsset.jpeg",
      "description" : "Cavier beads that have different colors for nail designs"
    },
    {
      "name" : "checkered press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/checkeredpressons.jpeg",
      "description": "Perfect checkered nail design. Its already made for you. Just press it on with the provided glue and your ready to go."
    },
    {
      "name" : "cheetah press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/cheetahpressons.webp",
      "description": "Perfect cheetah nail design. Its already made for you. Just press it on with the provided glue and your ready to go."
    },
    {
      "name" : "colorful press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/colorfulpressons.webp",
      "description": "Perfect colorful pastel nail design. Its already made for you. Just press it on with the provided glue and your ready to go."
    },
    {
      "name" : "flowers",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/flowers.jpeg",
      "description" : "Flower accesories in different shapes and sizes."
    },
    {
      "name" : "gold flakes",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/goldflakes.webp",
      "description" : "Gold flakes that are easy to use."
    },
    {
      "name" : "silver flakes",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/silverflakes.webp",
      "description" : "Silver flakes that are easy to use."
    },
    {
      "name" : "baby blue",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/images2.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "silver",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/images.jpeg",
      "description": "This product helps in growing out nails. It is advised to layer two times for maximum coverage."
    },
    {
      "name" : "nail clippers",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/nailclippers.jpeg",
      "description" : "Nail clippers for hands"
    },
    {
      "name" : "nail files",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/nailfiles.jpeg",
      "description":"Nail files, comes in a pack of 3"
    },
    {
      "name" : "nail polish remover",
      "price" : "$30",
      "type" : "nail kit",
      "img" : "nail-photos/nailpolishremover.jpeg",
      "description" : "Nail polish remover that has 80% aceton."
    },
    {
      "name" : "pink glitter",
      "price" : "$10",
      "type" : "nail accessories",
      "img" : "nail-photos/pinkglitter.webp",
      "description" : "Pink glitters for that pop of color"
    },
    {
      "name" : "pink nails glitter press ons",
      "price" : "$50",
      "type" : "nail extension",
      "img" : "nail-photos/pinknailsglitterpressons.webp",
      "description": "Perfect pink nail design. Its already made for you. Just press it on with the provided glue and your ready to go."
    },
    {
      "name" : "snowflake design press ons",
      "price" : "$50",
      "type" : "nail extension",
      "img" : "nail-photos/snowflakedesignpressons.webp",
      "description": "Perfect snowflake design. Its already made for you. Just press it on with the provided glue and your ready to go."
    },
    {
      "name" : "star moon nail rhinestones",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/starmoonnailrhinestones.webp",
      "description" : "Perfect rhinestones for a fairytale experience."
    },
    {
      "name" : "toe nail clippers",
      "price" : "$30",
      "type" : "nail kit",
      "img" : "nail-photos/toenails.jpeg",
      "description": "Nail clippers for your foot."
    }

  ];

  const container = document.getElementById('product-container');
  const filterOptions = document.getElementById('filter-options');
  const searchBar = document.getElementById('search-bar');
  let currentCategory = 'all';
  
  if (filterOptions) {
      // Get unique product types
    const types = [...new Set(products.map(p => p.type))];

    // Render filter checkboxes
    types.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}" class="type-filter"> ${type}</input>
        `;
        filterOptions.appendChild(label);
      });
  }
 



    function renderProducts(filtered) {
      container.innerHTML = "";
      if (filtered.length === 0) {
        container.innerHTML = "<h2> No products found.</h2>";
        return;
      }
      filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
        `;
        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.addEventListener('click', () => addToCart(product));  // Add to Cart
        card.appendChild(button);
        card.onclick = () => {
          // redirect to details page
          window.location.href = `details.html?name=${encodeURIComponent(product.name)}`;
        };
    
        container.appendChild(card);
      });
    }
    function goToDetails(productName) {
      window.location.href = `details.html?name=${encodeURIComponent(productName)}`;
    }

    function filterProducts() {
      const selectedTypes = [...document.querySelectorAll('.type-filter:checked')].map(cb => cb.value);
      const searchTerm = searchBar.value.toLowerCase();
      const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
      const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    
      const filtered = products.filter(product => {
        // Remove "$" and parse the price
        const priceValue = parseFloat(product.price.replace('$', ''));
        
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesPrice = priceValue >= minPrice && priceValue <= maxPrice;
        
        return matchesType && matchesSearch && matchesPrice;
      });
    
      renderProducts(filtered);
    }
    
    function applyFilters() {
      const checkedTypes = Array.from(document.querySelectorAll('.type-filter:checked')).map(cb => cb.value);
      const searchTerm = searchBar.value.toLowerCase();
    
      let filtered = products;
    
      // Filter by type
      if (checkedTypes.length > 0) {
        filtered = filtered.filter(product => checkedTypes.includes(product.type));
      }
    
      // Filter by search term (if needed)
      if (searchTerm) {
        filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm));
      }
    
      renderProducts(filtered);
    }
    
    // Checkbox filters
document.querySelectorAll('.type-filter').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});

// Search bar
//searchBar.addEventListener('input', applyFilters);




     // Event listeners
     document.querySelectorAll('.type-filter').forEach(cb => {
      cb.addEventListener('change', filterProducts);
    });


    searchBar.addEventListener('input', filterProducts);

    document.getElementById('min-price').addEventListener('input', filterProducts);
    document.getElementById('max-price').addEventListener('input', filterProducts);

    

    // Initial render
    renderProducts(products);