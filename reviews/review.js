const reviews = [
    {
      id: 1,
      name: "Sara",
      job: "Business Manager",
      img: "reviews/assests/photo-1585845074315-e00d3ff72e1e.jpeg",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      name: "Sam",
      job: "Manager",
      img: "reviews/assests/photo-1585845074315-e00d3ff72e1e.jpeg",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      name: "Sira",
      job: "CEO",
      img: "reviews/assests/photo-1585845074315-e00d3ff72e1e.jpeg",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  let currentItem = 0;
  
  // Load initial review
  window.addEventListener("DOMContentLoaded", function () {
    showReview(currentItem);
  });
  
  // Show review based on index
  function showReview(index) {
    const review = reviews[index];
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
  }
  
  // Event listeners for previous and next buttons
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showReview(currentItem);
  });
  
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length-1) {
      currentItem = 0;
    }
    showReview(currentItem);
  });