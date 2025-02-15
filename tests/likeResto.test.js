import FavoriteRestoIdb from '../src/scripts/data/fav-resto-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const resto = await FavoriteRestoIdb.getResto(1);
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });

  // eslint-disable-next-line no-undef
  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteResto(1);
  });
});
