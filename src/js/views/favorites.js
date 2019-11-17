class FavoritesUI {
  constructor() {
    this.container = document.getElementById('dropdown1');
  }

  renderFavorites(get) {
    let fragment = '';

    const template = FavoritesUI.favoritesTemplate(get);
    fragment += template;

    this.container.insertAdjacentHTML('afterbegin', fragment);
  }

  deleteFromFavorites(target) {
    return this.container.removeChild(target.parentElement.closest('div'));
  }

  static favoritesTemplate(get) {
    return ` <div class="favorite-item  d-flex align-items-start">
            <img
                    src="http://pics.avs.io/200/200/PS.png"
                    class="favorite-item-airline-img"
            />
            <div class="favorite-item-info d-flex flex-column">
              <div
                      class="favorite-item-destination d-flex align-items-center"
              >
                <div class="d-flex align-items-center mr-auto">
                  <span class="favorite-item-city">${get.origin_name} </span>
                  <i class="medium material-icons">flight_takeoff</i>
                </div>
                <div class="d-flex align-items-center">
                  <i class="medium material-icons">flight_land</i>
                  <span class="favorite-item-city">${get.destination_name}</span>
                </div>
              </div>
              <div class="ticket-time-price d-flex align-items-center">
                <span class="ticket-time-departure">${get.departure_at}</span>
                <span class="ticket-price ml-auto">$ ${get.price}</span>
              </div>
              <div class="ticket-additional-info">
                <span class="ticket-transfers">Пересадок: ${get.transfers}</span>
                <span class="ticket-flight-number">Номер рейса: ${get.flight_number}</span>
              </div>
              <a
                      class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
              >Delete</a
              >
            </div>
          </div>`;
  }
}

const favoritesUI = new FavoritesUI();

export default favoritesUI;