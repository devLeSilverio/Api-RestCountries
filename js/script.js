let tabCountries = null;
let tabFAvorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

//formatacaodoNumero
let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  totalPopulationList = document.querySelector('#totalPopulationList');
  // prettier-ignore
  totalPopulationFavorites =
    document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });

  render();
}

function render() {
  renderCountrylist();
  renderCountryFavorites();
  renderCountrySummary();

  handleCountryButtons();
}

function renderCountrylist() {
  let countriesHtml = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const countryHtml = `
    <div class='country'>
    <div>
    <a id="${id}" class="waves-effect waves-light btn">+</a>
    </div>
    <div>
    <img src="${flag}" alt="${name}" >
    </div>
    <div>
      <ul> 
       <li>${name}</li>
       <li>${population}</li>
      </ul>
    </div>
    </div>
    `;

    countriesHtml += countryHtml;
  });

  countriesHtml += '</div>';
  tabCountries.innerHTML = countriesHtml;
}

function renderCountryFavorites() {
  let favoritesHtml = '<div>';

  favoriteCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const favoritesCountryHtml = `
    <div class='country'>
      <div>
      <a id="${id}" class="waves-effect waves-light btn red darken-4">-</a>
      </div>
      <div>
      <img src="${flag}" alt="${name}" >
      </div>
      <div>
        <ul> 
        <li>${name}</li>
        <li>${population}</li>
        </ul>
    </div>
    </div>
    `;
    favoritesHtml += favoritesCountryHtml;
  });

  favoritesHtml += '</div>';

  tabFavorites.innerHTML = favoritesHtml;
}

function renderCountrySummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = totalPopulation;
  totalPopulationFavorites.textContent = totalFavorites;

  //0-->represents first value
}

function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const FavoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach((button) => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });

  favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {}

function removeFromFavorites(id) {}
