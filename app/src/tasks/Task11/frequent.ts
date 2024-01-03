const frequent = (array: (string | number)[]) => {
  try {
    const sObj: Record<string | number, number> = {};
    array.forEach((el) => {
      if (!sObj[el]) {
        sObj[el] = 1;
      } else {
        sObj[el]++;
      }
    });
    const sortObj = Object.entries(sObj).sort((a, b) => b[1] - a[1]);

    return sortObj[0][0];
  } catch (error) {
    console.log("Error:", error);
  }
};

export default frequent;
