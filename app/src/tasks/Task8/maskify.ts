const maskify = (val: number) => {
  try {
    const str = String(val);
    if (str.length < 4) throw new Error();

    return `${"#".repeat(str.length - 4)}${str.slice(-4)}`;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default maskify;
