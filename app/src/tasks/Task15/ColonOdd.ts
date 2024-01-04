const ColonOdd = (value: number) => {
  try {
    const str: string = String(value);
    const curArr = str.split("");
    const resArr: string[] = [curArr[0]];
    for (let index = 1; index < curArr.length; index++) {
      const prev = Number(curArr[index - 1]);
      const cur = Number(curArr[index]);

      if (prev % 2 === cur % 2 && cur % 2 !== 0) {
        resArr.push(":");
      }
      resArr.push(curArr[index]);
    }
    return resArr.join("");
  } catch (error) {
    console.log("Error:", error);
  }
};

export default ColonOdd;
