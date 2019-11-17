import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import ticketsUI from './views/tickets';
import currencyUI from './views/currency';
import favorites from './store/favorites';
import favoritesUI from './views/favorites';

document.addEventListener('DOMContentLoaded', e => {
  const form = formUI.form;

  // Events
  initApp();
  form.addEventListener('submit', e => {
    e.preventDefault();
    onFormSubmit();
    const ticket = ticketsUI.container;
    ticket.addEventListener('click', e => {
      if (e.target.tagName !== 'A') return;
      const target = e.target.parentElement;
      favorites.renderObj(target);
    });

    const favoriteContainer = document.getElementById('dropdown1');
    favoriteContainer.addEventListener('click', e => {
      if (e.target.tagName !== 'A') return;
      const target = e.target.parentElement;
      favoritesUI.deleteFromFavorites(target);
    })
  });

  // handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCities);
  }

  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currecyValue;

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });

    console.log(locations.lastSearch);
    ticketsUI.renderTickets(locations.lastSearch);
  }
});
