import axios from "axios";

export default {
  // Get restaurant information
  google: function(userLocation) {
    return axios.post("/api/search/google", userLocation)
  },
  // Find all favorites by id
  findAllFavorites: function(id) {
    return axios.get("/api/favorites/" + id)
  },
  // Find all favorites by id and type
  findAllFavoritesType: function(type, id) {
    return axios.get("/api/favorites/" + type + "/" + id)
  },
  // Add a new favorite
  addFavorite: function(id) {
    return axios.post("/api/favorites/restaurants/" + id)
  },
  // Delete a favorite
  deleteFavorite: function(id) {
    return axios.delete("/api/favorites/" + id)
  },
  // Add a new restaurant
  addRestaurant: function() {
    return axios.post("/api/restaurant")
  },
  // Find all search results for a user
  findAllResults: function(id) {
    return axios.get("/api/last-search/" + id)
  },
  // Delete last search results for a user
  findAllResults: function(id) {
    return axios.delete("/api/last-search/" + id)
  }
};
