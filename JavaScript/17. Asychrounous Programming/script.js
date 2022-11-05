'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const apiKey = '365274678035961105351x72776';
///////////////////////////////////////

const getCountry = function (data, className = '') {
  let html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 100000
      ).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${data.languages['por']}</p>
      <p class="country__row"><span>💰</span>${undefined}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const getJsonData = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage}`);
    }
    return response.json();
  });
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     getCountry(data);

//     console.log(data);
//     let [neighbour] = data.borders;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       getCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');

// Using the fetch API and promises:

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       getCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then(response => {
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error(`Country not found`);
  //     }
  //     return response.json();
  //   })
  getJsonData(
    `https://restcountries.com/v3.1/name/${country}`,
    'country not found'
  )
    .then(data => {
      getCountry(data[0]);

      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error(`Neighbour not found`);

      return getJsonData(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => {
      getCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// Coding challenge 1:
const whereAmI = function (lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => getCountryData(data[0].name.common))
    .catch(err => renderError(`Cannot fetch the data.${err.message}`));
};
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
