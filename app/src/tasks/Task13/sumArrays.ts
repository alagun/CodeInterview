const sumArrays = (array: number[][]) => {
  try {
    const [first, second] = array;
    const curArray = [] as number[];
    curArray.length =
      first.length > second.length ? first.length : second.length;
    const resArray = curArray.fill(0).map((el, ind) => {
      if (!!first[ind] && !!second[ind]) {
        el = first[ind] + second[ind];
      } else if (!first[ind] && !!second[ind]) {
        el = second[ind];
      } else if (!!first[ind] && !second[ind]) {
        el = first[ind];
      }
      return el;
    });
    return resArray;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default sumArrays;
