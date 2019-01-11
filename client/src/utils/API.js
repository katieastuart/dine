import axios from "axios";

export default {
  // Get restaurant information
  google: function(userLocation) {
    return axios.post("/api/search/google", userLocation)
  }
};
