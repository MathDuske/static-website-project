document.addEventListener('DOMContentLoaded', function () {
  const exploreButtons = document.querySelectorAll('.explore');
  const overlayButtons = document.querySelectorAll('.image-container button');

  exploreButtons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });

  overlayButtons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });

  function handleButtonClick(event) {
    const url = event.currentTarget.dataset.url;
    if (url) {
      window.location.href = url;
    }
  }
});
