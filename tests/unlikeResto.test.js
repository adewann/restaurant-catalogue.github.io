import FavoriteRestoIdb from '../src/scripts/data/fav-resto-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Unliking A resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
