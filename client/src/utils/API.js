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
  // Find all favorites by id
  findFavoriteTypes: function() {
    return axios.get("/api/favorites/")
  },
  // Find all favorites by id and type
  findAllType: function(type) {
    return axios.post("/api/favorites/" + type)
  },
  // Add a new favorite
  addFavorite: function(id) {
    return axios.post("/api/favorites", {
      id
    })
  },
  // Delete a favorite
  deleteFavorite: function(id) {
    return axios.delete("/api/favorites/" + id)
  },
  // Add a new restaurant
  addRestaurant: function(type, name, address, placeId, rating, priceLevel, photoReference) {
    return axios.post("/api/restaurant", {
      type,
      name,
      address,
      placeId,
      rating,
      priceLevel,
      photoReference
    })
  },
  // Find all search results for a user
  findAllResults: function() {
    return axios.get("/api/last-search/")
  },
  // Delete last search results for a user
  deleteLastResults: function(id) {
    return axios.delete("/api/last-search/" + id)
  },

  session: function() {
    return axios.get("/api/users/session")
  },
  login: function(userLoginInformation) {
    return axios.post("/api/users/login", userLoginInformation)
  },
  signup: function(userSignupInformation) {
    return axios.post("/api/users", userSignupInformation)
  }
};
