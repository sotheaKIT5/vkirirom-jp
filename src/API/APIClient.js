function loadAPI(endPoint) {
  return require("./contents/" + endPoint + ".json");
}

export default {
  loadAPI
};
