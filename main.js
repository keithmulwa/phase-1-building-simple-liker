// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Hides the error modal when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');

  // Get all heart elements
  const likeHearts = document.querySelectorAll('.like-glyph');

  likeHearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // Toggle heart appearance
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          // Show error modal with message
          errorModal.classList.remove('hidden');
          document.getElementById('modal-message').textContent = error;

          // Hide it again after 3 seconds
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});
