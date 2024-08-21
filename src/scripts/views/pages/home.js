import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `    
    <div id="content-header">
    <hr class="hrLeft">
    <h1 tabindex="0">Explore Restaurant</h1>
    <hr class="hrRight">
    </div>
        <div class="content">
        <div id="restos" class="restos">
        </div>
      </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.getListOfRestaurants();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
