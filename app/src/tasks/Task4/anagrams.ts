const anagrams = (word: string, arr: string[]) => {
  try {
    const resArr = arr.filter(
      (el) => el.split("").sort().join() === word.split("").sort().join()
    );
    return resArr.join(" ");
  } catch (error) {
    console.log("Error:", error);
  }
};

export default anagrams;
