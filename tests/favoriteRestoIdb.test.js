import { itActsAsFavoriteRestoItem } from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/fav-resto-idb';

// eslint-disable-next-line no-undef
describe('Favorite Resto Idb Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoItem(FavoriteRestoIdb);
});
