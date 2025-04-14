const products = [
    {
      "name" : "sky blue",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/3.jpeg"
    }, 
    {
      "name" : "grey blue",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/4.jpeg"
    },
    {
      "name" : "sage green",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/5.jpeg"
    },
    {
      "name" : "lavendar",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/6.jpeg"
    },
    {
      "name" : "grey",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/7.jpeg"
    },
    {
      "name" : "top coat",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/8.jpeg"
    },
    {
      "name" : "black",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/9.jpeg"
    },
    {
      "name" : "cream",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/10.jpeg"
    },
    {
      "name" : "baby pink",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/11.jpeg"
    },
    {
      "name" : "indigo blue",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/12.jpeg"
    },
    {
      "name" : "top and base coat",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/13.jpeg"
    },
    {
      "name" : "blood red",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/14.jpeg"
    },
    {
      "name" : "peach",
      "price" : "$10",
      "type" : "nail polish",
       "img" : "nail-photos/15.jpeg"
    },
    {
      "name" : "baby clipper",
      "price" : "$5",
      "type" : "nail kit",
       "img" : "nail-photos/babyclippers.jpeg"
    },
    {
      "name" : "blue fire press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/bluefirepressons.jpeg"

    },
    {
      "name" : "buffer",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/buffers.jpeg"
    },
    {
      "name" : "cavier beads",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/caviorbeadsset.jpeg"
    },
    {
      "name" : "checkered press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/checkeredpressons.jpeg"
    },
    {
      "name" : "cheetah press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/cheetahpressons.webp"
    },
    {
      "name" : "colorful press ons",
      "price" : "$20",
      "type" : "nail extension",
      "img" : "nail-photos/colorfulpressons.webp"
    },
    {
      "name" : "flowers",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/flowers.jpeg"
    },
    {
      "name" : "gold flakes",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/goldflakes.webp"
    },
    {
      "name" : "silver flakes",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/silverflakes.webp"
    },
    {
      "name" : "baby blue",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/images2.jpeg"
    },
    {
      "name" : "silver",
      "price" : "$10",
      "type" : "nail polish",
      "img" : "nail-photos/images.jpeg"
    },
    {
      "name" : "nail clippers",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/nailclippers.jpeg"
    },
    {
      "name" : "nail files",
      "price" : "$5",
      "type" : "nail kit",
      "img" : "nail-photos/nailfiles.jpeg"
    },
    {
      "name" : "nail polish remover",
      "price" : "$30",
      "type" : "nail kit",
      "img" : "nail-photos/nailpolishremover.jpeg"
    },
    {
      "name" : "pink glitter",
      "price" : "$10",
      "type" : "nail accessories",
      "img" : "nail-photos/pinkglitter.webp"
    },
    {
      "name" : "pink nails glitter press ons",
      "price" : "$50",
      "type" : "nail extension",
      "img" : "nail-photos/pinknailsglitterpressons.webp"
    },
    {
      "name" : "snowflake design press ons",
      "price" : "$50",
      "type" : "nail extension",
      "img" : "nail-photos/snowflakedesignpressons.webp"
    },
    {
      "name" : "star moon nail rhinestones",
      "price" : "$30",
      "type" : "nail accessories",
      "img" : "nail-photos/starmoonnailrhinestones.webp"
    },
    {
      "name" : "toe nail clippers",
      "price" : "$30",
      "type" : "nail kit",
      "img" : "nail-photos/toenails.jpeg"
    }

  ];

    
  const filterOptions = document.getElementById('filter-options');
  const searchBar = document.getElementById('search-bar');
  const container = document.getElementById('product-container');
  let currentCategory = 'all';
  
  // Get unique product types
  const types = [...new Set(products.map(p => p.type))];

  // Render filter checkboxes
  types.forEach(type => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="checkbox" value="${type}" class="type-filter"> ${type}
      `;
      filterOptions.appendChild(label);
    });
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

       
        container.appendChild(card);
      });
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
searchBar.addEventListener('input', applyFilters);




     // Event listeners
     document.querySelectorAll('.type-filter').forEach(cb => {
      cb.addEventListener('change', filterProducts);
    });


    searchBar.addEventListener('input', filterProducts);

    document.getElementById('min-price').addEventListener('input', filterProducts);
    document.getElementById('max-price').addEventListener('input', filterProducts);

    

    // Initial render
    renderProducts(products);