const anagram = (array: string[]) => {
  try {
    for (let i = 1; i < array.length; i++) {
      if (
        array[i - 1].split("").sort().join() !==
        array[i].split("").sort().join()
      ) {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default anagram;
