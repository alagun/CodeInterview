const maskify = (val: number) => {
  try {
    return val;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default maskify;
