import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${resto.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + (resto.pictureId || 'default.jpg')}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title" tabindex="0">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + (resto.pictureId || 'default.jpg')}" alt="${resto.name}" loading="lazy"/>
  <div class="resto__info">
    <h3 tabindex="0">Informasi</h3>
    <h4>Rating</h4>
    <p tabindex="0">⭐️${resto.rating}</p>
    <h4>Kategori</h4>
    <p tabindex="0">${resto.categories.map((category) => category.name).join(', ')}</p>
    <h4>Alamat</h4>
    <p tabindex="0">${resto.city}, ${resto.address}</p>
    </div>
  <div class="resto__overview">
    <h3>Deskripsi</h3>
    <p tabindex="0">${resto.description}</p>
  </div>
  <table border="1" cellpadding="10">
    <tr>
    <th><h3 tabindex="0">Menu Makanan</h3></th>
    <th><h3 tabindex="0">Menu Minuman</h3></th>
  </tr>
  <tr>
    <td><ul class="no-bullets">
    ${resto.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
  </ul></td>
    <td><ul class="no-bullets">
    ${resto.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
  </ul></td>
  </tr>
</table>
  <div class="cus-rev">
    <h3 tabindex="0">Customer Reviews</h3>
    <ul>
      ${resto.customerReviews.map((review) => `
        <li>
          <p tabindex="0"><strong>${review.name}</strong>: ${review.review} - ${review.date}</p>
        </li>
      `).join('')}
    </ul>
  </div>
  <div id="review-form-container">
      <h3>Tambah Review</h3>
      <form id="review-form">
        <div>
          <label for="name">Nama:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div>
          <label for="review">Review:</label>
          <textarea id="review" name="review" required></textarea>
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i class="fa-regular fa-heart aria-hidden="true""></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate,
};
