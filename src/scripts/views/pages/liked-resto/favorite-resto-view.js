import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
  
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  }

  showFavoriteResto(resto) {
    let html;
    if (resto.length) {
      // eslint-disable-next-line no-shadow
      html = resto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestoTemplate() {
    return `
      <div class="resto-item__not__found">
        Tidak ada film untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestoView;
