import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <div id="content-header">
          <hr class="hrLeft">
          <h1 tabindex="0">Explore Restaurant</h1>
          <hr class="hrRight">
        </div>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Gunakan metode favoriteResto dari TheRestoDbSource
    const restos = await TheRestoDbSource.favoriteResto();
    const restosContainer = document.querySelector('#restos');

    if (restos.length === 0) {
      restosContainer.innerHTML = '<p>No favorite restaurants found</p>';
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Favorite;
