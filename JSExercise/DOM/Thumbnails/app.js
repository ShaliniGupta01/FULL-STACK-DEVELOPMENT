    const thumbnails = document.querySelectorAll('.thumbnail');
  const fullsizes = document.querySelectorAll('.fullsize');

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      // Hide all fullsize images first
      fullsizes.forEach(full => full.style.display = 'none');

      // Show the fullsize image for the clicked thumbnail
      fullsizes[index].style.display = 'block';
    });
  });