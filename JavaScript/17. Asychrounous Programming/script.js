'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const apiKey = '365274678035961105351x72776';
///////////////////////////////////////

// const getCountry = function (data, className = '') {
//   let html = `<article class="country ${className}">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 100000
//       ).toFixed(1)} million</p>
//       <p class="country__row"><span>🗣️</span>${data.languages['por']}</p>
//       <p class="country__row"><span>💰</span>${undefined}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (message) {
//   countriesContainer.insertAdjacentText('beforeend', message);
// };

const getJsonData = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage}`);
    }
    return response.json();
  });
};

// // const getCountryAndNeighbour = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(request.responseText);
// //     getCountry(data);

// //     console.log(data);
// //     let [neighbour] = data.borders;

// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);

// //       getCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('portugal');

// // Using the fetch API and promises:

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       getCountry(data[0]);
// //     });
// // };

// const getCountryData = function (country) {
//   // fetch(`https://restcountries.com/v3.1/name/${country}`)
//   //   .then(response => {
//   //     console.log(response);
//   //     if (!response.ok) {
//   //       throw new Error(`Country not found`);
//   //     }
//   //     return response.json();
//   //   })
//   getJsonData(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'country not found'
//   )
//     .then(data => {
//       getCountry(data[0]);

//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error(`Neighbour not found`);

//       return getJsonData(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => {
//       getCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };

// btn.addEventListener('click', function () {
//   // getCountryData('portugal');
// });

// Coding challenge 1:
// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => response.json())
//     .then(data => getCountryData(data[0].name.common))
//     .catch(err => renderError(`Cannot fetch the data.${err.message}`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Creating the promises:
// const lotteryTicket = new Promise(function (resolve, reject) {
//   console.log('Lottery ticket is going on');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('You lose'));
//     }
//   }, 1000);
// });

// lotteryTicket.then(res => console.log(res)).catch(err => console.error(err));

// Async and await function:
// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const geoloc = await getLocation();
//     const { latitude: lat, longitude: long } = geoloc.coords;

//     const geores = await fetch(
//       `https://geocode.xyz/${lat},${long}?geoit=json&auth=${apiKey}`
//     );
//     if (!geores.ok) {
//       throw new Error(`Failed to get the location`);
//     }
//     const geodata = await geores.json();

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${geodata.country}`
//     );
//     if (!res.ok) {
//       throw new Error(`Failed to get the country`);
//     }
//     const resdata = await res.json();

//     getCountry(resdata[0]);

//     return `You are in the ${geodata.city}, ${geodata.country}`;
//   } catch (err) {
//     renderError(`${err.message}`);
//     console.error(`${err}`);
//     throw err;
//   }
// };

// btn.addEventListener('click', function () {
//   whereAmI();

// });
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Hello world'));
// countriesContainer.style.opacity = '1';

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(err.message);
//   }
// })();

// Running promises asynchronously:
const getJsonData1 = async function (url, errormsg) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Country is not defined');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`${errormsg}`);
  }
};

// const getallCountries = async function (c1, c2, c3) {
//   const [data1] = await getJsonData(
//     `https://restcountries.com/v3.1/name/${c1}`,
//     'cannot get the country'
//   );
//   const [data2] = await getJsonData(
//     `https://restcountries.com/v3.1/name/${c2}`,
//     'cannot get the country'
//   );
//   const [data3] = await getJsonData(
//     `https://restcountries.com/v3.1/name/${c3}`,
//     'cannot get the country'
//   );
//   console.log(data1, data2, data3);
//   console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
// };
// getallCountries('portugal', 'china', 'nepal');

const getall3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJsonData1(
        `https://restcountries.com/v3.1/name/${c1}`,
        'cannot get the country'
      ),
      getJsonData1(
        `https://restcountries.com/v3.1/name/${c2}`,
        'cannot get the country'
      ),
      getJsonData1(
        `https://restcountries.com/v3.1/name/${c3}`,
        'cannot get the country'
      ),
    ]);

    console.log(data.map(arr => arr[0].capital[0]));
  } catch (err) {
    console.log(err);
  }
};
getall3Countries('portugal', 'japan', 'nepal');

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long`));
    }, sec * 1000);
  });
};

(async function () {
  try {
    const [data] = await Promise.race([
      getJsonData1(
        `https://restcountries.com/v3.1/name/italy`,
        'cannot get the country'
      ),
      timeOut(0.1),
    ]);
    console.log(data.capital);
  } catch (error) {
    console.error(error);
  }
})();
