let data;

function preload() {
  data = loadJSON("src/kevinbacon.json");
}

function setup() {
  noCanvas();
  console.log(data);
}
