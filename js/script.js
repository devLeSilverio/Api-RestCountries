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
  tabCountries = document.querySelector('#tabFavorites');
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
  renderCountrylist();
  renderCountryFavorites();
  renderCountrySummary();

  handleCountryButtons();
}

renderCountrylist(){
  let countriesHTML = "<div>";

  allCountries.forEach(country =>{
    const { name,flag,id,population} = country;

    const countryHtml = `
    <div class='country'>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    </div>
    `;
  })
};


renderCountryFavorites();
renderCountrySummary();
handleCountryButtons();
