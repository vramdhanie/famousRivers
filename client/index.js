// as the page loads fetch the data and update the DOM
window.addEventListener('load', e => {
  console.log('The page loaded');

  //fetch the list of rivers
  fetch('/river')
    .then(res => {
      // first check that the request worked
      if (!res.ok) {
        throw new Error('Sorry, fetching rivers failed! Please try again.');
      }
      return res.json(); // get the JSON formatted data
    })
    .then(data => {
      render(data);
    })
    .catch(e => {
      const err = document.querySelector('.error');
      err.innerHTML = e.message;
    });
});

// accepts an array of rivers and displays them on the page
function render(rivers) {
  //loop
  const riverHtml = rivers.map(river => {
    return `<div class="river">
        <div class="info">
          <h2>${river.river_name}</h2>
          <p>${river.country} (${river.length} km long, ${river.width} km wide)</p>
        </div>
        <div class="map">A Map</div>
        <div class="image">An image</div>
      </div>`;
  });
  const riverElement = document.querySelector('.rivers');
  riverElement.innerHTML = riverHtml.join('');
}
