const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);

  let heroName = "";
  let maxQuantity = 0;

  for (const [name, quantity] of entries) {
    if (quantity > maxQuantity) {
      maxQuantity = quantity;
      heroName = name;
    }
  }
  return heroName;
};

const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
