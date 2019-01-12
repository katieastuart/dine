import axios from "axios";

export default {
  // Get restaurant information
  google: function(userLocation) {
    return axios.post("/api/search/google", userLocation)
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
