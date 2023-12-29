const longest = (arr: string[]) => {
  try {
    const val = (arr[0] + arr[1]).split("");
    const newVal = new Set(val);
    const newArr = Array.from(newVal).sort();
    return newArr;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default longest;
