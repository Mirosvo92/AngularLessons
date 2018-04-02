export function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}


