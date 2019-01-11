import axios from "axios";

export default {
  // Get restaurant information
  google: function(userLocation) {
    console.log("hit")
    return axios.post("/api/search/google", userLocation)
  }
};
