const reviews = [
  { text: 'Great bikes and even better service.', author: 'Sarah' },
  { text: 'The staff actually know what they are talking about.', author: 'Mitch' },
  { text: 'Helpful, friendly, and easy to deal with.', author: 'Emma' },
  { text: 'I found the perfect bike for my weekend rides.', author: 'Liam' },
  { text: 'Fantastic local shop with quality advice.', author: 'Ava' }
];

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
