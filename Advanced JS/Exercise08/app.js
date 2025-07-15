//Event Bubbling

  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent div clicked');
  });

  document.getElementById('child').addEventListener('click', () => {
    console.log('Button clicked');
  });

  // Event Delegation

    document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      console.log('Clicked item:', event.target.textContent);
    }
  });

  //this keyword

    document.getElementById('myBtn').addEventListener('click', function() {
    console.log('You clicked:', this.id);
  });


