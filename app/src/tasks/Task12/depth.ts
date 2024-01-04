type NestedArray<T> = Array<T | NestedArray<T>>;

const depth = (array: NestedArray<number>) => {
  try {
    for (let index = 0; index < array.length; index++) {
      if (Array.isArray(array[index])) {
        index = 0;
        array = array.flat();
      }
    }
    return array;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default depth;
