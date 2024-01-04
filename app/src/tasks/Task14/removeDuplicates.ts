const removeDuplicates = (array: string[]) => {
  try {
    const setArray = new Set(array);
    return Array.from(setArray);
  } catch (error) {
    console.log("Error:", error);
  }
};

export default removeDuplicates;
