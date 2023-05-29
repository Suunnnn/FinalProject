const { default: Axios } = require("axios");

let api = Axios.create({
  baseURL: "http://localhost:8081/",
});


export default api;