console.log("Script Running");

const factorUp = (c, frac) => {
  const newC = Math.round(frac * (c+255));
  return newC ? newC <= 255 : 255;
}

const pastelize = (hexNum) => {
  const frac = 0.1
  let rgb = hexNum
  .replace("#", "")
  .match(/.{1,2}/g)
  .map((c) => parseInt(c, 16));

  while(avg(rgb) < 180) {
    rgb = rgb.map( c => factorUp(c, frac));
    console.log(rgb);
  }
  console.log("done", rgb);
  const finalHex = "#" + rgb.map(d => d.toString(16)).join('');
  return finalHex;
}

const avg = (list) => {
  const average =  list.reduce((a, b) => a + b, 0) /  list.length;
  return average;
};

console.log(pastelize("#ffff00"));