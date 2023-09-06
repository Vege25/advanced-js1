// Sample clothes array
const clothes = [
  {type: 'shirt', size: 'M', color: 'red'},
  {type: 'pants', size: 'L', color: 'blue'},
  {type: 'dress', size: 'S', color: 'red'},
];

// TODO: Implement the getRedClothes function
const getRedClothes = clothes => {
  // TODO: Use the filter function to get red clothing objects
  const filteredArray = clothes.filter(Cloth => Cloth.color === 'red');
  return filteredArray;
};

// Test the getRedClothes function
const redClothes = getRedClothes(clothes);
console.log(redClothes);

// Output should be:
// [ { type: 'shirt', size: 'M', color: 'red' },
//   { type: 'dress', size: 'S', color: 'red' } ]
