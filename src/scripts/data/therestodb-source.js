import API_ENDPOINT from '../globals/api-endpoint';
import FavoriteRestoIdb from './fav-resto-idb';

class TheRestoDbSource {
  static async getListOfRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addReview(reviewData) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    };

    const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
    return response.json();
  }

  static async getRestaurantImage(pictureId, resolution) {
    let imageUrl;

    switch (resolution) {
      case 'small':
        imageUrl = API_ENDPOINT.RESTAURANT_IMAGE_SMALL(pictureId);
        break;
      case 'medium':
        imageUrl = API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(pictureId);
        break;
      case 'large':
        imageUrl = API_ENDPOINT.RESTAURANT_IMAGE_LARGE(pictureId);
        break;
      default:
        imageUrl = API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(pictureId);
    }

    return imageUrl;
  }

  static async favoriteResto() {
    return FavoriteRestoIdb.getAllResto();
  }
}

export default TheRestoDbSource;
