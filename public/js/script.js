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
    description: 'Simple, capable mountain bikes with front suspension for trails and everyday adventures.'
  },
  xc: {
    name: 'XC Bikes',
    description: 'Lightweight and efficient bikes made for climbing, speed, and cross-country courses.'
  },
  trail: {
    name: 'Trail Bikes',
    description: 'Versatile mountain bikes ready for technical singletrack and all-day rides.'
  },
  enduro: {
    name: 'Enduro Bikes',
    description: 'Big-travel bikes for demanding descents that can still get you back to the top.'
  },
  dh: {
    name: 'DH Bikes',
    description: 'Gravity-focused bikes made for steep tracks, bike parks, and downhill runs.'
  },
  ebikes: {
    name: 'Ebikes',
    description: 'Electric assistance helps you ride farther, climb easier, and enjoy more time out.'
  },
  road: {
    name: 'Roadbikes',
    description: 'Lightweight, quick bikes for smooth roads, longer rides, and fitness goals.'
  },
  hybrid: {
    name: 'Hybrid Bikes',
    description: 'Comfortable, practical bikes for commuting, errands, and relaxed rides.'
  }
};

const reviewText = document.getElementById('review-text');
const reviewAuthor = document.getElementById('review-author');

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
    categoryPageDescription.textContent = category.description;

    const availabilityCard = document.createElement('article');
    availabilityCard.className = 'category-availability-card';

    const availabilityHeading = document.createElement('h2');
    availabilityHeading.textContent = 'Looking for a bike?';

    const availabilityMessage = document.createElement('p');
    availabilityMessage.textContent = `Contact our team to find out which ${category.name.toLowerCase()} are currently available.`;

    const contactLink = document.createElement('a');
    contactLink.className = 'shop-link';
    contactLink.href = '/contact.html';
    contactLink.textContent = 'Contact the shop';

    availabilityCard.append(availabilityHeading, availabilityMessage, contactLink);
    categoryBikeList.append(availabilityCard);
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
