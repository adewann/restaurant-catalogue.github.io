class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestos }) {
    this._view = view;
    this._favoriteRestos = favoriteRestos;

    this._showFavoriteRestos();
  }

  async _showFavoriteRestos() {
    const Resto = await this._favoriteRestos.getAllRestos();
    this._displayRestos(Resto);
  }

  _displayRestos(Resto) {
    this._view.showFavoriteRestos(Resto);
  }
}

export default FavoriteRestoShowPresenter;
