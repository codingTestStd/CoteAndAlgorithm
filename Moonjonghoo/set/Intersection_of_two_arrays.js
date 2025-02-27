/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let hash = new Set(nums2);
  const intersectionSet = new Set([...nums1].filter((x) => hash.has(x)));
  return [...intersectionSet];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
