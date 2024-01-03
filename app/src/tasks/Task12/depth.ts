type NestedArray<T> = Array<T | NestedArray<T>>;
const depth = (array: NestedArray<number>) => {
  try {
    return array;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default depth;
