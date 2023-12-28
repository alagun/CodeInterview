const busStops = (arr: number[][]) => {
  try {
    let countPeople = 0;
    arr.forEach((el) => {
      countPeople = countPeople + el[0] - el[1];
      if (countPeople < 0) {
        throw new Error("it's no array");
      }
    });
    return countPeople;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default busStops;
