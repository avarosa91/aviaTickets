import locations from "./locations";
import favoritesUI from "../views/favorites";

class Favorites {
  constructor() {
    this.obj = {};
  }

  setObj (obj) {
    this.obj = obj;
    return this.obj;
  }

  getObj() {
    return this.obj;
  }

  renderObj(target) {
    const tickets = document.querySelectorAll('.card.ticket-card');
    tickets.forEach((div, i) => {
      if (target !== div) return;
      locations.lastSearch.forEach((obj, key) => {
        if (i !== key) return;
        const res = this.setObj(obj);
        const get = this.getObj();
        favoritesUI.renderFavorites(get);
      });
    });
  }
}

const favorites = new Favorites();

export default favorites;