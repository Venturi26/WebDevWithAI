const reviews = [
  { text: 'Great bikes and even better service.', author: 'Sarah' },
  { text: 'The staff actually know what they are talking about.', author: 'Mitch' },
  { text: 'Helpful, friendly, and easy to deal with.', author: 'Emma' },
  { text: 'I found the perfect bike for my weekend rides.', author: 'Liam' },
  { text: 'Fantastic local shop with quality advice.', author: 'Ava' }
];

const bikeCategories = {
  hardtails: {
    name: 'Hardtails',
    description: 'Simple, capable mountain bikes with front suspension for trails and everyday adventures.',
    bikeBlurb: 'A dependable front-suspension ride for trail exploring, climbing, and everyday adventures.',
    bikes: [
      {
        brand: 'Canyon',
        model: 'Stoic',
        price: 1800,
        image: 'https://storage.googleapis.com/media.sicklines.com/2020/12/Canyon-Stoic-2021-hardtail-855205_1.jpg'
      },
      {
        brand: 'Giant',
        model: 'Talon',
        price: 1900,
        image: 'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_1000%2Cq_80%2Cw_1920/h1vdzgbpoeusmi5f5w84/tealon_banner01.jpg'
      },
      {
        brand: 'Trek',
        model: 'Marlin',
        price: 2000,
        image: 'https://cdn.mos.cms.futurecdn.net/kGJkDoLTkzyVkogJAyAbjm.jpg'
      },
      {
        brand: 'Specialized',
        model: 'Rockhopper',
        price: 2100,
        image: 'https://bikepacking.com/wp-content/uploads/2020/05/2021-specialized-rockhopper-2-2000x1333.jpg'
      },
      {
        brand: 'Scott',
        model: 'Aspect',
        price: 2200,
        image: 'https://www.balfesbikes.co.uk/images/products/D/DS/dsc05832.jpg?width=1920&format=webp'
      },
      {
        brand: 'Santa Cruz',
        model: 'Chameleon',
        price: 2500,
        image: 'https://bikepacking.com/wp-content/uploads/2021/09/2022-Santa-Cruz-Chameleon-Review_1.jpg'
      },
      {
        brand: 'Cube',
        model: 'Reaction',
        price: 2600,
        image: 'https://www.paulscycles.co.uk/images/712100_O_00.jpg?width=1920&format=webp'
      },
      {
        brand: 'Kona',
        model: 'Honzo',
        price: 2800,
        image: 'https://www.expocafeperu.com/w/2020/06/kona-honzo-2020-review-dl-st-frame-for-sale-canada-weight-big-cr-dream-builds-tims-trippy-hei.jpg'
      },
      {
        brand: 'Rocky Mountain',
        model: 'Growler',
        price: 3000,
        image: 'https://mbaction.com/wp-content/uploads/2022/05/Writers_Ride_RockyMtn_Growler_3_e-copy.jpg'
      }
    ]
  },
  xc: {
    name: 'XC Bikes',
    description: 'Lightweight and efficient bikes made for climbing, speed, and cross-country courses.',
    bikeBlurb: 'A lightweight, efficient ride built for fast laps, long climbs, and cross-country courses.',
    bikes: [
      {
        brand: 'Canyon',
        model: 'Lux World Cup',
        price: 3499,
        image: 'https://flowmountainbike.com/wp-content/uploads/2023/04/2023-Canyon-Lux-World-Cup-Pack-Shots-06966.jpg'
      },
      {
        brand: 'Giant',
        model: 'Anthem',
        price: 3899,
        image: 'https://mbaction.com/wp-content/uploads/2025/11/Giant_Taiwan-9267-scaled.jpg'
      },
      { brand: 'Trek', model: 'Supercaliber', price: 4999 },
      { brand: 'Specialized', model: 'Epic', price: 5499 },
      { brand: 'Scott', model: 'Spark RC', price: 5999 },
      { brand: 'Santa Cruz', model: 'Blur', price: 6499 },
      {
        brand: 'Cube',
        model: 'AMS',
        price: 4299,
        image: 'https://bike-test.com/wp-content/uploads/2025/03/Cube-AMS-Zero-99-2-scaled.jpg'
      },
      {
        brand: 'Kona',
        model: 'Hei Hei',
        price: 3899,
        image: 'https://blisterreview.com/wp-content/uploads/2025/04/HEI-HEI-NZ-2025-2162.jpg'
      },
      { brand: 'Rocky Mountain', model: 'Element', price: 4999 }
    ]
  },
  trail: {
    name: 'Trail Bikes',
    description: 'Versatile mountain bikes ready for technical singletrack and all-day rides.',
    bikeBlurb: 'A versatile trail companion designed to balance confident descents with all-day pedalling.',
    bikes: [
      { brand: 'Canyon', model: 'Neuron', price: 2999 },
      { brand: 'Giant', model: 'Trance', price: 3799 },
      { brand: 'Trek', model: 'Fuel EX', price: 4299 },
      { brand: 'Specialized', model: 'Stumpjumper', price: 4999 },
      { brand: 'Scott', model: 'Genius', price: 4799 },
      { brand: 'Santa Cruz', model: '5010', price: 5699 },
      { brand: 'Cube', model: 'Stereo ONE44', price: 3999 },
      { brand: 'Kona', model: 'Process 134', price: 4499 },
      { brand: 'Rocky Mountain', model: 'Instinct', price: 4999 }
    ]
  },
  enduro: {
    name: 'Enduro Bikes',
    description: 'Big-travel bikes for demanding descents that can still get you back to the top.',
    bikeBlurb: 'A big-travel mountain bike made for demanding descents and getting back to the top.',
    bikes: [
      { brand: 'Canyon', model: 'Strive', price: 5499 },
      { brand: 'Giant', model: 'Reign', price: 5999 },
      { brand: 'Trek', model: 'Slash', price: 6299 },
      { brand: 'Specialized', model: 'Enduro', price: 6499 },
      { brand: 'Scott', model: 'Ransom', price: 6999 },
      { brand: 'Santa Cruz', model: 'Megatower', price: 7499 },
      { brand: 'Cube', model: 'Stereo ONE77', price: 5499 },
      { brand: 'Kona', model: 'Process X', price: 5799 },
      { brand: 'Rocky Mountain', model: 'Altitude', price: 6999 }
    ]
  },
  dh: {
    name: 'DH Bikes',
    description: 'Gravity-focused bikes made for steep tracks, bike parks, and downhill runs.',
    bikeBlurb: 'A gravity-focused machine for steep tracks, bike parks, and full-speed downhill runs.',
    bikes: [
      { brand: 'Canyon', model: 'Sender', price: 4999 },
      { brand: 'Giant', model: 'Glory', price: 5999 },
      { brand: 'Trek', model: 'Session', price: 6999 },
      { brand: 'Specialized', model: 'Demo', price: 6499 },
      { brand: 'Scott', model: 'Gambler', price: 7499 },
      { brand: 'Santa Cruz', model: 'V10', price: 8999 },
      { brand: 'Cube', model: 'Two15', price: 4999 },
      { brand: 'Kona', model: 'Operator', price: 5999 },
      { brand: 'Rocky Mountain', model: 'Maiden', price: 7999 }
    ]
  },
  ebikes: {
    name: 'Ebikes',
    description: 'Electric assistance helps you ride farther, climb easier, and enjoy more time out.',
    bikeBlurb: 'Electric assistance helps make longer rides and steep climbs more accessible.',
    bikes: [
      { brand: 'Canyon', model: 'Spectral:ON', price: 6999 },
      { brand: 'Giant', model: 'Trance X Advanced E+', price: 7999 },
      { brand: 'Trek', model: 'Rail', price: 8499 },
      { brand: 'Specialized', model: 'Turbo Levo', price: 8999 },
      { brand: 'Scott', model: 'Patron eRIDE', price: 9499 },
      { brand: 'Santa Cruz', model: 'Heckler', price: 9999 },
      { brand: 'Cube', model: 'Stereo Hybrid ONE44', price: 6499 },
      { brand: 'Kona', model: 'Remote', price: 6999 },
      { brand: 'Rocky Mountain', model: 'Altitude Powerplay', price: 10999 }
    ]
  },
  road: {
    name: 'Roadbikes',
    description: 'Lightweight, quick bikes for smooth roads, longer rides, and fitness goals.',
    bikeBlurb: 'A quick, lightweight ride for smooth roads, longer distances, and fitness goals.',
    bikes: [
      { brand: 'Canyon', model: 'Endurace', price: 2599 },
      { brand: 'Giant', model: 'Defy', price: 2999 },
      { brand: 'Trek', model: 'Domane', price: 3499 },
      { brand: 'Specialized', model: 'Roubaix', price: 3999 },
      { brand: 'Scott', model: 'Addict', price: 4299 },
      { brand: 'Santa Cruz', model: 'Stigmata (gravel)', price: 3999 },
      { brand: 'Cube', model: 'Agree', price: 3299 },
      { brand: 'Kona', model: 'Rove (gravel)', price: 2199 },
      { brand: 'Rocky Mountain', model: 'Solo (gravel)', price: 2699 }
    ]
  },
  hybrid: {
    name: 'Hybrid Bikes',
    description: 'Comfortable, practical bikes for commuting, errands, and relaxed rides.',
    bikeBlurb: 'A practical, comfortable choice for commuting, errands, and relaxed everyday rides.',
    bikes: [
      { brand: 'Canyon', model: 'Roadlite', price: 1299 },
      { brand: 'Giant', model: 'Escape', price: 1099 },
      { brand: 'Trek', model: 'FX', price: 1199 },
      { brand: 'Specialized', model: 'Sirrus', price: 1399 },
      { brand: 'Scott', model: 'Sub Cross', price: 1499 },
      { brand: 'Santa Cruz', model: 'Skitch (electric flat-bar)', price: 4999 },
      { brand: 'Cube', model: 'Nature', price: 1199 },
      { brand: 'Kona', model: 'Dew', price: 999 },
      { brand: 'Rocky Mountain', model: 'Fusion (flat-bar crossover)', price: 1399 }
    ]
  }
};

const reviewText = document.getElementById('review-text');
const reviewAuthor = document.getElementById('review-author');

const priceFormatter = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0
});

const cartStorageKey = 'bikesOnHighCart';
const cartStatus = document.getElementById('cart-status');

const showCartStatus = (message) => {
  if (cartStatus) {
    cartStatus.textContent = message;
    cartStatus.hidden = false;
  }
};

const readCart = () => {
  try {
    const storedCart = localStorage.getItem(cartStorageKey);
    if (storedCart === null) {
      return [];
    }

    const cart = JSON.parse(storedCart);
    if (!Array.isArray(cart) || cart.some((item) =>
      !item || typeof item.id !== 'string' || typeof item.brand !== 'string' ||
      typeof item.model !== 'string' || !Number.isFinite(item.price) ||
      !Number.isInteger(item.quantity) || item.quantity < 1
    )) {
      throw new Error('Stored cart data is invalid.');
    }
    return cart;
  } catch (error) {
    showCartStatus('Your cart could not be loaded. Please check browser storage and try again.');
    console.error('Unable to read the shopping cart.', error);
    return null;
  }
};

const saveCart = (cart) => {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
    return true;
  } catch (error) {
    showCartStatus('Your cart could not be saved. Please check browser storage and try again.');
    console.error('Unable to save the shopping cart.', error);
    return false;
  }
};

document.querySelectorAll('[data-category-price]').forEach((priceLabel) => {
  const category = bikeCategories[priceLabel.dataset.categoryPrice];
  if (!category) {
    return;
  }

  const prices = category.bikes.map((bike) => bike.price);
  const minimum = Math.min(...prices);
  const maximum = Math.max(...prices);
  priceLabel.textContent = `${priceFormatter.format(minimum)}–${priceFormatter.format(maximum)}`;
});

if (reviewText && reviewAuthor) {
  let currentIndex = 0;

  const updateReview = () => {
    const review = reviews[currentIndex];
    reviewText.textContent = `“${review.text}”`;
    reviewAuthor.textContent = `— ${review.author}`;
    currentIndex = (currentIndex + 1) % reviews.length;
  };

  updateReview();
  setInterval(updateReview, 7000);
}

const heroCarousel = document.getElementById('hero-carousel');
const heroCarouselImage = document.getElementById('hero-carousel-image');

if (heroCarousel && heroCarouselImage) {
  const heroSlides = [
    {
      src: 'https://cdn.mos.cms.futurecdn.net/U95EjBTA2KthNwhWyCcui5.jpg',
      alt: 'Mountain biker riding downhill on a rocky trail'
    },
    {
      src: 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw8629309a/images/plp/Mountain/Lux/cross-country-canyon-03.jpg?sw=1920',
      alt: 'Cross-country mountain biker riding a trail'
    },
    {
      src: 'https://www.ucimtbworldseries.com/_next/image?url=https%3A%2F%2Fassets.ucimtbworldseries.com%2Fcontent%2F20442%2Fconversions%2FEET2aKvBynVqcbdwGh7l0IMnpBD6012YLafVaWj9-newLargeThumb.jpg&w=3840&q=75',
      alt: 'Mountain biker riding an enduro trail'
    },
    {
      src: 'https://www.10wallpaper.com/wallpaper/3840x2400/2411/Girl_Speeding_Road_Biking_Outdoor_Activities_5K_3840x2400.jpg',
      alt: 'Woman riding a road bike outdoors'
    }
  ];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentSlide = 0;
  let rotationTimer;

  const showSlide = (index) => {
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[currentSlide];
    heroCarouselImage.src = slide.src;
    heroCarouselImage.alt = slide.alt;
  };

  const stopRotation = () => {
    window.clearInterval(rotationTimer);
  };

  const startRotation = () => {
    stopRotation();
    if (!reducedMotion) {
      rotationTimer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
    }
  };

  heroCarousel.addEventListener('mouseenter', stopRotation);
  heroCarousel.addEventListener('mouseleave', startRotation);
  heroCarousel.addEventListener('focusin', stopRotation);
  heroCarousel.addEventListener('focusout', (event) => {
    if (!heroCarousel.contains(event.relatedTarget)) {
      startRotation();
    }
  });
  startRotation();
}

const categoryPageName = document.getElementById('category-page-name');
const categoryPageTitle = document.getElementById('category-page-title');
const categoryPageDescription = document.getElementById('category-page-description');
const categoryPageError = document.getElementById('category-page-error');
const categoryBikeList = document.getElementById('category-bike-list');

if (categoryPageName && categoryPageTitle && categoryPageDescription && categoryPageError && categoryBikeList) {
  const categoryKey = new URLSearchParams(window.location.search).get('category');
  const category = categoryKey && Object.prototype.hasOwnProperty.call(bikeCategories, categoryKey)
    ? bikeCategories[categoryKey]
    : undefined;

  if (category) {
    document.title = `${category.name} | BikesOnHigh`;
    categoryPageName.textContent = category.name;
    categoryPageTitle.textContent = category.name;
    categoryPageDescription.textContent =
      `${category.description} Select a bike title to view its details and frame sizes. Prices are estimates; contact the shop to confirm availability and pricing.`;

    [...category.bikes]
      .sort((first, second) => first.price - second.price)
      .forEach(({ brand, model, price, image }) => {
        const bikeCard = document.createElement('article');
        bikeCard.className = 'category-bike-card';

        if (image) {
          const bikeImage = document.createElement('img');
          bikeImage.className = 'category-bike-image';
          bikeImage.src = image;
          bikeImage.alt = `${brand} ${model} bike`;
          bikeCard.append(bikeImage);
        }

        const bikeBrand = document.createElement('p');
        bikeBrand.className = 'category-bike-brand';
        bikeBrand.textContent = brand;

        const bikeModel = document.createElement('h2');
        const bikeTitleLink = document.createElement('a');
        bikeTitleLink.className = 'category-bike-title-link';
        bikeTitleLink.href = `/bike.html?${new URLSearchParams({ category: categoryKey, brand, model })}`;
        bikeTitleLink.textContent = model;
        bikeModel.append(bikeTitleLink);

        const bikePrice = document.createElement('p');
        bikePrice.className = 'category-bike-price';
        bikePrice.textContent = `Price: ${priceFormatter.format(price)}`;

        const contactLink = document.createElement('a');
        contactLink.href =
          `mailto:sales@bikeonhigh.com.au?subject=${encodeURIComponent(`Bike enquiry: ${brand} ${model}`)}`;
        contactLink.textContent = 'Ask about this bike';

        bikeCard.append(bikeBrand, bikeModel, bikePrice, contactLink);
        categoryBikeList.append(bikeCard);
      });
  } else {
    categoryPageName.textContent = 'Category not found';
    categoryPageTitle.textContent = 'Category not found';
    categoryPageDescription.textContent = 'Choose a bike category from the Bikes page.';
    categoryPageError.hidden = false;
    categoryPageError.textContent = categoryKey
      ? 'That bike category does not exist.'
      : 'Select a category to see more information.';

    const bikesLink = document.createElement('a');
    bikesLink.className = 'shop-link';
    bikesLink.href = '/bikes.html';
    bikesLink.textContent = 'Browse bike categories';
    categoryBikeList.append(bikesLink);
  }
}

const bikeDetail = document.getElementById('bike-detail');
if (bikeDetail) {
  const bikeDetailContent = document.getElementById('bike-detail-content');
  const bikeDetailError = document.getElementById('bike-detail-error');
  const categoryLink = document.getElementById('bike-detail-category-link');
  const bikeImage = document.getElementById('bike-detail-image');
  const bikeImageNote = document.getElementById('bike-detail-image-note');
  const bikeTitle = document.getElementById('bike-detail-title');
  const bikeDescription = document.getElementById('bike-detail-description');
  const bikePrice = document.getElementById('bike-detail-price');
  const frameSizeSelect = document.getElementById('bike-detail-frame-size');
  const addToCartButton = document.getElementById('bike-detail-add-to-cart');
  const parameters = new URLSearchParams(window.location.search);
  const categoryKey = parameters.get('category');
  const category = categoryKey && Object.prototype.hasOwnProperty.call(bikeCategories, categoryKey)
    ? bikeCategories[categoryKey]
    : undefined;
  const bike = category?.bikes.find((item) =>
    item.brand === parameters.get('brand') && item.model === parameters.get('model')
  );

  if (bike && category && categoryKey) {
    document.title = `${bike.brand} ${bike.model} | BikesOnHigh`;
    categoryLink.href = `/category.html?category=${encodeURIComponent(categoryKey)}`;
    categoryLink.textContent = category.name;
    bikeTitle.textContent = `${bike.brand} ${bike.model}`;
    bikeDescription.textContent = `${bike.brand} ${bike.model} is ${category.bikeBlurb.toLowerCase()}`;
    bikePrice.textContent = priceFormatter.format(bike.price);

    if (bike.image) {
      bikeImage.src = bike.image;
      bikeImage.alt = `${bike.brand} ${bike.model} bike`;
      bikeImage.addEventListener('error', () => {
        bikeImage.hidden = true;
        bikeImageNote.hidden = false;
      }, { once: true });
    } else {
      bikeImage.hidden = true;
      bikeImageNote.hidden = false;
    }

    frameSizeSelect.addEventListener('change', () => {
      addToCartButton.disabled = !frameSizeSelect.value;
    });
    addToCartButton.disabled = true;
    addToCartButton.addEventListener('click', () => {
      if (!frameSizeSelect.value) {
        frameSizeSelect.focus();
        showCartStatus('Choose a frame size before adding this bike to your cart.');
        return;
      }

      const cart = readCart();
      if (!cart) {
        return;
      }

      const frameSize = frameSizeSelect.value;
      const cartId = `${categoryKey}:${bike.brand}:${bike.model}:${frameSize}`;
      const existingItem = cart.find((item) => item.id === cartId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: cartId,
          brand: bike.brand,
          model: bike.model,
          price: bike.price,
          quantity: 1,
          image: bike.image,
          frameSize
        });
      }

      if (saveCart(cart)) {
        showCartStatus(`${bike.brand} ${bike.model} (${frameSize}) added to your cart.`);
      }
    });

    bikeDetailContent.hidden = false;
  } else {
    bikeDetailError.textContent = 'That bike could not be found. Browse the categories to choose another bike.';
    bikeDetailError.hidden = false;
    const browseLink = document.createElement('a');
    browseLink.className = 'shop-link';
    browseLink.href = '/bikes.html';
    browseLink.textContent = 'Browse bikes';
    bikeDetailError.append(' ', browseLink);
  }
  bikeDetail.hidden = false;
}

const cartItemsContainer = document.getElementById('cart-items');
if (cartItemsContainer) {
  const emptyCartMessage = document.getElementById('cart-empty');
  const cartSummary = document.getElementById('cart-summary');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const checkoutButton = document.getElementById('checkout-cart');
  const cart = readCart();

  if (cart) {
    emptyCartMessage.hidden = cart.length > 0;
    cartSummary.hidden = cart.length === 0;

    cart.forEach((item) => {
      const cartItem = document.createElement('article');
      cartItem.className = 'cart-item';

      const itemName = document.createElement('h2');
      itemName.textContent = `${item.brand} ${item.model}`;

      const itemPrice = document.createElement('p');
      const sizeText = item.frameSize ? ` · Frame size ${item.frameSize}` : '';
      itemPrice.textContent = `${priceFormatter.format(item.price)} × ${item.quantity}${sizeText}`;

      const removeButton = document.createElement('button');
      removeButton.className = 'cart-remove-button';
      removeButton.type = 'button';
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        const updatedCart = readCart();
        if (!updatedCart) {
          return;
        }
        const remainingItems = updatedCart.filter((entry) => entry.id !== item.id);
        if (saveCart(remainingItems)) {
          window.location.reload();
        }
      });

      cartItem.append(itemName, itemPrice, removeButton);
      cartItemsContainer.append(cartItem);
    });

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartSubtotal.textContent = priceFormatter.format(subtotal);

    checkoutButton.addEventListener('click', () => {
      if (cart.length === 0) {
        showCartStatus('Add a bike to your cart before checking out.');
        return;
      }

      const invoiceLines = cart.map((item) => {
        const frameSize = item.frameSize ? ` (Frame size: ${item.frameSize})` : '';
        const lineTotal = item.price * item.quantity;
        return `${item.brand} ${item.model}${frameSize} — ${item.quantity} × ${priceFormatter.format(item.price)} = ${priceFormatter.format(lineTotal)}`;
      });
      const body = [
        'Bike purchase request',
        `Date: ${new Intl.DateTimeFormat('en-AU', { dateStyle: 'long' }).format(new Date())}`,
        '',
        ...invoiceLines,
        '',
        `Estimated subtotal: ${priceFormatter.format(subtotal)}`,
        '',
        'Please confirm current availability, final pricing, and payment arrangements. This is a purchase request, not a confirmed order.'
      ].join('\n');
      const mailto = `mailto:sales@bikeonhigh.com.au?${new URLSearchParams({
        subject: 'Bike purchase request',
        body
      })}`;

      window.location.href = mailto;
    });
  }
}

const serviceCalendarGrid = document.getElementById('service-calendar-grid');
const serviceCalendarMonth = document.getElementById('calendar-month');
const serviceRequestForm = document.getElementById('service-request-form');

if (serviceCalendarGrid && serviceCalendarMonth && serviceRequestForm) {
  const serviceTimesMessage = document.getElementById('service-times-message');
  const serviceTimeOptions = document.getElementById('service-time-options');
  const serviceOptions = document.getElementById('service-options');
  const serviceSelectionSummary = document.getElementById('service-selection-summary');
  const previousMonthButton = document.getElementById('calendar-previous');
  const nextMonthButton = document.getElementById('calendar-next');
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let displayedMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  let selectedDate;
  let selectedTime;
  let selectedService;

  const timeSlots = ['8:00 am', '10:00 am', '12:00 pm', '2:00 pm'];
  const serviceChoices = [
    { name: 'Safety check', description: 'A basic check of brakes, gears, tyres, and key bolts.' },
    { name: 'Basic tune-up', description: 'Gear and brake adjustments with a general bike check.' },
    { name: 'Full service', description: 'A thorough clean, inspection, and adjustment of your bike.' },
    { name: 'Repair or diagnosis', description: 'Tell us what needs attention and our team will take a look.' }
  ];

  const formatDate = (date) => new Intl.DateTimeFormat('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);

  const updateSelection = () => {
    const hasCompleteSelection = selectedDate && selectedTime && selectedService;
    serviceRequestForm.hidden = !hasCompleteSelection;
    if (hasCompleteSelection) {
      serviceSelectionSummary.textContent =
        `${selectedService} requested for ${formatDate(selectedDate)} at ${selectedTime}.`;
    }
  };

  const renderCalendar = () => {
    serviceCalendarMonth.textContent = new Intl.DateTimeFormat('en-AU', {
      month: 'long',
      year: 'numeric'
    }).format(displayedMonth);
    serviceCalendarGrid.replaceChildren();

    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach((weekday) => {
      const label = document.createElement('span');
      label.className = 'calendar-weekday';
      label.textContent = weekday;
      serviceCalendarGrid.append(label);
    });

    const firstWeekday = displayedMonth.getDay();
    for (let blank = 0; blank < firstWeekday; blank += 1) {
      const spacer = document.createElement('span');
      spacer.setAttribute('aria-hidden', 'true');
      serviceCalendarGrid.append(spacer);
    }

    const daysInMonth = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth() + 1,
      0
    ).getDate();

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
      const dateButton = document.createElement('button');
      dateButton.className = 'calendar-day';
      dateButton.type = 'button';
      dateButton.textContent = String(day);
      dateButton.setAttribute('aria-label', formatDate(date));
      dateButton.setAttribute(
        'aria-pressed',
        String(Boolean(selectedDate && date.getTime() === selectedDate.getTime()))
      );
      dateButton.disabled = date.getDay() === 0 || date < today;
      dateButton.addEventListener('click', () => {
        selectedDate = date;
        selectedTime = undefined;
        serviceTimeOptions.replaceChildren();
        serviceTimesMessage.textContent = `Choose a time to request for ${formatDate(date)}.`;
        timeSlots.forEach((time) => {
          const timeButton = document.createElement('button');
          timeButton.className = 'service-time-option';
          timeButton.type = 'button';
          timeButton.textContent = time;
          timeButton.setAttribute('aria-pressed', 'false');
          timeButton.addEventListener('click', () => {
            selectedTime = time;
            serviceTimeOptions.querySelectorAll('button').forEach((button) => {
              button.setAttribute('aria-pressed', String(button === timeButton));
            });
            serviceTimesMessage.textContent = `${time} selected for ${formatDate(selectedDate)}.`;
            updateSelection();
          });
          serviceTimeOptions.append(timeButton);
        });
        renderCalendar();
        updateSelection();
      });
      serviceCalendarGrid.append(dateButton);
    }

    const atCurrentMonth = displayedMonth.getFullYear() === today.getFullYear()
      && displayedMonth.getMonth() === today.getMonth();
    previousMonthButton.disabled = atCurrentMonth;
  };

  serviceChoices.forEach(({ name, description }) => {
    const serviceButton = document.createElement('button');
    serviceButton.className = 'service-option';
    serviceButton.type = 'button';
    serviceButton.setAttribute('aria-pressed', 'false');

    const serviceName = document.createElement('strong');
    serviceName.textContent = name;
    const serviceDescription = document.createElement('span');
    serviceDescription.textContent = description;
    serviceButton.append(serviceName, serviceDescription);

    serviceButton.addEventListener('click', () => {
      selectedService = name;
      serviceOptions.querySelectorAll('button').forEach((button) => {
        button.setAttribute('aria-pressed', String(button === serviceButton));
      });
      updateSelection();
    });

    serviceOptions.append(serviceButton);
  });

  previousMonthButton.addEventListener('click', () => {
    displayedMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1);
    renderCalendar();
  });
  nextMonthButton.addEventListener('click', () => {
    displayedMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  serviceRequestForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(serviceRequestForm);
    const message = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Requested date: ${formatDate(selectedDate)}`,
      `Requested time: ${selectedTime}`,
      `Service: ${selectedService}`,
      `Bike and service details: ${formData.get('details')}`
    ].join('\n');
    const subject = encodeURIComponent('Bike service booking request');
    window.location.href = `mailto:sales@bikeonhigh.com.au?subject=${subject}&body=${encodeURIComponent(message)}`;
  });

  renderCalendar();
}
