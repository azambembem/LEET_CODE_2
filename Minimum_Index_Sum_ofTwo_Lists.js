/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  let result = [];
  let minSum = Infinity;

  list1.forEach((item, index) => map.set(item, index));

  list2.forEach((item, index) => {
    if (map.has(item)) {
      const indexSum = index + map.get(item);
      if (indexSum < minSum) {
        result = [item];
        minSum = indexSum;
      } else if (indexSum === minSum) {
        result.push(item);
      }
    }
  });

  return result;
};

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = ["KFC", "Shogun", "Burger King"];
const result = findRestaurant(list1, list2);
console.log(result);
