Array.prototype.includesOneOf = function (list) {
  // Early return if either array is empty

  if (this.length === 0 || list.length === 0) return false;

  // arrays of arrays*********

  if (Array.isArray(this[0]) && Array.isArray(list[0])) {
    return this.some((array1) =>
      list.some(
        (array2) =>
          array1.length === array2.length &&
          array1.every((value, index) => value === array2[index])
      )
    );
  }

  // arrays of objects*********

  if (this[0].constructor === Object && list[0].constructor === Object) {
    return this.some((object1) =>
      list.some(
        (object2) =>
          Object.keys(object1).length === Object.keys(object2).length &&
          Object.entries(object1).every(
            ([key, value]) => value === object2[key]
          )
      )
    );
  }

  // primitive values***************

  return this.some((value) => list.includes(value));
};
