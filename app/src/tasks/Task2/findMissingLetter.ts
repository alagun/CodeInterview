// type Props = {
//   arr: string[];
// };

const findMissingLetter = (arr: string[]) => {
  try {
    if (arr.length < 2) {
      throw new Error("smal length");
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1].charCodeAt(0) + 1 !== arr[i].charCodeAt(0)) {
        return String.fromCharCode(arr[i].charCodeAt(0) - 1);
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
  return arr;
};

export default findMissingLetter;
