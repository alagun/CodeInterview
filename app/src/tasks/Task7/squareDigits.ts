const squareDigits = (val: number) => {
  try {
    const curArr = String(val).split("");
    const powArr = curArr.map((el) => Math.pow(Number(el), 2));
    return Number(powArr.join(""));
  } catch (error) {
    console.log("Error:", error);
  }
};

export default squareDigits;
